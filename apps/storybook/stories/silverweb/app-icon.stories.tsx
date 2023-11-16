import { AppIcon } from "@silverweb/ui/silverweb";
import type { Meta, StoryObj } from "@storybook/react";
import { BringToFront } from "lucide-react";

const meta: Meta<typeof AppIcon> = {
  title: "SilverWeb/ AppIcon",
  tags: ["autodocs"],
  component: AppIcon,
  decorators: [
    (Story) => (
      <div className="w-12">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AppIcon>;

export const Normal: Story = {
  args: {
    gradient: "from-violet-400 to-violet-700",
    icon: BringToFront,
    link: "#",
    name: "App",
    size: 30,
  },
};
