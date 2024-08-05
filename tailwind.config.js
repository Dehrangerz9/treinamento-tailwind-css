/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        'base': '1.1rem'
      },    
      colors: {
        'my-new-color': '#F2F2F2',
      },
    },
  },
  
  plugins: [],
}

