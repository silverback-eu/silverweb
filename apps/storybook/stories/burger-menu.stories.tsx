/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { BurgerMenuIcon } from "@silverweb/ui";

const meta: Meta<typeof BurgerMenuIcon> = {
  title: "SilverBack/ BurgerMenuIcon",
  tags: ["autodocs"],
  component: BurgerMenuIcon,
};

export default meta;

type Story = StoryObj<typeof BurgerMenuIcon>;

export const Normal: Story = {
  args: {},
};
