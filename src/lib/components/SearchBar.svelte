<!--
  @file src/lib/components/SearchBar.svelte
  @description Reaktive Suchleiste mit Debounce. Sie emittiert das `search`-Event,
  sobald der Nutzer tippt (250 ms Verzögerung). Enthält Hinweise auf A11y, z. B.
  `aria-describedby` für Screenreader.
-->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { onDestroy } from 'svelte';

  export let value = '';
  export let placeholder = 'Suche nach Titel, Hashtags oder Topics';
  export let debounce = 250;

  const dispatch = createEventDispatcher<{ search: string }>();

  let timer: ReturnType<typeof setTimeout> | null = null;

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const next = target.value;

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => dispatch('search', next), debounce);
  };

  onDestroy(() => {
    if (timer) clearTimeout(timer);
  });
</script>

<div class="flex flex-col gap-2">
  <label class="text-sm font-semibold text-emphasis" for="search-input">
    Volltextsuche
  </label>
  <input
    id="search-input"
    class="focus-ring w-full rounded-lg border border-muted/40 bg-surface/70 px-4 py-2 text-sm transition hover:border-accent focus:border-accent"
    type="search"
    bind:value
    placeholder={placeholder}
    autocomplete="off"
    spellcheck="false"
    aria-describedby="search-hint"
    on:input={handleInput}
  />
  <p id="search-hint" class="text-xs text-muted/80">
    Suchst du nach mehreren Hashtags, trenne sie mit Komma. Groß- und Kleinschreibung
    spielt keine Rolle.
  </p>
</div>
