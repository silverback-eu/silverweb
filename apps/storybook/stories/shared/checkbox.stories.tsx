import { Checkbox } from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "Shared/ Checkbox",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          margin: 40,
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Normal: Story = {
  render: (args) => (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="demo" />
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="demo"
        >
          Check me
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="demo1" />
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="demo1"
        >
          Check me
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="demo2" />
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="demo2"
        >
          Check me
        </label>
      </div>
    </div>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <div className="space-y-2">
      <div className="items-top flex space-x-2">
        <Checkbox {...args} id="demo" />
        <div className="grid gap-1.5 leading-none">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="demo"
          >
            Check me
          </label>
          <p className="text-sm text-muted-foreground">
            Description of the checkbox
          </p>
        </div>
      </div>
      <div className="items-top flex space-x-2">
        <Checkbox {...args} id="demo" />
        <div className="grid gap-1.5 leading-none">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="demo"
          >
            Check me
          </label>
          <p className="text-sm text-muted-foreground">
            Description of the checkbox
          </p>
        </div>
      </div>
      <div className="items-top flex space-x-2">
        <Checkbox {...args} id="demo" />
        <div className="grid gap-1.5 leading-none">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="demo"
          >
            Check me
          </label>
          <p className="text-sm text-muted-foreground">
            Description of the checkbox
          </p>
        </div>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="demo" />
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="demo"
        >
          Check me
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="demo1" />
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="demo1"
        >
          Check me
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="demo2" />
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="demo2"
        >
          Check me
        </label>
      </div>
    </div>
  ),
  args: {
    disabled: true,
  },
};
