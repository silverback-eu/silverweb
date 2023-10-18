import Footer from "@/components/silverback/Footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  title: "SilverBack/ Footer",
  tags: ['autodocs'],
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Normal: Story = {
  render: () => <Footer />,
};

