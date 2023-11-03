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

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Root,
  Group,
  Value,
  Trigger,
  Portal,
  Content,
  Item,
  Separator,
  Icon,
  Viewport,
  Label,
  ItemIndicator,
  ItemText,
} from "@radix-ui/react-select";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Select = Root;

const SelectGroup = Group;

const SelectValue = Value;

type SelectTriggerProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Trigger>;

const SelectTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  SelectTriggerProps
>(({ className, children, ...props }, ref) => (
  <Trigger
    className={cn(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <Icon asChild>
      <CaretSortIcon className="h-4 w-4 opacity-50" />
    </Icon>
  </Trigger>
));
SelectTrigger.displayName = Trigger.displayName;

type SelectContentProps = {
  className?: string;
  position?: "item-aligned" | "popper";
} & ComponentPropsWithoutRef<typeof Content>;

const SelectContent = forwardRef<
  ElementRef<typeof Content>,
  SelectContentProps
>(({ className, children, position = "popper", ...props }, ref) => (
  <Portal>
    <Content
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      ref={ref}
      {...props}
    >
      <Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </Viewport>
    </Content>
  </Portal>
));
SelectContent.displayName = Content.displayName;

type SelectLabelProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Label>;

const SelectLabel = forwardRef<ElementRef<typeof Label>, SelectLabelProps>(
  ({ className, ...props }, ref) => (
    <Label
      className={cn("px-2 py-1.5 text-sm font-semibold", className)}
      ref={ref}
      {...props}
    />
  )
);
SelectLabel.displayName = Label.displayName;

type SelectItemProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Item>;

const SelectItem = forwardRef<ElementRef<typeof Item>, SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <Item
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    >
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </ItemIndicator>
      </span>
      <ItemText>{children}</ItemText>
    </Item>
  )
);
SelectItem.displayName = Item.displayName;

type SelectSeparatorProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Separator>;

const SelectSeparator = forwardRef<
  ElementRef<typeof Separator>,
  SelectSeparatorProps
>(({ className, ...props }, ref) => (
  <Separator
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    ref={ref}
    {...props}
  />
));
SelectSeparator.displayName = Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};