/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        bg: '#100D0B',
        surface: '#18120F',
        'surface-raised': '#231A15',
        border: '#3B2F27',
        'border-subtle': '#2B221C',
        text: '#F8F2EB',
        'text-secondary': '#C8B7A7',
        'text-muted': '#A08F82',
        accent: '#D8AC72',
        'accent-hover': '#E3BB87',
        'accent-text': '#140E09',
        'restaurant-bg': '#221811',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
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
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
      },
      fontSize: {
        xs: ['clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem)', { lineHeight: '1.5' }],
        sm: ['clamp(0.875rem, 0.825rem + 0.25vw, 0.9375rem)', { lineHeight: '1.5' }],
        base: ['clamp(1rem, 0.95rem + 0.25vw, 1.0625rem)', { lineHeight: '1.6' }],
        lg: ['clamp(1.125rem, 1rem + 0.5vw, 1.3125rem)', { lineHeight: '1.4' }],
        xl: ['clamp(1.375rem, 1.1rem + 1.2vw, 1.875rem)', { lineHeight: '1.3' }],
        '2xl': ['clamp(1.75rem, 1.3rem + 2vw, 2.75rem)', { lineHeight: '1.2' }],
        '3xl': ['clamp(2.25rem, 1.6rem + 3vw, 3.75rem)', { lineHeight: '1.1' }],
        display: ['clamp(2.75rem, 1.8rem + 4.5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
    },
  },
  plugins: [],
};
