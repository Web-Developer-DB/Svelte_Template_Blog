<!--
  @file src/routes/docs/+page.svelte
  @description Übersicht aller Doc-Kapitel mit Links zu den Detailseiten.
-->
<script lang="ts">
  import Icon from '$components/icons/Icon.svelte';

  export let data;
</script>

<svelte:head>
  <title>Dokumentation • Lernpfad</title>
</svelte:head>

<section class="mx-auto max-w-4xl space-y-8 py-12">
  <header class="space-y-3 text-center">
    <p class="text-xs uppercase tracking-wide text-muted/70">Lernpfad</p>
    <h1 class="text-3xl font-bold text-emphasis">Dokumentation & Guides</h1>
    <p class="text-sm text-emphasis/80">
      Folge den Kapiteln in der empfohlenen Reihenfolge, um das Template Schritt für Schritt zu erkunden.
    </p>
  </header>

  <ol class="space-y-4">
    {#each data.docs as doc, index}
      <li class="anim-fade-in-up rounded-2xl border border-muted/30 bg-surface/80 px-6 py-5 shadow-sm anim-soft-hover">
        <a class="flex items-start gap-4" href={`/docs/${doc.slug}`}>
          <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Icon name="articles" size={18} />
          </span>
          <span class="space-y-1">
            <strong class="block text-base font-semibold text-emphasis">
              {index + 1}. {doc.title}
            </strong>
            {#if doc.excerpt}
              <span class="block text-sm text-muted/80">{doc.excerpt}</span>
            {/if}
          </span>
        </a>
      </li>
    {/each}
  </ol>
</section>
