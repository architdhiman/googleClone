/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        google: {
          blue: '#4285f4',
          red: '#ea4335',
          yellow: '#fbbc05',
          green: '#34a853'
        }
      },
      boxShadow: {
        search: '0 1px 6px rgb(32 33 36 / 28%)',
        searchHover: '0 1px 6px rgb(32 33 36 / 20%)'
      }
    },
  },
  plugins: [],
};