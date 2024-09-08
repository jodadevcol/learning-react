/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kumbh Sans Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#5964E0', // violet
          200: '#939BF4', // light violet
          300: '#19202D', // Very Dark Blue
          400: '#121721', // Midnight
        },
        secondary: {
          100: '#F4F6F8', // light gray
          200: '#9DAEC2', // gray
          300: '#6E8098', // dark gray
        },
      },
      maxWidth: {
        'screen-2xl': '1440px',
      },
    },
  },
  plugins: [],
}
