import {
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  Root,
  Viewport,
  Corner,
} from "@radix-ui/react-scroll-area";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";

type ScrollbarProps = {
  className?: string;
  orientation?: "vertical" | "horizontal";
} & ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>;

const ScrollBar = forwardRef<
  ElementRef<typeof ScrollAreaScrollbar>,
  ScrollbarProps
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaScrollbar
    className={uicn(
      "ui-flex ui-touch-none ui-select-none ui-transition-colors",
      orientation === "vertical" &&
        "ui-h-full ui-border-l ui-border-l-transparent ui-p-[1px] ui-w-2.5",
      orientation === "horizontal" &&
        "ui-h-2.5 ui-border-t ui-border-t-transparent ui-p-[1px]",
      className,
    )}
    orientation={orientation}
    ref={ref}
    {...props}
  >
    <ScrollAreaThumb className="ui-relative ui-flex-1 ui-rounded-full ui-bg-border" />
  </ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;

type ScrollAreaProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Root>;

const ScrollArea = forwardRef<ElementRef<typeof Root>, ScrollAreaProps>(
  ({ className, children, ...props }, ref) => (
    <Root
      className={uicn("ui-elative ui-overflow-hidden", className)}
      ref={ref}
      {...props}
    >
      <Viewport className="ui-h-full ui-w-full ui-rounded-[inherit]">
        {children}
      </Viewport>
      <ScrollBar />
      <Corner />
    </Root>
  ),
);
ScrollArea.displayName = Root.displayName;

export { ScrollArea, ScrollBar };
