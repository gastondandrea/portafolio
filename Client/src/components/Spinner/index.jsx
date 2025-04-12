function Spinner() {
    return (
      <svg viewBox="25 25 50 50" className="w-14 origin-center animate-spin-custom">
        <circle
          r="20"
          cy="50"
          cx="50"
          fill="none"
          stroke="hsl(214, 97%, 59%)"
          strokeWidth="2"
          strokeDasharray="1, 200"
          strokeDashoffset="0"
          strokeLinecap="round"
          className="animate-dash-custom"
        ></circle>
      </svg>
    );
  }
  
  export default Spinner;
  
  // En tu archivo CSS (p. ej. tailwind.config.js o un archivo global si usás uno)
  // Agregá estas clases personalizadas:
  
  // tailwind.config.js:
  // module.exports = {
  //   theme: {
  //     extend: {
  //       animation: {
  //         'spin-custom': 'spin 2s linear infinite',
  //         'dash-custom': 'dash 1.5s ease-in-out infinite',
  //       },
  //       keyframes: {
  //         dash: {
  //           '0%': {
  //             strokeDasharray: '1, 200',
  //             strokeDashoffset: '0',
  //           },
  //           '50%': {
  //             strokeDasharray: '90, 200',
  //             strokeDashoffset: '-35px',
  //           },
  //           '100%': {
  //             strokeDashoffset: '-125px',
  //           },
  //         },
  //       },
  //     },
  //   },
  //   plugins: [],
  // }
  