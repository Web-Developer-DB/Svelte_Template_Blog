<!--
  @file src/routes/+layout.svelte
  @description Globale Layout-Komponente. Sie sorgt für die Grundstruktur des
  gesamten Blogs: Skip-Link für A11y, Desktop-Sidebar, Mobile-Navigation sowie
  das responsive Grid, in das die Seiten gerendert werden. Zusätzlich injizieren
  wir hier Default-Metadaten in den Head-Bereich und liefern JSON-LD für die
  Darstellung als `Blog` in Suchmaschinen.
-->
<script lang="ts">
  import DesktopNav from '$components/DesktopNav.svelte';
  import MobileNav from '$components/MobileNav.svelte';
  import '../styles/globals.css';

  export let data;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: data.site.title,
    description: data.site.description,
    url: data.site.url,
    inLanguage: 'de-DE'
  };
</script>

<svelte:head>
  <title>{data.seo?.title ?? data.site.title}</title>
  <meta name="description" content={data.seo?.description ?? data.site.description} />
  <meta property="og:title" content={data.seo?.title ?? data.site.title} />
  <meta property="og:description" content={data.seo?.description ?? data.site.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={data.site.url} />
  <meta property="og:image" content={data.seo?.ogImage ?? '/images/social-card.svg'} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.seo?.title ?? data.site.title} />
  <meta name="twitter:description" content={data.seo?.description ?? data.site.description} />
  <script type="application/ld+json">
    {JSON.stringify(jsonLd)}
  </script>
</svelte:head>

<!-- Skip-Link verbessert Tastatur-Navigation -->
<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus-ring focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2"
>
  Zum Inhalt springen
</a>

<div class="lg:grid lg:grid-cols-[320px,1fr]">
  <DesktopNav totalPosts={data.posts.length} />

  <main id="main-content" class="min-h-screen bg-surface/95">
    <div class="mx-auto w-full max-w-5xl px-6 py-12">
      <slot />
    </div>
    <footer class="mt-16 border-t border-muted/20 bg-surface/80 py-8 text-center text-xs text-muted/70">
      © {new Date().getFullYear()} Lernblog. Content-Lizenz: CC BY 4.0.
    </footer>
  </main>
</div>

<MobileNav />
