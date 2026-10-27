export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#0f3d2e',
        pine:   '#16523d',
        emerald:'#10b981',
        sage:   '#6b9e82',
        lime:   '#a3e635',
        beige:  '#f7f2e8',
        sand:   '#ece4d3',
        // dark mode palette
        dark: {
          bg:    '#0d1a14',
          card:  '#162318',
          muted: '#1e3028',
          border:'#2a4035',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f3d2e 0%, #16523d 50%, #1a6349 100%)',
      },
      animation: {
        'rise':      'rise .45s ease both',
        'spin-slow': 'spin-slow 40s linear infinite',
        'float':     'float 6s ease-in-out infinite',
        'pulse-slow':'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        rise:      { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'none' } },
        'spin-slow':{ to: { transform: 'rotate(360deg)' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
    },
  },
  plugins: [],
}
