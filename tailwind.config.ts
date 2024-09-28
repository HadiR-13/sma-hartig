import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        body: 'Poppins, sans-serif',
      },
      colors: {
        primary: {
          100: '#D8F0DE',
          200: '#C6E9CE',
          300: '#B0DEBB',
          400: '#91CEA2',
          500: '#63B97E',
          600: '#63B97E',
          700: '#57AD73',
          800: '#237E47',
        },
        secondary: '#575455',
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1240px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
