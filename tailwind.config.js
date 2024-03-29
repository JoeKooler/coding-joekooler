const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-kanit)'],
    },
    extend: {
      colors: {
        primaryPurple: '#5A67D8',
        backgroundGrey: '#282B30',
        literalBlack: '#000000',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('flowbite/plugin')],
};
