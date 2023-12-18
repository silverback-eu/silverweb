import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { uicn } from "../../lib";
import { Input } from "./input";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  status?: "success" | "error" | "default";
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { className, status, ...rest } = props;

  return (
    <Input
      className={uicn(
        rest.readOnly
          ? "focus-visible:ui-ring-1 focus-visible:ui-ring-accent"
          : "ui-transition-all hover:ui-ring-1 hover:ui-ring-secondary focus:-ui-translate-y-[1px]",
        status === "success" &&
          "ui-text-lime-600 placeholder:ui-text-lime-600 placeholder:ui-opacity-80 hover:ui-ring-1 hover:ui-ring-lime-600 focus-visible:ui-ring-1 focus-visible:ui-ring-lime-500",
        status === "error" &&
          "ui-text-red-500 placeholder:ui-text-red-500 placeholder:ui-opacity-80 hover:ui-ring-1 hover:ui-ring-red-600 focus-visible:ui-ring-1 focus-visible:ui-ring-red-500",
        className,
      )}
      ref={ref}
      type="text"
      {...rest}
    />
  );
});

TextInput.displayName = "TextInput";

export { TextInput };
