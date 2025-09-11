/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1680px'
    },
    fontSize: {
      'xs': '.625rem',
      'sm': '.75rem',
      'md': '.8125rem',
      'lg': '1rem',
      'xl': '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '2.5rem',
      '7xl': '3rem',
      '8xl': '4rem',
      '9xl': '6rem'
    },
    fontFamily: {
      sans: ['Ubuntu Mono', 'sans-serif'],
      serif: ['verdana', 'Geneva', 'Tahoma', 'sans-serif'],
      mono: ['Red Hat Mono', 'Monaco', 'monospace']
    },
    extend: {
      colors: {
        // transparent: 'transparent',
        // current: 'currentColor',
        'primary': '#AB3634',
        'secondary': '#74909c',
        'accent': '#4169E1', // royal blue
        'danger': '#FF6347', // tomato
        'success': '#228B22', // forest green
        'warning': '#FFD700' // gold
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '42': '10.5rem',
        '50': '12.5rem',
        '80': '20rem',
        '100': '25rem',
        'nav': '280px'
      }
    }
  },
  plugins: []
}
