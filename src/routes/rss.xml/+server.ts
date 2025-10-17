/**
 * @file src/routes/rss.xml/+server.ts
 * @description Generiert einen RSS-Feed (Version 2.0) auf Basis des Content-Index.
 * Der Feed wird bei jeder Anfrage erzeugt, profitiert aber von SvelteKits
 * Prerendering, sodass er statisch ausgeliefert werden kann.
 */

import type { RequestHandler } from './$types';
import { getContentIndex } from '$content/index';
import { siteConfig } from '$lib/config/site';

const escape = (value: string) =>
  value.replaceAll(/&/g, '&amp;').replaceAll(/</g, '&lt;').replaceAll(/>/g, '&gt;');

export const prerender = true;

export const GET: RequestHandler = () => {
  const { posts } = getContentIndex();

  const items = posts
    .map(
      (post) => `
      <item>
        <title>${escape(post.title)}</title>
        <link>${siteConfig.url}/blog/${post.slug}</link>
        <guid>${siteConfig.url}/blog/${post.slug}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description><![CDATA[${post.excerpt}]]></description>
      </item>`
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>${escape(siteConfig.title)}</title>
      <link>${siteConfig.url}</link>
      <description>${escape(siteConfig.description)}</description>
      <language>${siteConfig.language}</language>
      ${items}
    </channel>
  </rss>`;

  return new Response(rss.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=600'
    }
  });
};
