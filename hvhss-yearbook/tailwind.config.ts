import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBFAF7",
        ink: "#0B0B0C",
        navy: "#0A0E12",
        gold: {
          DEFAULT: "#C9A54B",
          light: "#E4CD8A",
          dim: "#8A7031"
        },
        dusk: {
          DEFAULT: "#7FA8C9",
          light: "#AFC9DE",
          dim: "#4E6E88"
        }
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"]
      },
      backgroundImage: {
        "horizon-gradient":
          "linear-gradient(180deg, rgba(201,165,75,0) 0%, rgba(201,165,75,0.35) 50%, rgba(201,165,75,0) 100%)"
      },
      keyframes: {
        "sun-rise": {
          "0%": { transform: "translateY(6px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        "sun-rise": "sun-rise 1.2s ease-out forwards",
        "float-slow": "float-slow 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
