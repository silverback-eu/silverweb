import { BusinessCard, LoadingCard } from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BusinessCard> = {
  title: "Shared/ BusinessCard",
  tags: ["autodocs"],
  component: BusinessCard,
  decorators: [
    (Story) => (
      <div className="m-5 w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BusinessCard>;

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
      address: {
        city: "City",
        country: "Country",
        street: "Street No. 1",
      },
      email: "demo@company.mail",
      name: "Demo Company",
      group: "Demo Group",
      phone: "+1234567890",
      workingField: "Demo Working Field",
    },
  },
};

export const Loading: Story = {
  render: () => <LoadingCard />,
};
