import { LoadingInput, VanillaDatePicker } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VanillaDatePicker> = {
  title: "Inputs/ Vanilla/ DatePicker",
  tags: ["autodocs"],
  component: VanillaDatePicker,
  decorators: [
    (Story) => (
      <div className="m-3 w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof VanillaDatePicker>;

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
      <VanillaDatePicker {...args} />
      <VanillaDatePicker {...args} placeholder="Placeholder" />
      <VanillaDatePicker {...args} defaultDateValue={new Date()} disabled />
      <VanillaDatePicker {...args} defaultDateValue={new Date()} readOnly />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <VanillaDatePicker {...args} />
      <VanillaDatePicker {...args} placeholder="Placeholder" />
      <VanillaDatePicker {...args} defaultDateValue={new Date()} disabled />
      <VanillaDatePicker {...args} defaultDateValue={new Date()} readOnly />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="date" />,
};
