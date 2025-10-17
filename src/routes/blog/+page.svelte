<!--
  @file src/routes/blog/+page.svelte
  @description Übersicht aller Blogposts mit Filtermöglichkeiten für Hashtags
  und Topics. Die Filterung findet clientseitig statt; die Daten stammen aus dem
  Layout-Load. Demonstriert Zustandshandling in Svelte-Komponenten sowie den
  Einsatz wiederverwendbarer UI-Komponenten (`TagChips`).
-->
<script lang="ts">
  import ContentCard from '$components/ContentCard.svelte';
  import TagChips from '$components/TagChips.svelte';
  import type { BlogPost } from '$content/index';

  export let data;

  let selectedTags: string[] = [];
  let selectedTopics: string[] = [];

  const toggleTag = (tag: string) => {
    selectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((item) => item !== tag)
      : [...selectedTags, tag];
  };

  const toggleTopic = (topic: string) => {
    selectedTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((item) => item !== topic)
      : [...selectedTopics, topic];
  };

  $: filteredPosts = data.posts.filter((post: BlogPost) => {
    const tagMatch =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => [...post.tags, ...post.autoHashtags].includes(tag));

    const topicMatch =
      selectedTopics.length === 0 || selectedTopics.every((topic) => post.topics.includes(topic));

    return tagMatch && topicMatch;
  });
</script>

<section class="space-y-12">
  <header class="space-y-4">
    <h1 class="text-3xl font-bold text-emphasis">Alle Beiträge</h1>
    <p class="text-sm text-emphasis/80">
      Kombiniere Hashtags und Themen, um die Ergebnisliste einzugrenzen. Die Filterung erfolgt
      vollständig clientseitig, sodass keine zusätzlichen Serveranfragen nötig sind.
    </p>
  </header>

  <section class="space-y-6 rounded-2xl border border-muted/20 bg-surface/70 p-6">
    <div>
      <h2 class="text-sm font-semibold uppercase tracking-wide text-muted/70">Hashtags</h2>
      <TagChips
        items={data.hashtags}
        active={selectedTags}
        ariaLabel="Hashtag-Filter"
        on:toggle={(event) => toggleTag(event.detail)}
      />
    </div>
    <div>
      <h2 class="text-sm font-semibold uppercase tracking-wide text-muted/70">Themen</h2>
      <TagChips
        items={data.topics}
        active={selectedTopics}
        ariaLabel="Themen-Filter"
        on:toggle={(event) => toggleTopic(event.detail)}
      />
    </div>
    <div class="flex items-center justify-between text-xs text-muted/80">
      <span>Aktive Hashtags: {selectedTags.length || '–'}</span>
      <span>Aktive Themen: {selectedTopics.length || '–'}</span>
      <span>Treffer: {filteredPosts.length}</span>
    </div>
  </section>

  <div class="grid gap-6 md:grid-cols-2">
    {#each filteredPosts as post (post.slug)}
      <ContentCard {post} />
    {/each}
  </div>
</section>
