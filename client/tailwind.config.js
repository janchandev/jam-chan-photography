/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#4F95BC",
        headBlue: "#74B0D6",
        darkOrange: "#DEA98E",
        lightOrange: "#FEC5A7"
      },
      fontFamily: {
        goudy: ["Sorts Mill Goudy", "serif"],
        encodeSans: ["Encode Sans", "sans-serif"],
        merriweather: ["Merriweather", "serif"]
      },
      backgroundImage: {
        'rectangles': "url('/src/images/Rectangles.svg')",
        'seashore': "url('/src/images/seashorec.png')",
        'flowerTree': "url('/src/images/blueskyflowers.png')"
      },
      backgroundSize: {
        'fullX': ["100vw", "100%"]
      }
    },
  },
  plugins: [],
}
