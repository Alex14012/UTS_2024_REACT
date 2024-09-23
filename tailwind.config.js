/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "background" : "url('./src/assets/images/background.jpg')",
      },

      fontFamily:{
        MontSerrat: ["Montserrat"],
        Asteroidbeat: ["Asteroidbeat"],
        Arimo: ["Arimo"]
      }
    },
  },
  plugins: [],
}

