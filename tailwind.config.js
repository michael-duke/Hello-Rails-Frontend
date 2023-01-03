/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Dead end', 'sans-serif'],
        forzan: ['Forzan', 'sans-serif'],
        'syera-inline': ['Syera InLine', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
