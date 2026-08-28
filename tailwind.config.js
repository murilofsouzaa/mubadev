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
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        zeyada: ['"Zeyada"', 'cursive'],
      },
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        'panel-sub': 'var(--panel-sub)',
        border: 'var(--border)',
        'border-soft': 'var(--border-soft)',
        text: 'var(--text)',
        'orange-1': 'var(--orange-1)',
        'orange-2': 'var(--orange-2)',
        'orange-3': 'var(--orange-3)',
        'orange-4': 'var(--orange-4)',
        'text-dim': 'var(--text-dim)',
        'text-faint': 'var(--text-faint)',
      },
      boxShadow: {
        'clean-card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'clean-hover': '0 20px 35px -4px rgba(0, 0, 0, 0.12), 0 10px 15px -3px rgba(0, 0, 0, 0.06)',
        'orange-glow': '0 0 25px rgba(255, 107, 0, 0.25)',
      },
    },
  },
  plugins: [],
}