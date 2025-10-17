<!--
  @file src/routes/blog/_postLayout.svelte
  @description MDsveX-Layout, das automatisch auf Markdown/MDX-Dateien angewandt wird.
  Es sorgt für konsistente Typografie (Tailwind `prose`) und fügt erläuternde Hinweise
  ein, damit Leser erkennen, dass es sich um generierten Lerncontent handelt.
-->
<script lang="ts">
  export let metadata;
</script>

<article class="prose prose-slate max-w-none lg:prose-lg">
  <slot />

  <footer class="mt-12 rounded-xl border border-dashed border-muted/30 bg-surface/70 px-6 py-4 text-sm text-muted/80">
    Dieser Beitrag ist Teil des kommentierten Lernblogs. Vertiefe das Thema in den Docs unter
    <a class="text-accent" href="/docs">/docs</a> oder erweitere <code>metadata</code> in <code>{metadata?.title}</code>.
  </footer>
</article>
