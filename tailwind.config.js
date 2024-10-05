/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunshine: '#FEECA2',  // Light yellow
        midnight: '#0E0E0C',  // Very dark gray/black
        earthy: '#36312D',    // Dark brown
        charcoal: '#191814',  // Deep dark gray
        espresso: '#27221E',  // Dark coffee brown
        cream: '#2F2E29',     // Light beige
      },
    },
    keyframes: {
      fill: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(100%)' },
      },
      
    },
    animation: {
      'fill': 'fill 3s ease forwards',
    },
  },
  plugins: [],
}
