import { Root, Track, Range, Thumb } from "@radix-ui/react-slider";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

interface SliderProps extends ComponentPropsWithoutRef<typeof Root> {
  readOnly?: boolean;
  status?: "error" | "success";
}

const Slider = forwardRef<ElementRef<typeof Root>, SliderProps>(
  ({ className, disabled, status, readOnly, ...props }, ref) => (
    <Root
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      disabled={disabled || readOnly}
      ref={ref}
      {...props}
    >
      <Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
        <Range
          className={cn(
            "absolute h-full bg-primary",
            status === "error" && "bg-red-500",
            status === "success" && "bg-green-500",
          )}
        />
      </Track>
      <Thumb
        className={cn(
          "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          status === "error" && "border-red-500",
          status === "success" && "border-green-500",
        )}
      />
    </Root>
  ),
);
Slider.displayName = Root.displayName;

export { Slider };
