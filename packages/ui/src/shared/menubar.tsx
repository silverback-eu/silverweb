import {
  Menu,
  Root,
  Group,
  Portal,
  Sub,
  RadioGroup,
  Trigger,
  SubContent,
  SubTrigger,
  CheckboxItem,
  Content,
  RadioItem,
  Item,
  ItemIndicator,
  Label,
  Separator,
} from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
} from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";

const MenubarMenu = Menu;

const MenubarGroup = Group;

const MenubarPortal = Portal;

const MenubarSub = Sub;

const MenubarRadioGroup = RadioGroup;

const Menubar = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    className={uicn(
      "ui-flex ui-h-10 ui-items-center ui-space-x-1 ui-rounded-md ui-border ui-bg-background ui-p-1",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Menubar.displayName = Root.displayName;

const MenubarTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, ...props }, ref) => (
  <Trigger
    className={uicn(
      "ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-px-3 ui-py-1.5 ui-text-sm ui-font-medium ui-outline-none focus:ui-bg-accent focus:ui-text-accent-foreground data-[state=open]:ui-bg-accent data-[state=open]:ui-text-accent-foreground",
      className,
    )}
    ref={ref}
    {...props}
  />
));
MenubarTrigger.displayName = Trigger.displayName;

const MenubarSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  ComponentPropsWithoutRef<typeof SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <SubTrigger
    className={uicn(
      "ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-px-2 ui-py-1.5 ui-text-sm ui-outline-none focus:ui-bg-accent focus:ui-text-accent-foreground data-[state=open]:ui-bg-accent data-[state=open]:ui-text-accent-foreground",
      inset && "ui-pl-8",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
    <ChevronRight className="ui-ml-auto ui-h-4 ui-w-4" />
  </SubTrigger>
));
MenubarSubTrigger.displayName = SubTrigger.displayName;

const MenubarSubContent = forwardRef<
  ElementRef<typeof SubContent>,
  ComponentPropsWithoutRef<typeof SubContent>
>(({ className, ...props }, ref) => (
  <SubContent
    className={uicn(
      "ui-z-50 ui-min-w-[8rem] ui-overflow-hidden ui-rounded-md ui-border ui-bg-popover ui-p-1 ui-text-popover-foreground data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0 data-[state=closed]:ui-zoom-out-95 data-[state=open]:ui-zoom-in-95 data-[side=bottom]:ui-slide-in-from-top-2 data-[side=left]:ui-slide-in-from-right-2 data-[side=right]:ui-slide-in-from-left-2 data-[side=top]:ui-slide-in-from-bottom-2",
      className,
    )}
    ref={ref}
    {...props}
  />
));
MenubarSubContent.displayName = SubContent.displayName;

const MenubarContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref,
  ) => (
    <Portal>
      <Content
        align={align}
        alignOffset={alignOffset}
        className={uicn(
          "ui-z-50 ui-min-w-[12rem] ui-overflow-hidden ui-rounded-md ui-border ui-bg-popover ui-p-1 ui-text-popover-foreground ui-shadow-md data-[state=open]:ui-animate-in data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0 data-[state=closed]:ui-zoom-out-95 data-[state=open]:ui-zoom-in-95 data-[side=bottom]:ui-slide-in-from-top-2 data-[side=left]:ui-slide-in-from-right-2 data-[side=right]:ui-slide-in-from-left-2 data-[side=top]:ui-slide-in-from-bottom-2",
          className,
        )}
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      />
    </Portal>
  ),
);
MenubarContent.displayName = Content.displayName;

const MenubarItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Item
    className={uicn(
      "ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-px-2 ui-py-1.5 ui-text-sm ui-outline-none focus:ui-bg-accent focus:ui-text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50",
      inset && "ui-pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
MenubarItem.displayName = Item.displayName;

const MenubarCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  ComponentPropsWithoutRef<typeof CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <CheckboxItem
    checked={checked}
    className={uicn(
      "ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-py-1.5 ui-pl-8 ui-pr-2 ui-text-sm ui-outline-none focus:ui-bg-accent focus:ui-text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="ui-absolute ui-left-2 ui-flex ui-h-3.5 ui-w-3.5 ui-items-center ui-justify-center">
      <ItemIndicator>
        <Check className="ui-h-4 ui-w-4" />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
));
MenubarCheckboxItem.displayName = CheckboxItem.displayName;

const MenubarRadioItem = forwardRef<
  ElementRef<typeof RadioItem>,
  ComponentPropsWithoutRef<typeof RadioItem>
>(({ className, children, ...props }, ref) => (
  <RadioItem
    className={uicn(
      "ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-py-1.5 ui-pl-8 ui-pr-2 ui-text-sm ui-outline-none focus:ui-bg-accent focus:ui-text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="ui-absolute ui-left-2 ui-flex ui-h-3.5 ui-w-3.5 ui-items-center ui-justify-center">
      <ItemIndicator>
        <Circle className="ui-h-2 ui-w-2 ui-fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
));
MenubarRadioItem.displayName = RadioItem.displayName;

const MenubarLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Label
    className={uicn(
      "ui-px-2 ui-py-1.5 ui-text-xs ui-font-semibold",
      inset && "ui-pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
MenubarLabel.displayName = Label.displayName;

const MenubarSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    className={uicn("-ui-mx-1 ui-my-1 ui-h-px ui-bg-muted", className)}
    ref={ref}
    {...props}
  />
));
MenubarSeparator.displayName = Separator.displayName;

function MenubarShortcut({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>): JSX.Element {
  return (
    <span
      className={uicn(
        "ui-ml-auto ui-text-xs ui-tracking-widest ui-text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
