import FileUploader from "@/components/silverweb/inputs/FileUploader";
import LoadingInput from "@/components/silverweb/inputs/LoadingInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FileUploader> = {
  title: "SilverWeb/Inputs/FileUploader",
  tags: ['autodocs'],
  component: FileUploader,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: 20,
          width: 368,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FileUploader>;

export const Normal: Story = {
  args: {
    disabled: false,
    readOnly: false,
    status: "default",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    readOnly: false,
    status: "default",
  },
};

export const Readonly: Story = {
  args: {
    disabled: false,
    readOnly: true,
    status: "default",
    defaultItems: [
      {
        lastModified: 0,
        name: "Example_File.pdf",
        size: "1232 KB",
        type: "application/pdf",
        uri: "",
      },
      {
        lastModified: 2,
        name: "Example_File_1.pdf",
        size: "5231 KB",
        type: "application/pdf",
        uri: "",
      },
      {
        lastModified: 3,
        name: "Example_File_2.pdf",
        size: "1432 KB",
        type: "application/pdf",
        uri: "",
      }
    ]
  },
};

export const Success: Story = {
  args: {
    disabled: false,
    readOnly: false,
    status: "success",
  },
};

export const Error: Story = {
  args: {
    disabled: false,
    readOnly: false,
    status: "error",
  },
};

export const Loading: Story = {
  render: (props) => {
    return (
      <LoadingInput variant="file" />
    )
  }
}