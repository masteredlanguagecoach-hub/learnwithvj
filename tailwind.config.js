/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f6ff',
          100: '#e0edfe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#38b0f8',
          500: '#0e95e6',
          600: '#0276c5',
          700: '#035ea0',
          800: '#075085',
          900: '#0c436e',
          950: '#082b49',
        },
        navy: {
          800: '#0f172a',
          900: '#0a0f1d',
          950: '#050811',
        },
        accent: {
          gold: '#f59e0b',
          emerald: '#10b981',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0369a1 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(37, 99, 235, 0.15)',
        'apple': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'apple-hover': '0 25px 50px -12px rgba(37, 99, 235, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
