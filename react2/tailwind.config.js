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
        'green':"#084708",
        'white':"#f5f5f5"
      }
    },
  },
  plugins: [],
}

