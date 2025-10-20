<!--
  @file src/lib/components/icons/Icon.svelte
  @description Universelle Icon-Komponente mit einem kleinen Satz inline-SVGs.
  Die Icons sind bewusst leichtgewichtig gehalten (keine externe Abhängigkeit),
  damit sie offline funktionieren. Farben werden über `currentColor` gesteuert.
-->
<script lang="ts">
  export type IconName = 'home' | 'articles' | 'tags' | 'search' | 'sun-moon';

  export let name: IconName = 'home';
  export let size = 22;
  export let title: string | null = null;

  interface PathDef {
    d: string;
    filled?: boolean;
  }

  interface IconDef {
    viewBox?: string;
    paths: PathDef[];
  }

  const icons: Record<IconName, IconDef> = {
    home: {
      paths: [
        { d: 'M3 10.5 12 3l9 7.5', filled: false },
        { d: 'M5.5 10V19a1.5 1.5 0 0 0 1.5 1.5h3.5V15h3V20.5H17a1.5 1.5 0 0 0 1.5-1.5V10', filled: false }
      ]
    },
    articles: {
      paths: [
        { d: 'M7 4h8a2 2 0 0 1 2 2v12l-6-3-6 3V6a2 2 0 0 1 2-2z', filled: false },
        { d: 'M9 8h6', filled: false },
        { d: 'M9 12h4', filled: false }
      ]
    },
    tags: {
      paths: [
        { d: 'M4 6v6l8 8 8-8-6-6H4z', filled: false },
        { d: 'M9.5 8.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 9.5 8.5z', filled: false }
      ]
    },
    search: {
      paths: [
        { d: 'M11 5a6 6 0 1 1-4.243 10.243A6 6 0 0 1 11 5z', filled: false },
        { d: 'm15.5 15.5 4 4', filled: false }
      ]
    },
    'sun-moon': {
      paths: [
        { d: 'M12 7.5a4.5 4.5 0 1 0 4.5 4.5 4.5 4.5 0 0 0-4.5-4.5z', filled: false },
        { d: 'M12 3v1.5', filled: false },
        { d: 'M12 19.5V21', filled: false },
        { d: 'M4.5 12H3', filled: false },
        { d: 'M21 12h-1.5', filled: false },
        { d: 'm5.6 5.6 1.06 1.06', filled: false },
        { d: 'm17.34 17.34 1.06 1.06', filled: false },
        { d: 'm5.6 18.4 1.06-1.06', filled: false },
        { d: 'm17.34 6.66 1.06-1.06', filled: false }
      ]
    }
  };

  const icon = icons[name] ?? icons.home;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  {title}
  {size}
  viewBox={icon.viewBox ?? '0 0 24 24'}
  height={size}
  width={size}
  role={title ? 'img' : 'presentation'}
  aria-hidden={title ? 'false' : 'true'}
>
  {#if title}
    <title>{title}</title>
  {/if}
  {#each icon.paths as pathDef}
    <path
      d={pathDef.d}
      fill={pathDef.filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {/each}
</svg>
