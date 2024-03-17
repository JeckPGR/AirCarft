/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0094FF",
        secondary: "#8D8D8D",
        shadow: "#4D4D4D",
        darkblue: "#08358D",
      },
      fontFamily: {
        Julius: "Julius Sans One",
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
