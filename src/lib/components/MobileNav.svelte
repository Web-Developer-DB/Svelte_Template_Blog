<!--
  @file src/lib/components/MobileNav.svelte
  @description Navigationsleiste für mobile Screens. Wird am unteren Bildschirmrand
  als Fixed-Bar dargestellt und blendet auf größeren Breakpoints automatisch aus.
  Die Komponente illustriert, wie man Sveltes `$page`-Store nutzt, um aktive Links
  kenntlich zu machen.
-->
<script lang="ts">
  import { page } from '$app/stores';
  import ThemeToggle from './ThemeToggle.svelte';

  interface NavItem {
    label: string;
    href: string;
  }

  const items: NavItem[] = [
    { label: 'Start', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Tags', href: '/tags' },
    { label: 'Suche', href: '/search' }
  ];

  /**
   * @description Ermittelt, ob ein Link aktiv ist. Wir nutzen `startsWith`, damit
   * Subrouten (z. B. `/blog/foo`) weiterhin den Blog-Tab hervorheben.
   */
  const isActive = (href: string, path: string) =>
    path === href || path.startsWith(`${href}/`);
</script>

<nav
  class="sticky bottom-0 left-0 right-0 z-40 border-t border-muted/30 bg-surface/95/ backdrop-blur supports-[backdrop-filter]:bg-surface/80 lg:hidden"
  aria-label="Hauptnavigation Mobil"
>
  <ul class="flex items-center justify-around">
    {#each items as item}
      <li>
        <a
          href={item.href}
          class="flex flex-col items-center gap-1 px-4 py-3 text-xs font-semibold transition"
          class:text-accent={isActive(item.href, $page.url.pathname)}
        >
          {item.label}
        </a>
      </li>
    {/each}
    <li class="px-4">
      <ThemeToggle />
    </li>
  </ul>
</nav>
