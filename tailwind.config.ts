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
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        orange: "hsl(26, 100%, 55%)",
        pale_orange: "hsl(25, 100%, 94%)",
        very_dark_blue: "hsl(220, 13%, 13%)",
        dark_grayish_blue: "hsl(219, 9%, 45%)",
        grayish_blue: "hsl(220, 14%, 75%)",
        light_grayish_blue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
      },
      screen: {
        md: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
