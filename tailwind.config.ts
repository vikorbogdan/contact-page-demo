import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: {
        100: "#141414",
        90: "#191919",
        80: "#1E1E1E",
        70: "#232323",
        60: "#282828",
        50: "#2D2D2D",
        40: "#323232",
        30: "#373737",
        20: "#3C3C3C",
        10: "#414141",
      },
      white: {
        100: "#FFFFFF",
        56: "#FFFFFF8F",
        32: "#FFFFFF52",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-lexend-deca)"],
        display: ["var(--font-glysa)"],
      },
    },
  },
  plugins: [],
};
export default config;
