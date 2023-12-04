import { LoadingInput, VanillaTextInput } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VanillaTextInput> = {
  title: "Inputs/ Vanilla/ TextInput",
  tags: ["autodocs"],
  component: VanillaTextInput,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof VanillaTextInput>;

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
      <VanillaTextInput {...args} />
      <VanillaTextInput {...args} placeholder="Placeholder" />
      <VanillaTextInput {...args} defaultValue="Disabled" disabled />
      <VanillaTextInput {...args} defaultValue="Read Only" readOnly />
      <VanillaTextInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <VanillaTextInput {...args} />
      <VanillaTextInput {...args} placeholder="Placeholder" />
      <VanillaTextInput {...args} defaultValue="Disabled" disabled />
      <VanillaTextInput {...args} defaultValue="Read Only" readOnly />
      <VanillaTextInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="text" />,
};
