import { forwardRef, useRef, InputHTMLAttributes, Fragment } from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
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
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <Fragment>
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
                if (onFocus) onFocus(ev);
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
                if (onBlur) onBlur(ev);
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
              if (onFocus) onFocus(ev);
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
              if (onBlur)onBlur(ev);
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
      </Fragment>
    );
  },
);
Input.displayName = "Input";

export { Input };
