/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily:{
      Cabin:["Cabin","sans-serif"],
      montserrat: ['Montserrat', 'sans-serif'],
      fontWeight: "700"
    }
  },
  plugins: [],
}