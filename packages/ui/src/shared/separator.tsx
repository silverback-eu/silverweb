import { Root } from "@radix-ui/react-separator";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";

type SeparatorProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
} & ComponentPropsWithoutRef<typeof Root>;

const Separator = forwardRef<ElementRef<typeof Root>, SeparatorProps>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <Root
      className={uicn(
        "ui-shrink-0 ui-bg-border",
        orientation === "horizontal"
          ? "ui-h-[1px] ui-w-full"
          : "ui-h-full ui-w-[1px]",
        className,
      )}
      decorative={decorative}
      orientation={orientation}
      ref={ref}
      {...props}
    />
  ),
);
Separator.displayName = Root.displayName;

export { Separator };
