import type {
  ElementRef,
  ComponentPropsWithoutRef,
  RefObject,
  ReactNode,
} from "react";
import { forwardRef, useRef } from "react";
import { Root, Thumb } from "@radix-ui/react-switch";
import { ListTodo } from "lucide-react";
import { cn } from "../../lib/utils";
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
          className={cn(
            "w-full",
            disabled && "cursor-not-allowed opacity-50",
            readOnly && "pointer-events-none select-none",
            status === "error" && "text-red-500",
            status === "success" && "text-green-500",
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
          <CardContent className="flex items-center justify-between gap-2 p-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                {rest.icon || <ListTodo size={24} />}
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
            <Switch
              className="mr-2"
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
        className={cn(
          "peer inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          readOnly && "pointer-events-none select-none",
          status === "error" &&
            "data-[state=checked]:bg-red-500 data-[state=unchecked]:bg-red-500/20",
          status === "success" &&
            "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-green-500/20",
          className,
        )}
        disabled={disabled}
        {...rest}
        aria-details={status}
        aria-readonly={readOnly}
        onClick={onClick}
        ref={ref}
      >
        <Thumb className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
      </Root>
    );
  },
);
Switch.displayName = Root.displayName;

export { Switch };
