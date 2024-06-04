/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'rock': '#C4B887'
      },
      screens: {
        'xsm': '410px'
      } 
    },
  },
  plugins: [],
}

