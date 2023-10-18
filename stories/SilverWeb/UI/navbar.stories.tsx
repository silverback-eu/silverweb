import LoadingNavbar from "@/components/silverweb/ui/LoadingNavbar";
import Navbar from "@/components/silverweb/ui/Navbar";
import type { Meta, StoryObj } from "@storybook/react";
import { BringToFront, Tags } from "lucide-react";

const meta: Meta<typeof Navbar> = {
  title: "SilverWeb/ UI/ Navbar",
  tags: ['autodocs'],
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Normal: Story = {
    args: {
        openApp: 1,
        quickApps: [{icon: <BringToFront size={23}/>, gradient: 'from-blue-500 to-blue-700', link: '/sw/'}, {icon: <Tags size={23}/>, gradient: 'from-violet-400 to-violet-700', link: '/sw/'}]
    },
};

export const Loading: Story = {
    render: () => <LoadingNavbar openApp={1} />
}
