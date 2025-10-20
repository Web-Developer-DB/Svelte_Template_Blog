/**
 * @file vite.config.ts
 * @description Vite-Konfiguration für das Projekt. Regelt u. a. die Integration
 * des offiziellen SvelteKit-Plugins sowie Aliase, die im App-Kontext funktionieren.
 * Vite fungiert als Dev-Server und Bundler.
 */

import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

/**
 * @description Standard-Export der Vite-Konfiguration. Wir aktivieren
 * Server-Side-Rendering (SSR) über SvelteKit. Die resolve-Aliase spiegeln jene
 * aus der `svelte.config.js`, damit Editor und Build-Prozess identische Pfade
 * verstehen.
 */
export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $components: '/src/lib/components',
      $content: '/src/lib/content',
      $styles: '/src/styles'
    }
  },
  server: {
    fs: {
      allow: [resolve('./content'), resolve('./docs')]
    }
  }
});
