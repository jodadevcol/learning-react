/** @type {import('tailwindcss').Config} */
import aspectratio from '@tailwindcss/aspect-ratio'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [aspectratio]
}
