import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dialog> = {
  title: "Shared/ Dialog",
  tags: ["autodocs"],
  component: Dialog,
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Normal: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            Dialog description. Lorem ipsum dolor sit amet, consectetur
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          suscipit. Aliquam, dolorum explicabo tenetur fugit culpa dolorem
          asperiores consequatur eaque expedita exercitationem accusantium sit,
          ducimus at corrupti? Eos, perferendis odio?
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
