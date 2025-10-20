<!--
  @file src/routes/search/+page.svelte
  @description Clientseitige Suche über alle Posts mittels Fuse.js. Unterstützt
  Titel, Auszug, Volltext, Hashtags und Topics. Die Suche reagiert auf URL-
  Parameter (`?query=`) und aktualisiert diese bei Benutzereingaben (mit
  `replaceState`, `keepfocus`, `noscroll`), sodass Links zu Suchergebnissen
  teilbar sind, ohne den Fokus zu verlieren.
-->
<script lang="ts">
  import Fuse from 'fuse.js';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import SearchBar from '$components/SearchBar.svelte';
  import SearchResults from '$components/SearchResults.svelte';
  import type { BlogPost, SearchDocument } from '$content/index';

  export let data;

  const fuse = new Fuse<SearchDocument>(data.searchDocuments, {
    includeScore: true,
    threshold: 0.35,
    keys: ['title', 'excerpt', 'content', 'tags', 'topics', 'autoHashtags']
  });

  let query = '';
  let results: BlogPost[] = data.posts;

  const computeResults = (term: string) => {
    if (!term) {
      return data.posts;
    }
    const fuseResults = fuse.search(term);
    const slugs = new Set(fuseResults.map((item) => item.item.slug));
    return data.posts.filter((post: BlogPost) => slugs.has(post.slug));
  };

  const runSearch = (term: string, updateUrl = true) => {
    query = term;
    results = computeResults(term);

    if (updateUrl && typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (term) {
        url.searchParams.set('query', term);
      } else {
        url.searchParams.delete('query');
      }
      goto(url.toString(), { replaceState: true, keepfocus: true, noscroll: true });
    }
  };

  $: if (!import.meta.env.SSR) {
    const urlQuery = $page.url.searchParams.get('query') ?? '';
    if (urlQuery !== query) {
      runSearch(urlQuery, false);
    }
  }
</script>

<section class="space-y-10">
  <header class="space-y-3">
    <h1 class="text-3xl font-bold text-emphasis">Suche & Exploration</h1>
    <p class="text-sm text-emphasis/80">
      Durchsuche Titel, Auszüge, Volltext sowie Hashtags und Themen. Die Suche ist fuzzy –
      Tippfehler werden toleriert, relevante Ergebnisse erscheinen zuerst.
    </p>
  </header>

  <SearchBar bind:value={query} on:search={(event) => runSearch(event.detail)} />

  <SearchResults {results} {query} />
</section>
