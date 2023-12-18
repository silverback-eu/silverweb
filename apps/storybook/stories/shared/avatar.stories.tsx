import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "@silverweb/ui";

const meta: Meta<typeof Avatar> = {
  title: "Shared/ Avatar",
  tags: ["autodocs"],
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Normal: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/dontfred.png" />
      <AvatarFallback>DF</AvatarFallback>
    </Avatar>
  ),
};
