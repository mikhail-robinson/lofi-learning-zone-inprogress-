module.exports = {
  content: ['./client/**/*.{html,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      keyframes: {
        shift: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
        shift: 'shift 2s infinite',
      },
    },
  },
  plugins: [],
}
