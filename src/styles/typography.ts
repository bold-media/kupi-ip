const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px: number) => `${round(px / 16)}rem`
const em = (px: number, base: number) => `${round(px / base)}em`

export const typographyConfig = ({ theme }: any) => ({
  DEFAULT: {
    css: {
      fontWeight: 300,
      maxWidth: 'none',
      '.font-normal p': {
        fontWeight: 400,
      },
      '.font-medium p': {
        fontWeight: 500,
      },
      '.text-left p': {
        marginLeft: '0',
        marginRight: '0',
      },
      p: {
        maxWidth: rem(1000),
        marginBottom: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'hsl(0 0% 80%)',
      },
      li: {
        color: 'hsl(0 0% 80%)',
      },
      strong: {
        color: 'hsl(0 0% 80%)',
      },
      'p + p': {
        marginTop: rem(16),
      },
      'p:not(:last-child)': {
        marginBottom: rem(16),
      },
      'p br': {
        display: 'block',
        marginBottom: rem(8),
        content: '""',
        height: rem(8),
      },
      'h1, h2, h3, h4, h5, h6': {
        fontWeight: 300,
        fontStyle: 'italic',
        textTransform: 'lowercase',
        color: 'hsl(0 0% 100%)',
      },
      h1: {
        fontSize: rem(60),
        marginBottom: rem(40),
      },
      h2: {
        fontSize: rem(38),
        marginBottom: rem(24),
      },
      h3: {
        fontSize: rem(24),
        marginBottom: rem(24),
      },
      '.small-header h1': {
        fontSize: rem(38),
        marginBottom: rem(24),
      },
      a: {
        fontWeight: 300,
        'text-decoration-thickness': '0.5px',
        'text-underline-offset': rem(5),
      },
      blockquote: {
        backgroundColor: 'hsl(var(--background-light))',
        borderLeftWidth: '0',
        borderRadius: theme('borderRadius.lg'),
        padding: rem(20),
        margin: `${theme('spacing.8')} 0`,
        color: 'hsl(var(--foreground))',
        fontWeight: '300',
        fontSize: rem(18), // 18px
        'p:first-of-type::before': {
          content: 'none',
        },
        'p:last-of-type::after': {
          content: 'none',
        },
      },
    },
  },
  mobile: {
    css: {
      p: {
        fontSize: rem(16),
        lineHeight: '1.3',
      },
      '.sm-text p': { fontSize: rem(14), lineHeight: 'normal' },
      '.md-text p': { fontSize: rem(18), lineHeight: 1.2 },
      '.lg-text p': { fontSize: rem(20), lineHeight: 1.2 },

      h1: {
        fontSize: rem(42),
        lineHeight: 1,
      },
      h2: {
        fontSize: rem(32),
        lineHeight: 1,
      },
      h3: {
        fontSize: rem(24),
        lineHeight: 'normal',
      },
      '.small-header h1': {
        fontSize: rem(32),
        lineHeight: 1,
      },
    },
  },
  tablet: {
    css: {
      p: {
        fontSize: rem(16),
        lineHeight: '1.3',
      },
      '.sm-text p': { fontSize: rem(14), lineHeight: 'normal' },
      '.md-text p': { fontSize: rem(21), lineHeight: 1.2 },
      '.lg-text p': { fontSize: rem(24), lineHeight: 1.2 },

      h1: {
        fontSize: rem(71),
        lineHeight: 1,
      },
      h2: {
        fontSize: rem(52),
        lineHeight: 1,
      },
      h3: {
        fontSize: rem(27),
        lineHeight: 'normal',
      },
      '.small-header h1': {
        fontSize: rem(52),
        lineHeight: 1,
      },
    },
  },
  desktop: {
    css: {
      p: {
        fontSize: rem(16),
        lineHeight: 1.3,
      },
      '.sm-text p': { fontSize: rem(14), lineHeight: 'normal' },
      '.md-text p': { fontSize: rem(24), lineHeight: 1.2 },
      '.lg-text p': { fontSize: rem(28), lineHeight: 1.2 },

      h1: {
        fontSize: rem(100),
        lineHeight: 1,
        marginBottom: rem(32),
      },
      h2: {
        fontSize: rem(73),
        lineHeight: 1,
        marginBottom: rem(32),
      },
      h3: {
        fontSize: rem(30),
        lineHeight: 'normal',
      },
      '.small-header h1': {
        fontSize: rem(73),
        lineHeight: 1,
        marginBottom: rem(32),
      },
    },
  },
  'blog-mobile': {
    css: {
      fontWeight: 400,
      p: {
        fontSize: rem(16),
        lineHeight: '1.3',
      },
      h1: {
        fontSize: rem(30),
        lineHeight: 1,
        marginBottom: rem(40),
      },
      h2: {
        fontSize: rem(24),
        lineHeight: 1,
        marginBottom: rem(24),
      },
      h3: {
        fontSize: rem(20),
        lineHeight: 1,
      },
      blockquote: {
        fontSize: rem(18),
        lineHeight: 1.2,
      },
    },
  },
  'blog-tablet': {
    css: {
      p: {
        fontSize: rem(16),
        lineHeight: '1.3',
      },
      h1: {
        fontSize: rem(42),
        lineHeight: 1,
      },
      h2: {
        fontSize: rem(32),
        lineHeight: 1,
      },
      h3: {
        fontSize: rem(22),
        lineHeight: 1,
      },
      blockquote: {
        fontSize: rem(18),
        padding: rem(36),
        lineHeight: 1.2,
      },
    },
  },
  'blog-desktop': {
    css: {
      h1: {
        fontSize: rem(60),
        lineHeight: 1,
      },
      h2: {
        fontSize: rem(38),
        lineHeight: 1,
      },
      h3: {
        fontSize: rem(24),
        lineHeight: 1,
      },
      blockquote: {
        fontSize: rem(20),
        lineHeight: 1.2,
        padding: rem(50),
      },
    },
  },
})
