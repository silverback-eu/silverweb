import { Label, VanillaCheckboxInput } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { HardHat } from "lucide-react";

const meta: Meta<typeof VanillaCheckboxInput> = {
  title: "Inputs/ Vanilla/ CheckboxInput",
  tags: ["autodocs"],
  component: VanillaCheckboxInput,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof VanillaCheckboxInput>;

export const Normal: Story = {
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
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

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
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

export const Success: Story = {
  args: {
    className: "border-green-500 data-[state=checked]:bg-green-500",
  },
  render: (args) => (
    <div className="grid gap-5 text-green-500">
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

export const Error: Story = {
  args: {
    className: "border-red-500 data-[state=checked]:bg-red-500",
  },
  render: (args) => (
    <div className="grid gap-5 text-red-500">
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
    className:
      "text-green-500 [&_>_div_>button]:border-green-500 [&_>_div_>button[data-state=checked]]:!bg-green-500",
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
    className:
      "text-red-500 [&_>_div_>button]:border-red-500 [&_>_div_>button[data-state=checked]]:!bg-red-500",
    variant: "big",
    icon: <HardHat size={24} />,
    cardLabel: "Big Card Label",
    cardDescription: "Big Card Description",
  },
  render: (args) => (
    <div className="grid gap-5 text-red-500">
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
