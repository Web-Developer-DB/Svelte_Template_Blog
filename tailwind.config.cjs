/**
 * @file tailwind.config.cjs
 * @description TailwindCSS-Konfiguration. Aktiviert Container-Queries, erweitert
 * die Farbpalette via CSS-Variablen und legt die Breakpoints sowie Typografie-
 * Einstellungen für das responsive Blog-Layout fest.
 */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{html,js,svelte,ts,md,svx}', './content/**/*.{md,svx,svelte}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem'
      }
    },
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        mono: ['FiraCode', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        emphasis: 'rgb(var(--color-emphasis) / <alpha-value>)'
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(var(--color-emphasis) / 0.95)',
            maxWidth: '70ch',
            a: {
              color: 'rgb(var(--color-accent) / 1)',
              '&:hover': {
                color: 'rgb(var(--color-accent) / 0.8)'
              }
            },
            hr: {
              borderColor: 'rgb(var(--color-muted) / 0.4)'
            },
            code: {
              backgroundColor: 'rgb(var(--color-muted) / 0.25)',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.375rem'
            }
          }
        }
      },
      screens: {
        '3xl': '1920px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/container-queries')]
};
