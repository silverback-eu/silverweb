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
} from "../../shared";
import { uicn } from "../../lib";

export interface DatePickerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: "success" | "error" | "default";
  readOnly?: boolean;
  valueCalendar?: Date;
  defaultDateValue?: Date;
  placeholder?: string;
  onChangeCalendar?: (date: Date | undefined) => void;
}

const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  (props, ref) => {
    const {
      status,
      readOnly,
      disabled,
      defaultDateValue,
      valueCalendar,
      onChangeCalendar,
      placeholder,
      ...rest
    } = props;
    const [dateDefault, setDateDefault] = useState<Date | undefined>();
    useEffect(() => {
      setDateDefault(valueCalendar || defaultDateValue);
    }, [valueCalendar, defaultDateValue]);

    function getDateDisplayed(): string | JSX.Element {
      if (valueCalendar) {
        return dayjs(valueCalendar).format("MMM DD, YYYY");
      } else if (dateDefault) {
        return dayjs(dateDefault).format("MMM DD, YYYY");
      }
      return (
        <span
          className={uicn(
            "",
            status === "error" && "ui-text-red-500 ui-opacity-80",
            status === "success" && "ui-text-lime-600 ui-opacity-80",
          )}
        >
          {placeholder || "Pick a date"}
        </span>
      );
    }

    return (
      <Popover open={readOnly || disabled ? false : undefined}>
        <PopoverTrigger asChild>
          <Button
            className={uicn(
              "ui-w-full ui-justify-start ui-text-left ui-font-normal",
              status === "success" &&
                "ui-text-lime-600 placeholder:ui-text-lime-600 placeholder:ui-opacity-80 hover:ui-ring-1 hover:ui-ring-lime-600 focus-visible:ui-ring-1 focus-visible:ui-ring-lime-500",
              status === "error" &&
                "ui-text-red-500 placeholder:ui-text-red-500 placeholder:ui-opacity-80 hover:ui-ring-1 hover:ui-ring-red-600 focus-visible:ui-ring-1 focus-visible:ui-ring-red-500",
              !valueCalendar && !dateDefault && "ui-text-muted-foreground",
            )}
            disabled={disabled || readOnly}
            ref={ref}
            variant="outline"
            {...rest}
          >
            <CalendarIcon
              className={uicn(
                "ui-mr-2 ui-h-4 ui-w-4",
                status === "error" && "ui-text-red-500 ui-opacity-80",
                status === "success" && "ui-text-lime-600 ui-opacity-80",
              )}
            />
            {getDateDisplayed()}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="ui-w-auto ui-p-0">
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
  },
);

DatePicker.displayName = "DatePicker";

export { DatePicker };
