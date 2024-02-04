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
        'blacks':"#171717",
        'whites':"#f5f5f5",
        'green':'#27AE60',
        'harsh':'#828282',
        'lightblack':'#212121'
      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

