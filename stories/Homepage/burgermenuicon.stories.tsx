import BurgerMenuIcon from "@/components/silverback/BurgerMenuIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BurgerMenuIcon> = {
  title: "SilverBack/ BurgerMenuIcon",
  tags: ['autodocs'],
  component: BurgerMenuIcon,
};

export default meta;

type Story = StoryObj<typeof BurgerMenuIcon>;

export const Normal: Story = {
  render: () => <BurgerMenuIcon />,
};

export const Open: Story = {
  args: {
    open: true
  },
  // render: () => <BurgerMenuIcon open={true}/>,
};
export const Closed: Story = {
  args: {
    open: false
  },
  // render: () => <BurgerMenuIcon open={false}/>,
};

