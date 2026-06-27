import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          90: "rgba(10,10,10,0.9)",
          70: "rgba(10,10,10,0.7)",
          50: "rgba(10,10,10,0.5)",
          30: "rgba(10,10,10,0.3)",
          10: "rgba(10,10,10,0.1)",
        },
        paper: {
          DEFAULT: "#f7f6f2",
          dim: "#efede7",
          90: "rgba(247,246,242,0.9)",
          70: "rgba(247,246,242,0.7)",
          50: "rgba(247,246,242,0.5)",
          30: "rgba(247,246,242,0.3)",
          10: "rgba(247,246,242,0.1)",
        },
        mute: "#86868b",
        line: "rgba(10,10,10,0.1)",
        "line-light": "rgba(247,246,242,0.16)",
        signal: "#ff4d2e",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(3.4rem, 1.6rem + 9vw, 10.5rem)", { lineHeight: "0.94", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2.6rem, 1.4rem + 6vw, 7rem)", { lineHeight: "0.96", letterSpacing: "-0.03em" }],
        "display-3": ["clamp(2rem, 1.2rem + 4vw, 4.5rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "heading-1": ["clamp(1.75rem, 1.2rem + 2.2vw, 3rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "heading-2": ["clamp(1.4rem, 1.1rem + 1.2vw, 2rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "body-lg": ["clamp(1.05rem, 0.95rem + 0.3vw, 1.35rem)", { lineHeight: "1.5" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        eyebrow: ["0.8125rem", { lineHeight: "1", letterSpacing: "0.14em" }],
        caption: ["0.8125rem", { lineHeight: "1.4" }],
      },
      spacing: {
        gutter: "clamp(1.25rem, 1rem + 1.5vw, 3rem)",
        section: "clamp(5rem, 4rem + 6vw, 10rem)",
        "section-sm": "clamp(3rem, 2.5rem + 3vw, 6rem)",
      },
      maxWidth: {
        container: "1680px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      zIndex: {
        cursor: "100",
        nav: "90",
        loader: "110",
        transition: "120",
      },
      backdropBlur: {
        glass: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
