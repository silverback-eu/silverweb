import type { InputHTMLAttributes } from "react";
import { Fragment, forwardRef, useRef } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  noPrefixAnimation?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      prefix,
      type,
      readOnly,
      disabled,
      noPrefixAnimation,
      onFocus,
      onBlur,
      style,
      ...props
    },
    ref,
  ) => {
    const PrefixRef = useRef<HTMLSpanElement>(null);

    return (
      <Fragment>
        {prefix ? (
          <div className="relative w-full">
            <span
              className="absolute inset-y-0 left-3 flex items-center text-sm font-medium transition-all"
              ref={PrefixRef}
            >
              {prefix}
            </span>
            <input
              className={cn(
                "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                className,
              )}
              disabled={disabled}
              onBlur={(ev) => {
                if (
                  PrefixRef.current &&
                  !readOnly &&
                  !disabled &&
                  !noPrefixAnimation
                ) {
                  PrefixRef.current.style.transform = "translateY(0)";
                }
                if (onBlur) onBlur(ev);
              }}
              onFocus={(ev) => {
                if (
                  PrefixRef.current &&
                  !readOnly &&
                  !disabled &&
                  !noPrefixAnimation
                ) {
                  PrefixRef.current.style.transform = "translateY(-1px)";
                }
                if (onFocus) onFocus(ev);
              }}
              readOnly={readOnly}
              ref={ref}
              type={type}
              {...props}
              style={{
                paddingLeft: prefix && `${prefix.length * 8.5 + 12}px`,
                ...style,
              }}
            />
          </div>
        ) : (
          <input
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
            disabled={disabled}
            onBlur={(ev) => {
              if (
                PrefixRef.current &&
                !readOnly &&
                !disabled &&
                !noPrefixAnimation
              ) {
                PrefixRef.current.style.transform = "translateY(0)";
              }
              if (onBlur) onBlur(ev);
            }}
            onFocus={(ev) => {
              if (
                PrefixRef.current &&
                !readOnly &&
                !disabled &&
                !noPrefixAnimation
              ) {
                PrefixRef.current.style.transform = "translateY(-1px)";
              }
              if (onFocus) onFocus(ev);
            }}
            readOnly={readOnly}
            ref={ref}
            type={type}
            {...props}
            style={{
              paddingLeft: prefix && `${prefix.length * 8.5 + 12}px`,
              ...style,
            }}
          />
        )}
      </Fragment>
    );
  },
);
Input.displayName = "Input";

export { Input };
