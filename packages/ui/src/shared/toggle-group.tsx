"use client";

import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { createContext, forwardRef, useContext } from "react";
import { Root, Item } from "@radix-ui/react-toggle-group";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { toggleVariants } from "./toggle";

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <Root
    className={cn("flex items-center justify-center gap-1", className)}
    ref={ref}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </Root>
));

ToggleGroup.displayName = Root.displayName;

const ToggleGroupItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = useContext(ToggleGroupContext);

  return (
    <Item
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Item>
  );
});

ToggleGroupItem.displayName = Item.displayName;

export { ToggleGroup, ToggleGroupItem };
