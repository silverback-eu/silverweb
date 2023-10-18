import User from "@/components/silverback/User";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof User> = {
  title: "User",
  tags: ['autodocs'],
  component: User,
};

export default meta;

type Story = StoryObj<typeof User>;

export const Admin: Story = {
  render: () => (
    <div style={{ padding: 40}}>
      <User
        alt="@fgrimm"
        fallback="FG"
        src="https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight&hairColor=6a4e35&skinColor=f2d3b1,ecad80&backgroundColor=d1d4f9"
        type="Admin"
      />
    </div>
  ),
};
export const Employee: Story = {
  render: () => (
    <div style={{ padding: 40}}>
      <User
        alt="@fgrimm"
        fallback="FG"
        src="https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight&hairColor=6a4e35&skinColor=f2d3b1,ecad80&backgroundColor=d1d4f9"
        type="Employee"
      />
    </div>
  ),
};
export const Client: Story = {
  render: () => (
    <div style={{ padding: 40}}>
      <User
        alt="@fgrimm"
        fallback="FG"
        src="https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight&hairColor=6a4e35&skinColor=f2d3b1,ecad80&backgroundColor=d1d4f9"
        type="Client"
      />
    </div>
  ),
};
