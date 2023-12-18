import type { Meta, StoryObj } from "@storybook/react";
import { Colors } from "@silverweb/ui";

const meta: Meta<typeof Colors> = {
  title: "Colors",
  tags: ["autodocs"],
  component: Colors,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<unknown>;

export const Normal: Story = {};
