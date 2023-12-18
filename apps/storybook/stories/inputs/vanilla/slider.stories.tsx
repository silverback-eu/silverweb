import { LoadingInput, VanillaSlider } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof VanillaSlider> = {
  title: "Inputs/ Vanilla/ Slider",
  tags: ["autodocs"],
  component: VanillaSlider,
  decorators: [
    (Story) => (
      <div className="m-3 w-96">
        <Story />
      </div>
    ),
  ],
  render: (args) => <Slider {...args} />,
};

export default meta;

type Story = StoryObj<typeof VanillaSlider>;

function Slider(props: Story["args"]): JSX.Element {
  const [value, setValue] = useState<number[]>(
    props?.defaultValue ? props.defaultValue : [0],
  );
  return (
    <div className="space-y-2">
      <VanillaSlider
        {...props}
        onValueChange={(numbers) => {
          setValue(numbers);
        }}
        value={value}
      />
      <div className="space-y-2 p-2">
        <div className="font-bold">Value:</div>
        <code>{JSON.stringify(value, null, 2)}</code>
      </div>
    </div>
  );
}

export const Normal: Story = {};

export const Max: Story = {
  args: {
    min: 20,
    max: 80,
  },
};

export const Steps: Story = {
  args: {
    step: 10,
  },
};

export const Inverted: Story = {
  args: {
    inverted: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: [40],
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: [40],
  },
};

export const Success: Story = {
  args: {
    status: "success",
  },
  render: (args) => (
    <div className="grid gap-10">
      <Slider {...args} />
      <Slider {...args} defaultValue={[40]} disabled />
      <Slider {...args} defaultValue={[40]} readOnly />
    </div>
  ),
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => (
    <div className="grid gap-10">
      <Slider {...args} />
      <Slider {...args} defaultValue={[40]} disabled />
      <Slider {...args} defaultValue={[40]} readOnly />
    </div>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="slider" />,
};
