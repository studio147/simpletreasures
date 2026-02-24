export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#fdfbf7',
          DEFAULT: '#d97706', // Amber 600
          dark: '#78350f', // Amber 900
          accent: '#14b8a6', // Teal 500
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        crafty: ['Caveat', 'cursive'],
      },
    }
  },
  plugins: [],
}
