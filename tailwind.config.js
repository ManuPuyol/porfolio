/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Foundry Gridnik', '"Courier New"', 'Courier', 'monospace'],
      },
      
      colors: {
        primary: {
          100: '#66FFC5 ', // Muy claro
          200: '#00D9FF', // Claro
          300: '#00ECCF', // Ligeramente más intenso
          400: '#85cd69', // Intermedio
          500: '#00ff9f', // Color base (rgb(139, 187, 145)) 
          600: '#00FFB7 ', // Oscuro
          700: '#5b885d', // Más oscuro
          800: '#4a7147', // Aún más oscuro
          900: '#00CC7F ', // El más oscuro
        },
        secondary: {
          100: '#1F293780',
          200: '#FF0065',
          300: '#FF5A8F',
          400: '#CC0051',
          500: '#00D9FF',
          600: '#B6FF00'
        }
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #00FF9F, #FF0065)',
        'light-gradient': 'linear-gradient(135deg, #66FFC5, #FF5A8F)',
        'secondary-gradient': 'linear-gradient(120deg, #00FF9F, #00D9FF)',
        'cyberpunk': 'linear-gradient(90deg, #ff007f, #00e5ff, #5400ff)',      },
    },
  },
  plugins: [],
}

