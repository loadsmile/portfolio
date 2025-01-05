/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB48A',
        accent: '#CB3804',
      },
      fontFamily: {
        'paytone': ['"Paytone One"', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
