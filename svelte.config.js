/**
 * @file svelte.config.js
 * @description Konfiguriert die zentrale Build-Pipeline für SvelteKit,
 * inklusive MDsveX-Integration für Markdown/MDX-Inhalte und des Vercel-Adapters.
 * Diese Datei ist der Einstiegspunkt für das SvelteKit-CLI, wenn `npm run dev`
 * oder `npm run build` ausgeführt wird. Sämtliche Kommentare sind bewusst
 * ausführlich gehalten, damit Junior-Entwickler die Zusammenhänge nachvollziehen können.
 */

import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

/**
 * @description Zentraler Konfigurationsblock für MDsveX. Wir nutzen Markdown
 * und Svelte-Komponenten nebeneinander, daher müssen Dateiendungen erweitert
 * werden. Die Erweiterungen `remarkSlug` und `remarkAutolinkHeadings` sorgen
 * dafür, dass Überschriften automatisch IDs und Ankerlinks erhalten.
 */
const mdsvexConfig = {
  extensions: ['.md', '.svx'],
  remarkPlugins: [
    relativeImages, // relative Pfade in Markdown sauber auflösen
    remarkSlug, // Überschriften-ID
    [
      remarkAutolinkHeadings,
      {
        behavior: 'append',
        linkProperties: {
          class: 'heading-anchor'
        }
      }
    ]
  ],
  smartypants: {
    dashes: 'oldschool'
  },
  layout: {
    blog: './src/routes/blog/_postLayout.svelte'
  }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [mdsvex(mdsvexConfig)],
  kit: {
    adapter: adapter(),
    alias: {
      $components: 'src/lib/components',
      $content: 'src/lib/content',
      $styles: 'src/styles'
    }
  }
};

export default config;
