<!--
  @file src/lib/components/SearchResults.svelte
  @description Präsentiert Suchergebnisse in einer Listendarstellung. Nutzt
  `ContentCard`, um konsistente Gestaltung sicherzustellen. Bei fehlenden Treffern
  wird ein freundlicher Hinweis angezeigt.
-->
<script lang="ts">
  import ContentCard from './ContentCard.svelte';
  import type { BlogPost } from '$content/index';

  export let results: BlogPost[] = [];
  export let query = '';
</script>

{#if results.length === 0}
  <p class="rounded-lg border border-dashed border-muted/40 bg-surface/60 p-6 text-sm text-muted/80">
    {#if query.trim().length === 0}
      Tippe einen Suchbegriff ein, um Ergebnisse zu sehen.
    {:else}
      Keine Treffer für „{query}“. Versuche andere Schlüsselwörter oder kombiniere Hashtags.
    {/if}
  </p>
{:else}
  <div class="grid gap-6 md:grid-cols-2">
    {#each results as post (post.slug)}
      <ContentCard {post} />
    {/each}
  </div>
{/if}
