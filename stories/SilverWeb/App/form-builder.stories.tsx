import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { FormBuilder, FormProps } from "@/components/silverweb/app/FormBuilder";

const fields: FormProps["fields"] = {
  TestTextField: {
    label: "Test",
    type: "text",
    placeholder: "Test",
  },
};

const meta: Meta<typeof FormBuilder> = {
  title: "SilverWeb/Apps/FormBuilder",
  tags: ["autodocs"],
  component: FormBuilder,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<FormProps>;

export const Normal: Story = {
  args: {
    fields,
    onSubmit: (values) => {
      console.log(values);
    },
  },
};
