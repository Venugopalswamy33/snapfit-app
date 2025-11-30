import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        snapfit: {
          yellow: '#FFFC00',
          black: '#000000',
          gray: '#F7F7F7',
        },
      },
    },
  },
  plugins: [],
}
export default config
