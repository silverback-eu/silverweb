import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Label,
} from "@silverweb/ui/shared";
import { ComboBox, TextInput } from "@silverweb/ui/sw-inputs/default";
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
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="DemoText">Demo Text</Label>
              <TextInput id="DemoText" placeholder="Text for demo" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="DemoSelect">Demo Select</Label>
              <ComboBox
                id="DemoSelect"
                items={[
                  { label: "Demo 1.", value: "demo1" },
                  { label: "Demo 2.", value: "demo2" },
                  { label: "Demo 3.", value: "demo3" },
                ]}
              />
            </div>
          </div>
        </form>
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
