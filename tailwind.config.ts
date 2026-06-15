import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: "#5DBFA6",
        "mint-dark": "#254D43",
        coral: "#FF725E",
        "coral-soft": "#FFE8E2",
        paper: "#F8FBF9",
        "paper-mint": "#EAF7F2",
        ink: "#26322F",
        muted: "#6E7C78",
        line: "#E3ECE8"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(37, 77, 67, 0.11)",
        card: "0 12px 34px rgba(37, 77, 67, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
