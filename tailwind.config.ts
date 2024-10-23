import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
      },
      colors: {
        background: {
          DEFAULT: "#00020f",
        },
        text: {
          secondary: "#6d7792",
        },
        primary: {
          DEFAULT: "#184EFF",
          light: "#3362ff",
          400: "#1b2570",
          500: "#0e122e",
          700: "#131839",
          800: "#00041f",
        }
      },
      backgroundImage: {
        leftLine: "linear-gradient(270deg,#171d45 28.82882882882883%,rgba(23,29,69,0) 100%)",
        rightLine: "linear-gradient(270deg,rgba(23,29,69,0) 28.82882882882883%,rgb(23,29,69) 100%)"
      },
      keyframes: {
				slideDown: {
					from: { height: "0px" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				slideUp: {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0px" },
				},
			},
			animation: {
				slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
				slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
			},
    },
  },
  plugins: [],
};
export default config;
