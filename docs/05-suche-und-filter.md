---
title: "05 – Suche & Filter"
---

# Suche & Filter

Die Suche kombiniert Fuse.js mit clientseitiger URL-Synchronisation. Dieser Guide beschreibt die Architektur und Möglichkeiten zur Erweiterung.

## Datenbasis

- `searchDocuments` stammt aus `getContentIndex()`.
- Jedes Dokument enthält `title`, `excerpt`, `content`, `tags`, `topics`, `autoHashtags`.
- Fuse.js wird einmal beim Rendern von `/search` instanziiert.

## Fuse.js Konfiguration

```ts
const fuse = new Fuse(data.searchDocuments, {
  includeScore: true,
  threshold: 0.35,
  keys: ['title', 'excerpt', 'content', 'tags', 'topics', 'autoHashtags']
});
```

- `threshold` bestimmt, wie tolerant die Suche ist (kleiner = strenger).
- `includeScore` erlaubt, Ergebnisse nach Relevanzsortierung zu interpretieren (optional ausgeben).

## URL-Synchronisation

- `SearchBar` dispatcht das `search`-Event nach 250 ms Debounce.
- `runSearch()` aktualisiert `window.location.search` via `goto(..., { replaceState: true, keepfocus: true, noscroll: true })`, sodass Fokus und Scrollposition erhalten bleiben.
- Reactive Statement lauscht auf `$page.url.searchParams`, sodass Back/Forward-Buttons funktionieren.

## Filter auf /blog

- `TagChips` verwenden `dispatch('toggle', tag)`.
- Der Blog filtert Posts, indem er prüft, ob alle ausgewählten Tags/Topics in den Datensätzen enthalten sind.
- Filter kombinieren sich per logischem UND: Alle ausgewählten Hashtags müssen passen.

## Erweiterungen

- **Server-Suche:** Baue eine API-Route, die `searchDocuments` als JSON ausliefert.
- **Facet-Zähler:** Zeige neben jedem Tag an, wie viele Beiträge nach aktuellem Filter übrig bleiben.
- **Highlighting:** Markiere Trefferwörter im Auszug (z. B. via `Fuse.js` Match-Daten).

Damit endet der Lernpfad. Kehre zu den Komponenten zurück, probiere Anpassungen aus und dokumentiere deine Ergebnisse im README, damit dein Team davon profitiert.
