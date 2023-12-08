import { LoadingInput, useFileUploader } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof useFileUploader> = {
  title: "Inputs/ Vanilla/ FileUploader",
  tags: ["autodocs"],
  component: useFileUploader,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof useFileUploader>;

export const Normal: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultItems: [
      {
        lastModified: 1623340800000,
        name: "test.txt",
        size: "1234",
        type: "text/plain",
        status: {
          default: true,
        },
        uri: "",
      },
    ],
  },
};

export const Success: Story = {
  args: {
    status: "success",
  },
  render: (args) => (
    <div className="grid gap-2">
      <FileUploader {...args} />
      <FileUploader {...args} placeholder="Placeholder" />
      <FileUploader {...args} disabled />
      <FileUploader {...args} readOnly />
      <FileUploader {...args} prefix="Prefix" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-2">
      <FileUploader {...args} />
      <FileUploader {...args} placeholder="Placeholder" />
      <FileUploader {...args} disabled />
      <FileUploader {...args} readOnly />
      <FileUploader {...args} prefix="Prefix" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="file" />,
};
