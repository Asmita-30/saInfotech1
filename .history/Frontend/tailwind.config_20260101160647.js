/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2F80ED',
        'primary-purple': '#6A11CB',
        'dark-bg': '#0B0F19',
        'light-gray': '#F4F6FA',
        'text-dark': '#1E1E1E',
        'border-gray': '#E5E7EB',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #2F80ED, #6A11CB)',
      }
    },
  },
  plugins: [],
}