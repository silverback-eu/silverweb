import {
  Label,
  LoadingInput,
  VanillaRadioGroup,
  VanillaSwitch,
} from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { HardHat } from "lucide-react";

const meta: Meta<typeof VanillaSwitch> = {
  title: "Inputs/ Vanilla/ Switch",
  tags: ["autodocs"],
  component: VanillaSwitch,
  decorators: [
    (Story) => (
      <div className="m-3 w-96">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <div className="space-2">
      <div className="grid grid-cols-[60px_1fr] items-center gap-y-3 p-2">
        <VanillaSwitch {...args} id="option-1" />
        <Label htmlFor="option-1">Label Option 1</Label>
        <VanillaSwitch {...args} id="option-2" />
        <Label htmlFor="option-2">Label Option 2</Label>
        <VanillaSwitch {...args} id="option-3" />
        <Label htmlFor="option-3">Label Option 3</Label>
      </div>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof VanillaSwitch>;

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
  render: () => <LoadingInput variant="switch" />,
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
        <VanillaSwitch {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <VanillaSwitch {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <VanillaSwitch {...args} id="3" value="3" />
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
        <VanillaSwitch {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <VanillaSwitch {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <VanillaSwitch {...args} id="3" value="3" />
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
        <VanillaSwitch {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <VanillaSwitch {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <VanillaSwitch {...args} id="3" value="3" />
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
        <VanillaSwitch {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <VanillaSwitch {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <VanillaSwitch {...args} id="3" value="3" />
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
        <VanillaSwitch {...args} id="1" value="1" />
      </div>
      <div className="flex gap-2">
        <VanillaSwitch {...args} id="2" value="2" />
      </div>
      <div className="flex gap-2">
        <VanillaSwitch {...args} id="3" value="3" />
      </div>
    </VanillaRadioGroup>
  ),
};

export const LoadingBig: Story = {
  render: () => <LoadingInput checkboxRadioBig variant="switch" />,
};
