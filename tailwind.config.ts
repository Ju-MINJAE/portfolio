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
        nextjs: '#000000',
        vue: '#4FC08D',
        typescript: '#3178C6',
        axios: '#5A29E4',
        firebase: '#DD2C00',
        pwa: '#5A0FC8',
        vercel: '#222222',
        tailwindcss: '#06B6D4',
        awsroute53: '#8C4FFF',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-react',
    'bg-nextjs',
    'bg-vue',
    'bg-typescript',
    'bg-axios',
    'bg-firebase',
    'bg-pwa',
    'bg-vercel',
    'bg-tailwindcss',
    'bg-awsroute53',
  ],
} satisfies Config;
