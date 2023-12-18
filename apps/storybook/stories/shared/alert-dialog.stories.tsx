import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AlertDialog> = {
  title: "Shared/ AlertDialog",
  tags: ["autodocs"],
  component: AlertDialog,
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Normal: Story = {
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button>Open Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Lorem ipsum</AlertDialogTitle>
          <AlertDialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima
            temporibus nostrum voluptas, minus enim ipsum veniam nisi incidunt
            saepe necessitatibus autem vero? Dolore voluptatum ea odit in quis
            repellendus.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Action</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
