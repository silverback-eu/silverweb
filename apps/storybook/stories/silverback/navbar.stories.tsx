import { Navbar } from "@silverweb/ui/silverback";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Navbar> = {
  title: "SilverBack/ Navbar",
  tags: ["autodocs"],
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Normal: Story = {};
