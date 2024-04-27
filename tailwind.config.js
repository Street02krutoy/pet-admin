/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      colors: {
        'violet': 'var(--violet)',
        'light-violet': 'var(--light-violet)',
        'dark-violet': 'var(--dark-violet)',
        'simple-violet': 'var(--simple-violet)',
        'super-dark-violet': 'var(--super-dark-violet)'
      }
    },
  },
  plugins: [],
}

