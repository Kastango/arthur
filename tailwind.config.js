module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     backgroundColor: theme => ({
      ...theme('colors'),
      'off-white': '#fcfcfc',
     }),
    extend: {
      spacing: {
        gradx: '350px',
        grady: '520px',
        logo: '48px',
       },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
