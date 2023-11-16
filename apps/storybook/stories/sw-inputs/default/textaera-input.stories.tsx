import { LoadingInput, TextareaInput } from "@silverweb/ui/sw-inputs/default";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextareaInput> = {
  title: "SW-Inputs/ Default/ TextareaInput",
  tags: ["autodocs"],
  component: TextareaInput,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TextareaInput>;

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
      <TextareaInput {...args} />
      <TextareaInput {...args} placeholder="Placeholder" />
      <TextareaInput {...args} defaultValue="Disabled" disabled />
      <TextareaInput {...args} defaultValue="Read Only" readOnly />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <TextareaInput {...args} />
      <TextareaInput {...args} placeholder="Placeholder" />
      <TextareaInput {...args} defaultValue="Disabled" disabled />
      <TextareaInput {...args} defaultValue="Read Only" readOnly />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="text" />,
};
