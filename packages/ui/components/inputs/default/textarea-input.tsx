/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { TextareaHTMLAttributes } from "react";
import { forwardRef } from "react";
import { Textarea } from "../../shared";
import { cn } from "../../../lib/utils";

export interface TextareaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  status?: "success" | "error" | "default";
}

const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>(
  (props, ref) => {
    const { className, onChange, status, ...rest } = props;

    return (
      <Textarea
        className={cn(
          "resize-none",
          rest.readOnly
            ? "focus-visible:ring-1 focus-visible:ring-accent"
            : "hover:ring-1 hover:ring-secondary transition-all focus:-translate-y-[1px]",
          status === "success" &&
            "text-lime-600 placeholder:opacity-80 placeholder:text-lime-600 hover:ring-1 hover:ring-lime-600 focus-visible:ring-1 focus-visible:ring-lime-500",
          status === "error" &&
            "text-red-500 placeholder:opacity-80 placeholder:text-red-500 hover:ring-1 hover:ring-red-600 focus-visible:ring-1 focus-visible:ring-red-500",
          className
        )}
        onChange={(ev) => {
          ev.currentTarget.style.height = "auto";
          ev.currentTarget.style.height = `${
            ev.currentTarget.scrollHeight + 2
          }px`;
          if (onChange) onChange(ev);
        }}
        ref={ref}
        {...rest}
      />
    );
  }
);

TextareaInput.displayName = "TextareaInput";

export { TextareaInput };