import { LoadingInput, NumberInput } from "@silverweb/ui/sw-inputs/default";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NumberInput> = {
  title: "SW-Inputs/ Default/ NumberInput",
  tags: ["autodocs"],
  component: NumberInput,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Normal: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "Disabled",
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: "Read Only",
  },
};

export const Prefix: Story = {
  args: {
    prefix: "Prefix",
  },
};

export const Success: Story = {
  args: {
    status: "success",
  },
  render: (args) => (
    <div className="grid gap-2">
      <NumberInput {...args} />
      <NumberInput {...args} placeholder="Placeholder" />
      <NumberInput {...args} defaultValue="Disabled" disabled />
      <NumberInput {...args} defaultValue="Read Only" readOnly />
      <NumberInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <NumberInput {...args} />
      <NumberInput {...args} placeholder="Placeholder" />
      <NumberInput {...args} defaultValue="Disabled" disabled />
      <NumberInput {...args} defaultValue="Read Only" readOnly />
      <NumberInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="text" />,
};
