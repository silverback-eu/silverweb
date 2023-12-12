import type { Item } from "@radix-ui/react-radio-group";
import { ListTodo } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef, RefObject } from "react";
import { forwardRef, useRef } from "react";
import { Card, CardContent } from "../../shared";
import { cn } from "../../lib/utils";
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
          className={cn(
            "w-full",
            disabled && "cursor-not-allowed opacity-50",
            readOnly && "pointer-events-none select-none",
            status === "error" &&
              "text-red-500 [&_>_div_>_button_svg]:text-red-500 [&_>_div_>button]:border-red-500",
            status === "success" &&
              "text-green-500 [&_>_div_>_button_svg]:text-green-500 [&_>_div_>button]:border-green-500",
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
          <CardContent className="flex items-center justify-between gap-2 p-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                {props.icon || <ListTodo size={24} />}
              </div>
              <div className="grid content-center">
                <p className="select-none text-start text-sm font-semibold">
                  {cardLabel || "Label"}
                </p>
                <p className="select-none text-start text-xs opacity-50">
                  {cardDescription || "Description"}
                </p>
              </div>
            </div>
            <RadioGroupItem
              aria-label={id}
              className="mr-2"
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
        className={cn(
          "peer",
          readOnly && "pointer-events-none select-none",
          status === "error" && "border-red-500 text-red-500",
          status === "success" && "border-green-500 text-green-500",
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
