import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        react: '#55b8d4',
        vue: '#4FC08D',
        typescript: '#3178C6',
        axios: '#5A29E4',
        firebase: '#DD2C00',
        pwa: '#5A0FC8',
        vercel: '#000000',
        tailwindcss: '#06B6D4',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-react',
    'bg-vue',
    'bg-typescript',
    'bg-axios',
    'bg-firebase',
    'bg-pwa',
    'bg-vercel',
    'bg-tailwindcss',
  ],
} satisfies Config;
