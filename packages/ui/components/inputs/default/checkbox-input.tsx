"use client";

/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { CheckboxProps } from "@radix-ui/react-checkbox";
import { ListTodo } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef, RefObject } from "react";
import { forwardRef, useRef } from "react";
import { Checkbox } from "../../shared/checkbox";
import { Card, CardContent } from "../../shared";
import { cn } from "../../../lib/utils";

export interface CheckboxInputProps
  extends ComponentPropsWithoutRef<
    React.ForwardRefExoticComponent<
      CheckboxProps & React.RefAttributes<HTMLButtonElement>
    >
  > {
  readOnly?: boolean;
  variant?: "default" | "big";
  cardLabel?: string;
  cardDescription?: string;
  icon?: JSX.Element;
}

const CheckboxInput = forwardRef<
  ElementRef<
    React.ForwardRefExoticComponent<
      CheckboxProps & React.RefAttributes<HTMLButtonElement>
    >
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
