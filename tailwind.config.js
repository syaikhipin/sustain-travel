/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      primary: '#03391c',
      secondary: '#f8f5f0',
      accent: '#e19233',
      'primary-button': '#0a964c',
      'secondary-button': '#ccdbd3',
    },
  },
  plugins: [],
}
