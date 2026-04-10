import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          coral: "#E8533A",
          "coral-light": "#FDF1EE",
          "coral-border": "#F5C4B8",
          blue: "#2563EB",
          "blue-light": "#EFF6FF",
          "blue-border": "#BFDBFE",
        },
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
