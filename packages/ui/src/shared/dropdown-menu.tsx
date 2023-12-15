import type { CheckedState } from "@radix-ui/react-checkbox";
import {
  Root,
  Trigger,
  Group,
  Portal,
  Sub,
  RadioGroup,
  SubTrigger,
  SubContent,
  Content,
  Item,
  ItemIndicator,
  CheckboxItem,
  RadioItem,
  Label,
  Separator,
} from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Dot } from "lucide-react";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
} from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";

const DropdownMenu = Root;

const DropdownMenuTrigger = Trigger;

const DropdownMenuGroup = Group;

const DropdownMenuPortal = Portal;

const DropdownMenuSub = Sub;

const DropdownMenuRadioGroup = RadioGroup;

type DropdownMenuSubTriggerProps = {
  inset?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<typeof SubTrigger>;

const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <SubTrigger
    className={uicn(
      "ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-px-2 ui-py-1.5 ui-text-sm ui-outline-none focus:ui-bg-accent data-[state=open]:ui-bg-accent",
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
DropdownMenuSubTrigger.displayName = SubTrigger.displayName;

type DropdownMenuSubContentProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof SubContent>;

const DropdownMenuSubContent = forwardRef<
  ElementRef<typeof SubContent>,
  DropdownMenuSubContentProps
>(({ className, ...props }, ref) => (
  <SubContent
    className={uicn(
      "ui-z-50 ui-min-w-[8rem] ui-overflow-hidden ui-rounded-md ui-border ui-bg-popover ui-p-1 ui-text-popover-foreground ui-shadow-lg data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0 data-[state=closed]:ui-zoom-out-95 data-[state=open]:ui-zoom-in-95 data-[side=bottom]:ui-slide-in-from-top-2 data-[side=left]:ui-slide-in-from-right-2 data-[side=right]:ui-slide-in-from-left-2 data-[side=top]:ui-slide-in-from-bottom-2",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuSubContent.displayName = SubContent.displayName;

type DropdownMenuContentProps = {
  className?: string;
  sideOffset?: number;
} & ComponentPropsWithoutRef<typeof Content>;

const DropdownMenuContent = forwardRef<
  ElementRef<typeof Content>,
  DropdownMenuContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Portal>
    <Content
      className={uicn(
        "ui-z-50 ui-min-w-[8rem] ui-overflow-hidden ui-rounded-md ui-border ui-bg-popover ui-p-1 ui-text-popover-foreground ui-shadow-md",
        "data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0 data-[state=closed]:ui-zoom-out-95 data-[state=open]:ui-zoom-in-95 data-[side=bottom]:ui-slide-in-from-top-2 data-[side=left]:ui-slide-in-from-right-2 data-[side=right]:ui-slide-in-from-left-2 data-[side=top]:ui-slide-in-from-bottom-2",
        className,
      )}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </Portal>
));
DropdownMenuContent.displayName = Content.displayName;

type DropdownMenuItemProps = {
  inset?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<typeof Item>;

const DropdownMenuItem = forwardRef<
  ElementRef<typeof Item>,
  DropdownMenuItemProps
>(({ className, inset, ...props }, ref) => (
  <Item
    className={uicn(
      "ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-px-2 ui-py-1.5 ui-text-sm ui-outline-none ui-transition-colors focus:ui-bg-accent focus:ui-text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50",
      inset && "ui-pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuItem.displayName = Item.displayName;

type DropdownMenuCheckboxItemProps = {
  className?: string;
  checked?: CheckedState;
} & ComponentPropsWithoutRef<typeof CheckboxItem>;

const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <CheckboxItem
    checked={checked}
    className={uicn(
      "ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-py-1.5 ui-pl-8 ui-pr-2 ui-text-sm ui-outline-none ui-transition-colors focus:ui-bg-accent focus:ui-text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50",
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
DropdownMenuCheckboxItem.displayName = CheckboxItem.displayName;

type DropdownMenuRadioItemProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof RadioItem>;

const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof RadioItem>,
  DropdownMenuRadioItemProps
>(({ className, children, ...props }, ref) => (
  <RadioItem
    className={uicn(
      "ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-py-1.5 ui-pl-8 ui-pr-2 ui-text-sm ui-outline-none ui-transition-colors focus:ui-bg-accent focus:ui-text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="ui-absolute ui-left-2 ui-flex ui-h-3.5 ui-w-3.5 ui-items-center ui-justify-center">
      <ItemIndicator>
        <Dot className="ui-h-4 ui-w-4 ui-fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
));
DropdownMenuRadioItem.displayName = RadioItem.displayName;

type DropdownMenuLabelProps = {
  inset?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<typeof Label>;

const DropdownMenuLabel = forwardRef<
  ElementRef<typeof Label>,
  DropdownMenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <Label
    className={uicn(
      "ui-px-2 ui-py-1.5 ui-text-sm ui-font-semibold",
      inset && "ui-pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuLabel.displayName = Label.displayName;

type DropdownMenuSeparatorProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Separator>;

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof Separator>,
  DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <Separator
    className={uicn("-ui-mx-1 ui-my-1 ui-h-px ui-bg-muted", className)}
    ref={ref}
    {...props}
  />
));
DropdownMenuSeparator.displayName = Separator.displayName;

type DropdownMenuShortcutProps = {
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

function DropdownMenuShortcut({
  className,
  ...props
}: DropdownMenuShortcutProps): JSX.Element {
  return (
    <span
      className={uicn(
        "ui-ml-auto ui-text-xs ui-tracking-widest ui-opacity-60",
        className,
      )}
      {...props}
    />
  );
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
