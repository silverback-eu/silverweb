import LoadingInput from "@/components/silverweb/inputs/LoadingInput";
import TextInput from "@/components/silverweb/inputs/TextInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextInput> = {
  title: "SilverWeb/Inputs/EmailInput",
  tags: ['autodocs'],
  component: TextInput,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: 20,
          width: 368,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Normal: Story = {
  args: {
    disabled: false,
    readOnly: false,
    status: "default",
    placeholder: "Placeholder",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    readOnly: false,
    status: "default",
    placeholder: "Placeholder",
  },
};

export const Readonly: Story = {
  args: {
    disabled: false,
    readOnly: true,
    status: "default",
    placeholder: "Placeholder",
    defaultValue: "readonly@value.com",
  },
};

export const Success: Story = {
  args: {
    disabled: false,
    readOnly: false,
    status: "success",
    placeholder: "Placeholder",
  },
};

export const Error: Story = {
  args: {
    disabled: false,
    readOnly: false,
    status: "error",
    placeholder: "Placeholder",
  },
};

export const Prefix: Story = {
  args: {
    disabled: false,
    readOnly: false,
    status: "default",
    placeholder: "Placeholder",
    prefix: "Prefix",
  },
};

export const Loading: Story = {
  render: (props) => {
    return (
      <LoadingInput variant="email" />
    )
  }
}