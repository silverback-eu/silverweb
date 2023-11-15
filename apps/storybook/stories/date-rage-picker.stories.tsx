import type { Meta, StoryObj } from "@storybook/react";
import { DateRangePicker } from "@silverweb/ui/sw-inputs/default";

const meta: Meta<typeof DateRangePicker> = {
  title: "SilverBack/ DateRangePicker",
  tags: ["autodocs"],
  component: DateRangePicker,
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const Normal: Story = {
  args: {},
};
