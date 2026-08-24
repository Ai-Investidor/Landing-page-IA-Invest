/** @type {import('tailwindcss').Config} */
// Mundo "Research House Editorial" — redesign completo. O "Laudo de Exame" (papel clínico, verde
// #1f7a4d, carimbo circular) foi tratado como evidência/anti-referência, não preservado nem
// misturado. Ver o contrato de direção no <head> de index.html.
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
        'emerald-soft': 'rgba(13,92,63,.10)',
        gold: '#b8873a',
        'gold-ink': '#8a6329',
        'gold-soft': 'rgba(184,135,58,.12)',
        line: 'rgba(15,27,45,.12)',
        'line-strong': 'rgba(15,27,45,.22)',
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
      maxWidth: {
        container: '1180px',
        measure: '68ch',
      },
      spacing: {
        section: '112px',
        'section-sm': '72px',
      },
    },
  },
  plugins: [],
};
