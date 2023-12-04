import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Shared/ Card",
  tags: ["autodocs"],
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Normal: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum suscipit
        voluptate sapiente consequuntur aliquam maiores exercitationem, error
        corporis doloribus magnam omnis placeat vero officiis ratione, odit
        maxime cumque. Repudiandae, nam.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  ),
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};
