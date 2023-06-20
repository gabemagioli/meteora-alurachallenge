
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
          width: {
            'w1440': '1440px', 
            'logo': '132.75px',
          },
          height: {
            'custom': '58px', // Nomeie sua altura personalizada e defina um valor
          },
        },
        screens: {
          sm: '375px', // Alteração feita aqui
          md: '768px',
          lg: '1440px',
          xl: '1280px',
        },
      },
    plugins: [],
  }