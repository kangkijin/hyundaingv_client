/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom_1': '0px 8px 30px 0px rgba(0, 0, 0, 0.05)',
      }

    }
  },
  plugins: []
}
