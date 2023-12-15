import type { ElementRef, ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { Provider, Root, Trigger, Content } from "@radix-ui/react-tooltip";
import { uicn } from "../lib";

const TooltipProvider = Provider;

const Tooltip = Root;

const TooltipTrigger = Trigger;

const TooltipContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Content
    className={uicn(
      "ui-z-50 ui-overflow-hidden ui-rounded-md ui-border ui-bg-popover ui-px-3 ui-py-1.5 ui-text-sm ui-text-popover-foreground ui-shadow-md ui-animate-in ui-fade-in-0 ui-zoom-in-95 data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=closed]:ui-zoom-out-95 data-[side=bottom]:ui-slide-in-from-top-2 data-[side=left]:ui-slide-in-from-right-2 data-[side=right]:ui-slide-in-from-left-2 data-[side=top]:ui-slide-in-from-bottom-2",
      className,
    )}
    ref={ref}
    sideOffset={sideOffset}
    {...props}
  />
));
TooltipContent.displayName = Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
