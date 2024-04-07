import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
			colors: {
				"milky-white": "#FBFCFD",
				porcelain: "#F1F2F3",
				"alice-blue": "#F3F7FF",
				"ultramarine-blue": "#3366FF",
			}
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "4rem"
      }
    }
  },
  plugins: [],
};
export default config;
