import { Root, Item, Indicator } from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

type RadioGroupProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Root>;

const RadioGroup = forwardRef<ElementRef<typeof Root>, RadioGroupProps>(
  ({ className, ...props }, ref) => (
    <Root className={cn("grid gap-2", className)} {...props} ref={ref} />
  )
);
RadioGroup.displayName = Root.displayName;

type RadioGroupItemProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Item>;

const RadioGroupItem = forwardRef<ElementRef<typeof Item>, RadioGroupItemProps>(
  ({ className, ...props }, ref) => (
    <Item
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    >
      <Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </Indicator>
    </Item>
  )
);
RadioGroupItem.displayName = Item.displayName;

export { RadioGroup, RadioGroupItem };
