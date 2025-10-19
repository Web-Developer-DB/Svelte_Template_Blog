<!--
  @file src/routes/+page.svelte
  @description Landingpage des Blogs. Zeigt Highlight-Abschnitt mit Call-to-Action,
  die neuesten Beiträge sowie einen kurzen Lernpfad-Teaser. Nutzt ausschließlich
  Daten aus dem Layout-Load (Posts), um SSR simpel zu halten.
-->
<script lang="ts">
  import ContentCard from '$components/ContentCard.svelte';

  export let data;

  const latest = data.posts.slice(0, 3);
</script>

<section class="space-y-12">
  <header class="rounded-3xl border border-muted/20 bg-accent/10 px-8 py-12">
    <p class="text-sm uppercase tracking-wide text-accent/80">Willkommen im Lernmodus</p>
    <h2 class="mt-4 text-4xl font-bold text-emphasis">SvelteKit verstehen, nicht nur benutzen</h2>
    <p class="mt-4 max-w-2xl text-lg leading-relaxed text-emphasis/90">
      Dieses Template erklärt jeden Schritt ausführlich: Content-Autodiscovery, Hashtag-Generierung,
      Suche mit Fuse.js, responsives Tailwind-Layout sowie Accessibility-Checks. Perfekt, um als
      Junior-Entwickler:in praxisnah zu lernen.
    </p>
    <div class="mt-6 flex flex-wrap gap-3">
      <a
        class="focus-ring inline-flex items-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-surface shadow-lg transition hover:bg-accent/80"
        href="/blog"
      >
        Zu allen Artikeln
      </a>
      <a
        class="focus-ring inline-flex items-center rounded-full border border-accent px-5 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10"
        href="/docs/01-uebersicht"
      >
        Lernpfad öffnen
      </a>
    </div>
  </header>

  <section>
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-semibold text-emphasis">Neueste Beiträge</h3>
      <a class="text-sm font-semibold text-accent" href="/blog">Alle ansehen →</a>
    </div>
    <div class="mt-6 grid gap-6 md:grid-cols-3">
      {#each latest as post (post.slug)}
        <ContentCard {post} />
      {/each}
    </div>
  </section>

  <section class="rounded-2xl border border-dashed border-muted/40 bg-surface/80 p-8">
    <h3 class="text-xl font-semibold text-emphasis">Lernpfad in drei Etappen</h3>
    <ol class="mt-4 space-y-3 text-sm text-emphasis/90">
      <li><strong>1. Struktur verstehen:</strong> Starte mit den Docs unter <code>/docs</code>, um Builds, Layout und Content-Indexierung kennenzulernen.</li>
      <li><strong>2. UI erweitern:</strong> Passe Komponenten in <code>src/lib/components</code> an, experimentiere mit Container-Queries und Theme-Varianten.</li>
      <li><strong>3. Automationen ausbauen:</strong> Ergänze eigene Checks (z. B. axe/pa11y) und feile an der Hashtag-Heuristik für deinen Use-Case.</li>
    </ol>
  </section>
</section>
