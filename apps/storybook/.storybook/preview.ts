import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../style.css";
import "@silverweb/ui/dist/index.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
