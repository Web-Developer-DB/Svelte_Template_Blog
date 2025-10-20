<!--
  @file README.md
  @description Ausführliche Projektbeschreibung für den SvelteKit Lernblog.
  Struktur: Überblick → Features → Setup → Lernpfad → Guides → FAQ → Lizenz.
-->

# SvelteKit Lernblog – Lehrreiches Starter-Template

Willkommen in deinem kommentierten SvelteKit-Template! Dieses Repository richtet sich an Junior-Entwickler:innen, die moderne Frontend-Patterns lernen möchten – von Content-Autodiscovery über Theme-Handling bis hin zu Deployment.

## Highlights auf einen Blick

- **SvelteKit 2 + Svelte 5 + TypeScript 5:** Moderne DX mit klaren Typen.
- **Tailwind 3 + Container-Queries:** Responsives, komponentenorientiertes Design.
- **MDsveX & Content-Autodiscovery:** Markdown, MDX und Svelte-Posts ohne manuelle Imports.
- **Docs als Routen:** `/docs` rendert die Lernpfad-Markdowns direkt im Browser.
- **Inline-Icons & Micro-Animationen:** Leichtgewichtige SVG-Icons plus Motion-Helfer für Navigation & Cards.
- **Fuse.js-Suche & Filter:** Clientseitige Volltextsuche über Titel, Text, Hashtags, Topics.
- **Automatisches Theming:** System-, Hell- und Dunkelmodus inkl. `prefers-contrast`.
- **SEO & Feeds:** Meta-Tags, JSON-LD, Sitemap und RSS out of the box.
- **Lehrmodus:** Jede Datei ist ausführlich kommentiert, Docs erklären die Architektur.
- **Developer-Tooling:** Einheitliche Linting- und Format-Skripte für saubere Commits.

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

npm run check       # Svelte- und TypeScript-Checks
npm run lint        # ESLint + Prettier + Svelte-Checks
npm run lint:types  # Reiner Svelte-/TypeScript-Durchlauf
npm run lint:style  # ESLint + Prettier im Check-Modus
npm run format      # Formatiert Dateien mit Prettier
```

## Qualitätssicherung & Workflow

- **Vor jedem Commit:** `npm run lint` kombiniert Type-Checks, ESLint und Prettier-Checks.
- **Gezielt formatieren:** Nutze `npm run format`, wenn ausschließlich Formatierungsfehler anliegen.
- **CI-Platzhalter:** Der Workflow in `.github/workflows/ci.yml` enthält vorbereitete Schritte für Vitest, Playwright und Pa11y. Aktiviere oder passe sie an, sobald die zugehörigen Skripte existieren.

## Lernpfad („Starte hier“)

1. Lies `docs/01-uebersicht.md` bis `docs/05-suche-und-filter.md` (sie werden unter `/docs/<slug>` dargestellt).
2. Öffne `src/lib/content/index.ts`, um den Content-Flow nachzuvollziehen.
3. Betrachte `ThemeToggle.svelte`, `globals.css` und `src/lib/components/icons/Icon.svelte` für Theme, Farben, Motion und Icons.
4. Teste Suche & Filter in `/search` und `/blog`.
5. Führe `npm run build` aus, um den Produktionspfad zu prüfen.

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
- `ThemeToggle.svelte` respektiert `prefers-color-scheme`, `prefers-contrast`, nutzt ein animiertes Icon und speichert die Wahl.
- Container-Queries (`@tailwindcss/container-queries`) ermöglichen komponentenbasierte Layout-Wechsel.
- Fluid Typography (via `clamp`) sorgt für dynamische Schriftgrößen.
- Utility-Klassen wie `anim-fade-in-up` und `anim-soft-hover` liefern subtile Bewegungen und halten bei `prefers-reduced-motion` inne.

## Suche & Filter

- `/search` nutzt Fuse.js und synchronisiert die Query in der URL (`?query=`).
- `/blog` bietet kombinierbare Filter für Hashtags und Topics über `TagChips`.
- Hashtags werden aus Text + Whitelist generiert; Stopwortliste findest du unter `src/lib/content/stopwords.de.txt`.
- Konsistente Icons (siehe `src/lib/components/icons`) helfen, Navigationspfade wiederzuerkennen.

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

## Lizenz

MIT © 2025 – Verwende, erweitere und teile das Template nach Belieben. Bitte lasse den Hinweis auf den Lehrmodus bestehen, damit Lernende den Mehrwert verstehen.
