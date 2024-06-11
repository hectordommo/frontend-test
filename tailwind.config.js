/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   
      colors: {
        primary: "#94ADD7",        
      },  
      fontSize:{
        primary:"1.5rem",
        secondary:"1.2rem"
      }
    },
  },
  plugins: [],
}
