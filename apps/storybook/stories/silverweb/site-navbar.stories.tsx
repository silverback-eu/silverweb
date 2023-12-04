import { SiteNavbar, LoadingSiteNavbar } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { BringToFront, Tags } from "lucide-react";

const meta: Meta<typeof SiteNavbar> = {
  title: "SilverWeb/ SiteNavbar",
  tags: ["autodocs"],
  component: SiteNavbar,
};

export default meta;

type Story = StoryObj<typeof SiteNavbar>;

export const Normal: Story = {
  args: {
    quickApps: [
      {
        icon: <BringToFront size={23} />,
        gradient: "from-blue-500 to-blue-700",
        link: "/sw/",
      },
      {
        icon: <Tags size={23} />,
        gradient: "from-violet-400 to-violet-700",
        link: "/sw/",
      },
    ],
    openApp: 1,
  },
};

export const Loading: Story = {
  args: {
    openApp: 1,
  },
  render: (props) => <LoadingSiteNavbar {...props} />,
};
