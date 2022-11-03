/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    screens: {
      'sm': {'min': '300px', 'max': '640px'},
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'blue': '#2a2ad8',
      'plutonium': '#fffdf1',
      'dark': '#222223',
      'dark-blue': '#161679',
      'purp-blue': '#3d43b4',
      'sci-blue': '#1c1c35',
      'light-g-text': '#e4fff8',
      'purple': '#321450',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#fe8980',
      'yellow': '#ffc82c',
      'dark-purple': '#29132e',
      'gray': '#8492a6',
      'gray-light': '#bfd3d6',
      'white': '#FFF',
      'black': '#000000'
    },
    extend: {
      
    },
  },
  plugins: [],
}
