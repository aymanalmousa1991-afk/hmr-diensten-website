import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        brand: {
          primary: "#0F172A",
          accent: "#3B82F6",
          blue: "#1D4ED8",
          sky: "#38BDF8",
          dark: "#0B1220",
          light: "#F6F8FC",
          white: "#FFFFFF",
        },
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgb(15 23 42 / 0.08), 0 12px 32px -8px rgb(15 23 42 / 0.12)",
        card: "0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -4px rgb(15 23 42 / 0.08)",
        "card-hover":
          "0 2px 4px rgb(15 23 42 / 0.06), 0 20px 48px -12px rgb(15 23 42 / 0.18)",
        glow: "0 0 0 1px rgb(59 130 246 / 0.15), 0 8px 32px -4px rgb(59 130 246 / 0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(12px, -16px) scale(1.04)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 1.5s infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "Inter", ...defaultTheme.fontFamily.sans],
      display: [
        "var(--font-jakarta)",
        "var(--font-inter)",
        ...defaultTheme.fontFamily.sans,
      ],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
