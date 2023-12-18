import { Root } from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";

const toggleVariants = cva(
  "ui-inline-flex ui-items-center ui-justify-center ui-rounded-md ui-text-sm ui-font-medium ui-ring-offset-background ui-transition-colors hover:ui-bg-muted hover:ui-text-muted-foreground focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ui-ring-ring focus-visible:ui-ring-offset-2 disabled:ui-pointer-events-none disabled:ui-opacity-50 data-[state=on]:ui-bg-accent data-[state=on]:ui-text-accent-foreground",
  {
    variants: {
      variant: {
        default: "ui-bg-transparent",
        outline:
          "ui-border ui-border-input ui-bg-transparent hover:ui-bg-accent hover:ui-text-accent-foreground",
      },
      size: {
        default: "ui-h-10 ui-px-3",
        sm: "ui-h-9 ui-px-2.5",
        lg: "ui-h-11 ui-px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <Root
    className={uicn(toggleVariants({ variant, size, className }))}
    ref={ref}
    {...props}
  />
));

Toggle.displayName = Root.displayName;

export { Toggle, toggleVariants };
