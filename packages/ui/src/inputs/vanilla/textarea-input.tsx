import type { TextareaHTMLAttributes } from "react";
import { forwardRef } from "react";
import { uicn } from "../../lib";

export interface TextareaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  status?: "success" | "error" | "default";
}

const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>(
  (props, ref) => {
    const { className, onChange, status, ...rest } = props;

    return (
      <textarea
        className={uicn(
          "ui-flex ui-min-h-[60px] ui-w-full ui-resize-none ui-rounded-md ui-border ui-border-input ui-bg-transparent ui-px-3 ui-py-2 ui-text-sm ui-shadow-sm placeholder:ui-text-muted-foreground focus-visible:ui-outline-none focus-visible:ui-ring-1 focus-visible:ui-ring-ring disabled:ui-cursor-not-allowed disabled:ui-opacity-50",
          rest.readOnly
            ? "focus-visible:ui-ring-1 focus-visible:ui-ring-accent"
            : "ui-transition-all hover:ui-ring-1 hover:ui-ring-secondary focus:-ui-translate-y-[1px]",
          status === "success" &&
            "ui-text-lime-600 placeholder:ui-text-lime-600 placeholder:ui-opacity-80 hover:ui-ring-1 hover:ui-ring-lime-600 focus-visible:ui-ring-1 focus-visible:ui-ring-lime-500",
          status === "error" &&
            "ui-text-red-500 placeholder:ui-text-red-500 placeholder:ui-opacity-80 hover:ui-ring-1 hover:ui-ring-red-600 focus-visible:ui-ring-1 focus-visible:ui-ring-red-500",
          className,
        )}
        onChange={(ev) => {
          ev.currentTarget.style.height = "auto";
          ev.currentTarget.style.height = `${
            ev.currentTarget.scrollHeight + 2
          }px`;
          if (onChange) onChange(ev);
        }}
        ref={ref}
        {...rest}
      />
    );
  },
);

TextareaInput.displayName = "TextareaInput";

export { TextareaInput };
