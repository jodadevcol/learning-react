const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      'col-first': '#ff7d1a',
      'col-second': '#ffede0',
      'col-dark-blue': '#1d2025',
      'col-dark-gray': '#68707d',
      'col-gray-blue': '#b6bcc8',
      'col-light-gray': '#f7f8fd',
      'col-white': '#ffffff'
    }
  },
  plugins: []
}
