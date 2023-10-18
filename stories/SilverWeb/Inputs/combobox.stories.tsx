import ComboBox from "@/components/silverweb/inputs/ComboBox";
import LoadingInput from "@/components/silverweb/inputs/LoadingInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ComboBox> = {
  title: "SilverWeb/Inputs/ComboBox",
  component: ComboBox,
  tags: ['autodocs'],
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

type Story = StoryObj<typeof ComboBox>;

export const Normal: Story = {
  args: {
    placeholder: "Placeholder",
    items: [
      { label: "Item 1", value: "1" },
      { label: "Item 2", value: "2" },
      { label: "Item 3", value: "3" },
    ],
    disabled: false,
    readOnly: false,
    status: "default",
  },
};

export const Grouped: Story = {
  args: {
    placeholder: "Placeholder",
    items: {
      Group1: [
        { label: "Item 1", value: "1" },
        { label: "Item 2", value: "2" },
        { label: "Item 3", value: "3" },
      ],
      Group2: [
        { label: "Item 4", value: "4" },
        { label: "Item 5", value: "5" },
        { label: "Item 6", value: "6" },
      ],
    },
    grouped: true,
    disabled: false,
    readOnly: false,
    status: "default",
  },
};
export const Disabled: Story = {
  args: {
    placeholder: "Placeholder",
    items: [
      { label: "Item 1", value: "1" },
      { label: "Item 2", value: "2" },
      { label: "Item 3", value: "3" },
    ],
    disabled: true,
    readOnly: false,
    status: "default",
  },
};

export const Readonly: Story = {
  args: {
    placeholder: "Placeholder",
    items: [
      { label: "Item 1", value: "1" },
      { label: "Item 2", value: "2" },
      { label: "Item 3", value: "3" },
    ],
    disabled: false,
    selected: "1",
    readOnly: true,
    status: "default",
  },
};

export const Success: Story = {
  args: {
    placeholder: "Placeholder",
    items: [
      { label: "Item 1", value: "1" },
      { label: "Item 2", value: "2" },
      { label: "Item 3", value: "3" },
    ],
    disabled: false,
    readOnly: false,
    status: "success",
  },
};

export const Error: Story = {
  args: {
    placeholder: "Placeholder",
    items: [
      { label: "Item 1", value: "1" },
      { label: "Item 2", value: "2" },
      { label: "Item 3", value: "3" },
    ],
    disabled: false,
    readOnly: false,
    status: "error",
  },
};

export const Loading: Story = {
  render: (props) => {
    return (
      <LoadingInput variant="combo" />
    )
  }
}
