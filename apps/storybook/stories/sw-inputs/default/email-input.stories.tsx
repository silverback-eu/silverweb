import { LoadingInput, EmailInput } from "@silverweb/ui/sw-inputs/default";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EmailInput> = {
  title: "SW-Inputs/ Default/ EmailInput",
  tags: ["autodocs"],
  component: EmailInput,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof EmailInput>;

export const Normal: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "disabled@mail.demo",
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: "readonly@mail.demo",
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
      <EmailInput {...args} />
      <EmailInput {...args} placeholder="Placeholder" />
      <EmailInput {...args} defaultValue="disabled@mail.demo" disabled />
      <EmailInput {...args} defaultValue="readonly@mail.demo" readOnly />
      <EmailInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <EmailInput {...args} />
      <EmailInput {...args} placeholder="Placeholder" />
      <EmailInput {...args} defaultValue="disabled@mail.demo" disabled />
      <EmailInput {...args} defaultValue="readonly@mail.demo" readOnly />
      <EmailInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="email" />,
};
