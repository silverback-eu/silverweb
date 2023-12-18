import type { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@silverweb/ui";
import { HelpCircle } from "lucide-react";

const meta: Meta<typeof Tooltip> = {
  title: "Shared/ Tooltip",
  tags: ["autodocs"],
  component: Tooltip,
  decorators: [
    (Story) => (
      <div className="m-5 w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Normal: Story = {
  render: () => (
    <TooltipProvider>
      <div className="relative p-2">
        <div className="absolute right-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-3 w-3" />
            </TooltipTrigger>
            <TooltipContent className="w-52">Lorem ipsum dolor</TooltipContent>
          </Tooltip>
        </div>
        <div className="p-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos illo
          odit necessitatibus amet at laborum officia id minus alias doloribus
          repudiandae, iusto aut labore illum nemo reiciendis, facilis modi
          explicabo.
        </div>
        <div className="p-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos illo
          odit necessitatibus amet at laborum officia id minus alias doloribus
          repudiandae, iusto aut labore illum nemo reiciendis, facilis modi
          explicabo.
        </div>
      </div>
    </TooltipProvider>
  ),
};
