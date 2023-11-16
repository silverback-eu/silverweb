import { LoadingInput, PasswordInput } from "@silverweb/ui/sw-inputs/default";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PasswordInput> = {
  title: "SW-Inputs/ Default/ PasswordInput",
  tags: ["autodocs"],
  component: PasswordInput,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

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
      <PasswordInput {...args} />
      <PasswordInput {...args} placeholder="Placeholder" />
      <PasswordInput {...args} defaultValue="Disabled" disabled />
      <PasswordInput {...args} defaultValue="Read Only" readOnly />
      <PasswordInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <PasswordInput {...args} />
      <PasswordInput {...args} placeholder="Placeholder" />
      <PasswordInput {...args} defaultValue="Disabled" disabled />
      <PasswordInput {...args} defaultValue="Read Only" readOnly />
      <PasswordInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="password" />,
};
