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
        sans: "var(--font-public-sans)",
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
