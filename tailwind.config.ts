/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: "#0D0C22",
      stone: "#231F20",
      orange: "#e86100",
      zinc: {
        100: "#f6b511",
        200: "#F0F0F0",
        300: "#D9D9D9",
        400: "#D8D8D8",
        500: "#898989",
        600: "#B0B0B0",
        700: "#787878",
        800: "#292A32",
        900: "#af9469",
      },
      main: {
        100: "#e86100",
        200: "#F0F0F0",
        300: "#D9D9D9",
        400: "#D8D8D8",
        500: "#898989",
        600: "#B0B0B0",
        700: "#787878",
        800: "#292A32",
        900: "#af9469",
      },
    },
    boxShadow: {
      card: "0px 5px 0px 0px #191A23",
    },
    extend: {
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '5rem',
      }
    },
  },
};
