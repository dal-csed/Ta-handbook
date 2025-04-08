/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
        "public-sans": ["Public Sans", "sans-serif"],
      },

      colors: {
        dalgold: "#ffcc00",
        dalgray: "#333333",
        dalbg: "#ffffff",
        daltext: "#1a1a1a",
      },
    },
  },
  darkMode: false, // disables system dark mode
  plugins: [],
};
