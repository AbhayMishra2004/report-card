/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {

       colors: {
          top: '#b6fbff', // Define 'top' as a custom color
          bottom : '#83a4d4' , 

          formGradient1 : "#d4fc79" , 
          formGradient2 : "#96e6a1" , 

          fullGradient1 : "#fceabb" , 
          fullGradient2 : "#f8b500" , 
      },

      spacing: {
        'height': '39rem', 
        'width': '30rem', 
        'imageMainHeight': '10rem', 
        'cardTopHeight': '20rem', 
        'iconWidth' : '2.3rem'
      },
       
    },
  },
  plugins: [],
}
