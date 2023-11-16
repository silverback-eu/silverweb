import { LoadingInput, DatePicker } from "@silverweb/ui/sw-inputs/default";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DatePicker> = {
  title: "SW-Inputs/ Default/ DatePicker",
  tags: ["autodocs"],
  component: DatePicker,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Normal: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultDateValue: new Date(),
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultDateValue: new Date(),
  },
};

export const Success: Story = {
  args: {
    status: "success",
  },
  render: (args) => (
    <div className="grid gap-2">
      <DatePicker {...args} />
      <DatePicker {...args} placeholder="Placeholder" />
      <DatePicker {...args} defaultDateValue={new Date()} disabled />
      <DatePicker {...args} defaultDateValue={new Date()} readOnly />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <DatePicker {...args} />
      <DatePicker {...args} placeholder="Placeholder" />
      <DatePicker {...args} defaultDateValue={new Date()} disabled />
      <DatePicker {...args} defaultDateValue={new Date()} readOnly />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="date" />,
};
