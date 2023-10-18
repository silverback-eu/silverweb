import LoadingInput from "@/components/silverweb/inputs/LoadingInput";
import RadioInput from "@/components/silverweb/inputs/RadioInput";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import type { Meta, StoryObj } from "@storybook/react";
import { Building, Tags } from "lucide-react";
import { Fragment } from "react";

const meta: Meta<typeof RadioInput> = {
  title: "SilverWeb/Inputs/RadioInput",
  tags: ['autodocs'],
  component: RadioInput,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: 20,
          width: 368,
          display: "flex",
          alignItems: "center",
        }}
      >
        <RadioGroup className="w-full">
          <Story />
        </RadioGroup>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RadioInput>;

export const Normal: Story = {
  render: (props) => {
    const { value, ...rest } = props;
    return (
      <Fragment>
        <div className="flex items-center gap-2">
          <RadioInput value="1" id="r1" {...rest} />
          <Label htmlFor="r1">Radio 1</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioInput value="2" id="r2" {...rest} />
          <Label htmlFor="r2">Radio 2</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioInput value="3" id="r3" {...rest} />
          <Label htmlFor="r3">Radio 3</Label>
        </div>
      </Fragment>
    );
  },
  args: {
    variant: "default",
  },
};
export const Big: Story = {
  render: (props) => {
    const { value, icon, cardLabel, cardDescription, ...rest } = props;
    return (
      <Fragment>
        <div className="grid items-center gap-2">
          <RadioInput cardLabel="Label 1" cardDescription="This is card radio 1" icon={<Tags size={24}/>} value="1" id="r1" {...rest} />
          <RadioInput cardLabel="Label 2" cardDescription="This is not card radio 1" icon={<Building size={24}/>} value="2" id="r2" {...rest} />
          <RadioInput cardLabel="Label 3" cardDescription="This is card radio 3" value="3" id="r3" {...rest} />
        </div>
      </Fragment>
    );
  },
  args: {
    variant: "big",
  },
};

export const Loading: Story = {
  render: (props) => {
      return (
        <div className="grid gap-2 w-full">
          <LoadingInput variant="radio" />
          <LoadingInput variant="radio" />
          <LoadingInput variant="radio" />
        </div>
      );
    },
}

export const LoadingBig: Story = {
  render: (props) => {
      return (
        <div className="grid gap-2 w-full">
          <LoadingInput variant="radio" checkboxRadioBig />
          <LoadingInput variant="radio" checkboxRadioBig />
          <LoadingInput variant="radio" checkboxRadioBig />
        </div>
      );
    },
}