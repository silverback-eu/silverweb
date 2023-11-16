import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Popover> = {
  title: "Shared/ Popover",
  tags: ["autodocs"],
  component: Popover,
  decorators: [
    (Story) => (
      <div style={{ padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Normal: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  ),
};
