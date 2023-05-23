/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mans: 'helvetica',
      hel: 'helvetica',
    },
    extend: {
      colors: {
        nav: 'rgba(0,0,0,0.3)',
        nav2: 'rgba(0,0,0,0.6)',
        bg2: 'rgba(0,0,0,0.9)',
        text: '#ededed',
        bg: '#081b29',
        blue: ' #00abf0',
        blue2: 'rgba(0, 171, 240, 0.8)',

        light: ' rgba(255, 255, 255, 0.6)',
        fullbg: 'rgb(25, 26, 28)',
        reded: '#f61b10',
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
        58: '58%',
        we: '12%',
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
        1: 1,
      },
      fontFamily: {
        momo: 'Montserrat',
      },
      screens: {
        smx: { max: '639px' },
        tablet: { max: '1076px' },
        mid: { min: '1076px' },
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
