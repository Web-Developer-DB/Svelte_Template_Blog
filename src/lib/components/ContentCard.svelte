<!--
  @file src/lib/components/ContentCard.svelte
  @description Präsentiert einen Blogpost als Karte innerhalb von Listenansichten
  (Startseite, /blog, /search). Neben Titel, Datum und Auszug werden Topics als
  Badges und Hashtags als Inline-Liste dargestellt. Die Komponente ist stark
  kommentiert, um Layout- und A11y-Entscheidungen nachvollziehbar zu machen.
-->
<script lang="ts">
  import dayjs from 'dayjs';
  import type { BlogPost } from '$content/index';

  /**
   * @description Erlaubt dem Aufrufer, die Darstellung des Datums zu steuern. Standard
   * ist deutschsprachiges Datum im Format `DD.MM.YYYY`.
   */
  export let post: BlogPost;
  export let dateFormat = 'DD.MM.YYYY';
</script>

<article
  class="group flex flex-col gap-4 rounded-xl border border-muted/30 bg-surface/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
  data-testid="content-card"
>
  <!-- Titel + Link -->
  <header>
    <a
      class="focus-ring block text-2xl font-semibold text-emphasis transition group-hover:text-accent"
      href={`/blog/${post.slug}`}
    >
      {post.title}
    </a>
    <p class="mt-1 text-sm text-muted/80">
      {dayjs(post.date).format(dateFormat)}
    </p>
  </header>

  <!-- Topics als Badges -->
  {#if post.topics.length}
    <ul class="flex flex-wrap gap-2">
      {#each post.topics as topic}
        <li class="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {topic}
        </li>
      {/each}
    </ul>
  {/if}

  <!-- Auszug -->
  <p class="line-clamp-3 text-base text-emphasis/90">
    {post.excerpt}
  </p>

  <!-- Hashtags -->
  <footer class="flex flex-wrap gap-2 text-xs text-muted/90">
    {#each [...new Set([...post.tags, ...post.autoHashtags])] as tag}
      <span>#{tag}</span>
    {/each}
  </footer>
</article>
