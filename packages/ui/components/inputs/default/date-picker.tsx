"use client";

/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Calendar as CalendarIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef, useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../shared";
import { cn } from "../../../lib/utils";

export interface DatePickerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: "success" | "error" | "default";
  readOnly?: boolean;
  valueCalendar?: Date;
  onChangeCalendar?: (date: Date | undefined) => void;
}

const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  (props, ref) => {
    const {
      status,
      readOnly,
      disabled,
      valueCalendar,
      onChangeCalendar,
      ...rest
    } = props;
    const [dateDefault, setDateDefault] = useState<Date>();
    useEffect(() => {
      setDateDefault(valueCalendar);
    }, [valueCalendar]);

    function getDateDisplayed(): string | JSX.Element {
      if (valueCalendar) {
        return dayjs(valueCalendar).format("MMM DD, YYYY");
      } else if (dateDefault) {
        return dayjs(dateDefault).format("MMM DD, YYYY");
      }
      return (
        <span
          className={cn(
            "",
            status === "error" && "text-red-500 opacity-80",
            status === "success" && "text-lime-600 opacity-80"
          )}
        >
          Pick a date
        </span>
      );
    }

    return (
      <Popover open={readOnly || disabled ? false : undefined}>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              "w-full justify-start text-left font-normal",
              status === "success" &&
                "text-lime-600 placeholder:opacity-80 placeholder:text-lime-600 hover:ring-1 hover:ring-lime-600 focus-visible:ring-1 focus-visible:ring-lime-500",
              status === "error" &&
                "text-red-500 placeholder:opacity-80 placeholder:text-red-500 hover:ring-1 hover:ring-red-600 focus-visible:ring-1 focus-visible:ring-red-500",
              !valueCalendar && !dateDefault && "text-muted-foreground"
            )}
            ref={ref}
            variant="outline"
            {...rest}
          >
            <CalendarIcon
              className={cn(
                "mr-2 h-4 w-4",
                status === "error" && "text-red-500 opacity-80",
                status === "success" && "text-lime-600 opacity-80"
              )}
            />
            {getDateDisplayed()}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            initialFocus
            mode="single"
            onSelect={(date) => {
              setDateDefault(date);
              if (onChangeCalendar) onChangeCalendar(date);
            }}
            selected={valueCalendar ? new Date(valueCalendar) : dateDefault}
          />
        </PopoverContent>
      </Popover>
    );
  }
);

DatePicker.displayName = "DatePicker";

export { DatePicker };
