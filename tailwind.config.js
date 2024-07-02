/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    screens: {
      "xs": "320px",
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',
     
      '2xl': '1536px',

    },

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