import type { InputHTMLAttributes, RefObject } from "react";
import { forwardRef, useRef } from "react";
import { Button } from "../../shared";
import { uicn } from "../../lib";
import { Input } from "./input";

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
      <div className="ui-relative ui-w-full">
        <Input
          className={uicn(
            "ui-pr-9",
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
          className="ui-absolute ui-inset-y-0 ui-right-0 ui-grid ui-h-9 ui-items-center ui-text-muted-foreground ui-transition-transform"
          ref={ButtonContainerRef}
        >
          <Button
            className="ui-flex ui-h-[1.125rem] ui-items-center ui-justify-center ui-rounded-none ui-rounded-tr-md ui-border-b-[0.5px] ui-border-r-0 ui-border-t-0 ui-border-inherit ui-px-2 ui-pb-1 ui-pt-1 ui-align-middle ui-text-xs ui-leading-none"
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
            className="ui-flex ui-h-[1.125rem] ui-items-center ui-justify-center ui-rounded-none ui-rounded-br-md ui-border-b-0 ui-border-r-0 ui-border-t-[0.5px] ui-border-inherit ui-px-2 ui-pb-1 ui-pt-0 ui-align-middle ui-text-xs ui-leading-none"
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
  },
);

NumberInput.displayName = "NumberInput";

export { NumberInput };
