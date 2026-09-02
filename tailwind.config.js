/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geologica"', '"Inter"', '"Lexend"', 'system-ui', 'sans-serif'],
        display: ['"Geologica"', '"Montserrat"', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        'panel-sub': 'var(--panel-sub)',
        'panel-card': 'var(--panel-card)',
        border: 'var(--border)',
        'border-soft': 'var(--border-soft)',
        text: 'var(--text)',
        'text-dim': 'var(--text-dim)',
        'text-faint': 'var(--text-faint)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
}
