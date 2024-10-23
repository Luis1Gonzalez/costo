/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#185fac',
        customGray: '#efe2dc',
        customGrayFooter: '#eeefe1',
      },
    },
  },
  plugins: [],
}

