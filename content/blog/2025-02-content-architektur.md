---
layout: blog
title: "Content-Architektur mit import.meta.glob"
date: "2025-02-18"
tags:
  - content
  - glob
  - metadata
topics:
  - Content-Architektur
excerpt: "Wie der Content-Indexer funktioniert, welche Datenstruktur wir zurückgeben und warum wir mehrere Glob-Maps nutzen."
cover: "/images/cover-content.svg"
---

Die Content-Architektur dieses Templates soll dich befähigen, neue Formate hinzuzufügen, ohne Build-Skripte anfassen zu müssen. **`import.meta.glob`** ist dabei der heimliche Star. Anstatt einzelne Dateien zu importieren, scannen wir das gesamte Verzeichnis `/content/blog` und erzeugen daraus eine strukturierte Sammlung.

## Drei Glob-Aufrufe, drei Aufgaben

`src/lib/content/index.ts` enthält drei Maps:

1. `contentModules`: Liefert für jede Datei das Svelte/MDsveX-Modul inkl. `metadata`.
2. `rawMarkdownMap`: liefert Markdown/MDX als Rohstring.
3. `rawSvelteMap`: greift den Quelltext von `.svelte`-Posts ab.

### Warum zwei Raw-Maps?

Fuse.js benötigt Text, um Suchtreffer zu bewerten. MDsveX stellt diesen Text nicht automatisch bereit. Mit `as: 'raw'` erhalten wir den originalen Dateiinhalt und können daraus Auszüge oder Auto-Hashtags generieren. Sogar Svelte-Dateien lassen sich so analysieren, solange keine externen Imports fehlen.

## Datenmodell

`createPost()` konvertiert Rohdaten in einen `BlogPost`:

- `slug`: Dateipfad ohne Endung.
- `excerpt`: Aus Frontmatter oder generierter Auszug.
- `tags`: Normalisierte Hashtags (kleingeschrieben).
- `topics`: Klartext-Kategorien.
- `autoHashtags`: Ergebnis der NLP-Heuristik aus `hashtag.ts`.
- `component`: Die eigentliche Svelte/MDsveX-Komponente.

Der fertige Index besteht aus `posts`, `hashtags`, `topics` und `searchDocuments`. Dank Caching (`cache` Variable) muss die Berechnung nur einmal pro Build ausgeführt werden.

## Fehlerhandling

Fehlt das Frontmatter, werfen wir einen Fehler:

```ts
if (!metadata) {
  throw new Error(`Beitrag ${slug} verfügt über kein Frontmatter.`);
}
```

So fällt es sofort auf, wenn jemand eine Datei vergisst zu annotieren. Ergänze im Team ggf. einen ESLint- oder Git-Hook, der Content-Dateien prüft.

## Weiterführende Ideen

- Ergänze zusätzliche Felder wie `readingTime` oder `draft`.
- Implementiere Internationalisierung, indem du `locale` ins Frontmatter aufnimmst und beim Indexieren filterst.
- Lagere die Normalisierungsschritte (`toSlug`, `createPost`) in eigene Dateien aus, wenn die Logik wächst.

Sobald du diese Architektur verinnerlicht hast, kannst du nahezu beliebige Inhaltstypen integrieren – von Rezepten bis zu Release Notes. Wichtig ist, immer klare Datenmodelle zu definieren, damit Komponenten und Tests stabil bleiben.
