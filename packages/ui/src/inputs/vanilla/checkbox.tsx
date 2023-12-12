import { Check, ListTodo } from "lucide-react";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  ForwardRefExoticComponent,
  RefAttributes,
  RefObject,
} from "react";
import { forwardRef, useRef } from "react";
import { Root, Indicator } from "@radix-ui/react-checkbox";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { Card, CardContent } from "../../shared/card";
import { cn } from "../../lib/utils";

type CheckboxProps = {
  className?: string;
  status?: "error" | "success";
} & ComponentPropsWithoutRef<typeof Root>;

const Checkbox = forwardRef<ElementRef<typeof Root>, CheckboxProps>(
  ({ className, status, ...props }, ref) => (
    <Root
      aria-details={status}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        status === "error" && "border-red-500 data-[state=checked]:bg-red-500",
        status === "success" &&
          "border-green-500 data-[state=checked]:bg-green-500",
        className,
      )}
      ref={ref}
      {...props}
    >
      <Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </Indicator>
    </Root>
  ),
);
Checkbox.displayName = Root.displayName;

export interface CheckboxInputProps
  extends ComponentPropsWithoutRef<
    ForwardRefExoticComponent<CheckboxProps & RefAttributes<HTMLButtonElement>>
  > {
  checked?: CheckedState;
  readOnly?: boolean;
  variant?: "default" | "big";
  cardLabel?: string;
  cardDescription?: string;
  icon?: JSX.Element;
}

const CheckboxInput = forwardRef<
  ElementRef<
    ForwardRefExoticComponent<CheckboxProps & RefAttributes<HTMLButtonElement>>
  >,
  CheckboxInputProps
>((props, ref) => {
  const {
    className,
    readOnly,
    disabled,
    variant,
    status,
    onClick,
    cardLabel,
    cardDescription,
    ...rest
  } = props;

  const CheckboxRef = useRef<HTMLButtonElement>(null);

  if (variant === "big") {
    return (
      <Card
        className={cn(
          "w-full cursor-pointer",
          disabled && "cursor-not-allowed opacity-50",
          readOnly && "pointer-events-none select-none",
          status === "error" &&
            "text-red-500 [&_>_div_>button[data-state=checked]]:!bg-red-500 [&_>_div_>button]:border-red-500",
          status === "success" &&
            "text-green-500 [&_>_div_>button[data-state=checked]]:!bg-green-500 [&_>_div_>button]:border-green-500",
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
          <Checkbox
            className="mr-2"
            disabled={readOnly || disabled}
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
            {...rest}
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Checkbox
      aria-details={status}
      aria-readonly={readOnly}
      className={cn(
        readOnly && "pointer-events-none select-none",
        status === "error" && "border-red-500 data-[state=checked]:bg-red-500",
        status === "success" &&
          "border-green-500 data-[state=checked]:bg-green-500",
        className,
      )}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      {...rest}
    />
  );
});

CheckboxInput.displayName = "CheckboxInput";

export { CheckboxInput };
