<!--
  @file src/routes/blog/[slug]/+page.svelte
  @description Detailansicht eines Blogposts. Bindet die jeweils generierte
  Svelte-Komponente (`post.component`) ein, stellt Metainformationen (Datum,
  Hashtags, Topics) bereit und injiziert JSON-LD vom Typ `BlogPosting`.
-->
<script lang="ts">
  import dayjs from 'dayjs';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  const { post } = data;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'SvelteKit Coach'
    },
    keywords: [...post.tags, ...post.autoHashtags].join(', '),
    image: post.cover
  };

  onMount(() => {
    // Scrollt an den Anfang, wenn ein neuer Slug geladen wird (z. B. via Client-Side-Navigation).
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
</script>

<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify(jsonLd)}
  </script>
</svelte:head>

<article class="space-y-10">
  <header class="space-y-4">
    <p class="text-sm uppercase tracking-wide text-muted/70">
      {dayjs(post.date).format('DD.MM.YYYY')}
    </p>
    <h1 class="text-4xl font-bold text-emphasis">{post.title}</h1>
    {#if post.cover}
      <img
        src={post.cover}
        alt={`Coverbild für ${post.title}`}
        class="max-h-[420px] w-full rounded-3xl object-cover"
      />
    {/if}
    <div class="flex flex-wrap gap-3 text-xs">
      {#if post.topics.length}
        <span class="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">
          Themen: {post.topics.join(', ')}
        </span>
      {/if}
      {#each [...new Set([...post.tags, ...post.autoHashtags])] as tag}
        <a
          href={`/search?query=${encodeURIComponent(`#${tag}`)}`}
          class="rounded-full border border-muted/40 px-3 py-1 font-semibold text-muted/80 transition hover:border-accent hover:text-accent"
        >
          #{tag}
        </a>
      {/each}
    </div>
    <p class="text-base leading-relaxed text-emphasis/90">
      {post.excerpt}
    </p>
  </header>

  <section class="prose prose-slate lg:prose-lg">
    <svelte:component this={post.component} />
  </section>
</article>
