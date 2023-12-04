import { FileCard } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FileCard> = {
  title: "Shared/ FileCard",
  tags: ["autodocs"],
  component: FileCard,
  decorators: [
    (Story) => (
      <div className="m-5 w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FileCard>;

export const Normal: Story = {
  args: {
    info: {
      lastModified: 1629780000000,
      name: "test.txt",
      size: "1000kb",
      type: "text/plain",
      url: "",
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
