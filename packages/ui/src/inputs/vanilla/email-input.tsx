import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { Input } from "./input";

export interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  status?: "success" | "error" | "default";
}

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  (props, ref) => {
    const { className, status, ...rest } = props;

    return (
      <Input
        className={cn(
          rest.readOnly
            ? "focus-visible:ring-1 focus-visible:ring-accent"
            : "transition-all hover:ring-1 hover:ring-secondary focus:-translate-y-[1px]",
          status === "success" &&
            "text-lime-600 placeholder:text-lime-600 placeholder:opacity-80 hover:ring-1 hover:ring-lime-600 focus-visible:ring-1 focus-visible:ring-lime-500",
          status === "error" &&
            "text-red-500 placeholder:text-red-500 placeholder:opacity-80 hover:ring-1 hover:ring-red-600 focus-visible:ring-1 focus-visible:ring-red-500",
          className,
        )}
        inputMode="email"
        ref={ref}
        type="email"
        {...rest}
      />
    );
  },
);

EmailInput.displayName = "EmailInput";

export { EmailInput };
