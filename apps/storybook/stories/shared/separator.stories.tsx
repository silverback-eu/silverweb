import { Card, Separator } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Separator> = {
  title: "Shared/ Separator",
  tags: ["autodocs"],
  component: Separator,
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Normal: Story = {
  render: () => (
    <Card className="grid w-96 gap-4 p-4">
      Text Eins <Separator /> Text Zwei
    </Card>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Card className="flex w-96 gap-4 p-4">
      Text Eins{" "}
      <Separator
        orientation="vertical"
        style={{
          height: 30,
        }}
      />{" "}
      Text Zwei
    </Card>
  ),
};
