import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      maxWidth: {
        '1440': '1440px',
      },
      colors: {
        background: "var(--primaryBgColor)",
        foreground: "var(--primaryWhiteColor)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) -2px)",
        sm: "calc(var(--radius) -4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    nextui(),
    require("tailwindcss-scrollbar")
  ],
};
export default config;
