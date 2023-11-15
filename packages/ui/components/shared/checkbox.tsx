"use client";

import { Root, Indicator } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

type CheckboxProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Root>;

const Checkbox = forwardRef<ElementRef<typeof Root>, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <Root
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      ref={ref}
      {...props}
    >
      <Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <CheckIcon className="h-4 w-4" />
      </Indicator>
    </Root>
  )
);
Checkbox.displayName = Root.displayName;

export { Checkbox };
