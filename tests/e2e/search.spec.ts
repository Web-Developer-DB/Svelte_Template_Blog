/**
 * @file tests/e2e/search.spec.ts
 * @description Playwright-E2E-Tests. Decken Suche, Theme-Toggle, Filter sowie
 * grundlegende Accessibility (mittels axe) ab.
 */

import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('SvelteKit Lernblog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await injectAxe(page);
  });

  test('Homepage besteht grundlegende a11y-Prüfung', async ({ page }) => {
    await checkA11y(page, undefined, {
      detailedReport: true,
      detailedReportOptions: { html: true }
    });
  });

  test('Theme-Toggle aktualisiert data-theme', async ({ page }) => {
    const initialTheme = await page.evaluate(() => document.documentElement.dataset.theme);
    await page.getByRole('button', { name: /theme/i }).click();
    const toggledTheme = await page.evaluate(() => document.documentElement.dataset.theme);
    expect(toggledTheme).not.toBe(initialTheme);
  });

  test('Suche liefert Ergebnisse für vorhandene Begriffe', async ({ page }) => {
    await page.goto('/search');
    await page.getByLabel('Volltextsuche').fill('SvelteKit');
    await page.waitForTimeout(400); // Debounce abwarten
    await expect(page.getByTestId('content-card').first()).toBeVisible();
  });

  test('Blog-Filter reduziert Treffer durch Hashtags', async ({ page }) => {
    await page.goto('/blog');
    const initialCount = await page.locator('[data-testid="content-card"]').count();
    await page.getByRole('button', { name: '#sveltekit' }).click();
    await page.waitForTimeout(100);
    const filteredCount = await page.locator('[data-testid="content-card"]').count();
    expect(filteredCount).toBeLessThanOrEqual(initialCount);
    await expect(page.getByRole('button', { name: '#sveltekit' })).toHaveClass(/text-accent/);
  });
});
