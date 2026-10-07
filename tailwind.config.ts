import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        serif: ["'Newsreader'", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        canvas: "#0c0d12",
        panel: "#12131a",
        card: "#161722",
        border: "rgba(255, 255, 255, 0.08)",
        ring: "rgba(255, 255, 255, 0.15)",
        foreground: "#e4e6ee",
      },
    },
  },
  plugins: [tailwindAnimate],
};

export default config;
