<!--
  @file README.md
  @description Ausführliche Projektbeschreibung für den SvelteKit Lernblog.
  Struktur: Überblick → Features → Setup → Lernpfad → Guides → FAQ → Lizenz.
-->

# SvelteKit Lernblog – Lehrreiches Starter-Template

Willkommen in deinem kommentierten SvelteKit-Template! Dieses Repository richtet sich an Junior-Entwickler:innen, die moderne Frontend-Patterns lernen möchten – von Content-Autodiscovery über Theme-Handling bis hin zu Tests und Deployment.

## Highlights auf einen Blick

- **SvelteKit + TypeScript (strict):** Moderne DX mit klaren Typen.
- **Tailwind 3 + Container-Queries:** Responsives, komponentenorientiertes Design.
- **MDsveX & Content-Autodiscovery:** Markdown, MDX und Svelte-Posts ohne manuelle Imports.
- **Fuse.js-Suche & Filter:** Clientseitige Volltextsuche über Titel, Text, Hashtags, Topics.
- **Automatisches Theming:** System-, Hell- und Dunkelmodus inkl. `prefers-contrast`.
- **SEO & Feeds:** Meta-Tags, JSON-LD, Sitemap und RSS out of the box.
- **Tests & CI:** Vitest, Playwright, axe/pa11y und GitHub Actions.
- **Lehrmodus:** Jede Datei ist ausführlich kommentiert, Docs erklären die Architektur.

## Architektur-Überblick

```
├─ src/
│  ├─ routes/            → Layouts, Seiten, Feeds
│  ├─ lib/
│  │  ├─ components/     → Wiederverwendbare UI-Bausteine
│  │  ├─ content/        → Content-Index, Hashtags, Stopwords
│  │  └─ config/         → siteConfig
│  └─ styles/            → Tailwind + Theme-Variablen
├─ content/blog/         → ~10 Beispielposts (md/svx/svelte)
├─ static/images/        → SVG-Cover & Social Card
├─ tests/                → Vitest (unit) & Playwright (e2e)
├─ docs/                 → Lernpfad & vertiefende Erklärungen
└─ .github/workflows/    → CI-Pipeline
```

## Setup & Befehle

> **Voraussetzungen:** Node.js ≥ 20, npm ≥ 9. Optional: Vercel CLI für Deployments.

```bash
npm install         # Abhängigkeiten installieren
npm run dev         # Entwicklungsserver (http://localhost:5173)
npm run build       # Produktionsbuild erzeugen
npm run preview     # Build lokal testen

# Qualität & Tests
npm run check       # Svelte- und TypeScript-Checks
npm run test:unit   # Vitest (Hashtag-Heuristik)
npm run test:e2e    # Playwright inkl. axe
npm run test:a11y   # pa11y-CI (benötigt laufenden Preview-Server)
npm run test        # Führt Unit + E2E + pa11y in Serie aus
```

## Lernpfad („Starte hier“)

1. Lies `docs/01-uebersicht.md` bis `docs/05-suche-und-filter.md`.
2. Öffne `src/lib/content/index.ts`, um den Content-Flow nachzuvollziehen.
3. Inspiziere `ThemeToggle.svelte` und `globals.css`, um das Theming zu verstehen.
4. Teste Suche & Filter in `/search` und `/blog`.
5. Führe `npm run test` aus und sieh dir die Terminalausgabe an.

## Content-Guide

Neue Posts legst du unter `content/blog` an:

- **Markdown/MDsveX:** Frontmatter (`layout`, `title`, `date`, `tags`, `topics`, `excerpt`, `cover`).
- **Svelte-Posts:** Exportiere `metadata` im `<script>`.
- **Dateiname:** `YYYY-MM-slug.{md|svx|svelte}`; der Slug bestimmt die URL.
- **Hashtags:** Manuelle `tags` + automatische Auto-Hashtags (aus dem Volltext).
- **Topics:** Höher-levelige Kategorien (z. B. „Frontend“, „Barrierefreiheit“).

Nach dem Speichern aktualisiert SvelteKit die Seite automatisch (HMR). Keine zusätzlichen Imports nötig.

## Theming & Responsivität

- CSS-Variablen definieren Light/Dark-Farben (`--color-surface`, `--color-accent` etc.).
- `ThemeToggle.svelte` respektiert `prefers-color-scheme`, `prefers-contrast` und speichert die Wahl.
- Container-Queries (`@tailwindcss/container-queries`) ermöglichen komponentenbasierte Layout-Wechsel.
- Fluid Typography (via `clamp`) sorgt für dynamische Schriftgrößen.

## Suche & Filter

- `/search` nutzt Fuse.js und synchronisiert die Query in der URL (`?query=`).
- `/blog` bietet kombinierbare Filter für Hashtags und Topics über `TagChips`.
- Hashtags werden aus Text + Whitelist generiert; Stopwortliste findest du unter `src/lib/content/stopwords.de.txt`.

## Qualitätssicherung

- **Vitest:** Testet die Hashtag-Heuristik (`tests/unit/hashtag.test.ts`).
- **Playwright:** Prüft Suche, Filter und Theme-Toggle (`tests/e2e/search.spec.ts`).
- **axe-playwright:** Löst WCAG-Checks im E2E-Lauf aus.
- **pa11y-ci:** Zusätzlicher Accessibility-Check gegen das gebaute Projekt (`.pa11yci`).
- **GitHub Actions:** Workflow `.github/workflows/ci.yml` führt alle Schritte automatisch aus.

## Deployment (Vercel)

1. Repository mit Vercel verknüpfen (`vercel link`).
2. `npm run build` lokal testen.
3. `vercel --prebuilt` für Preview-Deploys, `vercel deploy --prebuilt --prod` für Produktion.
4. `siteConfig.url` in `src/lib/config/site.ts` auf deine Domain setzen (wichtig für Sitemap/RSS).
5. Optional: GitHub-Action erweitern, die nach erfolgreicher CI automatisch deployt.

## FAQ

- **Warum `import.meta.glob` statt CMS?** Für Lernzwecke genügt das Dateisystem. Die Technik lässt sich später auf Headless-CMS adaptieren.
- **Wie ändere ich das Theme-Design?** Passe CSS-Variablen in `globals.css` und ggf. Tailwind-`extend.colors` an.
- **Kann ich Drafts verstecken?** Ergänze `draft: true` im Frontmatter und filtere in `getContentIndex()`, falls `process.env.NODE_ENV === 'production'`.
- **Wie erweitere ich die Suche?** Ändere die `keys`-Konfiguration in `/search/+page.svelte` oder ergänze API-Routen für serverseitige Suche.

## Troubleshooting

- **Fehlendes Frontmatter:** Konsole zeigt "`Beitrag <slug> verfügt über kein Frontmatter`" → Frontmatter ergänzen.
- **pa11y schlägt fehl:** Stelle sicher, dass der Preview-Server läuft (`npm run preview`) und `wait-on` die URL erreicht.
- **Playwright hängt:** Führe `npx playwright install --with-deps` aus, um Browser zu installieren.

## Lizenz

MIT © 2025 – Verwende, erweitere und teile das Template nach Belieben. Bitte lasse den Hinweis auf den Lehrmodus bestehen, damit Lernende den Mehrwert verstehen.
