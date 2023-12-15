import { Root, Trigger, Content } from "@radix-ui/react-hover-card";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";

const HoverCard = Root;

const HoverCardTrigger = Trigger;

type HoverCardTriggerProps = {
  className?: string;
  align?: "center" | "start" | "end";
  sideOffset?: number;
} & ComponentPropsWithoutRef<typeof Content>;

const HoverCardContent = forwardRef<
  ElementRef<typeof Content>,
  HoverCardTriggerProps
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <Content
    align={align}
    className={uicn(
      "ui-z-50 ui-w-64 ui-rounded-md ui-border ui-bg-popover ui-p-4 ui-text-popover-foreground ui-shadow-md ui-outline-none data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0 data-[state=closed]:ui-zoom-out-95 data-[state=open]:ui-zoom-in-95 data-[side=bottom]:ui-slide-in-from-top-2 data-[side=left]:ui-slide-in-from-right-2 data-[side=right]:ui-slide-in-from-left-2 data-[side=top]:ui-slide-in-from-bottom-2",
      className,
    )}
    ref={ref}
    sideOffset={sideOffset}
    {...props}
  />
));
HoverCardContent.displayName = Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
