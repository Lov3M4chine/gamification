module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.js',
    ],
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    daisyui: {
      themes: [
        {
          starwars: {
          "primary": "#4493c4",                    
          "secondary": "#9f1239",                     
          "accent": "#fde047",                      
          "neutral": "#191b24",                      
          "base-100": "#3d4651",                      
          "info": "#166534",                      
          "success": "#1ab3a6",                      
          "warning": "#b1820b",                      
          "error": "#9f1239",
          },
        },
      ],
    },
    plugins: [require("daisyui")],
  };
  