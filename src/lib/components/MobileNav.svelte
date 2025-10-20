<!--
  @file src/lib/components/MobileNav.svelte
  @description Navigationsleiste für mobile Screens. Wird am unteren Bildschirmrand
  als Fixed-Bar dargestellt und blendet auf größeren Breakpoints automatisch aus.
  Sie nutzt ein konsistentes Icon-Set, hebt aktive Routen über `$page` hervor
  und stellt den Theme-Toggle als zusätzlichen Menüeintrag bereit.
-->
<script lang="ts">
  import { page } from '$app/stores';
  import ThemeToggle from './ThemeToggle.svelte';
  import Icon from './icons/Icon.svelte';
  import type { IconName } from './icons/Icon.svelte';

  interface NavItem {
    label: string;
    href: string;
    icon: IconName;
  }

  const items: NavItem[] = [
    { label: 'Start', href: '/', icon: 'home' },
    { label: 'Blog', href: '/blog', icon: 'articles' },
    { label: 'Tags', href: '/tags', icon: 'tags' },
    { label: 'Suche', href: '/search', icon: 'search' }
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
          class="group flex flex-col items-center gap-1 px-4 py-3 text-xs font-semibold transition"
          class:text-accent={isActive(item.href, $page.url.pathname)}
        >
          <span
            class="flex h-8 w-8 items-center justify-center rounded-full text-muted/80 transition group-hover:text-accent"
            class:text-accent={isActive(item.href, $page.url.pathname)}
          >
            <Icon name={item.icon} size={18} />
          </span>
          {item.label}
        </a>
      </li>
    {/each}
    <li class="px-4">
      <ThemeToggle />
    </li>
  </ul>
</nav>
