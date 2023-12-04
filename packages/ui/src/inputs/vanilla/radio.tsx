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
            className
          )}
          onClick={() => {
            if (ref) {
              const Ref = ref as RefObject<HTMLButtonElement>;
              Ref.current?.click();
            } else if (CheckboxRef.current) {
              CheckboxRef.current.click();
            } else {
              // eslint-disable-next-line no-console -- to display error for console
              console.error("CheckboxRef not found");
            }
          }}
        >
          <CardContent className="p-2 pr-5 flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
                {props.icon || <ListTodo size={24} />}
              </div>
              <div className="grid content-center">
                <p className="text-sm font-semibold text-start select-none">
                  {cardLabel || "Label"}
                </p>
                <p className="text-xs opacity-50 text-start select-none">
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
                  // eslint-disable-next-line no-console -- to display error for console
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
  }
);

RadioInput.displayName = "RadioInput";

export { RadioInput };
