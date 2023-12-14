import type { Meta, StoryObj } from "@storybook/react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@silverweb/ui";
import { useState } from "react";

const meta: Meta<typeof Menubar> = {
  title: "Shared/ Menubar",
  tags: ["autodocs"],
  component: Menubar,
};

export default meta;

type Story = StoryObj<typeof Menubar>;

export const Normal: Story = {
  render: () => (
    <Menubar>
      <MenuComponent />
      <MenuComponent />
      <MenuComponent />
      <MenuComponent />
    </Menubar>
  ),
};

function MenuComponent(): JSX.Element {
  const [value, setValue] = useState<string>("item-1");
  return (
    <MenubarMenu>
      <MenubarTrigger>Menu</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Item 1<MenubarShortcut>⌘1</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>Item 2</MenubarItem>
        <MenubarItem>Item 3</MenubarItem>
        <MenubarItem>Item 4</MenubarItem>
        <MenubarSeparator />
        <MenubarGroup>
          <MenubarLabel>Group 1</MenubarLabel>
          <MenubarItem>
            Item 5<MenubarShortcut>⌘5</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Item 6<MenubarShortcut>⌘6</MenubarShortcut>
          </MenubarItem>
        </MenubarGroup>
        <MenubarSeparator />
        <MenubarSub>
          <MenubarSubTrigger>SubMenu</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Sub Item</MenubarItem>
            <MenubarItem>Sub Item</MenubarItem>
            <MenubarItem>Sub Item</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarSeparator />
        <MenubarCheckboxItem>Checkbox Item 1</MenubarCheckboxItem>
        <MenubarCheckboxItem checked>Checkbox Item 2</MenubarCheckboxItem>
        <MenubarCheckboxItem>Checkbox Item 3</MenubarCheckboxItem>
        <MenubarSeparator />
        <MenubarRadioGroup
          onValueChange={(v) => {
            setValue(v);
          }}
          value={value}
        >
          <MenubarRadioItem value="item-1">Radio Item 1</MenubarRadioItem>
          <MenubarRadioItem value="item-2">Radio Item 2</MenubarRadioItem>
          <MenubarRadioItem value="item-3">Radio Item 3</MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  );
}
