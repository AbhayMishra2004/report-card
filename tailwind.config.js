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

        'insideInputPadding' : '0.4rem' , 
        'widthOfResult' : '40rem' ,
        'textSize' : 'xl' , 
        'borderLine' : '1' , 
      },
       
    },
  },
  plugins: [],
}
