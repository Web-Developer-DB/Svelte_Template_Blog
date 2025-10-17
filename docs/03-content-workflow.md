---
title: "03 – Content-Workflow"
---

# Content-Workflow

Dieses Kapitel zeigt, wie du Beiträge erstellst, welche Felder im Frontmatter Pflicht sind und wie Auto-Hashtags entstehen.

## Frontmatter Referenz

```yaml
---
layout: blog           # Pflicht für Markdown/MDsveX
title: "Dein Titel"    # Pflicht
date: "2025-06-01"     # Pflicht, ISO-Format
tags: ["svelte", "css"]    # optionale Hashtags (werden kleingeschrieben)
topics: ["Frontend"]       # optionale Themen (werden 1:1 übernommen)
excerpt: "Teaser-Text"    # optional, sonst autogeneriert
cover: "/images/dein-cover.svg" # optional
---
```

> **Hinweis:** Bei `.svelte`-Posts exportierst du `metadata` im `<script>`. Der Inhalt entspricht dem Frontmatter.

## Dateiformate

- **Markdown (.md):** Ideal für klassische Artikel.
- **MDsveX (.svx):** Kombiniert Markdown mit interaktiven Svelte-Komponenten.
- **Svelte (.svelte):** Wenn du die volle Power von Svelte brauchst (z. B. komplexe Demos).

## Auto-Hashtags verstehen

`extractHashtags()` scannt den Rohtext der Datei:

1. Tokenisierung (`split(/\s+/)`).
2. Normalisierung (`normalizeHashtag`).
3. Stopwort-Filter (`stopwords.de.txt`).
4. Frequenzanalyse (Top `max` Begriffe).
5. Whitelist (stellt sicher, dass manuelle Tags priorisiert sind).

Das Ergebnis landet in `post.autoHashtags`. In der UI werden manuelle Tags und Auto-Hashtags zusammen angezeigt.

## Workflow-Empfehlung

1. **Entwurf schreiben:** Lege die Datei in `/content/blog` an.
2. **Metadaten pflegen:** Achte auf Datum, Tags, Topics und `layout`.
3. **Lokale Vorschau:** `npm run dev` und Seite `http://localhost:5173/blog/<slug>`.
4. **Tests ausführen:** `npm run test` bevor du pushst.

## Häufige Fehler

- **Kein Frontmatter:** `createPost()` wirft bewusst einen Fehler.
- **Falscher Cover-Pfad:** Assets müssen unter `/static` liegen.
- **Datum im falschen Format:** Verwende ISO-Strings (`YYYY-MM-DD`), damit Sortierung korrekt funktioniert.

Weiter geht es mit Styling-Themen: [`04-styling-und-theming.md`](04-styling-und-theming.md).
