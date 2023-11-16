import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@silverweb/ui/shared";

const meta: Meta<typeof Badge> = {
  title: "Shared/ Badge",
  tags: ["autodocs"],
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Normal: Story = {
  args: {
    children: "Badge",
  },
};

export const Outline: Story = {
  args: {
    children: "Badge",
    variant: "outline",
  },
};

export const Destructive: Story = {
  args: {
    children: "Badge",
    variant: "destructive",
  },
};
export const Secondary: Story = {
  args: {
    children: "Badge",
    variant: "secondary",
  },
};
