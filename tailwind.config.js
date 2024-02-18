/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'p11': '#65451F',
        'p12': '#765827',
        'p13': '#C8AE7D',
        'p14': '#EAC696',
        'p21': '#DCD7C9',
        'p22': '#A27B5C',
        'p23': '#3F4E4F',
        'p24': '#2C3639',
      }
    },
  },
  plugins: [],
}

