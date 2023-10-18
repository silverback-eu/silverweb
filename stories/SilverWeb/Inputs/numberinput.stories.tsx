import LoadingInput from "@/components/silverweb/inputs/LoadingInput";
import NumberInput from "@/components/silverweb/inputs/NumberInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NumberInput> = {
  title: "SilverWeb/Inputs/NumberInput",
  tags: ['autodocs'],
  component: NumberInput,
  decorators: [
    (Story) => (
      <div style={{
        margin: 20,
        width: 368
      }}>
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Normal: Story = {
    args: {
      disabled: false,
      readOnly: false,
      status: "default",
      placeholder: "Placeholder"
    }
}
export const Disabled: Story = {
  args: {
    disabled: true,
    readOnly: false,
    status: "default",
    placeholder: "Placeholder"
  }
}

export const Readonly: Story = {
  args: {
    disabled: false,
    readOnly: true,
    status: "default",
    placeholder: "Placeholder",
    defaultValue: "Readonly Value"
  }
}

export const Success: Story = {
  args: {
    disabled: false,
    readOnly: false,
    status: "success",
    placeholder: "Placeholder",
  }
}

export const Error: Story = {
  args: {
    disabled: false,
    readOnly: false,
    status: "error",
    placeholder: "Placeholder",
  }
}

export const Prefix: Story = {
  args: {
    disabled: false,
    readOnly: false,
    status: "default",
    placeholder: "Placeholder",
    prefix: "Prefix"
  }
}

export const Loading: Story = {
  render: (props) => {
    return (
      <LoadingInput variant="number" />
    )
  }
}


