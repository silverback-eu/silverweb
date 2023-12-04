import { LoadingInput, VanillaNumberInput } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VanillaNumberInput> = {
  title: "Inputs/ Vanilla/ NumberInput",
  tags: ["autodocs"],
  component: VanillaNumberInput,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof VanillaNumberInput>;

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
      <VanillaNumberInput {...args} />
      <VanillaNumberInput {...args} placeholder="Placeholder" />
      <VanillaNumberInput {...args} defaultValue="Disabled" disabled />
      <VanillaNumberInput {...args} defaultValue="Read Only" readOnly />
      <VanillaNumberInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <VanillaNumberInput {...args} />
      <VanillaNumberInput {...args} placeholder="Placeholder" />
      <VanillaNumberInput {...args} defaultValue="Disabled" disabled />
      <VanillaNumberInput {...args} defaultValue="Read Only" readOnly />
      <VanillaNumberInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="text" />,
};
