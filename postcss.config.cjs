/**
 * @file postcss.config.cjs
 * @description Konfiguration für PostCSS, das als Zwischenschritt für TailwindCSS
 * eingesetzt wird. Ermöglicht, Tailwinds Direktiven wie `@tailwind base` zu verarbeiten.
 */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
