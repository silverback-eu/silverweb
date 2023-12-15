import { Root, Item, Indicator } from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { uicn } from "../../lib";

type RadioGroupProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Root>;

const RadioGroup = forwardRef<ElementRef<typeof Root>, RadioGroupProps>(
  ({ className, ...props }, ref) => (
    <Root
      className={uicn("ui-grid ui-gap-2", className)}
      {...props}
      ref={ref}
    />
  ),
);
RadioGroup.displayName = Root.displayName;

type RadioGroupItemProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Item>;

const RadioGroupItem = forwardRef<ElementRef<typeof Item>, RadioGroupItemProps>(
  ({ className, ...props }, ref) => (
    <Item
      className={uicn(
        "ui-aspect-square ui-h-4 ui-w-4 ui-rounded-full ui-border ui-border-primary ui-text-primary ui-shadow focus:ui-outline-none focus-visible:ui-ring-1 focus-visible:ui-ring-ring disabled:ui-cursor-not-allowed disabled:ui-opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    >
      <Indicator className="ui-flex ui-items-center ui-justify-center">
        <Circle className="ui-h-2.5 ui-w-2.5 ui-fill-current ui-text-current" />
      </Indicator>
    </Item>
  ),
);
RadioGroupItem.displayName = Item.displayName;

export { RadioGroup, RadioGroupItem };
