import type { StorybookConfig } from "@storybook/nextjs"
import path from "path"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ["../public"],
  webpackFinal(config) {
    if (process.env.GH_PAGES) {
      if (config.module?.rules !== undefined) {
        config.module.rules.push({
          test: /.svelte$/,
          loader: "string-replace-loader",
          options: {
            search: "/image/",
            replace: "/asane-dev/image/",
          },
        })
      }
    }
    if (config.resolve !== undefined) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "~": path.resolve(__dirname, "../src"),
      }
    }

    return config
  },
}
export default config
