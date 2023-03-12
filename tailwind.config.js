/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        'PlayfairDisplay': 'serif'
      },
      keyframes: {
        wiggle: {
          '0%': {
            left: 0,
          },
          '100%': {
            left: 100
          }
        }
      }
    },
  },
  plugins: [],
}