/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-bottom': '#1F2226',
        'bg-top': '#222427',
        'white-bottom': '#FFFFFF08',
        'white-top': '#FFFFFF0D', 
      },
    },
  },
  plugins: [],
};
