/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily:{
        vt323: ["VT323", "monospace"],
        shareTech: ["Share Tech Mono", "monospace"]
      },
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        'panel-sub': 'var(--panel-sub)',
        border: 'var(--border)',
        'border-soft': 'var(--border-soft)',
        'orange-1': 'var(--orange-1)',
        'orange-2': 'var(--orange-2)',
        'orange-3': 'var(--orange-3)',
        'orange-4': 'var(--orange-4)',
        'text-dim': 'var(--text-dim)',
        'text-faint': 'var(--text-faint)',
      },
      boxShadow: {
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
}