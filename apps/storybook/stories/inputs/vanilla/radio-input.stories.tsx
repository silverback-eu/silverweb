import {
  Label,
  LoadingInput,
  VanillaRadioGroup,
  VanillaRadioInput,
} from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { HardHat } from "lucide-react";

const meta: Meta<typeof VanillaRadioInput> = {
  title: "Inputs/ Vanilla/ RadioInput",
  tags: ["autodocs"],
  component: VanillaRadioInput,
  decorators: [
    (Story) => (
      <div className="m-3 w-96">
        <Story />
      </div>
    ),
  ],
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

export default meta;

type Story = StoryObj<typeof VanillaRadioInput>;

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

export const Loading: Story = {
  render: () => <LoadingInput variant="radio" />,
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
    status: "success",
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
    status: "error",
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

export const LoadingBig: Story = {
  render: () => <LoadingInput checkboxRadioBig variant="radio" />,
};
