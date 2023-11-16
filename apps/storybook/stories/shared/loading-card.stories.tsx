import { LoadingCard } from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoadingCard> = {
  title: "Shared/ LoadingCard",
  tags: ["autodocs"],
  component: LoadingCard,
  decorators: [
    (Story) => (
      <div className="m-5 w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LoadingCard>;

export const Normal: Story = {};
