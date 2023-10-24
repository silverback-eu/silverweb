"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleDot } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "@/lib/utils";

type RadioGroupProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;

const RadioGroup = forwardRef<
ElementRef<typeof RadioGroupPrimitive.Root>,
RadioGroupProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    className={cn("grid gap-2", className)}
    {...props}
    ref={ref}
  />
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

type RadioGroupItemProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;

const RadioGroupItem = forwardRef<
ElementRef<typeof RadioGroupPrimitive.Item>,
RadioGroupItemProps
>(({ className, children, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <CircleDot className="h-3.5 w-3.5 fill-primary" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
