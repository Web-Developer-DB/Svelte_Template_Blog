
# 🧠 Entwickler-Prompt für Codex-Agent

**SvelteKit • TypeScript • Tailwind • Lehrmodus (ausführlich kommentiert)**

> **Rolle:**
> Agiere als **Software-Architekt & Senior-Full-Stack-Entwickler** mit didaktischem Fokus. Erzeuge ein **einsprachiges SvelteKit-Template**, das sofort startet, **responsiv** ist, **automatisch Theming** nutzt, **Content autodetektiert**, **Hashtags & Themen-Tags** unterstützt, eine **Suche** bietet – und dessen **gesamter Code ausführlich kommentiert** ist, damit Junior-Entwickler ihn als Lernprojekt nutzen können.
> Nach der Generierung muss das Projekt **ohne Änderungen lauffähig** sein und eine **umfangreiche README.md** für GitHub enthalten.

---

## 🎯 Projektziele

1. **SvelteKit-App** (TypeScript, Tailwind) – **sofort lauffähig**.
2. **Automatisches Theming** (Light/Dark/System, inkl. `prefers-contrast`, `prefers-reduced-motion`).
3. **Responsives Layout** (Mobile-First, Breakpoints, Container-Queries, Fluid Typography).
4. **Content-Autodiscovery** für `.md`, `.svx`, optional `.svelte` via `import.meta.glob`.
5. **Hashtags** (aus Frontmatter + Auto-Extraktion) & **Themen-Tags** (textuelle Topics).
6. **Clientseitige Suche** (z. B. Fuse.js) über Titel, Auszug/Body, Hashtags, Themen.
7. **SEO** (Meta/OG/Twitter), **Sitemap**, **RSS**, JSON-LD.
8. **README.md** mit Schritt-für-Schritt-Anleitung + Lernpfad.
9. **≈10 Beispiel-Posts** mit realistischen Inhalten, verschiedenen Tags/Themen.
10. **Lehrmodus:** ***kompletter Code ausführlich kommentiert*** (siehe „Dokustandard“).

---

## 🧩 Tech-Stack

SvelteKit, Svelte, TypeScript (strict), Tailwind 3, MDsveX, Fuse.js, `@sveltejs/adapter-vercel`.

---

## 🏗️ Projektstruktur (Vorgabe)

```
/src
  /routes
    /blog/[slug]/+page.svelte
    /blog/+page.svelte
    /tags/+page.svelte
    /search/+page.svelte
    /+layout.svelte
    /+layout.ts
    /+page.svelte
  /lib/components
    ContentCard.svelte
    TagChips.svelte
    ThemeToggle.svelte
    SearchBar.svelte
    SearchResults.svelte
    MobileNav.svelte
    DesktopNav.svelte
  /lib/content
    index.ts          # Scan & Index (stark kommentiert)
    hashtag.ts        # Auto-Hashtags (stark kommentiert)
    stopwords.de.txt
  /styles/globals.css
/content
  /blog/...           # ca. 10 Beispielposts (.md/.svx, 1–2 .svelte)
/static/images/...
/docs
  01-uebersicht.md
  02-architektur.md
  03-content-workflow.md
  04-styling-und-theming.md
  05-suche-und-filter.md
```

---

## 🔧 Kernanforderungen

### 1) Responsives Layout

* Tailwind-Breakpoints (`sm`–`2xl`), **Container-Queries** (`@container`), **Fluid Typography** (`clamp()`).
* Zwei Navigationsvarianten: `MobileNav` (Bottom-Bar < `lg`), `DesktopNav` (Sidebar ≥ `lg`).

### 2) Automatisches Theming

* CSS-Variablen in `:root` und `[data-theme="dark"]`, Tailwind bindet `rgb(var(--color-*) / <alpha>)`.
* System-Erkennung (`prefers-color-scheme`), manueller Toggle (Persistenz via `localStorage`), dynamisches `<meta name="theme-color">`.
* Respektiere `prefers-contrast` & `prefers-reduced-motion`.

### 3) Content-Autodiscovery & Datenmodell

* `import.meta.glob('/content/**/+(*.md|*.svx|*.svelte)', { eager: true })`.
* **Frontmatter**:

  ```yaml
  ---
  title: "Titel"
  date: "2025-03-10"
  tags: ["hashtag1", "hashtag2"]   # Hashtags (Kurzlabels)
  topics: ["Thema1", "Thema2"]     # Themen-Tags (Textkategorien)
  excerpt: "Kurzer Teaser."
  cover: "/images/cover.jpg"
  ---
  ```
* **Index** sammelt: `slug`, `title`, `excerpt`, `date`, `tags`, `topics`, `autoHashtags`, `cover`, `content`.

### 4) Hashtags & Themen-Tags

* **Hashtags:** Frontmatter + Auto-Extraktion (Stopwort-Filter, Normalisierung, Top-N, z. B. 5).
* **Themen-Tags (topics):** Textkategorien (z. B. „Frontend“, „Barrierefreiheit“); im UI klar erkennbar.
* **UI:** Filter-Chips oben (Hashtags), Topics als Badges/Filter; kombinierbare Filter.

### 5) Suche

* **Fuse.js** clientseitig; durchsucht Titel, Auszug/Body, `tags`, `topics`.
* Debounce ~250 ms; Ergebnisseite `/search` + Komponente `SearchBar`.

### 6) SEO & Feeds

* Default-Meta in `+layout.ts`; pro Seite überschreibbar.
* **/sitemap.xml**, **/rss.xml**, **JSON-LD** (`Article/BlogPosting`).

## 🧪 Beispiel-Content (~10 Posts)

Lege ca. **10 Dateien** unter `/content/blog` an (200–600 Wörter, Codeblöcke, verschiedene Tags/Topics, unterschiedliche Daten/Cover):

