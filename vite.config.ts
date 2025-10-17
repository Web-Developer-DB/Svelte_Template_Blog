/**
 * @file vite.config.ts
 * @description Vite-Konfiguration für das Projekt. Regelt u. a. die Integration
 * des offiziellen SvelteKit-Plugins sowie Aliase, die sowohl im App- als auch im
 * Test-Kontext funktionieren. Vite fungiert als Dev-Server und Bundler.
 */

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/**
 * @description Standard-Export der Vite-Konfiguration. Wir aktivieren
 * Server-Side-Rendering (SSR) über SvelteKit. Die resolve-Aliase spiegeln jene
 * aus der `svelte.config.js`, damit sowohl Editor als auch Vitest identische
 * Pfade verstehen. Dies verhindert `module not found`-Fehler in Tests.
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/unit/setup.ts']
  }
});
