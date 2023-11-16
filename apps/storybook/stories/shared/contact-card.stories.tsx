import { ContactCard, LoadingCard } from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ContactCard> = {
  title: "Shared/ ContactCard",
  tags: ["autodocs"],
  component: ContactCard,
  decorators: [
    (Story) => (
      <div className="m-5 w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ContactCard>;

export const Normal: Story = {
  args: {
    comments: [
      {
        author: "Demo User",
        createdAt: "10/06/2021",
        text: "This is a comment",
      },
    ],
    info: {
      company: "Demo Company",
      email: "person@demo.mail",
      name: "Demo User",
      job: "Demo Job",
      phone: "+1234567890",
    },
  },
};

export const Loading: Story = {
  render: () => <LoadingCard />,
};
