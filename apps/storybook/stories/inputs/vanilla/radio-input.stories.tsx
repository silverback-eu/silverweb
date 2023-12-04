import { Label, VanillaRadioGroup, VanillaRadioInput } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { HardHat } from "lucide-react";

const meta: Meta<typeof VanillaRadioInput> = {
  title: "Inputs/ Vanilla/ RadioInput",
  tags: ["autodocs"],
  component: VanillaRadioInput,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof VanillaRadioInput>;

export const Normal: Story = {
  render: (args) => (
    <VanillaRadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="1" value="1" />
        <Label htmlFor="1">Label Eins</Label>
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="2" value="2" />
        <Label htmlFor="2">Label Zwei</Label>
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="3" value="3" />
        <Label htmlFor="3">Label Drei</Label>
      </div>
    </VanillaRadioGroup>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <VanillaRadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="1" value="1" />
        <Label htmlFor="1">Label Eins</Label>
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="2" value="2" />
        <Label htmlFor="2">Label Zwei</Label>
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="3" value="3" />
        <Label htmlFor="3">Label Drei</Label>
      </div>
    </VanillaRadioGroup>
  ),
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
  render: (args) => (
    <VanillaRadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="1" value="1" />
        <Label htmlFor="1">Label Eins</Label>
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="2" value="2" />
        <Label htmlFor="2">Label Zwei</Label>
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="3" value="3" />
        <Label htmlFor="3">Label Drei</Label>
      </div>
    </VanillaRadioGroup>
  ),
};

export const Success: Story = {
  args: {
    className: "border-green-500 text-green-500",
  },
  render: (args) => (
    <VanillaRadioGroup className="grid gap-5 text-green-500">
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="1" value="1" />
        <Label htmlFor="1">Label Eins</Label>
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="2" value="2" />
        <Label htmlFor="2">Label Zwei</Label>
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="3" value="3" />
        <Label htmlFor="3">Label Drei</Label>
      </div>
    </VanillaRadioGroup>
  ),
};

export const Error: Story = {
  args: {
    className: "border-red-500 text-red-500",
  },
  render: (args) => (
    <VanillaRadioGroup className="grid gap-5 text-red-500">
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="1" value="1" />
        <Label htmlFor="1">Label Eins</Label>
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="2" value="2" />
        <Label htmlFor="2">Label Zwei</Label>
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="3" value="3" />
        <Label htmlFor="3">Label Drei</Label>
      </div>
    </VanillaRadioGroup>
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
    <VanillaRadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="3" value="3" />
      </div>
    </VanillaRadioGroup>
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
    <VanillaRadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="3" value="3" />
      </div>
    </VanillaRadioGroup>
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
    <VanillaRadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="3" value="3" />
      </div>
    </VanillaRadioGroup>
  ),
};

export const SuccessBig: Story = {
  args: {
    className:
      "text-green-500 [&_>_div_>button]:border-green-500 [&_>_div_>_button_svg]:text-green-500",
    variant: "big",
    icon: <HardHat size={24} />,
    cardLabel: "Big Card Label",
    cardDescription: "Big Card Description",
  },
  render: (args) => (
    <VanillaRadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="3" value="3" />
      </div>
    </VanillaRadioGroup>
  ),
};

export const ErrorBig: Story = {
  args: {
    className:
      "text-red-500 [&_>_div_>button]:border-red-500 [&_>_div_>_button_svg]:text-red-500",
    variant: "big",
    icon: <HardHat className="fill-transparent" size={24} />,
    cardLabel: "Big Card Label",
    cardDescription: "Big Card Description",
  },
  render: (args) => (
    <VanillaRadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <VanillaRadioInput {...args} id="3" value="3" />
      </div>
    </VanillaRadioGroup>
  ),
};
