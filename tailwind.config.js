/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          brand: '#94CEFA',
          light: '#B6DFFD',
          dark: '#74B7EE',
        },
        pink: {
          brand: '#FFA6D5',
          light: '#FFC8E6',
          vivid: '#F67BB3',
          dark: '#D8428C',
        },
        maroon: {
          brand: '#70212B',
          light: '#8B2E3A',
          dark: '#54171F',
        },
        teal: {
          darkroom: '#1E3539',
        }
      },
      fontFamily: {
        elevate: ['Archivo Black', 'Montserrat', 'sans-serif'],
        display: ['Poppins', 'Montserrat', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(112, 33, 43, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(112, 33, 43, 0.16)',
        'button': '0 8px 24px -4px rgba(216, 66, 140, 0.35)',
      }
    },
  },
  plugins: [],
}
