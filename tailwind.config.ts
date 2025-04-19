import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'base': '#FFFFFF',
        'bg-gradient-start': '#E5FF63',
        'bg-gradient-mid1': '#F0FFD0',
        'bg-gradient-mid2': '#FFFBF0',
        'bg-gradient-mid3': '#E3DAFF',
        'bg-gradient-end': '#ABC4FF',
        'text-main': '#233506',
        'text-sub': '#4E0532',
        'button-primary': '#FC4CFF',
        'button-text': '#FFFFFF',
        'button-disabled': '#E6C1E6',
        'button-disabled-text': '#F7ECF7',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
      fontFamily: {
        rounded: ['var(--font-m-plus-rounded-1c)', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '32px',
      },
      lineHeight: {
        base: '1.2',
        tight: '1',
        loose: '1.7',
      },
    },
  },
  plugins: [],
}

export default config




