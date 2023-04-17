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
      keyframes: {
        wave: {
          '0%': {
            transform: 'translateX(-10px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
           }
        },
      },
      animation: {
        'slow-move': 'wave 0.1s linear alternate',
      },
    },
    screens: {
      'mobile': '0px',
      'desktop': '450px'
    },
  },
  plugins: [],
}