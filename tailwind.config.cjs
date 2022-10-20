/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      sm:14,
      md: 16,
      lg:32
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        900: '#000a0f',
        500: '#c3c3cb',
        400: '#7c7c8a'
      },
      blue: {
        900: '#00111a',
        800: '#1a2328',
        700: '#0d1e26',
        600: '#00344d',
        100: '#80f2ff'
      },
      yellow: {
        500: '#fba94b'
      },
      green: {
        500: '#04d261'
      },
      red: {
        400: '#ac4d55',
        500: '#94000f'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        popp: 'Poppins, sans-serif'
      }
    },
  },
  plugins: [],
}
