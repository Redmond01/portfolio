/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens:{
        'sm':'10px',
        "md":'768px',
        "lg":'1024px'
      },
      colors:{
        'black':"#171717",
        'white':"#f5f5f5",
        'green':'#27AE60'
      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

