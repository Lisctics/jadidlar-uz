/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'gray_bg': '#F1F3F5'
      },
      width:{
        1200: '1200px',
        1000: '850px',
        100: '400px',
        500:'500px',
        400:'400px',
        294:'294px,',
        450:'450px',
      },
      gap:{
        400:'400px',
        500:'450px'
      },
      height:{
        477:'477px',
        125: '500px',
        367:'367px',
        720: '720px',
      },
      zIndex:{
        200: 700,
        2000:2000,
      },
      padding:{
        500:500 
      },
      margin:{
        400:'300px',
        700: '700px',
        800:'800px',
        850:'850px',
        1125:'1125px',
        1040:'1040px',
        1000: '1000px',
      }
    },
  },
  plugins: [],
}