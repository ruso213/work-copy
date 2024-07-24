/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/admin/src/**/*.{html,ts}',
    './libs/**/*.{html,ts}',
    './apps/admin/.storybook/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors:{
        'gray-light': '#E1E1E1',
        'gray-medium': '#A3A3A3',
        'auto-green': '#00C041'
      }
    },
  },
  plugins: [],
}

