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
import { uicn } from "../../lib";

type CheckboxProps = {
  className?: string;
  status?: "error" | "success";
} & ComponentPropsWithoutRef<typeof Root>;

const Checkbox = forwardRef<ElementRef<typeof Root>, CheckboxProps>(
  ({ className, status, ...props }, ref) => (
    <Root
      aria-details={status}
      className={uicn(
        "ui-peer ui-h-4 ui-w-4 ui-shrink-0 ui-rounded-sm ui-border ui-border-primary ui-ring-offset-background focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ui-ring-ring focus-visible:ui-ring-offset-2 disabled:ui-cursor-not-allowed disabled:ui-opacity-50 data-[state=checked]:ui-bg-primary data-[state=checked]:ui-text-primary-foreground",
        status === "error" &&
          "ui-border-red-500 data-[state=checked]:ui-bg-red-500",
        status === "success" &&
          "ui-border-green-500 data-[state=checked]:ui-bg-green-500",
        className,
      )}
      ref={ref}
      {...props}
    >
      <Indicator className="ui-flex ui-items-center ui-justify-center ui-text-current">
        <Check className="ui-h-4 ui-w-4" />
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
        className={uicn(
          "ui-w-full ui-cursor-pointer",
          disabled && "ui-cursor-not-allowed ui-opacity-50",
          readOnly && "ui-pointer-events-none ui-select-none",
          status === "error" &&
            "ui-text-red-500 [&_>_div_>button[data-state=checked]]:!ui-bg-red-500 [&_>_div_>button]:ui-border-red-500",
          status === "success" &&
            "ui-text-green-500 [&_>_div_>button[data-state=checked]]:!ui-bg-green-500 [&_>_div_>button]:ui-border-green-500",
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
          <Checkbox
            className="ui-mr-2"
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
      className={uicn(
        readOnly && "ui-pointer-events-none ui-select-none",
        status === "error" &&
          "ui-border-red-500 data-[state=checked]:ui-bg-red-500",
        status === "success" &&
          "ui-border-green-500 data-[state=checked]:ui-bg-green-500",
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
