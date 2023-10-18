import CheckboxInput from "@/components/silverweb/inputs/CheckboxInput";
import LoadingInput from "@/components/silverweb/inputs/LoadingInput";
import { Label } from "@/components/ui/label";
import type { Meta, StoryObj } from "@storybook/react";
import { Building } from "lucide-react";

const meta: Meta<typeof CheckboxInput> = {
  title: "SilverWeb/Inputs/CheckboxInput",
  component: CheckboxInput,
  tags: ['autodocs'],
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
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CheckboxInput>;

export const Normal: Story = {
  render: (props) => {
    const { id, ...rest } = props;
    return (
      <div className="grid gap-2 w-full">
        <div className="flex items-center gap-2">
          <CheckboxInput {...props} id="1" />
          <Label htmlFor={"1"}>Checkbox 1</Label>
        </div>
        <div className="flex items-center gap-2">
          <CheckboxInput {...props} id="2" />
          <Label htmlFor={"2"}>Checkbox 2</Label>
        </div>
        <div className="flex items-center gap-2">
          <CheckboxInput {...props} id="3" />
          <Label htmlFor={"3"}>Checkbox 3</Label>
        </div>
      </div>
    );
  },
  args: {
    variant: "default",
  },
};
export const Big: Story = {
  render: (props) => {
    return (
      <div className="grid gap-2 w-full">
        <CheckboxInput {...props} id="1" />
        <CheckboxInput {...props} id="2" />
        <CheckboxInput {...props} id="3" />
      </div>
    );
  },
  args: {
    variant: "big",
    cardDescription: "Card description",
    cardLabel: "Card label",
    icon: <Building size={24} />,
  },
};

export const Loading: Story = {
    render: (props) => {
        return (
          <div className="grid gap-2 w-full">
            <LoadingInput variant="checkbox" />
            <LoadingInput variant="checkbox" />
            <LoadingInput variant="checkbox" />
          </div>
        );
      },
}

export const LoadingBig: Story = {
    render: (props) => {
        return (
          <div className="grid gap-2 w-full">
            <LoadingInput variant="checkbox" checkboxRadioBig />
            <LoadingInput variant="checkbox" checkboxRadioBig />
            <LoadingInput variant="checkbox" checkboxRadioBig />
          </div>
        );
      },
}
