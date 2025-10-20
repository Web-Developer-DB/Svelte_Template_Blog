<!--
  @file src/routes/docs/[slug]/+page.svelte
  @description Rendert ein einzelnes Doc-Kapitel aus `/docs`. Die Markdown-Datei
  wird via mdsvex in eine Svelte-Komponente transformiert und hier als
  `<svelte:component>` eingebunden.
-->
<script lang="ts">
  export let data;

  const DocComponent = data.component;
</script>

<svelte:head>
  <title>{data.metadata.title} • Docs</title>
  {#if data.metadata.excerpt}
    <meta name="description" content={data.metadata.excerpt} />
  {/if}
</svelte:head>

<article class="prose prose-slate prose-invert:prose-slate prose-lg mx-auto max-w-3xl py-12">
  <svelte:component this={DocComponent} />
</article>
