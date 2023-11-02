"use client";

/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { InputHTMLAttributes, RefObject } from "react";
import { forwardRef, useRef } from "react";
import { Button, Input } from "../../shared";
import { cn } from "../../../lib/utils";

export interface NumberInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  status?: "success" | "error" | "default";
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (props, ref) => {
    const {
      className,
      readOnly,
      disabled,
      status,
      onChange,
      onFocus,
      onBlur,
      onMouseEnter,
      onMouseLeave,
      ...rest
    } = props;
    const InputRef = useRef<HTMLInputElement>(null);
    const ButtonContainerRef = useRef<HTMLDivElement>(null);

    function getStatusStyling({ focus = false }: { focus?: boolean }): string {
      if (status === "success") {
        return "rgba(101, 163, 13, 1)";
      }
      if (status === "error") {
        return "rgba(220, 38, 38, 1)";
      }
      return focus ? "rgba(255, 255, 255, 0.8)" : "";
    }

    return (
      <div className="relative w-full">
        <Input
          className={cn(
            "pr-9",
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
          inputMode="numeric"
          onBlur={(ev) => {
            if (ButtonContainerRef.current && !readOnly && !disabled) {
              Object.assign(ButtonContainerRef.current.style, {
                transform: "translateY(0px)",
                borderColor: "inherit",
              });
            }
            if (onBlur) onBlur(ev);
          }}
          onChange={(ev) => {
            ev.target.value = ev.target.value.replace(/[^0-9]/g, "");
            if (onChange) onChange(ev);
          }}
          onFocus={(ev) => {
            if (ButtonContainerRef.current && !readOnly && !disabled) {
              Object.assign(ButtonContainerRef.current.style, {
                transform: "translateY(-1px)",
                borderColor: getStatusStyling({ focus: true }),
              });
            }
            if (onFocus) onFocus(ev);
          }}
          onMouseEnter={(ev) => {
            if (ButtonContainerRef.current && !readOnly && !disabled) {
              Object.assign(ButtonContainerRef.current.style, {
                borderColor: getStatusStyling({ focus: false }),
              });
            }
            if (onMouseEnter) onMouseEnter(ev);
          }}
          onMouseLeave={(ev) => {
            if (ButtonContainerRef.current && !readOnly && !disabled) {
              Object.assign(ButtonContainerRef.current.style, {
                borderColor: "inherit",
              });
            }
            if (onMouseLeave) onMouseLeave(ev);
          }}
          readOnly={readOnly}
          ref={ref || InputRef}
          {...rest}
        />
        <div
          className="transition-transform absolute inset-y-0 right-0 grid items-center text-muted-foreground h-9"
          ref={ButtonContainerRef}
        >
          <Button
            className="h-[1.125rem] text-xs border-inherit leading-none px-2 pb-1 pt-1 flex align-middle justify-center items-center rounded-none rounded-tr-md border-b-[0.5px] border-t-0 border-r-0"
            disabled={disabled || readOnly}
            onClick={() => {
              if (InputRef.current) {
                InputRef.current.value = `${
                  Number(InputRef.current.value) + 1
                }`;
              } else if (ref) {
                const Ref = ref as RefObject<HTMLButtonElement>;
                if (Ref.current) {
                  Ref.current.value = `${Number(Ref.current.value) + 1}`;
                }
              }
            }}
            variant="outline"
          >
            +
          </Button>
          <Button
            className="h-[1.125rem] text-xs border-inherit leading-none px-2 pt-0 pb-1 flex align-middle justify-center items-center rounded-none rounded-br-md border-t-[0.5px] border-b-0 border-r-0"
            disabled={disabled || readOnly}
            onClick={() => {
              if (InputRef.current) {
                InputRef.current.value = `${
                  Number(InputRef.current.value) - 1
                }`;
                if (Number(InputRef.current.value) < 0) {
                  InputRef.current.value = "0";
                }
              } else if (ref) {
                const Ref = ref as RefObject<HTMLButtonElement>;
                if (Ref.current) {
                  Ref.current.value = `${Number(Ref.current.value) - 1}`;
                  if (Number(Ref.current.value) < 0) {
                    Ref.current.value = "0";
                  }
                }
              }
            }}
            variant="outline"
          >
            -
          </Button>
        </div>
      </div>
    );
  }
);

NumberInput.displayName = "NumberInput";

export { NumberInput };
