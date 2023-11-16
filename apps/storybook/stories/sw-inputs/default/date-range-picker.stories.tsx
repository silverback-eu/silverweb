import { LoadingInput, DateRangePicker } from "@silverweb/ui/sw-inputs/default";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DateRangePicker> = {
  title: "SW-Inputs/ Default/ DateRangePicker",
  tags: ["autodocs"],
  component: DateRangePicker,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const Normal: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultDateValue: { from: new Date(), to: new Date() },
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultDateValue: { from: new Date(), to: new Date() },
  },
};

export const Success: Story = {
  args: {
    status: "success",
  },
  render: (args) => (
    <div className="grid gap-2">
      <DateRangePicker {...args} />
      <DateRangePicker {...args} placeholder="Placeholder" />
      <DateRangePicker
        {...args}
        defaultDateValue={{ from: new Date(), to: new Date() }}
        disabled
      />
      <DateRangePicker
        {...args}
        defaultDateValue={{ from: new Date(), to: new Date() }}
        readOnly
      />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <DateRangePicker {...args} />
      <DateRangePicker {...args} placeholder="Placeholder" />
      <DateRangePicker
        {...args}
        defaultDateValue={{ from: new Date(), to: new Date() }}
        disabled
      />
      <DateRangePicker
        {...args}
        defaultDateValue={{ from: new Date(), to: new Date() }}
        readOnly
      />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="date" />,
};
