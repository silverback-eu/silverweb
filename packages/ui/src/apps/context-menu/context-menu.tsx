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
  CheckboxItem,
  ItemIndicator,
  RadioItem,
  Label,
  Separator,
} from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
} from "react";
import { forwardRef } from "react";
import { uicn } from "../../lib";

const ContextMenu = Root;

const ContextMenuTrigger = Trigger;

const ContextMenuGroup = Group;

const ContextMenuPortal = Portal;

const ContextMenuSub = Sub;

const ContextMenuRadioGroup = RadioGroup;

const ContextMenuSubTrigger = forwardRef<
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
ContextMenuSubTrigger.displayName = SubTrigger.displayName;

const ContextMenuSubContent = forwardRef<
  ElementRef<typeof SubContent>,
  ComponentPropsWithoutRef<typeof SubContent>
>(({ className, ...props }, ref) => (
  <SubContent
    className={uicn(
      "ui-z-50 ui-min-w-[8rem] ui-overflow-hidden ui-rounded-md ui-border ui-bg-popover ui-p-1 ui-text-popover-foreground ui-shadow-md data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0 data-[state=closed]:ui-zoom-out-95 data-[state=open]:ui-zoom-in-95 data-[side=bottom]:ui-slide-in-from-top-2 data-[side=left]:ui-slide-in-from-right-2 data-[side=right]:ui-slide-in-from-left-2 data-[side=top]:ui-slide-in-from-bottom-2",
      className,
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuSubContent.displayName = SubContent.displayName;

const ContextMenuContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => (
  <Portal>
    <Content
      className={uicn(
        "ui-z-50 ui-min-w-[8rem] ui-overflow-hidden ui-rounded-md ui-border ui-bg-popover ui-p-1 ui-text-popover-foreground ui-shadow-md ui-animate-in ui-fade-in-80 data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0 data-[state=closed]:ui-zoom-out-95 data-[state=open]:ui-zoom-in-95 data-[side=bottom]:ui-slide-in-from-top-2 data-[side=left]:ui-slide-in-from-right-2 data-[side=right]:ui-slide-in-from-left-2 data-[side=top]:ui-slide-in-from-bottom-2",
        className,
      )}
      ref={ref}
      {...props}
    />
  </Portal>
));
ContextMenuContent.displayName = Content.displayName;

const ContextMenuItem = forwardRef<
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
ContextMenuItem.displayName = Item.displayName;

const ContextMenuCheckboxItem = forwardRef<
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
ContextMenuCheckboxItem.displayName = CheckboxItem.displayName;

const ContextMenuRadioItem = forwardRef<
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
ContextMenuRadioItem.displayName = RadioItem.displayName;

const ContextMenuLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Label
    className={uicn(
      "ui-px-2 ui-py-1.5 ui-text-xs ui-font-semibold ui-text-foreground",
      inset && "ui-pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuLabel.displayName = Label.displayName;

const ContextMenuSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    className={uicn("-ui-mx-1 ui-my-1 ui-h-px ui-bg-border", className)}
    ref={ref}
    {...props}
  />
));
ContextMenuSeparator.displayName = Separator.displayName;

function ContextMenuShortcut({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>): JSX.Element {
  return (
    <span
      className={uicn(
        "ui-ml-auto ui-inline-block ui-text-xs ui-tracking-widest ui-text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
