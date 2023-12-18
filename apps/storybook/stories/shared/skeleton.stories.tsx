import { Skeleton } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Skeleton> = {
  title: "Shared/ Skeleton",
  tags: ["autodocs"],
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
  args: {
    style: {
      width: "200px",
      height: "40px",
    },
  },
};
