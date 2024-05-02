import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "gilroy-extrabold": ["Gilroy ExtraBold", "sans-serif"],
        "gilroy-bold": ["Gilroy Bold", "sans-serif"],
        "gilroy-medium": ["Gilroy Medium", "sans-serif"],
        "gilroy-regular": ["Gilroy Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config

