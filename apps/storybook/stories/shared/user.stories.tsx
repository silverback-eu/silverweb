import { User } from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof User> = {
  title: "Shared/ User",
  tags: ["autodocs"],
  component: User,
};

export default meta;

type Story = StoryObj<typeof User>;

export const Normal: Story = {
  args: {
    alt: "Demo User",
    fallback: "DU",
    src: "https://github.com/elie222.png",
  },
};

export const Employee: Story = {
  args: {
    alt: "Demo User",
    fallback: "DU",
    src: "https://github.com/elie222.png",
    type: "Employee",
  },
};

export const Admin: Story = {
  args: {
    alt: "Demo User",
    fallback: "DU",
    src: "https://github.com/elie222.png",
    type: "Admin",
  },
};

export const Client: Story = {
  args: {
    alt: "Demo User",
    fallback: "DU",
    src: "https://github.com/elie222.png",
    type: "Client",
  },
};
