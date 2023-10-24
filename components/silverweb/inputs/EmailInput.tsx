import React, { forwardRef } from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface EmailInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: "success" | "error" | "default";
}

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  (props, ref) => {
    const { className, status, ...rest } = props;

    return (
      <Input
        type="email"
        inputMode="email"
        className={cn(
          rest.readOnly
            ? "focus-visible:ring-1 focus-visible:ring-accent"
            : "hover:ring-1 hover:ring-secondary transition-all focus:-translate-y-[1px]",
          status == "success"
            && "text-lime-600 placeholder:opacity-80 placeholder:text-lime-600 hover:ring-1 hover:ring-lime-600 focus-visible:ring-1 focus-visible:ring-lime-500",
          status == "error"
            && "text-red-500 placeholder:opacity-80 placeholder:text-red-500 hover:ring-1 hover:ring-red-600 focus-visible:ring-1 focus-visible:ring-red-500",
          className,
        )}
        ref={ref}
        {...rest}
      />
    );
  },
);

EmailInput.displayName = "EmailInput";

export default EmailInput;
