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
      fontSize: {
        'heading-100': [
          '1.75rem',
          {
            lineHeight: '2.375rem',
          },
        ],
        'heading-200': [
          '1.5rem',
          {
            lineHeight: '1.813rem',
          },
        ],
        'heading-300': [
          '1.25rem',
          {
            lineHeight: '1.25rem',
          },
        ],
        'heading-400': [
          '0.875rem',
          {
            lineHeight: '1.125rem',
          },
        ],
        'body-100': [
          '1rem',
          {
            lineHeight: '1.625rem',
          },
        ],
      },
      backgroundSize: {
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
      },
    },
  },
  plugins: [],
}
