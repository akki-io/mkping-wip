const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          '500': '#3EA6FF',
        },
        dark: {
          '100': '#AAAAAA',
          '200': '#909090',
          '300': '#383838',
          '400': '#323232',
          '500': '#212121',
          '600': '#202020',
          '700': '#181818',
          '800': '#121212',
          '900': '#0F0F0F',
        },
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '88': '0.88',
        '95': '0.95',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '8xl': '8rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
