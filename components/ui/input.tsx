import * as React from "react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  noPrefixAnimation?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
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
      <React.Fragment>
        {prefix ? (
          <div className="relative w-full">
            <span
              ref={PrefixRef}
              className="font-medium transition-all absolute inset-y-0 left-3 flex items-center text-sm"
            >
              {prefix}
            </span>
            <input
              type={type}
              onFocus={(ev) => {
                if (
                  PrefixRef.current
                  && !readOnly
                  && !disabled
                  && !noPrefixAnimation
                ) {
                  PrefixRef.current.style.transform = "translateY(-1px)";
                }
                onFocus && onFocus(ev);
              }}
              onBlur={(ev) => {
                if (
                  PrefixRef.current
                  && !readOnly
                  && !disabled
                  && !noPrefixAnimation
                ) {
                  PrefixRef.current.style.transform = "translateY(0)";
                }
                onBlur && onBlur(ev);
              }}
              className={cn(
                "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                className,
              )}
              ref={ref}
              readOnly={readOnly}
              disabled={disabled}
              {...props}
              style={{
                paddingLeft: prefix && `${prefix.length * 8.5 + 12}px`,
                ...style,
              }}
            />
          </div>
        ) : (
          <input
            type={type}
            onFocus={(ev) => {
              if (
                PrefixRef.current
                && !readOnly
                && !disabled
                && !noPrefixAnimation
              ) {
                PrefixRef.current.style.transform = "translateY(-1px)";
              }
              onFocus && onFocus(ev);
            }}
            onBlur={(ev) => {
              if (
                PrefixRef.current
                && !readOnly
                && !disabled
                && !noPrefixAnimation
              ) {
                PrefixRef.current.style.transform = "translateY(0)";
              }
              onBlur && onBlur(ev);
            }}
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
            ref={ref}
            readOnly={readOnly}
            disabled={disabled}
            {...props}
            style={{
              paddingLeft: prefix && `${prefix.length * 8.5 + 12}px`,
              ...style,
            }}
          />
        )}
      </React.Fragment>
    );
  },
);
Input.displayName = "Input";

export { Input };
