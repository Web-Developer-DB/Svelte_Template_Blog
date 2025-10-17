/**
 * @file src/routes/blog/[slug]/+page.ts
 * @description Load-Funktion für einzelne Blogposts. Sucht den Beitrag über den
 * Slug im Content-Index und liefert ihn an die Svelte-Komponente. Nicht gefundene
 * Slugs resultieren in einem 404-Fehler.
 */

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getPostBySlug } from '$content/index';

export const load: PageLoad = ({ params }) => {
  const post = getPostBySlug(params.slug);
  if (!post) {
    throw error(404, `Beitrag "${params.slug}" wurde nicht gefunden.`);
  }

  return {
    post,
    seo: {
      title: `${post.title} • SvelteKit Lernblog`,
      description: post.excerpt,
      ogImage: post.cover ?? '/images/social-card.svg'
    }
  };
};
