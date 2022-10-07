1. npm i -D tailwindcss postcss autoprefixer
2. npx tailwindcss init
3. tailwind.config.css dr 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx, ts, tsx'],
  theme: {
    extend: {},
  },
  plugins: [],
};
