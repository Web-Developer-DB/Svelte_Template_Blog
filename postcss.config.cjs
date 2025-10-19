/**
 * @file postcss.config.cjs
 * @description Konfiguration für PostCSS, das als Zwischenschritt für TailwindCSS
 * eingesetzt wird. Ermöglicht, Tailwinds Direktiven wie `@tailwind base` zu verarbeiten.
 */

const plugins = {
  tailwindcss: {}
};

try {
  // eslint-disable-next-line global-require
  const autoprefixer = require('autoprefixer');
  plugins.autoprefixer = autoprefixer();
} catch (error) {
  // Optional dependency: Wenn nicht installiert, fahren wir ohne Autoprefixer fort.
  console.warn('ℹ️  Autoprefixer nicht gefunden – PostCSS läuft ohne dieses Plugin.');
}

module.exports = {
  plugins
};
