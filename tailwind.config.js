/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          'from': { height: '0' },
          'to': { height: '100%' },
        }
      },
      animation: {
        wiggle: 'wiggle .4s ease-in-out',
      }
    },
  },
  plugins: [],
}
