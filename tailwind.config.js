module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        'maroon': {
          'light': '#FBF2F2',
          DEFAULT: '#AA0601',
          'dark': '#650300'
        }
      },
      screens: {
        'lg': '1320px',  // => @media (min-width: 1320px) { ... }
        'md': '720px',   // => @media (min-width: 720px) { ... }
        'sm': '373px',   // => @media (min-width: 373px) { ... }
      },
    },
    container: {
      center: true, 
      padding: "12px"
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}