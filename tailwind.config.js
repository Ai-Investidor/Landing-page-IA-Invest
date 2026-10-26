/** @type {import('tailwindcss').Config} */
// Versão final — tokens da identidade AI Invest (papel, navy, verde de ação, dourado só em dado).
// `screen-*` é a paleta escura da plataforma, usada só dentro dos mockups.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f9f8f6',
        'paper-2': '#f0ede6',
        navy: '#0f1b2d',
        'navy-soft': '#3a4552',
        'navy-faint': '#616c78',
        emerald: '#0d5c3f',
        'emerald-light': '#6fbf9a',
        'emerald-soft': 'rgba(13,92,63,.10)',
        gold: '#b8873a',
        'gold-ink': '#8a6329',
        'gold-soft': 'rgba(184,135,58,.12)',
        line: 'rgba(15,27,45,.12)',
        'line-strong': 'rgba(15,27,45,.22)',
        screen: {
          DEFAULT: '#0b1522',
          side: '#0d1827',
          card: '#0f1c2c',
          raise: '#14233a',
          line: 'rgba(241,240,236,.09)',
          text: '#f1f0ec',
          muted: 'rgba(241,240,236,.64)',
          faint: 'rgba(241,240,236,.44)',
        },
      },
      fontFamily: {
        display: ["'Libre Caslon Display'", 'Georgia', 'serif'],
        body: ["'Public Sans'", '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
        mono: ["'JetBrains Mono'", 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        field: '2px',
        card: '3px',
      },
      boxShadow: {
        paper: '0 1px 2px rgba(15,27,45,.04), 0 12px 28px -16px rgba(15,27,45,.14)',
      },
      maxWidth: {
        container: '1180px',
        measure: '68ch',
      },
    },
  },
  plugins: [],
};
