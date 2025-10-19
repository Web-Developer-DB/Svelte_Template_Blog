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

Barrierefreiheit ist kein Häkchen auf einer Liste, sondern ein kontinuierlicher Prozess. Dennoch helfen automatisierte Tools, typische Fehler schnell aufzuspüren. Dieses Template konzentriert sich auf Content und Theming; für automatisierte Accessibility-Checks kannst du bei Bedarf Tools wie **axe** oder **pa11y** ergänzen.

## Axe im Alltag

Nutze die Browser-Erweiterung „axe DevTools“ oder den CLI-Befehl `npx axe https://example.com`, um Seiten gegen WCAG 2.1 AA zu prüfen. So erkennst du schnell Probleme bei Landmark-Struktur, Kontrast oder ARIA-Attributen. Für wiederkehrende Prüfungen kannst du eine Playwright-Suite mit `axe-playwright` aufsetzen – installiere dafür `@playwright/test` und `axe-playwright` als Dev-Abhängigkeiten und führe Checks im Headless-Browser aus.

## Pa11y manuell

`pa11y` lässt sich ebenfalls via CLI starten: `npx pa11y http://localhost:5173`. Die Auswertung listet Verstöße mit CSS-Selektor und Beschreibung auf. In CI-Pipelines kannst du `pa11y-ci` mit einer JSON-Konfiguration verwenden, falls du Accessibility automatisiert beobachten möchtest.

## Manuelle Tests

Automatisierung ersetzt nicht das manuelle Testen. Prüfe zusätzlich:

- **Tastaturnavigation**: Kommst du überall hin, ohne Maus?
- **Screenreader**: Lies zentrale Seiten mit NVDA oder VoiceOver vor.
- **Kontrast**: Teste `prefers-contrast: more`, um sicherzustellen, dass dein Theme lesbar bleibt.

## Dokumentation

Beschreibe im README, wie du Accessibility testest. Verlinke Checklisten (z. B. WCAG-Quickref) und notiere bekannte Einschränkungen. Wenn du bewusst ein zugelassenes Pattern nutzt (z. B. Disclosure), verweise auf die WAI-ARIA-Authoring Practices.

Barrierefreiheit ist Teamarbeit. Automatisierte Checks spüren Regressionen auf, manuelle Tests vermitteln die Perspektive deiner Nutzer:innen. Beides gehört zusammen.
