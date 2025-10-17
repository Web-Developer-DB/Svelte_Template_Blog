/**
 * @file playwright.config.ts
 * @description Konfiguration für Playwright. Startet die SvelteKit-Preview vor
 * den Tests, setzt das Viewport- und Device-Setup und integriert einen Basis-URL,
 * damit Testcases kurze Pfade nutzen können.
 */

import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60_000,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: 'http://127.0.0.1:4173',
    viewport: { width: 1280, height: 720 },
    trace: 'retain-on-failure'
  },
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4173',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  }
};

export default config;
