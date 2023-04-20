/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "orange":"#FA4A0c",
        "light-gray":"#737373",
        "dark-gray":"#252B42",
        "white":"#FFF",
        "regal-blue":"#243c5a"
      }
    },
  },
  plugins: [],
}

