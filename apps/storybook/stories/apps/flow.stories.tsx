import type { Meta, StoryObj } from "@storybook/react";
import { Flow } from "@silverweb/ui/apps";

const meta: Meta<typeof Flow> = {
  title: "Apps/ Flow",
  tags: ["autodocs"],
  component: Flow,
};

export default meta;

type Story = StoryObj<typeof Flow>;

export const Normal: Story = {
  args: {},
};
