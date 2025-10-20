---
title: "01 – Überblick & Lernpfad"
---

# Willkommen im SvelteKit Lernblog

Dieses Dokument ist dein Startpunkt. Es erklärt Zielsetzung, Technik-Stack und den empfohlenen Lernpfad. Das Projekt richtet sich an Junior-Entwickler:innen, die moderne Web-Patterns verstehen möchten.

## Ziele

- **Sofort lauffähig:** `npm install && npm run dev`
- **Didaktisch aufbereitet:** Jeder Code besitzt Datei-Header und Inline-Kommentare.
- **Produktionsnahe Features:** Theming, Suche, SEO und Deployment.

## Tech-Stack auf einen Blick

```
SvelteKit 2  •  Svelte 5        •  TypeScript 5
Tailwind 3   •  Vite 6          •  Fuse.js
MDsveX       •  Adapter Vercel  •  Relative Images
```

## Architektur-Diagramm

```
┌──────────────────────────────────────────────┐
│ src/                                         │
│  ├─ routes/   → Layout + Seiten              │
│  ├─ lib/      → Komponenten + Content-Logik  │
│  └─ styles/   → globale CSS-Variablen        │
│ content/      → Markdown, MDsveX, Svelte      │
│ docs/         → Lernunterlagen               │
└──────────────────────────────────────────────┘
```

## Lernpfad

1. **Lesen:** Arbeite die Dateien in `/docs` der Reihenfolge nach durch.
2. **Experimentieren:** Passe Komponenten in `src/lib/components` an.
3. **Analysieren:** Untersuche `src/lib/content/index.ts`, um Content-Scanning zu verstehen.
4. **Erweitern:** Schreibe eigene Posts in `/content/blog`.

## Nächste Schritte

- Lies [`02-architektur`](./02-architektur) für tiefergehende Strukturinfos.
- Öffne das Projekt im Editor und folge den Kommentaren – sie sind bewusst ausführlich.

Viel Spaß beim Lernen!
