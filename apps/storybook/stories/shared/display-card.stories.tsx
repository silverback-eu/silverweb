import { DisplayCard } from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";
import { HardHat } from "lucide-react";

const meta: Meta<typeof DisplayCard> = {
  title: "Shared/ DisplayCard",
  tags: ["autodocs"],
  component: DisplayCard,
  decorators: [
    (Story) => (
      <div className="m-5 w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DisplayCard>;

export const Normal: Story = {
  args: {
    header: "Display Card",
    description: "Display card description",
    Icon: <HardHat />,
  },
};

export const Styled: Story = {
  args: {
    header: "Display Card",
    description: "Display card description",
    className: "text-red-500",
    Icon: <HardHat />,
  },
};
