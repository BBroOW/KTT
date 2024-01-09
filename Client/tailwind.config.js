/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#009D4F',
        'dark-green': "#005850",
        "grey": "#D9D9D9",
        "white": "#FFFFFF",
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [],
}