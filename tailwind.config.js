/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/stories/*'],
  safelist: [
    { pattern: /primary/, variants: ['hover'] },
    { pattern: /dark/, variants: ['hover'] },
    { pattern: /border/ },
    'bg-transparent',
  ],
  theme: {
    extend: {
      borderRadius: {
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        1000: '1000px',
      },
      colors: {
        primary: {
          1000: '#0DADB9',
          900: '#3DB6BF',
          800: '#60BDC4',
          700: '#7AC9CF',
          600: '#8CD6DB',
          500: '#9FDCE0',
          400: '#B8E0E3',
          300: '#CCE6E8',
          200: '#D8EEF0',
          100: '#F5FCFC',
        },
        'primary-dark': '#298F97',
        dark: {
          1000: '#454545',
          900: '#595959',
          800: '#666666',
          850: '#555555',
          700: '#7A7A7A',
          600: '#8A8A8A',
          500: '#9C9C9C',
          400: '#B5B5B5',
          300: '#D4D4D4',
          200: '#E6E6E6',
          100: '#F7F7F7',
        },
        error: {
          1000: '#D10808',
          900: '#DE1F1F',
          800: '#E83333',
          700: '#F04343',
          600: '#F55656',
          500: '#F56E6E',
          400: '#F58787',
          300: '#F7A1A1',
          200: '#FCBDBD',
          100: '#FFD9D9',
        },
        green: {
          1000: '#248443',
          900: '#2CA252',
          800: '#35BF62',
          700: '#4CCE76',
          600: '#6AD68D',
          500: '#88DEA4',
          400: '#A6E6BB',
          300: '#C7F0D4',
          200: '#E1F7E8',
          100: '#F5FCF7',
        },
        warning: {
          1000: '#99680A',
          900: '#AD760B',
          800: '#C2840D',
          700: '#D18E0E',
          600: '#DE9812',
          500: '#EDA61C',
          400: '#F7B739',
          300: '#FFC85C',
          200: '#FFE5B2',
          100: '#FFF4DE',
        },
        'primary-light': 'var(--primary-light-color)',
      },
      fontSize: {
        xs: '0.875rem',
        sm: '1rem',
        base: '1.125rem',
        lg: '1.25rem',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      flex: {
        '0-0-auto': '0 0 auto',
      },
      boxShadow: {
        container: '0 0px 12px rgba(0, 0, 0, 0.08)',
      },
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
  },

  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
