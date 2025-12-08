import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./client/index.html", "./client/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        "primary-foreground": "#0a0a0a",
        background: "#0a0a0a",
        foreground: "#f5f5f5",
        card: "#1a1a1a",
        "card-foreground": "#f5f5f5",
        muted: "#404040",
        "muted-foreground": "#a0a0a0",
        accent: "#FFD700",
        "accent-foreground": "#0a0a0a",
        border: "#2a2a2a",
      },
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
