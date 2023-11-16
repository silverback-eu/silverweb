import { LoadingInput, TextInput } from "@silverweb/ui/sw-inputs/default";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextInput> = {
  title: "SW-Inputs/ Default/ TextInput",
  tags: ["autodocs"],
  component: TextInput,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TextInput>;

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
      <TextInput {...args} />
      <TextInput {...args} placeholder="Placeholder" />
      <TextInput {...args} defaultValue="Disabled" disabled />
      <TextInput {...args} defaultValue="Read Only" readOnly />
      <TextInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <TextInput {...args} />
      <TextInput {...args} placeholder="Placeholder" />
      <TextInput {...args} defaultValue="Disabled" disabled />
      <TextInput {...args} defaultValue="Read Only" readOnly />
      <TextInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="text" />,
};
