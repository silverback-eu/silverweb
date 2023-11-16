import { Button } from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";
import { HardHat, Loader2 } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Shared/ Button",
  tags: ["autodocs"],
  component: Button,
  render: (args) => (
    <div className="flex gap-5">
      <div className="grid text-sm">
        Size sm
        <Button {...args} size="sm" />
      </div>
      <div className="grid text-sm">
        Size normal
        <Button {...args} />
      </div>
      <div className="grid text-sm">
        Size lg
        <Button {...args} size="lg" />
      </div>
      <div className="grid text-sm">
        Size icon
        <Button {...args} size="icon">
          <HardHat />
        </Button>
      </div>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Normal: Story = {
  args: {
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    children: "Button",
    variant: "link",
  },
};

export const Destructive: Story = {
  args: {
    children: "Button",
    variant: "destructive",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: (
      <div className="flex items-center">
        <Loader2 className="animate-spin mr-2 h-4 w-4" />
        Loading
      </div>
    ),
    disabled: true,
  },
};

export const AsChid: Story = {
  args: {
    children: (
      <a href="https://google.com" rel="noopener" target="_blank">
        Google
      </a>
    ),
    asChild: true,
  },
};
