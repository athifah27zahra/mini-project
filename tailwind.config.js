/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        "22" : "88px"
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        blue: {
          100 : '#01959F',
        },
        yellow: {
          200 : '#FEEABC',
        },
        red: {
          300: '#F5B1B7',
        },
        green: {
          400: '#B8DBCA'
        }
      }
    },
  },
  plugins: [],
}

