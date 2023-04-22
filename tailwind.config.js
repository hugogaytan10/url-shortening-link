/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        primaryCyan: 'hsl(180, 66%, 49%)',
        primaryDarkViolet: 'hsl(257, 27%, 26%)',
        secondary: 'hsl(0, 87%, 67%)',
        neutralGray: 'hsl(0, 0%, 75%)',
        neutralGrayViolet: 'hsl(257, 7%, 63%)',
        darkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
        secondaryGray: 'hsl(230,25%,95.29%)',
        textGray: 'hsl(280,6.38%,63.14%)',
      },
    },
  },
  plugins: [],
}