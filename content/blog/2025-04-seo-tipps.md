---
layout: blog
title: "SEO-Basics für SvelteKit Blogs"
date: "2025-04-04"
tags:
  - seo
  - sitemap
  - metadata
topics:
  - SEO
excerpt: "Meta-Tags, OpenGraph, JSON-LD und technische Basics: Alles, was du brauchst, damit Suchmaschinen dein SvelteKit-Blog lieben."
cover: "/images/cover-seo.svg"
---

Suchmaschinenoptimierung wirkt mystisch, doch 80 % bestehen aus sauberer Struktur. Dieses Template liefert die technischen Grundlagen. Wenn du die Mechanismen verstehst, kannst du später auf Content-Strategie fokussieren.

## Meta-Tags & Open Graph

`+layout.svelte` setzt Standard-Metadaten:

- `<title>` und `<meta name="description">`
- `og:title`, `og:description`, `og:image`
- Twitter Cards

Unterseiten können via `load` (oder `+page.ts`) eigene Werte zurückgeben. Im Blogpost-Loader überschreiben wir `seo.title`, `seo.description` und `seo.ogImage`. Damit erscheinen einzelne Artikel mit ihrem Cover in Social Previews.

## JSON-LD

Zwei JSON-LD-Snippets sind eingebaut:

1. `Blog`-Schema im Root-Layout.
2. `BlogPosting` im Einzelartikel (`[slug]`).

Beispiel:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "SEO-Basics für SvelteKit Blogs",
  "datePublished": "2025-04-04",
  "keywords": "seo,sveltekit,sitemap"
}
```

Über die `keywords` informierst du Suchmaschinen über relevante Begriffe. Aktualisiere die Werte, sobald du neue Tags einführst.

## Sitemap & RSS

Die Routen `/sitemap.xml` und `/rss.xml` generieren Feeds dynamisch aus dem Content-Index. Durch `prerender` landen sie statisch im Build. Kontrolliere beide Dateien nach Deployment, um sicherzustellen, dass die Domain (`siteConfig.url`) stimmt.

## Robots & Canonical

Ein `robots.txt` ist optional, aber empfehlenswert. Du kannst eine statische Datei in `/static` ablegen. Canonical-Links lassen sich pro Seite via `<link rel="canonical">` ergänzen, falls du Duplicate-Content befürchtest.

## Content-Qualität

Technik ist nur die halbe Miete. Erstelle Inhalte mit klarem Fokus:

- Eine H1 pro Seite.
- Strukturierte Zwischenüberschriften (H2/H3).
- Ausreichende Textlänge (mindestens 200 Worte).
- Sinnvolle interne Links (z. B. auf `/docs`).

Kombinierst du diese Grundlagen mit sauberem Deployment, erreichst du solide SEO-Ergebnisse ohne Black-Hat-Tricks. Dokumentiere Änderungen im README, damit Teammitglieder wissen, welche SEO-Annahmen ihr trefft.
