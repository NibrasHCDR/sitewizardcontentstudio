import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        afacad: ['Adacad','sans-serif'],
        josefin: ['Josefin San','sans-serif'],
        signika: ['Signika Negative','sans-serif'],
        rubik: ['Rubik','sans-serif'],
        garamond: ['EB Garamond','serif']
      },
    },
  },
  plugins: [],
}
export default config
