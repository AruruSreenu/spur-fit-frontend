/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainHeading: ["Righteous", "sans-serif"],
        all: ["Chakra Petch", "sans-serif"],
      },
      backgroundColor: {
        primary: "#191825",
        navBgTransperent: "#ffa3fd03",
        secondary: "#865DFF",
      },
      colors: {
        primary: "#191825",
        skyblue: "#865DFF",
        darkPink: "#E384FF",
        lightPink: "#FFA3FD",
        lightWhite: "#EFECEC",
        lightOrange: "#d7b26d",
      },
    },
  },
  plugins: [],
};
