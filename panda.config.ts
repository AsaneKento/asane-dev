import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  jsxFramework: "react",
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            value: "#F91880",
          },
          secondary: {
            value: "#3b82f6",
          },
          accent: {
            value: "",
          },
          info: {
            value: "#0284c7",
          },
          success: {
            value: "#16a34a",
          },
          warning: {
            value: "#991b1b",
          },
          error: {
            value: "#b91c1c",
          },
          white: {
            value: "#F1F5F9",
            description: "メインフォントカラー",
          },
          black: {
            value: "#030712",
            description: "サブフォントカラー",
          },
          base: {
            value: "#0F1729",
            description: "背景などのメインベースカラー",
          },
          base100: {
            value: "#404040",
            description: "コンテンツカラー → 暗め",
          },
          base200: {
            value: "#525252",
            description: "コンテンツカラー → 普通",
          },
          base300: {
            value: "#737373",
            description: "コンテンツカラー → 明るめ",
          },
        },
        zIndex: {
          drawer: { value: 1200 },
          modal: { value: 1300 },
          snackbar: { value: 1400 },
        },
      },
    },
  },
  globalCss: {
    html: {
      h: 'full',
    },
    body: {
      h: 'full',
      bgColor: 'base',
      color: 'white'
    },
  },
  outdir: "./src/styled-system",
})
