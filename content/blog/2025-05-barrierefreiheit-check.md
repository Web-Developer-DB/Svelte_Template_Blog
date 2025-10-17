---
layout: blog
title: "Barrierefreiheit testen: axe und pa11y im Einsatz"
date: "2025-05-07"
tags:
  - a11y
  - testing
  - tooling
topics:
  - Barrierefreiheit
excerpt: "Wie du Accessibility-Checks automatisierst und welche manuellen Tests du zusätzlich durchführen solltest."
cover: "/images/cover-a11y.svg"
---

Barrierefreiheit ist kein Häkchen auf einer Liste, sondern ein kontinuierlicher Prozess. Dennoch helfen automatisierte Tools, typische Fehler schnell aufzuspüren. Dieses Template integriert **axe** (über `axe-playwright`) und **pa11y-ci**, damit du Accessibility bereits in der CI prüfst.

## Axe + Playwright

In `tests/e2e/search.spec.ts` importieren wir `axe`. Nach dem Navigieren führen wir `await checkA11y(page);` aus. Dadurch wird die aktuelle Seite gegen WCAG 2.1 AA geprüft. Achte darauf, dass du `aria-labels`, Landmarks und Kontraste korrekt setzt – sonst meldet axe Probleme.

### Beispiel

```ts
import { test } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test('Homepage ist a11y-safe', async ({ page }) => {
  await page.goto('/');
  await injectAxe(page);
  await checkA11y(page);
});
```

## Pa11y-CI

`pa11y-ci` läuft über `npm run test:a11y`. Die Konfigurationsdatei (`.pa11yci`) definiert URLs und Schwellenwerte. Pa11y rendert Seiten mit einem Headless-Browser, ähnlich wie axe, und meldet Verstöße. Kombiniere beide Tools, um hohe Abdeckung zu erreichen.

## Manuelle Tests

Automatisierung ersetzt nicht das manuelle Testen. Prüfe zusätzlich:

- **Tastaturnavigation**: Kommst du überall hin, ohne Maus?
- **Screenreader**: Lies zentrale Seiten mit NVDA oder VoiceOver vor.
- **Kontrast**: Teste `prefers-contrast: more`, um sicherzustellen, dass dein Theme lesbar bleibt.

## Dokumentation

Beschreibe im README, wie du Accessibility testest. Verlinke Checklisten (z. B. WCAG-Quickref) und notiere bekannte Einschränkungen. Wenn du bewusst ein zugelassenes Pattern nutzt (z. B. Disclosure), verweise auf die WAI-ARIA-Authoring Practices.

Barrierefreiheit ist Teamarbeit. Mit automatisierten Tests stellst du sicher, dass neue Änderungen keine Regressionen einführen. Mit manuellen Tests verstehst du die Perspektive deiner Nutzer. Beides gehört zusammen.
