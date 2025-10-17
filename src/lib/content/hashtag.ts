/**
 * @file src/lib/content/hashtag.ts
 * @description Bietet Hilfsfunktionen, um aus redaktionellen Inhalten automatisch
 * Hashtags abzuleiten. Die Implementierung dient als Lehrbeispiel für einfache
 * NLP-Heuristiken: Tokenisierung, Normalisierung, Stopwortfilter, Frequenzanalyse.
 * Die Funktionen werden im Content-Indexer verwendet, um aus Beiträgen zusätzliche
 * Hashtags zu generieren, die das manuelle Tagging ergänzen.
 */

import stopwordsRaw from '$content/stopwords.de.txt?raw';

/**
 * @description Konvertiert die Stopwortliste in ein Set für O(1)-Lookups.
 * Wir normalisieren alle Einträge auf Kleinbuchstaben, um Vergleichsfehler
 * bei gemischten Schreibweisen zu vermeiden.
 */
const STOPWORDS = new Set(
  stopwordsRaw
    .split('\n')
    .map((word) => word.trim().toLowerCase())
    .filter(Boolean)
);

/**
 * @description Regulärer Ausdruck, der alle Zeichen entfernt, die nicht zu Buchstaben,
 * Zahlen oder Bindestrichen gehören. Dadurch bleiben typische Mehr-Wort-Varianten wie
 * "dark-mode" erhalten, während Satzzeichen herausfallen.
 */
const TOKEN_SANITIZER = /[^a-z0-9äöüß\-]/gi;

/**
 * @description Minimal-Länge für Tokens, damit sehr kurze Wörter (z. B. "zu", "im")
 * nicht als Hashtags landen, auch wenn sie nicht in der Stopwortliste stehen.
 */
const MIN_TOKEN_LENGTH = 3;

/**
 * @typedef {object} HashtagOptions
 * @property {number} [max=5] Maximale Anzahl an Hashtags, die extrahiert werden sollen.
 * @property {number} [minOccurrences=2] Minimale Häufigkeit eines Tokens, damit es berücksichtigt wird.
 * @property {string[]} [whitelist] Liste von Begriffen, die immer erlaubt sind (nützlich für Produktnamen).
 */
export interface HashtagOptions {
  max?: number;
  minOccurrences?: number;
  whitelist?: string[];
}

/**
 * Normalisiert einen potenziellen Hashtag.
 * @param term Ursprüngliches Token aus dem Text.
 * @returns Bereinigte Version ohne führende Hash-Zeichen.
 */
export function normalizeHashtag(term: string): string {
  return term.replace(/^#+/, '').replace(TOKEN_SANITIZER, '').toLowerCase();
}

/**
 * Erzeugt Auto-Hashtags aus einem Text.
 * Warum: Junior-freundliche Einführung in einfache NLP-Heuristiken (Häufigkeit, Stopwörter).
 * @param text Volltext (Markdown bereits bereinigt)
 * @param opts Zusatzoptionen, u. a. maximale Anzahl Hashtags.
 * @returns Liste von Strings ohne '#'
 * @example
 *   extractHashtags("Svelte ist schnell und reaktiv", { max: 3 })
 */
export function extractHashtags(text: string, opts: HashtagOptions = {}): string[] {
  const { max = 5, minOccurrences = 2, whitelist = [] } = opts;

  // ── Abschnitt: Tokenisierung und Vorfilter
  const tokens = text
    .toLowerCase()
    .split(/\s+/)
    .map((token) => normalizeHashtag(token))
    .filter(
      (token) =>
        token.length >= MIN_TOKEN_LENGTH &&
        (!STOPWORDS.has(token) || whitelist.includes(token))
    );

  // ── Abschnitt: Frequenzanalyse
  const counts = new Map<string, number>();
  for (const token of tokens) {
    counts.set(token, (counts.get(token) ?? 0) + 1);
  }

  // ── Abschnitt: Sortierung nach Häufigkeit und alphabetischer Tie-Break
  const sorted = Array.from(counts.entries())
    .filter(([token, occurrences]) => occurrences >= minOccurrences || whitelist.includes(token))
    .sort((a, b) => {
      if (b[1] === a[1]) return a[0].localeCompare(b[0], 'de');
      return b[1] - a[1];
    })
    .map(([token]) => token);

  // ── Abschnitt: Begrenzen auf max Hashtags + Whitelist sicherstellen
  const result = sorted.slice(0, max);
  for (const term of whitelist) {
    if (!result.includes(term)) {
      result.push(term);
    }
  }

  return result;
}
