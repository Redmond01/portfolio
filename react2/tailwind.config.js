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
        'blacks':"#212121",
        'whites':"#f5f5f5",
        'green':'#27AE60'
      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

