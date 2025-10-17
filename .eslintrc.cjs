/**
 * @file .eslintrc.cjs
 * @description ESLint-Konfiguration für das Projekt, abgestimmt auf Svelte,
 * TypeScript und Prettier. Ziel ist, dass Junior-Entwickler saubere
 * Rückmeldungen zu typischen Fehlerquellen erhalten.
 */

module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  ignorePatterns: ['.svelte-kit', 'build', 'node_modules']
};
