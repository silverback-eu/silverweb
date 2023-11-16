import { Label, RadioGroup } from "@silverweb/ui/shared";
import { RadioInput } from "@silverweb/ui/sw-inputs/default";
import type { Meta, StoryObj } from "@storybook/react";
import { HardHat } from "lucide-react";

const meta: Meta<typeof RadioInput> = {
  title: "SW-Inputs/ Default/ RadioInput",
  tags: ["autodocs"],
  component: RadioInput,
  decorators: [
    (Story) => (
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RadioInput>;

export const Normal: Story = {
  render: (args) => (
    <RadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <RadioInput {...args} id="1" value="1" />
        <Label htmlFor="1">Label Eins</Label>
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="2" value="2" />
        <Label htmlFor="2">Label Zwei</Label>
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="3" value="3" />
        <Label htmlFor="3">Label Drei</Label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <RadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <RadioInput {...args} id="1" value="1" />
        <Label htmlFor="1">Label Eins</Label>
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="2" value="2" />
        <Label htmlFor="2">Label Zwei</Label>
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="3" value="3" />
        <Label htmlFor="3">Label Drei</Label>
      </div>
    </RadioGroup>
  ),
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
  render: (args) => (
    <RadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <RadioInput {...args} id="1" value="1" />
        <Label htmlFor="1">Label Eins</Label>
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="2" value="2" />
        <Label htmlFor="2">Label Zwei</Label>
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="3" value="3" />
        <Label htmlFor="3">Label Drei</Label>
      </div>
    </RadioGroup>
  ),
};

export const Success: Story = {
  args: {
    className: "border-green-500 data-[state=checked]:bg-green-500",
  },
  render: (args) => (
    <RadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <RadioInput {...args} id="1" value="1" />
        <Label htmlFor="1">Label Eins</Label>
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="2" value="2" />
        <Label htmlFor="2">Label Zwei</Label>
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="3" value="3" />
        <Label htmlFor="3">Label Drei</Label>
      </div>
    </RadioGroup>
  ),
};

export const Error: Story = {
  args: {
    className: "border-red-500 data-[state=checked]:bg-red-500",
  },
  render: (args) => (
    <RadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <RadioInput {...args} id="1" value="1" />
        <Label htmlFor="1">Label Eins</Label>
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="2" value="2" />
        <Label htmlFor="2">Label Zwei</Label>
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="3" value="3" />
        <Label htmlFor="3">Label Drei</Label>
      </div>
    </RadioGroup>
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
    <RadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <RadioInput {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="3" value="3" />
      </div>
    </RadioGroup>
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
    <RadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <RadioInput {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="3" value="3" />
      </div>
    </RadioGroup>
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
    <RadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <RadioInput {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="3" value="3" />
      </div>
    </RadioGroup>
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
    <RadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <RadioInput {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="3" value="3" />
      </div>
    </RadioGroup>
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
    <RadioGroup className="grid gap-5">
      <div className="flex gap-2">
        <RadioInput {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <RadioInput {...args} id="3" value="3" />
      </div>
    </RadioGroup>
  ),
};
