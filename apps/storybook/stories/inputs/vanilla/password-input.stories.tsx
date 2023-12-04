import { LoadingInput, VanillaPasswordInput } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VanillaPasswordInput> = {
  title: "Inputs/ Vanilla/ VanillaPasswordInput",
  tags: ["autodocs"],
  component: VanillaPasswordInput,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof VanillaPasswordInput>;

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
      <VanillaPasswordInput {...args} />
      <VanillaPasswordInput {...args} placeholder="Placeholder" />
      <VanillaPasswordInput {...args} defaultValue="Disabled" disabled />
      <VanillaPasswordInput {...args} defaultValue="Read Only" readOnly />
      <VanillaPasswordInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <VanillaPasswordInput {...args} />
      <VanillaPasswordInput {...args} placeholder="Placeholder" />
      <VanillaPasswordInput {...args} defaultValue="Disabled" disabled />
      <VanillaPasswordInput {...args} defaultValue="Read Only" readOnly />
      <VanillaPasswordInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="password" />,
};
