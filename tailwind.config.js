/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main_font: 'Poppins, sans-serif;'
    },
    extend: {
      colors: {
          dark: 'var(--background-color)',
          dark_light: 'var(--dark-light)',
          accent: 'var(--accent-color)',
          accent_soft: 'var(--accent-soft)',
          light: 'var(--light)'
      },
    },
  },
  plugins: [],
}

