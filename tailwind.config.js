/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        "fira-code": ["var(--font-fira-code)", "monospace"],
      },
      colors: {
        // Nord Color Palette
        "nord-0": "#2e3440",
        "nord-1": "#3b4252",
        "nord-2": "#434c5e",
        "nord-3": "#4c566a",
        "nord-4": "#d8dee9",
        "nord-5": "#e5e9f0",
        "nord-6": "#eceff4",
        "nord-7": "#8fbcbb",
        "nord-8": "#88c0d0",
        "nord-9": "#81a1c1",
        "nord-10": "#5e81ac",
        "nord-11": "#bf616a",
        "nord-12": "#d08770",
        "nord-13": "#ebcb8b",
        "nord-14": "#a3be8c",
        "nord-15": "#b48ead",
        // Semantic colors
        primary: "#88c0d0",
        secondary: "#8fbcbb",
        accent: "#ebcb8b",
        success: "#a3be8c",
        warning: "#d08770",
        error: "#bf616a",
        purple: "#b48ead",
      },
      animation: {
        "gradient-shift": "gradient-shift 3s ease infinite",
        "pulse-subtle": "pulseSubtle 2s ease-in-out infinite",
        float: "float 20s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
