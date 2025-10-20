<!--
  @file src/routes/tags/+page.svelte
  @description Übersicht aller Hashtags und Topics inklusive Anzahl der zugehörigen
  Beiträge. Dient als Nachschlagewerk und Einstiegspunkt, um Themengebiete zu
  entdecken. Die Berechnungen erfolgen auf Basis der globalen Layout-Daten.
-->
<script lang="ts">
  import type { BlogPost } from '$content/index';

  export let data;

  const tagMap = new Map<string, BlogPost[]>();
  const topicMap = new Map<string, BlogPost[]>();

  for (const post of data.posts as BlogPost[]) {
    const allTags = [...new Set([...post.tags, ...post.autoHashtags])];
    for (const tag of allTags) {
      const collection = tagMap.get(tag) ?? [];
      collection.push(post);
      tagMap.set(tag, collection);
    }

    for (const topic of post.topics) {
      const collection = topicMap.get(topic) ?? [];
      collection.push(post);
      topicMap.set(topic, collection);
    }
  }

  const sortedTags = Array.from(tagMap.entries()).sort((a, b) => b[1].length - a[1].length);
  const sortedTopics = Array.from(topicMap.entries()).sort((a, b) => b[1].length - a[1].length);
</script>

<section class="space-y-12">
  <header>
    <h1 class="text-3xl font-bold text-emphasis">Hashtags & Themen</h1>
    <p class="mt-3 text-sm text-emphasis/80">
      Hier findest du alle automatisch und manuell gepflegten Hashtags sowie Themen-Tags.
      Klicke auf einen Eintrag, um die passenden Beiträge zu öffnen.
    </p>
  </header>

  <section class="space-y-6">
    <h2 class="text-2xl font-semibold text-emphasis">Hashtags</h2>
    <div class="grid gap-4 md:grid-cols-2">
      {#each sortedTags as [tag, posts]}
        <a
          href={`/search?query=${encodeURIComponent(`#${tag}`)}`}
          class="rounded-xl border border-muted/30 bg-surface/70 px-4 py-3 transition hover:border-accent hover:bg-accent/5"
        >
          <div class="flex items-center justify-between">
            <span class="font-semibold text-accent">#{tag}</span>
            <span class="text-xs text-muted/70">{posts.length} Beiträge</span>
          </div>
          <p class="mt-2 text-xs text-muted/80">
            {posts
              .slice(0, 2)
              .map((post) => post.title)
              .join(' • ')}
          </p>
        </a>
      {/each}
    </div>
  </section>

  <section class="space-y-6">
    <h2 class="text-2xl font-semibold text-emphasis">Themen</h2>
    <div class="grid gap-4 md:grid-cols-2">
      {#each sortedTopics as [topic, posts]}
        <a
          href={`/search?query=${encodeURIComponent(topic)}`}
          class="rounded-xl border border-muted/30 bg-surface/70 px-4 py-3 transition hover:border-accent hover:bg-accent/5"
        >
          <div class="flex items-center justify-between">
            <span class="font-semibold text-emphasis">{topic}</span>
            <span class="text-xs text-muted/70">{posts.length} Beiträge</span>
          </div>
          <p class="mt-2 text-xs text-muted/80">
            {posts
              .slice(0, 2)
              .map((post) => post.title)
              .join(' • ')}
          </p>
        </a>
      {/each}
    </div>
  </section>
</section>
