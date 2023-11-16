import { Button } from "@silverweb/ui/shared";
import { BurgerMenuIcon } from "@silverweb/ui/silverback";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment, useState } from "react";

const meta: Meta<typeof BurgerMenuIcon> = {
  title: "SilverBack/ BurgerMenuIcon",
  tags: ["autodocs"],
  component: BurgerMenuIcon,
};

export default meta;

type Story = StoryObj<typeof BurgerMenuIcon>;

export const Normal: Story = {};

export const Controlled: Story = {
  render: () => <ControlledBurgerMenu />,
};

function ControlledBurgerMenu(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <Button
        className="m-2"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </Button>
      <Button
        className="m-2"
        onClick={() => {
          setOpen(false);
        }}
      >
        Close
      </Button>
      <BurgerMenuIcon
        onOpenChange={(currentOpen) => {
          setOpen(currentOpen);
        }}
        open={open}
      />
    </Fragment>
  );
}
