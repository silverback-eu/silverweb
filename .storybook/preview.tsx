import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import * as DocBlock from '@storybook/blocks'
import React from "react";

import "./global.css";
import 'reactflow/dist/style.css';

const preview: Preview = {
  parameters: {
    docs: {
      page: () => (
        <div>
          <style>{`
          .docs-story{
            background: hsl(var(--background));
          }
          `}</style>
          <DocBlock.Title/>
          <DocBlock.Description/>
          <DocBlock.Primary />
          <DocBlock.Controls />
          <DocBlock.Stories />
        </div>
      )
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="font-graphik antialiased">
        <Story />
      </div>
    ),
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ]
};

export default preview;
