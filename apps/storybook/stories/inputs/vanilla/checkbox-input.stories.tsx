import { Label, VanillaCheckboxInput } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { HardHat } from "lucide-react";

const meta: Meta<typeof VanillaCheckboxInput> = {
  title: "Inputs/ Vanilla/ CheckboxInput",
  tags: ["autodocs"],
  component: VanillaCheckboxInput,
  decorators: [
    (Story) => (
      <div className="m-3 w-96">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <div className="grid gap-5">
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="1" />
        <Label htmlFor="1">Label Eins</Label>
      </div>
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="2" />
        <Label htmlFor="2">Label Zwei</Label>
      </div>
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="3" />
        <Label htmlFor="3">Label Drei</Label>
      </div>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof VanillaCheckboxInput>;

export const Normal: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
};

export const Success: Story = {
  args: {
    status: "success",
  },
};

export const Error: Story = {
  args: {
    status: "error",
  },
};

export const NormalBig: Story = {
  args: {
    variant: "big",
    icon: <HardHat size={24} />,
    cardLabel: "Big Card Label",
    cardDescription: "Big Card Description",
  },
  render: (args) => (
    <div className="grid gap-5">
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="1" />
      </div>
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="2" />
      </div>
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="3" />
      </div>
    </div>
  ),
};

export const DisabledBig: Story = {
  args: {
    disabled: true,
    variant: "big",
    icon: <HardHat size={24} />,
    cardLabel: "Big Card Label",
    cardDescription: "Big Card Description",
  },
  render: (args) => (
    <div className="grid gap-5">
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="1" />
      </div>
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="2" />
      </div>
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="3" />
      </div>
    </div>
  ),
};

export const ReadOnlyBig: Story = {
  args: {
    readOnly: true,
    variant: "big",
    icon: <HardHat size={24} />,
    cardLabel: "Big Card Label",
    cardDescription: "Big Card Description",
  },
  render: (args) => (
    <div className="grid gap-5">
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="1" />
      </div>
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="2" />
      </div>
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="3" />
      </div>
    </div>
  ),
};

export const SuccessBig: Story = {
  args: {
    status: "success",
    variant: "big",
    icon: <HardHat size={24} />,
    cardLabel: "Big Card Label",
    cardDescription: "Big Card Description",
  },
  render: (args) => (
    <div className="grid gap-5 ">
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="1" />
      </div>
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="2" />
      </div>
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="3" />
      </div>
    </div>
  ),
};

export const ErrorBig: Story = {
  args: {
    status: "error",
    variant: "big",
    icon: <HardHat size={24} />,
    cardLabel: "Big Card Label",
    cardDescription: "Big Card Description",
  },
  render: (args) => (
    <div className="grid gap-5">
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="1" />
      </div>
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="2" />
      </div>
      <div className="flex gap-2">
        <VanillaCheckboxInput {...args} id="3" />
      </div>
    </div>
  ),
};
