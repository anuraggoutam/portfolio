/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nav: 'rgba(0,0,0,0.3)',
      },
      spacing: {
        t: '0.7rem',
        b: '1.7rem',
      },
      zIndex: {
        2: '2',
      },
      translate: {
        '50%': '50%',
      },
      borderRadius: {
        sml: '3rem',
      },
    },
  },
  plugins: [],
};
