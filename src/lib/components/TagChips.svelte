<!--
  @file src/lib/components/TagChips.svelte
  @description Wiederverwendbare Komponente für klickbare Hashtag-Chips. Sie dient
  als Filter-UI im Blog- und Tag-Übersichtsbereich. Die Komponente ist bewusst
  generisch gehalten (arbeitet rein mit Strings), damit sie auch für Topics genutzt
  werden kann. Events werden via `createEventDispatcher` emittiert.
-->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  /**
   * @description Props: `items` sind die darzustellenden Tags, `active` enthält
   * die aktuell ausgewählten Werte. `ariaLabel` ermöglicht der aufrufenden
   * Komponente eine individuelle Beschreibung für Screenreader.
   */
  export let items: string[] = [];
  export let active: string[] = [];
  export let ariaLabel = 'Hashtag-Filter';

  const dispatch = createEventDispatcher<{ toggle: string }>();

  /**
   * @description Prüft, ob ein Tag aktiv ist. Wir kapseln die Logik, um das JSX
   * an der Untergrenze zu halten und zentrale Änderungen zu ermöglichen.
   */
  const isActive = (item: string) => active.includes(item);

  /**
   * @description Toggle-Handler, der nach außen ein `toggle`-Event mit dem Tag-Namen
   * schickt. Die Elternkomponente entscheidet, ob der Tag hinzugefügt oder entfernt wird.
   */
  const handleToggle = (item: string) => {
    dispatch('toggle', item);
  };
</script>

<!--
  ── Abschnitt: UI-Aufbau
  Die Buttons sind semantisch `<button>`-Elemente innerhalb eines `nav`, damit
  Screenreader erkennen, dass es sich um eine interaktive Filterliste handelt.
-->
<nav aria-label={ariaLabel} class="flex flex-wrap gap-2">
  {#each items as item (item)}
    <button
      type="button"
      class="focus-ring rounded-full border border-muted/40 px-3 py-1 text-xs font-semibold transition hover:border-accent"
      class:border-accent={isActive(item)}
      class:bg-accent/10={isActive(item)}
      class:text-accent={isActive(item)}
      on:click={() => handleToggle(item)}
    >
      #{item}
    </button>
  {/each}
</nav>
