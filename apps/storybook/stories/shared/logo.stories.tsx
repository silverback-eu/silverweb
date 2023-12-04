import { Logo } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Logo> = {
  title: "Shared/ Logo",
  tags: ["autodocs"],
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Normal: Story = {};

export const ChangeSize: Story = {
  args: {
    wh: 100,
  },
};
