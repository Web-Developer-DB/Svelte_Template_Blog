/**
 * @file tests/unit/hashtag.test.ts
 * @description Unit-Tests für die Auto-Hashtag-Heuristik. Zeigt, wie Vitest
 * eingesetzt wird, um Edge-Cases (Stopwörter, Whitelist, Normalisierung) zu prüfen.
 */

import { describe, expect, it } from 'vitest';
import { extractHashtags, normalizeHashtag } from '$content/hashtag';

describe('normalizeHashtag', () => {
  it('entfernt Sonderzeichen und wandelt in Kleinbuchstaben um', () => {
    expect(normalizeHashtag('#Dark-Mode!')).toBe('dark-mode');
  });
});

describe('extractHashtags', () => {
  const text =
    'SvelteKit macht Routing und SSR leicht. Routing, Reaktivität und Performance werden zusammen gedacht.';

  it('filtert Stopwörter und liefert häufige Begriffe', () => {
    const hashtags = extractHashtags(text, { max: 3 });
    expect(hashtags).toContain('routing');
    expect(hashtags).toContain('performance');
    expect(hashtags).not.toContain('und');
  });

  it('berücksichtigt Whitelist-Einträge trotz geringer Häufigkeit', () => {
    const hashtags = extractHashtags('UI UX Research', {
      whitelist: ['ux'],
      minOccurrences: 2
    });
    expect(hashtags).toContain('ux');
  });

  it('respektiert die maximale Anzahl', () => {
    const hashtags = extractHashtags(text, { max: 2 });
    expect(hashtags).toHaveLength(2);
  });
});
