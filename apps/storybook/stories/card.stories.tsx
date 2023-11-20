import { Card } from "@turboplus/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Card",
  tags: ["autodocs"],
  component: Card,
  decorators: [
    (Story) => (
      <div
        style={{
          width: 300,
          display: "grid",
          textAlign: "left",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Normal: Story = {
  args: {
    title: "Lorem ipsum dolor",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui, quo distinctio ab assumenda.",
    href: "/",
  },
};
