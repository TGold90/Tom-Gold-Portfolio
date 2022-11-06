/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    screens: {
      'sm': {'min': '300px', 'max': '640px'},
      // => @media (min-width: 640px) { ... }

      'md': {'min': '641px', 'max': '768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'min': '769px', 'max': '1024px'},
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'plutonium': '#f3fff1',
      'dark': '#222223',
      'dark-blue': '#161679',
      'sci-blue': '#01012b',
      'vibe-purple': '#3e01f7',
      'purple': '#321450',
      'green': '#07F40F',
      'dark-purple': '#29132e',
      'gray-light': '#bfd3d6',
      'white': '#FFF',
      'black': '#000000'
    },
    extend: {
      
    },
  },
  plugins: [],
}
