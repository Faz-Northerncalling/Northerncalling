/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f6f7',
          100: '#e6e9ec',
          200: '#c8cfd5',
          300: '#a3aeb8',
          400: '#7a8895',
          500: '#5b6a78',
          600: '#475560',
          700: '#3a454f',
          800: '#2f3840',
          900: '#1a2026',
          950: '#0d1115',
        },
        forest: {
          50: '#eef7f1',
          100: '#d6ecdd',
          200: '#aed9bc',
          300: '#7cc096',
          400: '#4fa371',
          500: '#338555',
          600: '#246a44',
          700: '#1c5437',
          800: '#173f2b',
          900: '#0f2a1d',
        },
        gold: {
          50: '#fbf6e9',
          100: '#f5e9c4',
          200: '#ecd38a',
          300: '#e3bd56',
          400: '#d9a832',
          500: '#c08d22',
          600: '#a0711c',
          700: '#7c561a',
          800: '#5e4218',
          900: '#3f2d12',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        'fade-in': 'fadeIn 1s ease-out both',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
