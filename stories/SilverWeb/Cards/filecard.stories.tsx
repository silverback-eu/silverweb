import FileCard from "@/components/silverweb/cards/FileCard";
import LoadingCard from "@/components/silverweb/cards/LoadingCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FileCard> = {
  title: "SilverWeb/Cards/FileCard",
  component: FileCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', width: '250px' }}>
        <Story />
      </div>
    ),
]
};

export default meta;

type Story = StoryObj<typeof FileCard>;

export const Normal: Story = {
    args: {
        info: {
          name: "Example_File.png",
          type: "image/png",
          size: "1MB",
          lastModified: 2021332,
          uri: "",
        },
    }
};

export const Loading: Story = {
    render: () => <LoadingCard />
}
