/**
 * @file src/lib/content/index.ts
 * @description Verantwortlich für das automatische Auffinden (`import.meta.glob`)
 * sämtlicher Blog-Beiträge und das Ableiten eines strukturierten Index. Neben den
 * Metadaten aus dem Frontmatter werden Auto-Hashtags generiert, Topics gesammelt
 * und ein Suchindex vorbereitet. Die Funktionen werden sowohl im Routings (Load-
 * Funktionen) als auch in UI-Komponenten (Suche, Filter) wiederverwendet.
 */

import type { ComponentType } from 'svelte';
import { extractHashtags } from '$content/hashtag';

/**
 * @description Typdefinition, die das erwartete Shape der Frontmatter beschreibt.
 * Diese Struktur gilt für Markdown (`.md`), MDsveX (`.svx`) sowie Svelte-Posts.
 */
export interface Frontmatter {
  title: string;
  date: string;
  tags?: string[];
  topics?: string[];
  excerpt?: string;
  cover?: string;
}

/**
 * @description Vollständiges Datenmodell eines Blogposts, so wie es im UI verwendet wird.
 */
export interface BlogPost extends Frontmatter {
  slug: string;
  autoHashtags: string[];
  content: string;
  component: ComponentType;
}

/**
 * @description Struktur des globalen Index, den wir exportieren. Enthält neben den
 * Posts auch deduplizierte Hashtags/Topics sowie vorbereitete Suchdokumente.
 */
export interface ContentIndex {
  posts: BlogPost[];
  hashtags: string[];
  topics: string[];
  searchDocuments: SearchDocument[];
}

/**
 * @description Datensatz, der in Fuse.js geladen wird. Wir lagern `component` aus,
 * um die Suchbibliothek schlank zu halten.
 */
export interface SearchDocument {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  topics: string[];
  autoHashtags: string[];
  content: string;
}

/**
 * @description Typdefinition für die von `import.meta.glob` gelieferten Module.
 * `metadata` stammt aus dem Frontmatter; `default` ist die eigentliche Komponente.
 */
interface ContentModule {
  metadata?: Frontmatter;
  default: ComponentType;
}

// ── Abschnitt: Globale Eager-Imports der Inhalte
const contentModules = import.meta.glob<ContentModule>('/content/blog/**/*.{md,svx,svelte}', {
  eager: true
});

const rawMarkdownMap = import.meta.glob<string>('/content/blog/**/*.{md,svx}', {
  eager: true,
  as: 'raw'
});

const rawSvelteMap = import.meta.glob<string>('/content/blog/**/*.svelte', {
  eager: true,
  as: 'raw'
});

let cache: ContentIndex | null = null;

/**
 * @description Wandelt einen Datei-Pfad (`/content/blog/...`) in einen URL-Slug um.
 * @param path Originalpfad inklusive Dateiendung.
 * @returns Slug ohne führenden Slash und ohne Dateiendung.
 */
function toSlug(path: string): string {
  return path
    .replace('/content/blog/', '')
    .replace(/\.(md|svx|svelte)$/, '');
}

/**
 * @description Greift auf den Raw-Content eines Beitrags zu. Für `.svelte`-Posts
 * nutzen wir `as: 'raw'`, wodurch der Quelltext als String importiert wird.
 */
function getRawContent(path: string): string {
  return rawMarkdownMap[path] ?? rawSvelteMap[path] ?? '';
}

/**
 * @description Erzeugt aus Rohdaten einen `BlogPost`. Diese Funktion kapselt die
 * Geschäftslogik, sodass `getContentIndex` übersichtlich bleibt.
 */
function createPost(path: string, mod: ContentModule): BlogPost {
  const slug = toSlug(path);
  const metadata = mod.metadata;

  if (!metadata) {
    throw new Error(`Beitrag ${slug} verfügt über kein Frontmatter. Bitte ergänzen.`);
  }

  const raw = getRawContent(path);
  const excerpt =
    metadata.excerpt ??
    raw
      .replace(/[#>*_`~\[\]\(\)!]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 220);

  const tags = (metadata.tags ?? []).map((tag) => tag.toLowerCase());
  const topics = (metadata.topics ?? []).map((topic) => topic.trim());

  const autoHashtags = extractHashtags(raw, {
    max: 5,
    whitelist: tags
  });

  return {
    slug,
    title: metadata.title,
    date: metadata.date,
    cover: metadata.cover,
    excerpt,
    tags,
    topics,
    autoHashtags,
    content: raw,
    component: mod.default
  };
}

/**
 * @description Erstellt den globalen Content-Index und cached ihn. Beim Dev-Server
 * greift SvelteKit per HMR auf neue Inhalte zu, daher invalidieren wir den Cache
 * nicht manuell, sondern verlassen uns auf die automatische Neuauswertung.
 */
export function getContentIndex(): ContentIndex {
  if (cache) {
    return cache;
  }

  const posts = Object.entries(contentModules)
    .map(([path, mod]) => createPost(path, mod))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const hashtags = Array.from(
    new Set(posts.flatMap((post) => [...post.tags, ...post.autoHashtags]))
  ).sort((a, b) => a.localeCompare(b, 'de'));

  const topics = Array.from(new Set(posts.flatMap((post) => post.topics))).sort((a, b) =>
    a.localeCompare(b, 'de')
  );

  const searchDocuments = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    tags: post.tags,
    topics: post.topics,
    autoHashtags: post.autoHashtags,
    content: post.content
  }));

  cache = { posts, hashtags, topics, searchDocuments };
  return cache;
}

/**
 * @description Hilfsfunktion, um einen Beitrag über den Slug zu finden. Wird in
 * der `[slug]`-Route verwendet.
 * @param slug URL-Slug (z. B. `2025-01-hello-svelte`)
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  const index = getContentIndex();
  return index.posts.find((post) => post.slug === slug);
}
