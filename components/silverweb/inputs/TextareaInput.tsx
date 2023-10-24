import React, { forwardRef } from "react";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export interface TextareaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  status?: "success" | "error" | "default";
}

const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>((props, ref) => {
  const {
    className, onChange, status, ...rest
  } = props;

  return (
    <Textarea
      className={cn(
        "resize-none",
        rest.readOnly
          ? "focus-visible:ring-1 focus-visible:ring-accent"
          : "hover:ring-1 hover:ring-secondary transition-all focus:-translate-y-[1px]",
        status == "success"
          && "text-lime-600 placeholder:opacity-80 placeholder:text-lime-600 hover:ring-1 hover:ring-lime-600 focus-visible:ring-1 focus-visible:ring-lime-500",
        status == "error"
          && "text-red-500 placeholder:opacity-80 placeholder:text-red-500 hover:ring-1 hover:ring-red-600 focus-visible:ring-1 focus-visible:ring-red-500",
        className,
      )}
      onChange={(ev) => {
        ev.currentTarget.style.height = "auto";
        ev.currentTarget.style.height = `${ev.currentTarget.scrollHeight + 2}px`;
        onChange && onChange(ev);
      }}
      ref={ref}
      {...rest}
    />
  );
});

TextareaInput.displayName = "TextareaInput";

export default TextareaInput;
