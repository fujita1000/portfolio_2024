import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'header_bg': '#383838',
        "skills_border": "#848484",
        "select_bg": "#525252",
        "aside_bg": "#202020",
        "h1_bg": "#FF8E8E",
        "p_bg": "#C2C2C2",
        "select_border": "#ABABAB",
        "popup_bg": "#2C2C2C",
        "profile_bg" :"#474747",
        "remove_bg" : "#FF0000",
      },
    },
  },
  plugins: [],
}
export default config
