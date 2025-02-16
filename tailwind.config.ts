import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        tech: {
          react: '#6cd4f1',
          typescript: '#3178C6',
          javascript: '#ead434',
          tailwind: '#06B6D4',
          firebase: '#DD2C00',
          redux: '#764ABC',
          axios: '#5A29E4',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
