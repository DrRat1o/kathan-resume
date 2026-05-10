/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#faf9f6',
          100: '#f5f3ef',
          200: '#e8e5e1',
          300: '#d6d2ca',
          400: '#ada79d',
          500: '#8c8676',
          600: '#6d685c',
          700: '#5c574e',
          800: '#3d3a34',
          900: '#211f1b',
          950: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}