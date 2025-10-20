---
layout: blog
title: "Performance-Tuning: Lighthouse-ready mit SvelteKit"
date: "2025-03-18"
tags:
  - performance
  - lighthouse
  - caching
topics:
  - Leistung
excerpt: "Konkrete Maßnahmen, wie du dieses Template für schnelle Ladezeiten optimierst – inklusive Tipps zu Prerendering, Caching und Critical CSS."
cover: "/images/cover-performance.svg"
---

Performance ist kein „später mal“-Thema. Je früher du optimierst, desto günstiger bleiben die Anpassungen. SvelteKit hilft bereits durch SSR und HMR, doch ein paar Stellschrauben solltest du dir genauer ansehen.

## Prerendering & CDN

Das Template setzt `export const prerender = true;` im Root-Layout. Dadurch rendert SvelteKit alle Seiten statisch. Auf Vercel kombinierst du das mit Edge-Caching:

```bash
npm run build
vercel deploy --prebuilt
```

Die vorbereiteten HTML-Dateien liegen im CDN, während Client-Side-Navigation weiterhin funktioniert. Wenn du dynamische Inhalte brauchst, entferne `prerender` nur dort, wo du wirklich SSR benötigst.

## Assets optimieren

- Lege Grafiken im Ordner `/static/images` ab. Vercel serviert sie unverändert.
- Verwende `width`/`height` Attribute bei `<img>`, damit der Browser Layout-Shifts vermeidet.
- Für `cover`-Bilder kannst du SVGs nutzen, die sich verlustfrei skalieren und minimal groß sind.

## Critical CSS

Tailwind generiert viele Klassen, aber Vite entfernt ungenutzte Utilities durch Tree Shaking. Dennoch solltest du:

1. Keine wilden `w-[123px]`-Klassen generieren, wenn du sie nicht brauchst.
2. Mit `@apply` sparsam umgehen, um die Stylesheet-Größe nicht explodieren zu lassen.

## JavaScript reduzieren

Ein häufiger Fehler ist, jede kleinste Interaktion in ein Svelte-Component zu packen. Nutze `progressive enhancement`: Formulare können immer noch `<form>`-Submit benutzen, bevor du sie mit JS veredelst. In diesem Template bleibt die Suche komplett clientseitig, aber das Filtering im Blog läuft ohne zusätzliche Netzwerk-Calls.

## Messung

Starte Lighthouse im Chrome DevTools oder kombiniere bei Bedarf Playwright mit `axe-playwright`, wenn du automatisierte Checks ergänzen möchtest. Achte auf:

- **Largest Contentful Paint**: Die Hero-Sektion wird statisch ausgeliefert, also schnell.
- **Cumulative Layout Shift**: Dank definierter Bildgrößen bleibt der Wert niedrig.
- **Total Blocking Time**: Gering, weil wir auf schwere JS-Bundles verzichten.

## Ausblick

Wenn die Seite wächst, denk über Code-Splitting und Lazy-Loading für seltene Komponenten nach. SvelteKit unterstützt `await import('./HeavyComponent.svelte')` out of the box. Dokumentiere in deinem Repo, welche Performance-Budgets ihr habt – nur so bleibt Performance-Teamaufgabe statt Einzelaktion.
