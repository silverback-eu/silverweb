/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Inspired, copied and slightly modified or directly copied from:
 * https://ui.shadcn.com/
 * Many Thanks to shadcn
 *
 */

"use client";

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
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
} from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

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
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
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
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
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
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
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
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
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
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <CheckIcon className="h-4 w-4" />
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
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <DotFilledIcon className="h-4 w-4 fill-current" />
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
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
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
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
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
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
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
