import type { TextareaHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface TextareaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  status?: "success" | "error" | "default";
}

const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>(
  (props, ref) => {
    const { className, onChange, status, ...rest } = props;

    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          rest.readOnly
            ? "focus-visible:ring-1 focus-visible:ring-accent"
            : "transition-all hover:ring-1 hover:ring-secondary focus:-translate-y-[1px]",
          status === "success" &&
            "text-lime-600 placeholder:text-lime-600 placeholder:opacity-80 hover:ring-1 hover:ring-lime-600 focus-visible:ring-1 focus-visible:ring-lime-500",
          status === "error" &&
            "text-red-500 placeholder:text-red-500 placeholder:opacity-80 hover:ring-1 hover:ring-red-600 focus-visible:ring-1 focus-visible:ring-red-500",
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