1. `2025-01-hello-svelte.md` – topics: Frontend, Svelte
2. `2025-01-responsive-design.svx` – topics: CSS, Responsive
3. `2025-02-darkmode-theming.md` – topics: Designsysteme, Dark-Mode
4. `2025-02-content-architektur.md` – topics: Content-Architektur
5. `2025-03-auto-hashtags.svx` – topics: NLP, Metadaten
6. `2025-03-performance-tuning.md` – topics: Leistung
7. `2025-04-seo-tipps.md` – topics: SEO
8. `2025-04-ux-im-web.md` – topics: UX-Optimierung
9. `2025-05-barrierefreiheit-check.md` – topics: Barrierefreiheit
10. `2025-05-deployment-vercel.svelte` – topics: Deployment

---

## 🧭 **Dokustandard (Lehrmodus – sehr wichtig!)**

Der **gesamte Code** muss **ausführlich kommentiert** sein. Halte dich an folgende Regeln:

* **Datei-Header-Kommentar**: Zweck der Datei, Kontext, Haupt-Exports, Abhängigkeiten.
* **Funktions-Header (TSDoc/JSDoc)**:

  * Kurzbeschreibung (Was/Warum)
  * Parameter/Typen, Rückgabe
  * Randbedingungen/Seiteneffekte
  * Beispielaufruf (wenn sinnvoll)
* **Inline-Kommentare**: Erkläre *warum* eine Entscheidung getroffen wurde (nicht nur *was* geschieht).
* **Abschnitts-Banner**: `// ── Abschnitt: Laden der Inhalte` usw.
* **Typen & Interfaces** dokumentieren (`/** … */`).
* **Komponentendateien**: oben „Props erklärt“, „State erklärt“, „UI-Logik“, „A11y-Hinweise“.
* **Gotchas/Trade-offs**: kurze Hinweise bei potenziellen Stolpersteinen (z. B. SSR/CSR, ESM, Edge-Limits).
* **README & /docs**:

  * **Schritt-für-Schritt-Lernpfad** („Starte hier“, dann Build, Content hinzufügen, Suche, Deployment).
  * **Architektur-Skizze** (ASCII-Diagramm ok).
  * **FAQ** für typische Junior-Fragen („Warum `import.meta.glob`?“, „Wann SSR vs. CSR?“).

**Formatbeispiel (TSDoc):**

```ts
/**
 * Erzeugt Auto-Hashtags aus einem Text.
 * Warum: Junior-freundliche Einführung in einfache NLP-Heuristiken (Häufigkeit, Stopwörter).
 * @param text Volltext (Markdown bereits bereinigt)
 * @param opts.max Anzahl der gewünschten Hashtags (Default: 5)
 * @returns Liste von Strings ohne '#'
 * @example
 *   extractHashtags("Svelte ist schnell und reaktiv", { max: 3 })
 */
export function extractHashtags(text: string, opts = { max: 5 }): string[] { ... }
```

---

## ✅ Akzeptanzkriterien

* Startet direkt:

  ```bash
  npm install
  npm run dev
  ```
* Theme folgt System; Toggle mit Persistenz; `<meta name="theme-color">` dynamisch.
* Mobile/Desk-Layouts schalten korrekt; Container-Queries aktiv.
* `/blog` listet alle ~10 Posts; Detailseiten funktionieren.
* Hashtags & Themen-Tags sichtbar und filterbar.
* Suche liefert passende Treffer (Titel, Auszug/Body, Tags, Topics).
* SEO/Sitemap/RSS vorhanden.
* Build läuft ohne Fehler.
* **Kommentardeckung**: Jede Datei mit Kopfkommentar; jede Funktion/Komponente mit TSDoc; erklärende Inline-Kommentare an Kernstellen; `/docs`-Tutorials vorhanden.

---

## 📘 README.md (vom Agent zu erstellen – ausführlich)

Muss enthalten:

1. **Projektüberblick** + Zielgruppe (Junior-Dev-freundlich).
2. **Features & Architektur-Überblick** (Diagramm/ASCII ok).
3. **Setup** inkl. Node-Version, Befehle (`dev`, `build`, `preview`, `check`).
4. **Ordnerstruktur** und **wichtige Dateien** erklärt.
5. **Content-Guide** (neue Posts, Frontmatter, Topics vs. Tags).
6. **Theming & Responsiveness** (wie es funktioniert, wie ändern).
7. **Suche & Filter** (Fuse.js-Konfiguration, Erweiterungen).
8. **Qualitätssicherung** (ESLint/Prettier-Hinweise optional) und Hinweise zur Accessibility.
9. **Deployment** (Vercel).
10. **FAQ & Troubleshooting**.
11. **Lizenz & Autor**.

---

## 📝 Abschließender Befehl an den Codex-Agent

> Erzeuge ein **einsprachiges SvelteKit-Projekt** (TypeScript + Tailwind + MDsveX) im **Lehrmodus**:
> – **kompletter Code ausführlich kommentiert** (TSDoc + Inline + Datei-Header),
> – **automatisches Theming**, **responsives Layout**,
> – **Content-Autodiscovery**, **Hashtags + Themen-Tags**,
> – **Suche** (Fuse.js) über Titel/Body/Tags/Topics,
> – **SEO/Sitemap/RSS/JSON-LD**,
> – **~10 Beispiel-Posts**.
> Stelle sicher, dass das Projekt **nach der Generierung sofort lauffähig** ist (`npm install && npm run dev`) und eine **umfangreiche README.md** + **/docs**-Tutorials erzeugt werden.

---

Wenn du möchtest, kann ich dir jetzt zusätzlich einen **Minimal-Seed** (kleines Startpaket mit kommentierten Kern-Dateien) direkt hier im Chat liefern.
