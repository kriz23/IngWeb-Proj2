/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        DarkBlue: '#0055a5',
        MainBlue: '#4d94ff',
        Pink: '#ff4d94',
        Green: '#94ff4d',
        White: '#fffffc',
        Gray: '#ebebeb',
        DarkGray: '#d3d3d3',
        Black: '#1e1e1e',
      },
      fontFamily: {
        OpenSans: ['"Open Sans"'],
      },
      fontSize: {
        h1: ['2.75rem', '1'],
        h2: ['2rem', '2.25rem'],
        h3: ['1.75rem', '2.383rem'],
        h4: ['1.25rem', '1.75rem'],
        p: ['1rem', '1.389rem'],
      },
    },
  },
  plugins: [],
};
