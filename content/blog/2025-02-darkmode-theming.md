---
layout: blog
title: "Automatisches Theming mit System-Respekt"
date: "2025-02-02"
tags:
  - theming
  - darkmode
  - accessibility
topics:
  - Designsysteme
  - Dark-Mode
excerpt: "Wie das Theme-Toggle funktioniert, welche Rolle CSS-Variablen spielen und wie du `prefers-color-scheme`, `prefers-contrast` und `prefers-reduced-motion` kombinierst."
cover: "/images/cover-darkmode.svg"
---

Dark Mode ist kein nettes Extra mehr, sondern Erwartung. Gleichzeitig sollten wir **Systempräferenzen respektieren** und nicht einfach den Nutzer zwingen, manuell einen Schalter zu suchen. Dieses Template verbindet daher drei Ebenen: automatische Erkennung, manueller Toggle und Metadaten-Update.

## CSS-Variablen als Herzstück

In `src/styles/globals.css` findest du Variablen wie `--color-surface` oder `--color-accent`. Tailwind greift darauf über `rgb(var(--color-*) / <alpha>)` zu. Das macht zwei Dinge möglich:

1. **Theme-Switch** mit CSS allein – die Variablen werden per `[data-theme="dark"]` überschrieben.
2. **Feinsteuerung** über Tailwind – du kannst in Komponenten `bg-surface/80` nutzen, ohne zu wissen, welche Farbe gerade aktiv ist.

## Scriptlogik des Toggles

`ThemeToggle.svelte` arbeitet mit einem `writable`-Store. Wichtige Schritte:

- Beim `onMount` wird der zuletzt gewählte Wert aus `localStorage` gelesen.
- `applyTheme()` setzt `document.documentElement.dataset.theme`.
- Die Funktion aktualisiert zusätzlich `<meta name="theme-color">`, damit Browser-Chrome zum Theme passt.
- Ein `matchMedia('(prefers-contrast: more)')` überwacht Kontraständerungen und setzt `data-contrast`.

Schau dir besonders an, wie wir das `Theme`-Label für Screenreader aktualisieren. `aria-live="polite"` informiert assistive Technologien über die Änderung, ohne den Fokus zu klauen.

## Bewegungspräferenzen

Ein gern übersehener Aspekt ist `prefers-reduced-motion`. Im globalen CSS brechen wir Animationen ab, wenn der Nutzer reduzierte Bewegung wünscht:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Das wirkt drastisch, verhindert aber Trigger bei vestibulären Einschränkungen. Wenn du Animationen brauchst, kannst du für einzelne Elemente Ausnahmen definieren – dokumentiere das dann unbedingt.

## Trade-offs

- Der Toggle setzt `window.scrollTo({ behavior: 'smooth' })`, wodurch `prefers-reduced-motion` greifen sollte. Teste das mit dem Playwright-Skript!
- `localStorage` existiert nur im Browser. Deshalb läuft die Initialisierung in `onMount`.
- `themeColors` definieren wir als konstantes Mapping in TypeScript. Wenn du neue Themes hinzufügst, vergiss nicht, die Meta-Farben anzupassen.

Damit hast du den kompletten Theming-Stack verstanden. Spiel mit zusätzlichen Themes, etwa „Sepia“ oder „High-Contrast“, und erweitere die UI. Dokumentiere deine Änderungen im README, damit das Team nachvollziehen kann, wie du Accessibility berücksichtigt hast.
