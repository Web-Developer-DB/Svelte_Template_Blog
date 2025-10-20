---
title: "04 – Styling & Theming"
---

# Styling & Theming

Hier lernst du, wie Tailwind, CSS-Variablen und der Theme-Toggle zusammenspielen.

## Globale Styles

- `src/styles/globals.css` bindet Tailwind-Layer (`@tailwind base/components/utilities`).
- CSS-Variablen (`--color-*`) definieren Oberflächen, Text- und Akzentfarben.
- `prefers-reduced-motion` reduziert Animationen für empfindliche Nutzer:innen.

## Tailwind-Konfiguration

Wichtige Highlights aus `tailwind.config.cjs`:

- `darkMode: ['class', '[data-theme="dark"]']` lässt dich sowohl Klassen als auch Attribute nutzen.
- `container`-Option sorgt dafür, dass Inhalte mittig sitzen und adaptiv padding erhalten.
- Erweiterte Farben greifen auf die CSS-Variablen zu.
- Plugins: `@tailwindcss/typography` (Prosa-Styling) + `@tailwindcss/container-queries`.

## ThemeToggle Logik

1. Liest Nutzerpräferenz aus `localStorage`.
2. Ermittelt System-Theme via `matchMedia('(prefers-color-scheme: dark)')`.
3. Aktualisiert `document.documentElement.dataset.theme`.
4. Schreibt `<meta name="theme-color">` um, damit Browser-Chrome passt.
5. Lauscht auf `prefers-contrast` und setzt `data-contrast`.

## Komponenten anpassen

- Nutze Utility-Klassen wie `bg-surface/80`, damit die Theme-Variablen greifen.
- Für Container-Queries wendest du `@container` und responsive Utilities (`@lg:mx-8`) an.
- Typografie: Wrapped Markdown nutzt `prose`. Passe `tailwind.config.cjs` an, um Codeblöcke zu stylen.

## Experimentierideen

- Füge ein drittes Theme (Sepia) hinzu, indem du weitere CSS-Variablen definierst.
- Erweitere `ThemeToggle`, sodass ein Dropdown alle Varianten anzeigt.
- Implementiere `prefers-contrast: more` Styling (z. B. dickere Grenzen, größere Schrift).

Als Nächstes: [`05-suche-und-filter`](./05-suche-und-filter) erklärt Fuse.js und die Filtermechanik.
