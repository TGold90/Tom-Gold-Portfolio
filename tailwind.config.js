/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
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
      'plutonium': '#b8dd94',
      'gold': '#ffd700',
      'dark': '#222223',
      'dark-blue': '#161679',
      'sci-blue': '#605856',
      'blue': '#2a2ad8',
      'vibe-purple': '#4c22cb',
      'purple': '#321450',
      'green': '#07F40F',
      'dark-purple': '#29132e',
      'gray': '#3b3b4f',
      'white': '#F1F1F1',
      'black': '#080F0F'
    },
    extend: {
      
    },
  },
  plugins: [],
}
