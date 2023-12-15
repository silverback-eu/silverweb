import type { InputHTMLAttributes } from "react";
import { Fragment, forwardRef, useRef } from "react";
import { uicn } from "../../lib";

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
      ...rest
    },
    ref,
  ) => {
    const PrefixRef = useRef<HTMLSpanElement>(null);

    return (
      <Fragment>
        {prefix ? (
          <div className="ui-relative ui-w-full">
            <span
              className="ui-absolute ui-inset-y-0 ui-left-3 ui-flex ui-items-center ui-text-sm ui-font-medium ui-transition-all"
              ref={PrefixRef}
            >
              {prefix}
            </span>
            <input
              className={uicn(
                "ui-flex ui-h-9 ui-w-full ui-rounded-md ui-border ui-border-input ui-bg-transparent ui-px-3 ui-py-1 ui-text-sm ui-shadow-sm ui-transition-colors file:ui-border-0 file:ui-bg-transparent file:ui-text-sm file:ui-font-medium placeholder:ui-text-muted-foreground focus-visible:ui-outline-none focus-visible:ui-ring-1 focus-visible:ui-ring-ring disabled:ui-cursor-not-allowed disabled:ui-opacity-50",
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
              {...rest}
              style={{
                paddingLeft: prefix && `${prefix.length * 8.5 + 12}px`,
                ...style,
              }}
            />
          </div>
        ) : (
          <input
            className={uicn(
              "ui-flex ui-h-9 ui-w-full ui-rounded-md ui-border ui-border-input ui-bg-transparent ui-px-3 ui-py-1 ui-text-sm ui-shadow-sm ui-transition-colors file:ui-border-0 file:ui-bg-transparent file:ui-text-sm file:ui-font-medium placeholder:ui-text-muted-foreground focus-visible:ui-outline-none focus-visible:ui-ring-1 focus-visible:ui-ring-ring disabled:ui-cursor-not-allowed disabled:ui-opacity-50",
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
            {...rest}
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
