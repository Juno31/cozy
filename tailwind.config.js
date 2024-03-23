/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'display-large-bold': ['72px', { lineHeight: '8px', fontWeight: 700 }],
        'display-large': ['72px', { lineHeight: '8px' }],

        'display-medium-bold': [
          '60px',
          { lineHeight: '72px', fontWeight: 700 },
        ],
        'display-medium': ['60px', { lineHeight: '72px' }],

        'display-small-bold': ['48px', { lineHeight: '60px', fontWeight: 700 }],
        'display-small': ['48px', { lineHeight: '60px' }],

        'headline-large-bold': [
          '32px',
          { lineHeight: '40px', fontWeight: 700 },
        ],
        'headline-medium-bold': [
          '28px',
          { lineHeight: '36px', fontWeight: 700 },
        ],
        'headline-small-bold': [
          '24px',
          { lineHeight: '32px', fontWeight: 700 },
        ],
        'title-large-bold': ['22px', { lineHeight: '28px', fontWeight: 700 }],
        'title-medium-bold': ['20px', { lineHeight: '26px', fontWeight: 700 }],
        'title-medium': ['20px', { lineHeight: '26px' }],
        'body-giant-serif': ['18px', { lineHeight: '28px', fontWeight: 500 }],
        'body-wide': ['16px', { lineHeight: '32px' }],
        'body-wide-serif': ['16px', { lineHeight: '32px', fontWeight: 500 }],
        'body-large': ['16px', { lineHeight: '24px' }],
        'body-large-bold': ['16px', { lineHeight: '24px', fontWeight: 700 }],
        'body-medium': ['14px', { lineHeight: '20px' }],
        'body-medium-bold': ['14px', { lineHeight: '20px', fontWeight: 700 }],
        'body-small': ['12px', { lineHeight: '16px' }],
        28: ['1.6875rem', { lineHeight: '2.125rem' }], // 24px
      },
    },
  },
  plugins: [],
};
