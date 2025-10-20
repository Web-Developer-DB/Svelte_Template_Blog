---
layout: blog
title: "Hallo SvelteKit: Warum dieses Template existiert"
date: "2025-01-10"
tags:
  - sveltekit
  - lernpfad
  - setup
topics:
  - Frontend
  - Svelte
excerpt: "Ein persönlicher Einstieg in dieses Lernprojekt: Warum SvelteKit, welche Architektur dahintersteckt und wie du sofort loslegst."
cover: "/images/cover-hello-svelte.svg"
---

Willkommen zum ersten Beitrag des Lernblogs! Ich erinnere mich noch lebhaft an die Fragen, die mich als Junior-Entwickler umgetrieben haben: *Wie bringe ich Content, Komponenten und Build-Tools unter einen Hut?* Warum sollte ich mich für **SvelteKit** entscheiden, wenn doch **Next.js** und **Nuxt** so populär sind? Diese Fragen bilden den Ausgangspunkt für das Template, das du gerade erkundest.

## Was dich erwartet

SvelteKit löst drei typische Probleme gleichzeitig:

1. **Routing & Daten:** Dateibasierte Routen plus Load-Funktionen schützen dich vor wildem Boilerplate.
2. **Templating & Reaktivität:** Die Svelte-Syntax ist einfach zu lesen – perfekt, wenn du bisher nur HTML/CSS konntest.
3. **Progressive Enhancement:** SSR und CSR greifen nahtlos ineinander. Du musst dich nicht entscheiden.

In späteren Artikeln schauen wir uns an, wie `import.meta.glob` die Content-Autodiscovery übernimmt und wie wir daraus Suchindizes generieren. Das ist besonders spannend, weil wir keine Datenbank brauchen. Alles lebt in `/content/blog`.

## Projektstruktur verstehen

Ein wichtiger Baustein ist das Zusammenspiel aus Layout, Komponenten und Daten:

```text
src/
├─ routes/        → Seiten & Layouts
├─ lib/components → UI-Bausteine
└─ lib/content    → Indexing & Hashtags
```

Stell dir den Content-Indexer wie eine Mini-Datenbank im Dateisystem vor. Jeder Markdown- oder Svelte-Post liefert Metadaten (`metadata`), die wir zu einem strukturierten `BlogPost` zusammenziehen. Daraus entstehen Filter, Suche und Feeds.

## Direkt loslegen

1. `npm install` installieren alle Abhängigkeiten, inklusive **Tailwind** und **Fuse.js**.
2. `npm run dev` startet den lokalen Server. Du erreichst das Dashboard unter `http://localhost:5173`.
3. Öffne `/docs/01-uebersicht`, um den Lernpfad zu lesen.

## Warum stark kommentiert?

Wir verfolgen bewusst einen „Lehrmodus“. Jede Datei startet mit einem Header-Kommentar, Kernfunktionen besitzen TSDoc-Signaturen und Inline-Hinweise erklären Entscheidungen. So kannst du Änderungen nachvollziehen und gleichzeitig Best Practices einsammeln. Dieser Beitrag ist der Startpunkt: Du weißt jetzt, warum es das Template gibt und was dich in den nächsten Kapiteln erwartet.
