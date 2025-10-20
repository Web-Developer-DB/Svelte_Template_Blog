/**
 * @file src/routes/sitemap.xml/+server.ts
 * @description Erzeugt eine Sitemap im XML-Format zur besseren Indexierung.
 * Neben statischen Seiten werden alle Blogposts inkludiert.
 */

import type { RequestHandler } from './$types';
import { getContentIndex } from '$content/index';
import { siteConfig } from '$lib/config/site';

export const prerender = true;

export const GET: RequestHandler = () => {
  const { posts } = getContentIndex();

  const toUrl = (path: string) =>
    path === '' ? siteConfig.url : `${siteConfig.url}/${path}`.replace(/([^:]\/)\/+/g, '$1');

  const urls = [
    '',
    'blog',
    'tags',
    'search',
    ...posts.map((post) => `blog/${post.slug}`)
  ].map(toUrl);

  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (loc) => `<url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
    )
    .join('\n')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
