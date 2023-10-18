import type { StorybookConfig } from "@storybook/nextjs";
const path = require('path');

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    Object.assign(config.resolve, {
      alias: {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname, '../'),
      }
    })
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
