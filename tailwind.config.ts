import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "milk-white": "#FAFCFD",
        porcelain: "#F1F2F3",
        "alice-blue": "#F3F7FF",
        "ultramarine-blue": "#3366FF",
        cornflower: "#5378F6",
        onyx: "#101012",
        geyser: "#D4DCF1",
        "grey-goose": "#D1D1D1",
        "down-river": "#0D2159",
        "dark-jungle-green": "#1E1E1E",
        "dark-blue-grey": "#213449",
        golden: "#FABB07",
        alabaster: "#FBFAFC",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "lg": "3rem"
      },
    },
  },
  plugins: [],
};
export default config;
