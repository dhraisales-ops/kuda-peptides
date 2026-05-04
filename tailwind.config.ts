import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#050505",
          50: "#FAFAFA",
          100: "#F5F5F7",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111111",
          950: "#050505",
        },
        dark: {
          bg: "#050505",
          surface: "#0B0B0F",
          card: "#111116",
          border: "rgba(255,255,255,0.08)",
        },
        violet: {
          deep: "#5B21B6",
          royal: "#7C3AED",
          glow: "rgba(124,58,237,0.35)",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
          950: "#2E1065",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "ultra-wide": "0.22em",
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        "card": "0 1px 2px 0 rgb(0 0 0 / 0.2), 0 1px 3px 0 rgb(0 0 0 / 0.3)",
        "card-hover": "0 8px 32px -8px rgb(124 58 237 / 0.25), 0 2px 8px -2px rgb(0 0 0 / 0.4)",
        "card-purple": "0 0 30px rgba(124,58,237,0.08)",
        "vial": "0 24px 48px -16px rgb(0 0 0 / 0.6), 0 4px 12px -4px rgb(91 33 182 / 0.2)",
        "glow-purple": "0 0 40px rgba(124,58,237,0.15), 0 0 80px rgba(124,58,237,0.06)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
