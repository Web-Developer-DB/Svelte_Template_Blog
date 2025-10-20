/**
 * @file src/routes/+layout.ts
 * @description Globale Load-Funktion für alle Seiten. Sie stellt Site-Metadaten,
 * den Content-Index (Posts, Hashtags, Topics) sowie einen vorbereiteten Suchindex
 * bereit. Darüber hinaus definiert sie Default-SEO-Werte, die von Unterseiten
 * überschrieben werden können.
 */

import type { LayoutLoad } from './$types';
import { getContentIndex } from '$content/index';
import { siteConfig } from '$lib/config/site';

export const prerender = true;

export const load: LayoutLoad = async () => {
  const { posts, hashtags, topics, searchDocuments } = getContentIndex();

  return {
    site: siteConfig,
    posts,
    hashtags,
    topics,
    searchDocuments,
    seo: {
      title: siteConfig.title,
      description: siteConfig.description,
      ogImage: '/images/social-card.svg'
    }
  };
};
