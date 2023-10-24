import { Eye, EyeOff } from "lucide-react";
import React, { forwardRef, useState, useRef } from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: "success" | "error" | "default";
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
  const { className, status, onFocus, onBlur, disabled, readOnly, ...rest } = props;
  const [showPassword, setShowPassword] = useState(!!(disabled || readOnly));
  const IconContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <Input
        readOnly={readOnly}
        disabled={disabled}
        type={showPassword ? "text" : "password"}
        onFocus={(ev) => {
          if (IconContainerRef.current) {
            IconContainerRef.current.style.transform = "translateY(-1px)";
          }
          if (onFocus) onFocus(ev);
        }}
        onBlur={(ev) => {
          if (IconContainerRef.current) {
            IconContainerRef.current.style.transform = "translateY(0)";
          }
          if (onBlur) onBlur(ev);
        }}
        className={cn(
          readOnly
            ? "focus-visible:ring-1 focus-visible:ring-accent"
            : "hover:ring-1 hover:ring-secondary transition-all focus:-translate-y-[1px]",
          status === "success" &&
            "text-lime-600 placeholder:opacity-80 placeholder:text-lime-600 hover:ring-1 hover:ring-lime-600 focus-visible:ring-1 focus-visible:ring-lime-500",
          status === "error" &&
            "text-red-500 placeholder:opacity-80 placeholder:text-red-500 hover:ring-1 hover:ring-red-600 focus-visible:ring-1 focus-visible:ring-red-500",
          className,
        )}
        ref={ref}
        {...rest}
      />
      <div
        ref={IconContainerRef}
        role="button"
        tabIndex={0}
        onKeyDown={() => {
          setShowPassword(!showPassword);
        }}
        className="transition-all absolute inset-y-0 right-3 flex items-center text-muted-foreground cursor-pointer"
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        {!readOnly && !disabled ? showPassword ? <EyeOff size={16} /> : <Eye size={16} /> : <div />}
      </div>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
