import { Root, Indicator } from "@radix-ui/react-progress";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";

const Progress = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, value, ...props }, ref) => (
  <Root
    className={uicn(
      "ui-relative ui-h-4 ui-w-full ui-overflow-hidden ui-rounded-full ui-bg-secondary",
      className,
    )}
    ref={ref}
    {...props}
  >
    <Indicator
      className="ui-h-full ui-w-full ui-flex-1 ui-bg-primary ui-transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </Root>
));
Progress.displayName = Root.displayName;

export { Progress };
