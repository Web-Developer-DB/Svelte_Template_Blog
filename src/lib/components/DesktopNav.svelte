<!--
  @file src/lib/components/DesktopNav.svelte
  @description Desktop-Navigation als Sidebar. Sie zeigt Projektinformationen,
  Navigationslinks und den Theme-Toggle. Die Sidebar nutzt CSS-Grid, damit sie
  im Layout als feste Spalte fungiert.
-->
<script lang="ts">
  import { page } from '$app/stores';
  import ThemeToggle from './ThemeToggle.svelte';

  interface NavItem {
    label: string;
    description: string;
    href: string;
  }

  export let totalPosts = 0;

  const items: NavItem[] = [
    {
      label: 'Start',
      description: 'Überblick & neueste Artikel',
      href: '/'
    },
    {
      label: 'Blog',
      description: 'Alle Beiträge, Filter & Sortierung',
      href: '/blog'
    },
    {
      label: 'Tags',
      description: 'Hashtags & Themen auf einen Blick',
      href: '/tags'
    },
    {
      label: 'Suche',
      description: 'Volltext-Recherche & Vorschläge',
      href: '/search'
    }
  ];

  const isActive = (href: string, path: string) =>
    path === href || path.startsWith(`${href}/`);
</script>

<aside
  class="hidden h-full min-h-screen flex-col justify-between border-r border-muted/25 bg-surface/90 px-8 py-10 text-sm text-emphasis/90 lg:flex"
  aria-label="Hauptnavigation Desktop"
>
  <div class="space-y-8">
    <header>
      <p class="text-xs uppercase tracking-wide text-muted/70">SvelteKit Lernblog</p>
      <h1 class="mt-2 text-2xl font-bold text-emphasis">Modernes Web Development</h1>
      <p class="mt-3 leading-relaxed text-emphasis/80">
        Lehrreiches Starter-Template für Junior-Entwickler:innen mit Fokus auf Svelte,
        Tailwind, Content-Automatismen und barrierearme UI.
      </p>
      <p class="mt-4 text-xs uppercase tracking-wide text-muted/60">
        Beiträge insgesamt: {totalPosts}
      </p>
    </header>

    <nav class="space-y-4" aria-label="Sektionen">
      {#each items as item (item.href)}
        <a
          href={item.href}
          class="block rounded-lg border border-transparent px-4 py-3 transition hover:border-accent/60 hover:bg-accent/5"
          class:border-accent={isActive(item.href, $page.url.pathname)}
          class:text-accent={isActive(item.href, $page.url.pathname)}
        >
          <h2 class="text-base font-semibold">{item.label}</h2>
          <p class="text-xs text-muted/80">{item.description}</p>
        </a>
      {/each}
    </nav>
  </div>

  <div class="flex items-center justify-between border-t border-muted/20 pt-6">
    <div>
      <p class="text-xs uppercase tracking-wide text-muted/70">Theme</p>
      <p class="text-sm text-emphasis/80">System, Hell, Dunkel</p>
    </div>
    <ThemeToggle />
  </div>
</aside>
