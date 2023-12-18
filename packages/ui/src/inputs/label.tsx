import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { uicn } from "../lib";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    className={uicn(
      "ui-text-sm ui-font-medium ui-leading-none peer-disabled:ui-cursor-not-allowed peer-disabled:ui-opacity-70 peer-aria-readonly:ui-pointer-events-none peer-aria-readonly:ui-select-none peer-aria-[details=error]:ui-text-red-500 peer-aria-[details=success]:ui-text-green-500",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
