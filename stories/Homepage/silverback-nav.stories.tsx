import Navbar from "@/components/silverback/Navbar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Navbar> = {
  title: "SilverBack/ Navbar",
  tags: ['autodocs'],
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Logout: Story = {
  render: () => <Navbar />,
};
export const LoginEmployee: Story = {
  render: () => <Navbar loginUser={{ type: "Employee", src: "https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight&hairColor=6a4e35&skinColor=f2d3b1,ecad80&backgroundColor=d1d4f9", fallback: "FG", alt: "FG"}}/>,
};
export const LoginClient: Story = {
  render: () => <Navbar loginUser={{ type: "Client", src: "https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight&hairColor=6a4e35&skinColor=f2d3b1,ecad80&backgroundColor=d1d4f9", fallback: "FG", alt: "FG"}}/>,
};
export const LoginAdmin: Story = {
  render: () => <Navbar loginUser={{ type: "Admin", src: "https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight&hairColor=6a4e35&skinColor=f2d3b1,ecad80&backgroundColor=d1d4f9", fallback: "FG", alt: "FG"}}/>,
};
