import { LoadingInput, VanillaTextareaInput } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VanillaTextareaInput> = {
  title: "Inputs/ Vanilla/ TextareaInput",
  tags: ["autodocs"],
  component: VanillaTextareaInput,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof VanillaTextareaInput>;

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

export const Success: Story = {
  args: {
    status: "success",
  },
  render: (args) => (
    <div className="grid gap-2">
      <VanillaTextareaInput {...args} />
      <VanillaTextareaInput {...args} placeholder="Placeholder" />
      <VanillaTextareaInput {...args} defaultValue="Disabled" disabled />
      <VanillaTextareaInput {...args} defaultValue="Read Only" readOnly />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <VanillaTextareaInput {...args} />
      <VanillaTextareaInput {...args} placeholder="Placeholder" />
      <VanillaTextareaInput {...args} defaultValue="Disabled" disabled />
      <VanillaTextareaInput {...args} defaultValue="Read Only" readOnly />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="text" />,
};
