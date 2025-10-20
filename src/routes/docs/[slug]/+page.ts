/**
 * @file src/routes/docs/[slug]/+page.ts
 * @description Lädt Markdown-Dokumente aus dem Ordner `/docs`. Die Dateien werden
 * per `import.meta.glob` eagerly importiert, damit während des Builds alle Inhalte
 * bekannt sind und als statische Seiten prerendern können.
 */
import type { ComponentType } from 'svelte';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

interface DocModule {
  default: ComponentType;
  metadata?: {
    title?: string;
    excerpt?: string;
  };
}

const docModules = import.meta.glob<DocModule>('/docs/*.md', {
  eager: true
});

export const load: PageLoad = async ({ params }) => {
  const key = `/docs/${params.slug}.md`;
  const mod = docModules[key];

  if (!mod) {
    throw error(404, `Dokument ${params.slug} wurde nicht gefunden.`);
  }

  return {
    component: mod.default,
    metadata: {
      title: mod.metadata?.title ?? params.slug.replace(/^\d+-/, '').replace(/-/g, ' '),
      excerpt: mod.metadata?.excerpt ?? ''
    }
  };
};
