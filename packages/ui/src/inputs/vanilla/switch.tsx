import type {
  ElementRef,
  ComponentPropsWithoutRef,
  RefObject,
  ReactNode,
} from "react";
import { forwardRef, useRef } from "react";
import { Root, Thumb } from "@radix-ui/react-switch";
import { ListTodo } from "lucide-react";
import { uicn } from "../../lib";
import { Card, CardContent } from "../../shared";

interface SwitchProps extends ComponentPropsWithoutRef<typeof Root> {
  readOnly?: boolean;
  status?: "error" | "success";
  variant?: "big" | "default";
  icon?: ReactNode;
  cardLabel?: string;
  cardDescription?: string;
}

const Switch = forwardRef<ElementRef<typeof Root>, SwitchProps>(
  (
    {
      className,
      status,
      cardLabel,
      cardDescription,
      variant,
      disabled,
      readOnly,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const SwitchRef = useRef<HTMLButtonElement>(null);

    if (variant === "big") {
      return (
        <Card
          className={uicn(
            "ui-w-full",
            disabled && "ui-cursor-not-allowed ui-opacity-50",
            readOnly && "ui-pointer-events-none ui-select-none",
            status === "error" && "ui-text-red-500",
            status === "success" && "ui-text-green-500",
            className,
          )}
          onClick={() => {
            if (ref) {
              const Ref = ref as RefObject<HTMLButtonElement>;
              Ref.current?.click();
            } else if (SwitchRef.current) {
              SwitchRef.current.click();
            } else {
              console.error("SwitchRef not found");
            }
          }}
        >
          <CardContent className="ui-flex ui-items-center ui-justify-between ui-gap-2 ui-p-2">
            <div className="ui-flex ui-items-center ui-gap-2">
              <div className="ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted">
                {rest.icon || <ListTodo size={24} />}
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
            <Switch
              className="ui-mr-2"
              disabled={readOnly || disabled}
              onClick={(ev) => {
                if (ref) {
                  const Ref = ref as RefObject<HTMLButtonElement>;
                  Ref.current?.click();
                } else if (SwitchRef.current) {
                  SwitchRef.current.click();
                } else {
                  console.error("SwitchRef not found");
                }
                if (onClick) onClick(ev);
              }}
              ref={ref || SwitchRef}
              status={status}
              {...rest}
            />
          </CardContent>
        </Card>
      );
    }
    return (
      <Root
        className={uicn(
          "ui-peer ui-inline-flex ui-h-5 ui-w-10 ui-shrink-0 ui-cursor-pointer ui-items-center ui-rounded-full ui-border-2 ui-border-transparent ui-transition-colors focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ui-ring-ring focus-visible:ui-ring-offset-2 focus-visible:ui-ring-offset-background disabled:ui-cursor-not-allowed disabled:ui-opacity-50 data-[state=checked]:ui-bg-primary data-[state=unchecked]:ui-bg-input",
          readOnly && "ui-pointer-events-none ui-select-none",
          status === "error" &&
            "data-[state=checked]:ui-bg-red-500 data-[state=unchecked]:ui-bg-red-500/20",
          status === "success" &&
            "data-[state=checked]:ui-bg-green-500 data-[state=unchecked]:ui-bg-green-500/20",
          className,
        )}
        disabled={disabled}
        {...rest}
        aria-details={status}
        aria-readonly={readOnly}
        onClick={onClick}
        ref={ref}
      >
        <Thumb className="ui-pointer-events-none ui-block ui-h-4 ui-w-4 ui-rounded-full ui-bg-background ui-shadow-lg ui-ring-0 ui-transition-transform data-[state=checked]:ui-translate-x-5 data-[state=unchecked]:ui-translate-x-0" />
      </Root>
    );
  },
);
Switch.displayName = Root.displayName;

export { Switch };
