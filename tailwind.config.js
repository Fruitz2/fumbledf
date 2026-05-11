/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        turf: '#0d6e2a',
        turfdark: '#084d1c',
        chalk: '#f5f1e3',
        ref: '#101010',
        espn: '#cc0000',
        bug: '#ffd400',
        scoreboard: '#0a0a0a',
        rust: '#a23b1f',
        beige: '#e8dfb8',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        ticker: ['"VT323"', 'monospace'],
        marker: ['"Permanent Marker"', 'cursive'],
        body: ['"DM Mono"', 'monospace'],
      },
      animation: {
        ticker: 'ticker 50s linear infinite',
        flash: 'flash 1.6s ease-in-out infinite',
        bob: 'bob 2.4s ease-in-out infinite',
        wobble: 'wobble 0.4s ease-in-out infinite',
        scanlines: 'scanlines 6s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flash: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.45' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        scanlines: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100px' },
        },
      },
    },
  },
  plugins: [],
}
