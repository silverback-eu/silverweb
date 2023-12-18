import type { Meta, StoryObj } from "@storybook/react";
import { ContextProvider } from "@silverweb/ui";

const meta: Meta<typeof ContextProvider> = {
  title: "Apps/ ContextMenu",
  tags: ["autodocs"],
  component: ContextProvider,
  render: (args) => (
    <ContextProvider {...args}>
      <div className="flex h-96 w-full items-center justify-center rounded-lg border border-border p-5">
        <div>Right Click to open the context menu</div>
      </div>
    </ContextProvider>
  ),
};

export default meta;

type Story = StoryObj<typeof ContextProvider>;

export const Normal: Story = {};

export const QuickLinks: Story = {
  args: {
    items: [
      {
        type: "submenu",
        label: "Quick Links",
        items: [
          {
            type: "item",
            label: "LinkedIn",
            onClick: () => {
              window.open(
                "https://www.linkedin.com/company/silverback-staffing/",
              );
            },
          },
          {
            type: "item",
            label: "Industry Insights",
            onClick: () => {
              window.open("/industry-insights");
            },
          },
          {
            type: "item",
            label: "Mail",
            onClick: () => {
              window.open("mailto:work@silverback.ie  ");
            },
          },
          {
            type: "item",
            label: "Phone",
            onClick: () => {
              window.open("tel:+35314410102");
            },
          },
          {
            type: "item",
            label: "Contact Us",
            onClick: () => {
              window.open("/connect");
            },
          },
        ],
      },
    ],
  },
};
