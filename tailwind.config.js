
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'drink-pattern': "url('./src/assets/images/drinks-3200.svg)",
    },
  },
  plugins: [],
}

}