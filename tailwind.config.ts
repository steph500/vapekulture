import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        midnight: "#0b1020",
        panel: "rgba(13, 19, 35, 0.72)",
        lime: "#c7ff3d",
        magenta: "#ff4fd8",
        teal: "#2ef2e5",
        ice: "#86bfff",
        smoke: "#9ca7c0"
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"]
      },
      boxShadow: {
        luxe: "0 24px 80px rgba(0, 0, 0, 0.45)",
        neon: "0 0 30px rgba(46, 242, 229, 0.18)",
        lime: "0 0 35px rgba(199, 255, 61, 0.22)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
