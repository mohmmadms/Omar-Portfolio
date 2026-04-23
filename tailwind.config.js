/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        abyss: "#0A0C10",
        steel: "#0F1520",
        ivory: "#E6E3DB",
        brass: "#C9A86A",
        cyan: "#7FE7D4",
        precision: "#FF4B2B",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        arabic: ["var(--font-arabic)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.03em",
      },
    },
  },
  plugins: [],
};
