/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'xl': '0.6rem',
        'full': '9999px',
        'large': '12px',
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
