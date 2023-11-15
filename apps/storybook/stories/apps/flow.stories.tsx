/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { Flow } from "@silverweb/ui/apps";

const meta: Meta<typeof Flow> = {
  title: "Apps/ Flow",
  tags: ["autodocs"],
  component: Flow,
};

export default meta;

type Story = StoryObj<typeof Flow>;

export const Normal: Story = {
  args: {},
};
