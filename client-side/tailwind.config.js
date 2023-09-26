/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#C63D2F',
        temporary:'#E25E3E',
        theme:'#FF9B50',
        base:'#FFBB5C'
      },
      fontFamily:{
        header:['DM Serif Display', 'serif'],
        logo:['Kenia', 'cursive'],
        primary:['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}