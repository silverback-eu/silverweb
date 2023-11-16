import { LoadingInput, ComboBox } from "@silverweb/ui/sw-inputs/default";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ComboBox> = {
  title: "SW-Inputs/ Default/ ComboBox",
  tags: ["autodocs"],
  component: ComboBox,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ComboBox>;

export const Normal: Story = {
  args: {
    items: [
      {
        label: "Item 1",
        value: "item1",
      },
      {
        label: "Item 2",
        value: "item2",
      },
      {
        label: "Item 3",
        value: "item3",
      },
      {
        label: "Item 4",
        value: "item4",
      },
      {
        label: "Item 5",
        value: "item5",
      },
    ],
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "Placeholder",
    items: [
      {
        label: "Item 1",
        value: "item1",
      },
      {
        label: "Item 2",
        value: "item2",
      },
      {
        label: "Item 3",
        value: "item3",
      },
      {
        label: "Item 4",
        value: "item4",
      },
      {
        label: "Item 5",
        value: "item5",
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "Disabled",
    items: [
      {
        label: "Item 1",
        value: "item1",
      },
      {
        label: "Item 2",
        value: "item2",
      },
      {
        label: "Item 3",
        value: "item3",
      },
      {
        label: "Item 4",
        value: "item4",
      },
      {
        label: "Item 5",
        value: "item5",
      },
    ],
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: "Read Only",
    items: [
      {
        label: "Item 1",
        value: "item1",
      },
      {
        label: "Item 2",
        value: "item2",
      },
      {
        label: "Item 3",
        value: "item3",
      },
      {
        label: "Item 4",
        value: "item4",
      },
      {
        label: "Item 5",
        value: "item5",
      },
    ],
  },
};

export const Prefix: Story = {
  args: {
    prefix: "Prefix",
    items: [
      {
        label: "Item 1",
        value: "item1",
      },
      {
        label: "Item 2",
        value: "item2",
      },
      {
        label: "Item 3",
        value: "item3",
      },
      {
        label: "Item 4",
        value: "item4",
      },
      {
        label: "Item 5",
        value: "item5",
      },
    ],
  },
};

export const Grouped: Story = {
  args: {
    grouped: true,
    items: {
      Group1: [
        {
          label: "Item 1",
          value: "item1",
        },
        {
          label: "Item 2",
          value: "item2",
        },
        {
          label: "Item 3",
          value: "item3",
        },
        {
          label: "Item 4",
          value: "item4",
        },
        {
          label: "Item 5",
          value: "item5",
        },
      ],
      Group2: [
        {
          label: "Item 6",
          value: "item6",
        },
        {
          label: "Item 7",
          value: "item7",
        },
        {
          label: "Item 8",
          value: "item8",
        },
        {
          label: "Item 9",
          value: "item9",
        },
        {
          label: "Item 10",
          value: "item10",
        },
      ],
    },
  },
};

export const Success: Story = {
  args: {
    status: "success",
    items: [
      {
        label: "Item 1",
        value: "item1",
      },
      {
        label: "Item 2",
        value: "item2",
      },
      {
        label: "Item 3",
        value: "item3",
      },
      {
        label: "Item 4",
        value: "item4",
      },
      {
        label: "Item 5",
        value: "item5",
      },
    ],
  },
  render: (args) => (
    <div className="grid gap-2">
      <ComboBox {...args} />
      <ComboBox {...args} placeholder="Placeholder" />
      <ComboBox {...args} defaultValue="Disabled" disabled />
      <ComboBox {...args} defaultValue="Read Only" readOnly />
      <ComboBox {...args} prefix="Prefix" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
    items: [
      {
        label: "Item 1",
        value: "item1",
      },
      {
        label: "Item 2",
        value: "item2",
      },
      {
        label: "Item 3",
        value: "item3",
      },
      {
        label: "Item 4",
        value: "item4",
      },
      {
        label: "Item 5",
        value: "item5",
      },
    ],
  },
  render: (args) => (
    <div className="grid gap-2">
      <ComboBox {...args} />
      <ComboBox {...args} placeholder="Placeholder" />
      <ComboBox {...args} defaultValue="Disabled" disabled />
      <ComboBox {...args} defaultValue="Read Only" readOnly />
      <ComboBox {...args} prefix="Prefix" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="combo" />,
};
