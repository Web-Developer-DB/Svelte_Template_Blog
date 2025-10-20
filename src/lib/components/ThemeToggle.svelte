<!--
  @file src/lib/components/ThemeToggle.svelte
  @description UI-Komponente, die das automatische Theming steuert. Sie erkennt
  Systempräferenzen (Light/Dark, hoher Kontrast, reduzierte Bewegung), erlaubt
  manuelle Umschaltung und persistiert die Auswahl in `localStorage`.
  Außerdem wird das `<meta name="theme-color">`-Tag live aktualisiert, damit
  Browser-Chrome (z. B. auf Mobilgeräten) die korrekte Farbe anzeigen. Ein kleines
  Icon visualisiert den Status und rotiert dezent, solange keine Bewegungsreduktion
  angefragt ist.
-->
<script lang="ts">
  /**
   * ── Abschnitt: Imports & Typdefinitionen
   * Wir nutzen Sveltes `onMount` für DOM-Interaktionen und `writable`, um den
   * aktuellen Theme-Status reaktiv im UI zu halten.
   */
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import Icon from './icons/Icon.svelte';

  type Theme = 'light' | 'dark' | 'system';

  const STORAGE_KEY = 'svelte-template-theme';
  const theme = writable<Theme>('system');
  const themeOrder: Theme[] = ['system', 'light', 'dark'];

  /**
   * @description Mapping der Theme-Varianten zu den Meta-Farben. Werte als Hex,
   * damit sie in `<meta name="theme-color">` eingesetzt werden können.
   */
  const themeColors: Record<'light' | 'dark', string> = {
    light: '#f5f5fa',
    dark: '#0f172a'
  };

  /**
   * @description Liest `prefers-color-scheme` und gibt die entsprechende Theme-
   * Variante zurück. Wird bei System-Umschaltung und Initialisierung verwendet.
   */
  const getSystemTheme = (): Theme =>
    window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  /**
   * @description Aktualisiert das Datenattribut auf `<html>` und setzt die Meta-Farbe.
   * Bei `system` wird erneut in `prefers-color-scheme` reingehört.
   */
  const applyTheme = (value: Theme) => {
    const root = document.documentElement;
    const resolved = value === 'system' ? getSystemTheme() : value;

    root.dataset.theme = resolved;
    root.setAttribute('data-theme-source', value);

    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) {
      meta.content = themeColors[resolved === 'dark' ? 'dark' : 'light'];
    }
  };

  /**
   * @description Mapping von Theme → Label (damit UI-Text zentral gepflegt wird).
   */
  const themeLabel: Record<Theme, string> = {
    system: 'Theme: System',
    light: 'Theme: Hell',
    dark: 'Theme: Dunkel'
  };

  /**
   * @description Reagiert auf Kontrast-Präferenzen. Wir toggeln ein Datenattribut,
   * damit Tailwind per `[data-contrast="more"]` spezielles Styling aktivieren könnte.
   */
  const applyContrastPreference = () => {
    const contrast = window.matchMedia?.('(prefers-contrast: more)');
    document.documentElement.dataset.contrast = contrast?.matches ? 'more' : 'normal';
  };

  /**
   * @description Initialisiert das Theme aus `localStorage`, respektiert dabei aber
   * immer System-Defaults als Fallback. Wird ausschließlich auf dem Client ausgeführt.
   */
  onMount(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial = saved ?? 'system';
    theme.set(initial);
    applyTheme(initial);
    applyContrastPreference();

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const contrastMq = window.matchMedia('(prefers-contrast: more)');

    const handleScheme = () => applyTheme(saved ?? 'system');
    const handleContrast = () => applyContrastPreference();

    mq.addEventListener('change', handleScheme);
    contrastMq?.addEventListener('change', handleContrast);

    return () => {
      mq.removeEventListener('change', handleScheme);
      contrastMq?.removeEventListener('change', handleContrast);
    };
  });

  /**
   * @description Zyklischer Wechsel durch die Thememodi. Wird von der UI aufgerufen.
   */
  const rotateTheme = () => {
    theme.update((current) => {
      const index = themeOrder.indexOf(current);
      const next = themeOrder[(index + 1) % themeOrder.length];
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      return next;
    });
  };
</script>

<!--
  ── Abschnitt: UI & A11y
  Wir verwenden ein Button-Element mit ARIA-Attributen, damit Screenreader klar
  erkennen, dass hier das Theme gewechselt wird. Die Icon-Darstellung erfolgt via
  Tailwind-Utility-Klassen.
-->
<button
  class="focus-ring inline-flex items-center gap-2 rounded-full border border-muted/40 bg-surface/80 px-4 py-2 text-sm font-medium text-emphasis shadow-sm transition hover:border-accent hover:text-accent"
  type="button"
  aria-live="polite"
  aria-label={themeLabel[$theme]}
  title={themeLabel[$theme]}
  on:click={rotateTheme}
  data-theme-state={$theme}
>
  <span class="theme-toggle-icon relative flex h-5 w-5 items-center justify-center">
    <Icon name="sun-moon" size={18} />
  </span>
  <span>{$theme === 'system' ? 'System' : $theme === 'light' ? 'Hell' : 'Dunkel'}</span>
</button>
