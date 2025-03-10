import scrollbarHide from "tailwind-scrollbar-hide";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "smoky-black": "#121212",
        "light-black": "#1e1e21",
        "dark-black": "#1a1a1c",
        "orenge-yellow": "#fceb83",
        "light-gray": "#383838",
      },
      fontFamily: {
        iranSans: "var(--font-iran-sans)",
      },
    },
  },
  plugins: [scrollbarHide],
};
export default config;
