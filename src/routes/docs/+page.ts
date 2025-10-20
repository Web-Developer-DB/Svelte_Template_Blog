/**
 * @file src/routes/docs/+page.ts
 * @description Liefert eine Übersicht aller verfügbaren Doc-Kapitel.
 */
import type { PageLoad } from './$types';

interface DocModule {
  metadata?: {
    title?: string;
    excerpt?: string;
  };
}

const docModules = import.meta.glob<DocModule>('/docs/*.md', {
  eager: true
});

export const load: PageLoad = async () => {
  const docs = Object.entries(docModules)
    .map(([path, mod]) => {
      const slug = path.replace('/docs/', '').replace(/\.md$/, '');
      const title = mod.metadata?.title ?? slug.replace(/^\d+-/, '').replace(/-/g, ' ');
      return {
        slug,
        title,
        excerpt: mod.metadata?.excerpt ?? ''
      };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));

  return {
    docs
  };
};
