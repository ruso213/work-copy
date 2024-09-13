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
        'gray-white': '#FAFAFA',
        'gray-xlight': '#F2F2F2',
        'gray-light': '#E1E1E1',
        'gray-medium': '#A3A3A3',
        'gray-low-dark': '#D8D8D8',
        'gray-dark': '#525252',
        'auto-green': '#00C041'
      

      }

    },
  },
  plugins: [],
}

