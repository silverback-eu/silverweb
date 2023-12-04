import { LoadingInput, VanillaEmailInput } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VanillaEmailInput> = {
  title: "Inputs/ Vanilla/ EmailInput",
  tags: ["autodocs"],
  component: VanillaEmailInput,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof VanillaEmailInput>;

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
      <VanillaEmailInput {...args} />
      <VanillaEmailInput {...args} placeholder="Placeholder" />
      <VanillaEmailInput {...args} defaultValue="disabled@mail.demo" disabled />
      <VanillaEmailInput {...args} defaultValue="readonly@mail.demo" readOnly />
      <VanillaEmailInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <VanillaEmailInput {...args} />
      <VanillaEmailInput {...args} placeholder="Placeholder" />
      <VanillaEmailInput {...args} defaultValue="disabled@mail.demo" disabled />
      <VanillaEmailInput {...args} defaultValue="readonly@mail.demo" readOnly />
      <VanillaEmailInput {...args} prefix="Prefix" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="email" />,
};
