/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.6875rem', { lineHeight: '1rem' }], // 11px
        sm: ['0.75rem', { lineHeight: '1rem' }], // 12px
        base: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        lg: ['1rem', { lineHeight: '1.5rem' }], // 16px
        xl: ['1.0625rem', { lineHeight: '1.75rem' }], // 17px
        '2xl': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        '3xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '4xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '5xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        '6xl': ['3rem', { lineHeight: '1' }], // 48px
      },
      colors: {
        background: '#ffffff', // Pure white
        surface: '#f8fafc', // Slate 50 (very light gray)
        primary: {
          DEFAULT: '#0f172a', // Slate 900 (Black/Dark Blue)
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#64748b', // Slate 500
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#0f172a', // Slate 900
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f1f5f9', // Slate 100
          foreground: '#64748b', // Slate 500
        },
        border: '#e2e8f0', // Slate 200
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'accordion-down': 'accordionDown 0.2s ease-out',
        'accordion-up': 'accordionUp 0.2s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        accordionDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordionUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 50%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
