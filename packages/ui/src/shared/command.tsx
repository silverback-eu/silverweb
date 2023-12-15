import type { DialogProps } from "@radix-ui/react-dialog";
import { Search } from "lucide-react";
import { Command as CommandPrimitive } from "cmdk";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
} from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";
import { Dialog, DialogContent } from "./dialog";

type CommandProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof CommandPrimitive>;

const Command = forwardRef<ElementRef<typeof CommandPrimitive>, CommandProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive
      className={uicn(
        "ui-flex ui-h-full ui-w-full ui-flex-col ui-overflow-hidden ui-rounded-md ui-bg-popover ui-text-popover-foreground",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Command.displayName = CommandPrimitive.displayName;

type CommandDialogProps = DialogProps;

function CommandDialog({
  children,
  ...props
}: CommandDialogProps): JSX.Element {
  return (
    <Dialog {...props}>
      <DialogContent className="ui-overflow-hidden ui-p-0">
        <Command className="[&_[cmdk-group-heading]]:ui-px-2 [&_[cmdk-group-heading]]:ui-font-medium [&_[cmdk-group-heading]]:ui-text-muted-foreground [&_[cmdk-group]:ui-not([hidden])_~[cmdk-group]] [&_[cmdk-group]]:ui-px-2 [&_[cmdk-input-wrapper]_svg]:ui-h-5 [&_[cmdk-input-wrapper]_svg]:ui-w-5 [&_[cmdk-input]]:ui-h-12 [&_[cmdk-item]]:ui-px-2 [&_[cmdk-item]]:ui-py-3 [&_[cmdk-item]_svg]:ui-h-5 [&_[cmdk-item]_svg]:ui-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

type CommandInputProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof CommandPrimitive.Input>;

const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  CommandInputProps
>(({ className, ...props }, ref) => (
  <div
    className="ui-flex ui-items-center ui-border-b ui-px-3"
    // eslint-disable-next-line react/no-unknown-property -- cmdk- attributes are valid
    cmdk-input-wrapper=""
  >
    <Search className="ui-mr-2 ui-h-4 ui-w-4 ui-shrink-0 ui-opacity-50" />
    <CommandPrimitive.Input
      className={uicn(
        "ui-flex ui-h-10 ui-w-full ui-rounded-md ui-bg-transparent ui-py-3 ui-text-sm ui-outline-none placeholder:ui-text-muted-foreground disabled:ui-cursor-not-allowed disabled:ui-opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

type CommandListProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof CommandPrimitive.List>;

const CommandList = forwardRef<
  ElementRef<typeof CommandPrimitive.List>,
  CommandListProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    className={uicn(
      "ui-max-h-[300px] ui-overflow-y-auto ui-overflow-x-hidden",
      className,
    )}
    ref={ref}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = forwardRef<
  ElementRef<typeof CommandPrimitive.Empty>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    className="ui-py-6 ui-text-center ui-text-sm"
    ref={ref}
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

type CommandGroupProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;

const CommandGroup = forwardRef<
  ElementRef<typeof CommandPrimitive.Group>,
  CommandGroupProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    className={uicn(
      "ui-overflow-hidden ui-p-1 ui-text-foreground [&_[cmdk-group-heading]]:ui-px-2 [&_[cmdk-group-heading]]:ui-py-1.5 [&_[cmdk-group-heading]]:ui-text-xs [&_[cmdk-group-heading]]:ui-font-medium [&_[cmdk-group-heading]]:ui-text-muted-foreground",
      className,
    )}
    ref={ref}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

type CommandSeparatorProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;

const CommandSeparator = forwardRef<
  ElementRef<typeof CommandPrimitive.Separator>,
  CommandSeparatorProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    className={uicn("-ui-mx-1 ui-h-px ui-bg-border", className)}
    ref={ref}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

type CommandItemProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;

const CommandItem = forwardRef<
  ElementRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    className={uicn(
      "ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-px-2 ui-py-1.5 ui-text-sm ui-outline-none aria-selected:ui-bg-accent aria-selected:ui-text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

type CommandShortcutProps = {
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

function CommandShortcut({
  className,
  ...props
}: CommandShortcutProps): JSX.Element {
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
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
