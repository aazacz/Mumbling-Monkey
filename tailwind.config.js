/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {},
    fontFamily:{
      Cabin:["Cabin","sans-serif"],
      montserrat: ['Montserrat', 'sans-serif'],
      fontWeight: "700"
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
}