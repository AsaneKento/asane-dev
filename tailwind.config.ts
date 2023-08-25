import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        base: "0px 3px 10px rgb(230,231,232,0.2)",
      },
      dropShadow: {
        base: "0px 2px 2px rgb(230,231,232,0.2)",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        custom: {
          ...require("daisyui/src/theming/themes")["[data-theme=night]"],
          primary: "#2196f3",
          "primary-content": "#ffff",
          secondary: "#f50057",
          accent: "#F91880",
          neutral: "#1d283a",
          "base-100": "#0f1729",
          "base-200": "#313235",
          "base-content": "#ffff",
          info: "#29b6f6",
          "info-content": "#ffff",
          success: "#66bb6a",
          "success-content": "#ffff",
          warning: "#ffa726",
          "warning-content": "#ffff",
          error: "#f44336",
          "error-content": "#ffff",
        },
      },
    ],
    prefix: "daisy-",
  },
}
export default config
