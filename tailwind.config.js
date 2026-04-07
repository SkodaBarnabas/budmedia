/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        bg: '#0D0D0D',
        surface: '#1A1A1A',
        'surface-raised': '#1A1A1A',
        border: '#2A2A2A',
        'border-subtle': '#2A2A2A',
        text: '#F0EDE8',
        'text-secondary': '#888880',
        'text-muted': '#888880',
        accent: '#C8A96E',
        'accent-hover': '#D4B87A',
        'accent-text': '#0D0D0D',
      },
      maxWidth: {
        container: '80rem',
        narrow: '48rem',
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2.5rem',
        xl: '4rem',
        '2xl': '6.25rem',
        '3xl': '10rem',
      },
    },
  },
  plugins: [],
};
