import { Toaster } from "@silverweb/ui/apps";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toaster> = {
  title: "Shared/ Toast",
  tags: ["autodocs"],
  component: Toaster,
};

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Normal: Story = {
  render: () => <Toaster />,
};
