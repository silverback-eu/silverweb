import { Toast } from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toast> = {
  title: "Shared/ Toast",
  tags: ["autodocs"],
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Normal: Story = {
  render: () => <Toast />,
};
