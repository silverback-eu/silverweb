import type { Item } from "@radix-ui/react-radio-group";
import { ListTodo } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef, RefObject } from "react";
import { forwardRef, useRef } from "react";
import { Card, CardContent } from "../../shared";
import { uicn } from "../../lib";
import { RadioGroupItem } from "./radio-group";

export interface RadioInputProps extends ComponentPropsWithoutRef<typeof Item> {
  value: string;
  readOnly?: boolean;
  variant?: "default" | "big";
  cardLabel?: string;
  cardDescription?: string;
  status?: "error" | "success";
  icon?: JSX.Element;
}

const RadioInput = forwardRef<ElementRef<typeof Item>, RadioInputProps>(
  (props, ref) => {
    const {
      className,
      readOnly,
      disabled,
      variant,
      onClick,
      cardLabel,
      cardDescription,
      status,
      value,
      id,
      ...rest
    } = props;

    const RadioRef = useRef<HTMLButtonElement>(null);

    if (variant === "big") {
      return (
        <Card
          className={uicn(
            "ui-w-full",
            disabled && "ui-cursor-not-allowed ui-opacity-50",
            readOnly && "ui-pointer-events-none ui-select-none",
            status === "error" &&
              "ui-text-red-500 [&_>_div_>_button_svg]:ui-text-red-500 [&_>_div_>button]:ui-border-red-500",
            status === "success" &&
              "ui-text-green-500 [&_>_div_>_button_svg]:ui-text-green-500 [&_>_div_>button]:ui-border-green-500",
            className,
          )}
          onClick={() => {
            if (ref) {
              const Ref = ref as RefObject<HTMLButtonElement>;
              Ref.current?.click();
            } else if (RadioRef.current) {
              RadioRef.current.click();
            } else {
              console.error("RadioRef not found");
            }
          }}
        >
          <CardContent className="ui-flex ui-items-center ui-justify-between ui-gap-2 ui-p-2">
            <div className="ui-flex ui-items-center ui-gap-2">
              <div className="ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted">
                {props.icon || <ListTodo size={24} />}
              </div>
              <div className="ui-grid ui-content-center">
                <p className="ui-select-none ui-text-start ui-text-sm ui-font-semibold">
                  {cardLabel || "Label"}
                </p>
                <p className="ui-select-none ui-text-start ui-text-xs ui-opacity-50">
                  {cardDescription || "Description"}
                </p>
              </div>
            </div>
            <RadioGroupItem
              aria-label={id}
              className="ui-mr-2"
              disabled={readOnly || disabled}
              id={id}
              onClick={(ev) => {
                if (ref) {
                  const Ref = ref as RefObject<HTMLButtonElement>;
                  Ref.current?.click();
                } else if (RadioRef.current) {
                  RadioRef.current.click();
                } else {
                  console.error("RadioRef not found");
                }
                if (onClick) onClick(ev);
              }}
              ref={ref || RadioRef}
              value={value}
              {...rest}
            />
          </CardContent>
        </Card>
      );
    }

    return (
      <RadioGroupItem
        aria-details={status}
        aria-label={id}
        aria-readonly={readOnly}
        className={uicn(
          "ui-peer",
          readOnly && "ui-pointer-events-none ui-select-none",
          status === "error" && "ui-border-red-500 ui-text-red-500",
          status === "success" && "ui-border-green-500 ui-text-green-500",
          className,
        )}
        disabled={disabled}
        id={id}
        onClick={onClick}
        ref={ref}
        value={value}
        {...rest}
      />
    );
  },
);

RadioInput.displayName = "RadioInput";

export { RadioInput };
