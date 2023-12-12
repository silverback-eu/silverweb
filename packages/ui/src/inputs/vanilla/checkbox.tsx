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
} & ComponentPropsWithoutRef<typeof Root>;

const Checkbox = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    ref={ref}
    {...props}
  >
    <Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </Indicator>
  </Root>
));
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
          <Checkbox
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
      className={cn(className)}
      disabled={readOnly || disabled}
      ref={ref}
      {...rest}
    />
  );
});

CheckboxInput.displayName = "CheckboxInput";

export { CheckboxInput };
