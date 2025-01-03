import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '30em',
      sm: '48em',
      md: '64em',
      lg: '74em',
      xl: '90em',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
      screens: {
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
        xl: '80rem',
        '2xl': '80rem',
      },
    },
    extend: {
      height: {
        header: 'var(--header-height)',
      },
      spacing: {
        header: 'var(--header-height)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 0% 0%, var(--tw-gradient-stops))',
      },
      colors: {
        background: 'hsl(var(--background))',
        'background-light': 'hsl(var(--background-light))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'brand-primary-a': 'hsl(var(--brand-primary-a))',
        'brand-primary-a-active': 'hsl(var(--brand-primary-a--active))',
        'brand-primary-b': 'hsl(var(--brand-primary-b))',
        'brand-primary-b-active': 'hsl(var(--brand-primary-b--active))',
        'brand-primary-dark': 'hsl(var(--brand-primary-dark))',
        'brand-secondary-a': 'hsl(var(--brand-secondary-a))',
        'brand-secondary-a-active': 'hsl(var(--brand-secondary-a--active))',
        'brand-secondary-b': 'hsl(var(--brand-secondary-b))',
        'brand-secondary-b-active': 'hsl(var(--brand-secondary-b--active))',
        'brand-secondary-dark': 'hsl(var(--brand-secondary-dark))',
        // 'brand-tertiary': 'hsl(var(--brand-tertiary))',
        // 'brand-tertiary-active': 'hsl(var(--brand-tertiary--active))',
        ['brand-tertiary']: {
          DEFAULT: 'hsl(var(--brand-tertiary))',
          foreground: 'hsl(var(--brand-tertiary-foreground))',
          active: 'hsl(var(--brand-tertiary--active))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        borderImage: {
          glow: 'linear-gradient(90deg, hsl(var(--brand-secondary-dark)) 0%, hsl(var(--background)) 50%, hsl(var(--brand-secondary-dark)) 100%)',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        'glow-border': {
          start: '#00205A',
          middle: '#000013',
          end: '#00205A',
        },
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            fontWeight: 300,
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: 300,
            },
            a: {
              fontWeight: 400,
            },
            maxWidth: '62.5rem',
            blockquote: {
              backgroundColor: 'hsl(var(--background-light))',
              borderLeftWidth: '0',
              borderRadius: theme('borderRadius.lg'),
              padding: theme('spacing.5'),
              margin: `${theme('spacing.8')} 0`,
              color: 'hsl(var(--foreground))',
              fontWeight: '300',
              fontSize: '1.125rem', // 18px
              'p:first-of-type::before': {
                content: 'none',
              },
              'p:last-of-type::after': {
                content: 'none',
              },
            },
          },
        },
        invert: {
          css: {
            blockquote: {
              backgroundColor: 'hsl(var(--background-light))',
              color: 'hsl(var(--foreground))',
            },
          },
        },
        xs: {
          css: {
            h1: { fontSize: '2rem', lineHeight: '1.1' },
            h2: { fontSize: '1.5rem', lineHeight: '1.2' },
            h3: { fontSize: '1.25rem', lineHeight: '1.3' },
            h4: { fontSize: '1.125rem', lineHeight: '1.4' },
            marginBottom: '1.125rem',
            blockquote: {
              fontSize: '1.125rem',
              padding: theme('spacing.5'),
            },
          },
        },
        sm: {
          css: {
            h1: { fontSize: '2.25rem', lineHeight: '1.1' },
            h2: { fontSize: '1.75rem', lineHeight: '1.2' },
            h3: { fontSize: '1.5rem', lineHeight: '1.3' },
            h4: { fontSize: '1.25rem', lineHeight: '1.4' },
          },
        },
        md: {
          css: {
            h1: { fontSize: '2.5rem', lineHeight: '1.1' },
            h2: { fontSize: '2rem', lineHeight: '1.2' },
            h3: { fontSize: '1.75rem', lineHeight: '1.3' },
            h4: { fontSize: '1.5rem', lineHeight: '1.4' },
            marginBottom: '1.5rem',
          },
        },
        lg: {
          css: {
            h1: { fontSize: '3.75rem', lineHeight: '1' },
            h2: { fontSize: '2.75rem', lineHeight: '1.1' },
            h3: { fontSize: '2rem', lineHeight: '1.2' },
            h4: { fontSize: '1.75rem', lineHeight: '1.3' },
            marginBottom: '2rem',
            blockquote: {
              fontSize: '1.25rem',
              padding: theme('spacing.12'),
            },
          },
        },
        xl: {
          css: {
            h1: { fontSize: '5rem', lineHeight: '1' },
            h2: { fontSize: '3.5rem', lineHeight: '1.1' },
            h3: { fontSize: '2.5rem', lineHeight: '1.2' },
            h4: { fontSize: '2rem', lineHeight: '1.3' },
            marginBottom: '2.5rem',
          },
        },
        '2xl': {
          css: {
            h1: {
              fontSize: '6.25rem', // Your target size
              lineHeight: '1',
              marginBottom: '2rem',
            },
            h2: {
              fontSize: '4.125rem', // Your target size
              lineHeight: '1.1',
              marginBottom: '1.75rem',
            },
            h3: {
              fontSize: '3rem',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
            },
            h4: {
              fontSize: '2.25rem',
              lineHeight: '1.3',
              marginBottom: '1.25rem',
            },
            marginBottom: '3rem',
          },
        },
      }),
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'bob-and-swipe': {
          '0%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
            transformOrigin: 'bottom right',
            opacity: '0',
          },
          '2%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
            transformOrigin: 'bottom right',
            opacity: '1',
          },
          '10%': {
            transform: 'translateY(-3px) scale(1) rotate(0deg)',
            transformOrigin: 'bottom right',
            opacity: '1',
          },
          '20%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
            transformOrigin: 'bottom right',
            opacity: '1',
          },
          '30%': {
            transform: 'translateY(-3px) scale(1) rotate(0deg)',
            transformOrigin: 'bottom right',
            opacity: '1',
          },
          '40%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
            transformOrigin: 'bottom right',
            opacity: '1',
          },
          '50%': {
            transform: 'translateY(-3px) scale(1) rotate(0deg)',
            transformOrigin: 'bottom right',
            opacity: '1',
          },
          '60%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
            transformOrigin: 'bottom right',
            opacity: '1',
          },
          '70%': {
            transform: 'translateY(-3px) scale(1) rotate(0deg)',
            transformOrigin: 'bottom right',
            opacity: '1',
          },
          '74%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
            transformOrigin: 'bottom right',
            opacity: '1',
          },
          '78%': {
            transform: 'translateY(-4px) scale(0.92) rotate(0deg)',
            transformOrigin: 'bottom right',
            opacity: '1',
          },
          '84%': {
            transform: 'translateY(-32px) scale(0.92) rotate(10deg)',
            transformOrigin: 'bottom right',
            opacity: '1',
          },
          '86%': {
            transform: 'translateY(-32px) scale(0.92) rotate(10deg)',
            transformOrigin: 'bottom right',
            opacity: '1',
          },
          '88%': {
            transform: 'translateY(-32px) scale(0.92) rotate(10deg)',
            transformOrigin: 'bottom right',
            opacity: '0',
          },
          '90%, 100%': {
            transform: 'translateY(-32px) scale(0.92) rotate(10deg)',
            transformOrigin: 'bottom right',
            opacity: '0',
          },
        },
        'bob-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(4px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-out': 'fade-out 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        'bob-and-swipe': 'bob-and-swipe 8s ease-in-out infinite',
        'bob-down': 'bob-down 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.brand-gradient': {
          '@apply from-brand-primary-a to-brand-primary-b': {},
        },
        '.brand-gradient-active': {
          '@apply from-brand-primary-a-active to-brand-primary-b-active': {},
        },
        '.brand-gradient-secondary': {
          '@apply from-brand-secondary-a to-brand-secondary-b': {},
        },
        '.brand-gradient-secondary-active': {
          '@apply from-brand-secondary-a-active to-brand-secondary-b-active': {},
        },
        '.brand-gradient-text': {
          '@apply bg-gradient-to-b from-brand-primary-a to-brand-primary-b bg-clip-text text-transparent':
            {},
        },
        '.border-glow': {
          background: 'linear-gradient(to right, #00205A, #000013 50%, #00205A) border-box',
          border: '1px solid transparent',
          borderRadius: '0.75rem', // Tailwind's xl border radius value
          position: 'relative',
          isolation: 'isolate',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            padding: '1px',
            borderRadius: '0.75rem', // Same here
            background: 'var(--background)',
            '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            '-webkit-mask-composite': 'xor',
            'mask-composite': 'exclude',
          },
        },
        '.border-glow-active': {
          background: 'radial-gradient(circle, #3939FF 0%, #0404AD 100%) border-box',
          border: '1px solid transparent',
          borderRadius: '0.75rem',
          position: 'relative',
          isolation: 'isolate',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            padding: '1px',
            borderRadius: '0.75rem',
            background: 'var(--background)',
            '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            '-webkit-mask-composite': 'xor',
            'mask-composite': 'exclude',
          },
        },
      })
    }),
  ],
} satisfies Config

export default config
