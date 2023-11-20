import { Card } from "@turboplus/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Shared/ Card",
  tags: ["autodocs"],
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Normal: Story = {
  args: {
    href: "https://turbo.build/repo/docs",
    title: "Docs",
    children: "Find in-depth information about Turborepo features and API.",
  },
};
