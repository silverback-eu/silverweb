import { Label, RadioGroup, RadioGroupItem } from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioGroup> = {
  title: "Shared/ RadioGroup",
  tags: ["autodocs"],
  component: RadioGroup,
  render: (args) => (
    <div className="grid space-y-2">
      <RadioGroup {...args}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="1" value="option-one" />
          <Label htmlFor="1">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="2" value="option-two" />
          <Label htmlFor="2">Option Two</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="3" value="option-three" />
          <Label htmlFor="3">Option Three</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Normal: Story = {
  args: {
    defaultValue: "1",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "1",
    disabled: true,
  },
};
