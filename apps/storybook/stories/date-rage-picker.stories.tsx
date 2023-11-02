/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { DateRangePicker } from "@silverweb/ui/components/inputs/default/date-range-picker";

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
