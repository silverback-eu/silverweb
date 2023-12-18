import { Root, Track, Range, Thumb } from "@radix-ui/react-slider";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { uicn } from "../../lib";

interface SliderProps extends ComponentPropsWithoutRef<typeof Root> {
  readOnly?: boolean;
  status?: "error" | "success";
}

const Slider = forwardRef<ElementRef<typeof Root>, SliderProps>(
  ({ className, disabled, status, readOnly, ...props }, ref) => (
    <Root
      className={uicn(
        "ui-relative ui-flex ui-w-full ui-touch-none ui-select-none ui-items-center",
        disabled && "ui-cursor-not-allowed ui-opacity-50",
        className,
      )}
      disabled={disabled || readOnly}
      ref={ref}
      {...props}
    >
      <Track className="ui-relative ui-h-2 ui-w-full ui-grow ui-overflow-hidden ui-rounded-full ui-bg-secondary">
        <Range
          className={uicn(
            "ui-absolute ui-h-full ui-bg-primary",
            status === "error" && "ui-bg-red-500",
            status === "success" && "ui-bg-green-500",
          )}
        />
      </Track>
      <Thumb
        className={uicn(
          "ui-block ui-h-5 ui-w-5 ui-rounded-full ui-border-2 ui-border-primary ui-bg-background ui-ring-offset-background ui-transition-colors focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ui-ring-ring focus-visible:ui-ring-offset-2 disabled:ui-pointer-events-none disabled:ui-opacity-50",
          status === "error" && "ui-border-red-500",
          status === "success" && "ui-border-green-500",
        )}
      />
    </Root>
  ),
);
Slider.displayName = Root.displayName;

export { Slider };
