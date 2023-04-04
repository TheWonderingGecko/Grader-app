/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/CSS/tailwind.css', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        umkc_light_blue: '#0066cc',
        umkc_dark_blue: '#04487f',
        umkc_yellow: '#ffd52f',
        umkc_dark_yellow: '#bd9e22',
        error: '#e7195a',
      },
    },
  },

  plugins: [],
}
