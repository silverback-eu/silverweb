import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@silverweb/ui";
import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";

const meta: Meta<typeof Collapsible> = {
  title: "Shared/ Collapsible",
  tags: ["autodocs"],
  component: Collapsible,
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Normal: Story = {
  render: (args) => (
    <Collapsible {...args}>
      <CollapsibleTrigger>Lorem ipsum</CollapsibleTrigger>
      <CollapsibleContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        nulla expedita! Tempore, odit nam magni corrupti, modi commodi pariatur
        iure sit quod officia architecto consequatur, minima quaerat fugit illo
        ducimus.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const Styled: Story = {
  render: (args) => <StyledComponent {...args} />,
};

function StyledComponent(args: Story["args"]): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Collapsible
      {...args}
      className="w-[350px] space-y-2"
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Lorem ipsum</h4>
        <CollapsibleTrigger asChild>
          <Button className="w-9 p-0" size="sm" variant="ghost">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        Lorem ipsum dolor sit amet.
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Lorem ipsum dolor sit amet.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
