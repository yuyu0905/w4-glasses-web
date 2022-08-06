module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        'maroon': {
          'light': '#FBF2F2',
          DEFAULT: '#AA0601',
          'dark': '#650300'
        },
        "brown" : {
          'light': '#B75929',
          DEFAULT: '#5F3E2D',
        },
        "grey" : {
          'light': '#F2F2F2',
          DEFAULT: '#555555',
        }
      },
      fontSize: {
        lg: ['18px', '27px'],
        xl: ['20px', '30px'],
        '2xl': ['24px', '36px'],
        '4xl': ['36px', '54px'],
        '5xl': ['48px', '72px'],
      },
    },
    container: {
      center: true, 
      padding: "12px"
    },
    screens: {
      'sm': '373px',   // => @media (min-width: 373px) { ... }
      'md': '720px',   // => @media (min-width: 720px) { ... }
      'lg': '1320px',  // => @media (min-width: 1320px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}