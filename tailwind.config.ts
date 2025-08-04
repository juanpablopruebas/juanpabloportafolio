module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          600: '#0284c7',
        },
        emerald: {
          400: '#34d399',
          600: '#059669',
        },
        zinc: {
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
    },
  },
  plugins: [],
}
