import { Calendar as CalendarIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import { Fragment, forwardRef, useEffect, useState } from "react";
import dayjs from "dayjs";
import type { DateRange } from "../../shared";
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../shared";
import { cn } from "../../lib/utils";

export interface DateRangePickerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: "success" | "error" | "default";
  valueCalendar?: DateRange;
  defaultDateValue?: DateRange;
  readOnly?: boolean;
  onChangeCalendar?: (date: DateRange | undefined) => void;
}

const DateRangePicker = forwardRef<HTMLButtonElement, DateRangePickerProps>(
  (props, ref) => {
    const {
      className,
      status,
      readOnly,
      disabled,
      placeholder,
      defaultDateValue,
      valueCalendar,
      onChangeCalendar,
      ...rest
    } = props;

    const [dateDefault, setDateDefault] = useState<DateRange | undefined>();

    useEffect(() => {
      setDateDefault(valueCalendar || defaultDateValue);
    }, [valueCalendar, defaultDateValue]);

    function getDatesDisplayed(): string | JSX.Element {
      if (valueCalendar?.from) {
        if (valueCalendar.to) {
          return (
            <Fragment>
              {dayjs(valueCalendar.from).format("MMM DD, YYYY")} -{" "}
              {dayjs(valueCalendar.to).format("MMM DD, YYYY")}
            </Fragment>
          );
        }
        return dayjs(valueCalendar.from).format("MMM DD, YYYY");
      } else if (dateDefault?.from) {
        if (dateDefault.to) {
          return (
            <Fragment>
              {dayjs(dateDefault.from).format("MMM DD, YYYY")} -{" "}
              {dayjs(dateDefault.to).format("MMM DD, YYYY")}
            </Fragment>
          );
        }
        return dayjs(dateDefault.from).format("MMM DD, YYYY");
      }
      return (
        <span
          className={cn(
            "",
            status === "error" && "text-red-500 opacity-80",
            status === "success" && "text-lime-600 opacity-80"
          )}
        >
          {placeholder || "Pick a date"}
        </span>
      );
    }

    return (
      <div className={cn("grid gap-2 w-full", className)}>
        <Popover open={readOnly || disabled ? false : undefined}>
          <PopoverTrigger asChild>
            <Button
              className={cn(
                "w-full justify-start text-left font-normal",
                (readOnly || disabled) && "hover:bg-transparent",
                status === "success" &&
                  "text-lime-600 placeholder:opacity-80 placeholder:text-lime-600 hover:ring-1 hover:ring-lime-600 focus-visible:ring-1 focus-visible:ring-lime-500",
                status === "error" &&
                  "text-red-500 placeholder:opacity-80 placeholder:text-red-500 hover:ring-1 hover:ring-red-600 focus-visible:ring-1 focus-visible:ring-red-500",
                !valueCalendar && !dateDefault && "text-muted-foreground"
              )}
              disabled={disabled || readOnly}
              id="date"
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
              {getDatesDisplayed()}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto p-0">
            <Calendar
              defaultMonth={
                valueCalendar?.from
                  ? new Date(valueCalendar.from)
                  : dateDefault?.from
              }
              initialFocus
              mode="range"
              numberOfMonths={2}
              onSelect={(range) => {
                setDateDefault(range);
                if (onChangeCalendar) onChangeCalendar(range);
              }}
              selected={valueCalendar || dateDefault}
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);

DateRangePicker.displayName = "DateRangePicker";

export { DateRangePicker };
