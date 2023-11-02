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

import {
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  Root,
  Viewport,
  Corner,
} from "@radix-ui/react-scroll-area";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

type ScrollbarProps = {
  className?: string;
  orientation?: "vertical" | "horizontal";
} & ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>;

const ScrollBar = forwardRef<
  ElementRef<typeof ScrollAreaScrollbar>,
  ScrollbarProps
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaScrollbar
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 border-t border-t-transparent p-[1px]",
      className
    )}
    orientation={orientation}
    ref={ref}
    {...props}
  >
    <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;

type ScrollAreaProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Root>;

const ScrollArea = forwardRef<ElementRef<typeof Root>, ScrollAreaProps>(
  ({ className, children, ...props }, ref) => (
    <Root
      className={cn("relative overflow-hidden", className)}
      ref={ref}
      {...props}
    >
      <Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </Viewport>
      <ScrollBar />
      <Corner />
    </Root>
  )
);
ScrollArea.displayName = Root.displayName;

export { ScrollArea, ScrollBar };
