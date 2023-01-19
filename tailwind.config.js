/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        goup: 'goup .7s ease-out forwards',
        godown: 'godown .7s ease-out forwards',
      },
      keyframes: {
        goup: {
          '100%': { top: '85%' },
        },
        godown: {
          '100%': { top: '100%' },
        }
      }
    },
  },
  plugins: [],
}