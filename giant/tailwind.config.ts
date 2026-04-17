import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        win98: {
          gray: "#C0C0C0",
          darkgray: "#808080",
          lightgray: "#DFDFDF",
          blue: "#000080",
          white: "#FFFFFF",
          black: "#000000",
          silver: "#C0C0C0",
          highlight: "#0000AA",
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        win98: ['"MS Sans Serif"', "Tahoma", "Arial", "sans-serif"],
      },
      boxShadow: {
        "win98-raised":
          "inset -1px -1px 0px #808080, inset 1px 1px 0px #FFFFFF, inset -2px -2px 0px #404040, inset 2px 2px 0px #DFDFDF",
        "win98-sunken":
          "inset 1px 1px 0px #808080, inset -1px -1px 0px #FFFFFF, inset 2px 2px 0px #404040, inset -2px -2px 0px #DFDFDF",
        "win98-window": "2px 2px 0px #000000",
        "win98-button-active":
          "inset 1px 1px 0px #808080, inset -1px -1px 0px #DFDFDF, inset 2px 2px 0px #404040, inset -2px -2px 0px #FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
