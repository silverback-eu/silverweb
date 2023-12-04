import { LoadingInput, VanillaDateRangePicker } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VanillaDateRangePicker> = {
  title: "Inputs/ Vanilla/ DateRangePicker",
  tags: ["autodocs"],
  component: VanillaDateRangePicker,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof VanillaDateRangePicker>;

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
      <VanillaDateRangePicker {...args} />
      <VanillaDateRangePicker {...args} placeholder="Placeholder" />
      <VanillaDateRangePicker
        {...args}
        defaultDateValue={{ from: new Date(), to: new Date() }}
        disabled
      />
      <VanillaDateRangePicker
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
      <VanillaDateRangePicker {...args} />
      <VanillaDateRangePicker {...args} placeholder="Placeholder" />
      <VanillaDateRangePicker
        {...args}
        defaultDateValue={{ from: new Date(), to: new Date() }}
        disabled
      />
      <VanillaDateRangePicker
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
