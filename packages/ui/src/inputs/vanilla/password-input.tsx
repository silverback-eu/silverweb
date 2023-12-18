import { Eye, EyeOff } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { forwardRef, useState, useRef } from "react";
import { uicn } from "../../lib";
import { Input } from "./input";

export interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  status?: "success" | "error" | "default";
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const { className, status, onFocus, onBlur, disabled, readOnly, ...rest } =
      props;
    const [showPassword, setShowPassword] = useState(
      Boolean(disabled || readOnly),
    );
    const IconContainerRef = useRef<HTMLDivElement>(null);

    function getIcon(): JSX.Element | string {
      if (readOnly || disabled) return "";
      return showPassword ? <EyeOff size={16} /> : <Eye size={16} />;
    }

    return (
      <div className="ui-relative">
        <Input
          className={uicn(
            readOnly
              ? "focus-visible:ui-ring-1 focus-visible:ui-ring-accent"
              : "ui-transition-all hover:ui-ring-1 hover:ui-ring-secondary focus:-ui-translate-y-[1px]",
            status === "success" &&
              "ui-text-lime-600 placeholder:ui-text-lime-600 placeholder:ui-opacity-80 hover:ui-ring-1 hover:ui-ring-lime-600 focus-visible:ui-ring-1 focus-visible:ui-ring-lime-500",
            status === "error" &&
              "ui-text-red-500 placeholder:ui-text-red-500 placeholder:ui-opacity-80 hover:ui-ring-1 hover:ui-ring-red-600 focus-visible:ui-ring-1 focus-visible:ui-ring-red-500",
            className,
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
          className="ui-absolute ui-inset-y-0 ui-right-3 ui-flex ui-cursor-pointer ui-items-center ui-text-muted-foreground ui-transition-all"
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
  },
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
