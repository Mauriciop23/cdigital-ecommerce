/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'negro': '#111111',
      'blanco': '#FFFFFF',
      'naranja': '#FFD27B',
      'gris': '#4D4D4D',

    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
