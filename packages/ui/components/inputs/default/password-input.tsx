"use client";

import { Eye, EyeOff } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { forwardRef, useState, useRef } from "react";
import { Input } from "../../../shared";
import { cn } from "../../../lib/utils";

export interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  status?: "success" | "error" | "default";
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const { className, status, onFocus, onBlur, disabled, readOnly, ...rest } =
      props;
    const [showPassword, setShowPassword] = useState(
      Boolean(disabled || readOnly)
    );
    const IconContainerRef = useRef<HTMLDivElement>(null);

    function getIcon(): JSX.Element | string {
      if (readOnly || disabled) return "";
      return showPassword ? <EyeOff size={16} /> : <Eye size={16} />;
    }

    return (
      <div className="relative">
        <Input
          className={cn(
            readOnly
              ? "focus-visible:ring-1 focus-visible:ring-accent"
              : "hover:ring-1 hover:ring-secondary transition-all focus:-translate-y-[1px]",
            status === "success" &&
              "text-lime-600 placeholder:opacity-80 placeholder:text-lime-600 hover:ring-1 hover:ring-lime-600 focus-visible:ring-1 focus-visible:ring-lime-500",
            status === "error" &&
              "text-red-500 placeholder:opacity-80 placeholder:text-red-500 hover:ring-1 hover:ring-red-600 focus-visible:ring-1 focus-visible:ring-red-500",
            className
          )}
          disabled={disabled}
          onBlur={(ev) => {
            if (IconContainerRef.current) {
              IconContainerRef.current.style.transform = "translateY(0)";
            }
            if (onBlur) onBlur(ev);
          }}
          onFocus={(ev) => {
            if (IconContainerRef.current) {
              IconContainerRef.current.style.transform = "translateY(-1px)";
            }
            if (onFocus) onFocus(ev);
          }}
          readOnly={readOnly}
          ref={ref}
          type={showPassword ? "text" : "password"}
          {...rest}
        />
        <div
          className="transition-all absolute inset-y-0 right-3 flex items-center text-muted-foreground cursor-pointer"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          onKeyDown={() => {
            setShowPassword(!showPassword);
          }}
          ref={IconContainerRef}
          role="button"
          tabIndex={0}
        >
          {getIcon()}
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
