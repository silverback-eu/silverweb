import { Checkbox, Label } from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  title: "Shared/ Label",
  tags: ["autodocs"],
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Normal: Story = {
  args: {
    children: (
      <div className="flex items-center space-x-2">
        <Checkbox id="demo" />
        <Label htmlFor="demo">This is a demo label</Label>
      </div>
    ),
  },
};
