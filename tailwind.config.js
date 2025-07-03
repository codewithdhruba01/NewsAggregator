export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3498DB',
          dark: '#2980B9'
        },
        background: {
          light: '#F4F6F7',
          dark: '#1F2937'
        },
        text: {
          light: '#2C3E50',
          dark: '#E5E7EB'
        }
      },
      transitionProperty: {
        'colors': 'background-color, color, border-color, text-decoration-color, fill, stroke',
      },
      animation: {
        'theme-toggle': 'theme-toggle 0.3s ease-in-out'
      },
      keyframes: {
        'theme-toggle': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}