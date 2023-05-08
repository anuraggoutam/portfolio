/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nav: 'rgba(0,0,0,0.3)',
        nav2: 'rgba(0,0,0,0.6)',
        text: '#ededed',
        bg: '#081b29',
        blue: ' #00abf0',
        light: ' rgba(255, 255, 255, 0.6)',
        fullbg: 'rgb(25, 26, 28)',
      },
      spacing: {
        t: '0.7rem',
        b: '1.7rem',
        R10: '10%',
        btn: '21.5625rem',
        66: '120px',
        500: '550px',
        420: '420px',
        320: '320px',
        1130: '1130px',
      },
      zIndex: {
        2: '2',
        n: '-1',
        p: '1',
      },
      translate: {
        '50%': '50%',
      },
      borderRadius: {
        sml: '3rem',
        ff: '3.125rem',
        f50: '50%',
      },
      fontFamily: {
        momo: 'Montserrat',
      },
      screens: {
        smx: { max: '639px' },
        tablet: { max: '1076px' },
      },
      animation: {
        showRight: '1s ease forwards',
      },
      keyframes: {
        showRight: {
          '100%': { width: 0 },
        },
      },
      maxWidth: {
        text: '37.5rem',
      },
    },
  },
  plugins: [],
};
