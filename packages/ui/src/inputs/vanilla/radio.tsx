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
      value,
      id,
      ...rest
    } = props;

    const CheckboxRef = useRef<HTMLButtonElement>(null);

    if (variant === "big") {
      return (
        <Card
          className={cn(
            "w-full",
            !readOnly && !disabled
              ? " cursor-pointer"
              : "cursor-not-allowed opacity-50",
            className,
          )}
          onClick={() => {
            if (ref) {
              const Ref = ref as RefObject<HTMLButtonElement>;
              Ref.current?.click();
            } else if (CheckboxRef.current) {
              CheckboxRef.current.click();
            } else {
              console.error("CheckboxRef not found");
            }
          }}
        >
          <CardContent className="flex items-center justify-between gap-2 p-2 pr-5">
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
              disabled={readOnly || disabled}
              id={id}
              onClick={(ev) => {
                if (ref) {
                  const Ref = ref as RefObject<HTMLButtonElement>;
                  Ref.current?.click();
                } else if (CheckboxRef.current) {
                  CheckboxRef.current.click();
                } else {
                  console.error("CheckboxRef not found");
                }
                if (onClick) onClick(ev);
              }}
              ref={ref || CheckboxRef}
              value={value}
              {...rest}
            />
          </CardContent>
        </Card>
      );
    }

    return (
      <RadioGroupItem
        aria-label={id}
        className={cn(className)}
        disabled={readOnly || disabled}
        id={id}
        ref={ref}
        value={value}
        {...rest}
      />
    );
  },
);

RadioInput.displayName = "RadioInput";

export { RadioInput };
