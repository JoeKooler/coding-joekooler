const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-kanit)", ...fontFamily.sans],
    },
    extend: {
      colors: {
        primaryPurple: "#5A67D8",
      },
    },
  },
  plugins: [],
};
