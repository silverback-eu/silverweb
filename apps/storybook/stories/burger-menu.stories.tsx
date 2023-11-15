import type { Meta, StoryObj } from "@storybook/react";
import { BurgerMenuIcon } from "@silverweb/ui/silverback";

const meta: Meta<typeof BurgerMenuIcon> = {
  title: "SilverBack/ BurgerMenuIcon",
  tags: ["autodocs"],
  component: BurgerMenuIcon,
};

export default meta;

type Story = StoryObj<typeof BurgerMenuIcon>;

export const Normal: Story = {
  args: {},
};
