---
title: "02 – Architektur & Datenfluss"
---

# Architektur & Datenfluss

Dieses Dokument vertieft, wie Daten vom Dateisystem über den Content-Indexer bis in die UI gelangen.

## High-Level-Datenfluss

1. **Content-Dateien** (`.md`, `.svx`, `.svelte`) liegen in `/content/blog`.
2. **`import.meta.glob`** sammelt alle Beiträge in `src/lib/content/index.ts`.
3. **`createPost()`** normalisiert Metadaten, generiert Auto-Hashtags und baut den `BlogPost`.
4. **`getContentIndex()`** liefert `posts`, `hashtags`, `topics`, `searchDocuments`.
5. **`+layout.ts`** ruft `getContentIndex()` auf und macht die Daten für alle Seiten verfügbar.
6. **UI-Komponenten** (Listen, Suche, Detailansicht) verbrauchen diese Daten – die Suche greift zusätzlich auf `searchDocuments` zur schnellen Fuzzy-Suche zurück.

## Dateisystemstruktur

```
src/
├─ routes/
│  ├─ +layout.{svelte,ts}   → globale UI & SEO
│  ├─ +page.svelte          → Landingpage
│  ├─ blog/                 → Listing + Details
│  ├─ search/               → Fuse.js Suche
│  └─ tags/                 → Hashtag-/Topic-Index
├─ lib/
│  ├─ components/           → UI-Bausteine
│  ├─ content/              → Index, Hashtags, Stopwörter
│  └─ config/site.ts        → Metadaten
└─ styles/globals.css       → Tailwind Baseline + Theme Variablen
```

## Wichtige Konzepte

- **Caching:** Der Content-Index wird in einer Modul-Variable (`cache`) gehalten. Während der Entwicklung sorgt HMR dafür, dass bei Dateiänderungen der Cache neu erzeugt wird.
- **SSG + CSR:** `prerender = true` erzeugt statische HTML-Dateien. Clientseitige Navigation sorgt dennoch für schnelle Wechsel.
- **Alias-Pfade:** `$components`, `$content`, `$styles` erlauben kurze Importpfade und werden in `svelte.config.js` sowie `vite.config.ts` definiert.
- **Vite-Serverzugriff:** `server.fs.allow` (siehe `vite.config.ts`) erlaubt dem Dev-Server, Dateien aus `/content` und `/docs` zu lesen, obwohl sie außerhalb von `src/` liegen.

## Erweiterungen

- **Mehrsprachigkeit:** Ergänze `locale` im Frontmatter und filtere in `getContentIndex()`.
- **Drafts:** Füge ein Flag `draft: true` hinzu und filtere Beiträge im Production-Build.
- **Remote-Content:** Wenn du CMS-Daten hinzuladen willst, koppel `getContentIndex()` mit Fetch-Requests und muxe lokale wie entfernte Inhalte.

Nächster Stopp: [`03-content-workflow`](./03-content-workflow) erklärt, wie du neuen Content erzeugst und welche Felder im Frontmatter erlaubt sind.
