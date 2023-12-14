import type { Meta, StoryObj } from "@storybook/react";
import { Progress, VanillaSlider } from "@silverweb/ui";
import { useState } from "react";

const meta: Meta<typeof Progress> = {
  title: "Shared/ Progress",
  tags: ["autodocs"],
  component: Progress,
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Normal: Story = {
  args: {
    value: 30,
  },
  render: (args) => <ProgressComponent {...args} />,
};

function ProgressComponent(args: Story["args"]): JSX.Element {
  const { value, ...rest } = args as Story["args"] & { value: number };
  const [progressValue, setProgressValue] = useState<number[]>([value]);
  return (
    <div className="grid gap-10">
      <div className="mx-56 mt-32 grid gap-5">
        Controller:
        <VanillaSlider onValueChange={setProgressValue} value={progressValue} />
        <code className="block text-sm text-gray-600">
          {JSON.stringify(value, null, 2)}
        </code>
      </div>
      <div>
        <Progress {...rest} value={progressValue[0]} />
      </div>
    </div>
  );
}
