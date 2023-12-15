import { Root, Trigger, Portal, Content } from "@radix-ui/react-popover";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";

const Popover = Root;

const PopoverTrigger = Trigger;

type PopoverContentProps = {
  align?: "center" | "start" | "end";
  sideOffset?: number;
  className?: string;
} & ComponentPropsWithoutRef<typeof Content>;

const PopoverContent = forwardRef<
  ElementRef<typeof Content>,
  PopoverContentProps
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <Portal>
    <Content
      align={align}
      className={uicn(
        "ui-z-50 ui-w-72 ui-rounded-md ui-border ui-bg-popover ui-p-4 ui-text-popover-foreground ui-shadow-md ui-outline-none data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0 data-[state=closed]:ui-zoom-out-95 data-[state=open]:ui-zoom-in-95 data-[side=bottom]:ui-slide-in-from-top-2 data-[side=left]:ui-slide-in-from-right-2 data-[side=right]:ui-slide-in-from-left-2 data-[side=top]:ui-slide-in-from-bottom-2",
        className,
      )}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </Portal>
));
PopoverContent.displayName = Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
