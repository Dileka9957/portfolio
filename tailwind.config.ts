import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        jost: ['var(--font-jost)', ...fontFamily.sans],
      },
      fontSize: {
        hero: `clamp(4rem, 1vw + 2.75rem, 5.375rem)`,
        hero_sm: `clamp(3rem, 2vw + 1rem, 4rem)`,
        h1: `clamp(2rem, 2vw + 1rem, 2.667rem)`,
        h1_sm: `clamp(1rem, 2vw + 1rem, 2rem)`,
        h2: `clamp(1.5rem, 1vw + 1rem, 1.5rem);`,
        h2_sm: `clamp(1.286rem, 1vw + 1rem, 1.714rem)`,
        heading: `clamp(2.75rem, 3vw + 1rem, 3.5rem)`,
        heading_sm: `clamp(2.25rem, 5vw + 1rem, 2.75rem)`,
        heading2: `clamp(1.75rem, 1vw + 1rem, 2rem)`,
        heading2_sm: `clamp(1.5rem, 2vw + 1rem, 1.75rem)`,
        heading3: `clamp(2.25rem, 2vw + 1rem, 2.75rem)`,
        heading3_sm: `clamp(1.75rem, 3vw + 1rem, 2.25rem)`,
        body: `clamp(1.333rem, 1vw + 1rem, 1.667rem)`,
        body_sm: `clamp(1rem, 1vw + 1rem, 1.429rem)`,
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;



