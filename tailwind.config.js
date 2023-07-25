/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#CEC8C8',
          800: '#29292F',
          900: '#1D1D21'
        },

        pink: {
          500: '#EA017F'
        }
      },

      backgroundImage: {
        'tina-banner-01': "url('../img/05.jpg')"
      },

      keyframes: {
        overlayShow: {
          '0%': { opacity: 0 },
          '100%': { opacity: 0.8 }
        },

        contentShow: {
          '0%': { opacity: 0, transform: 'translate(-50%, -49.9%) scale(0.99)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
        }
      },

      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
