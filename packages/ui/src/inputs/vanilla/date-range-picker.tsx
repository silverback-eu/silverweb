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
import { uicn } from "../../lib";

export interface DateRangePickerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: "success" | "error" | "default";
  valueCalendar?: DateRange;
  defaultDateValue?: DateRange;
  placeholder?: string;
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
      <div className={uicn("ui-grid ui-w-full ui-gap-2", className)}>
        <Popover open={readOnly || disabled ? false : undefined}>
          <PopoverTrigger asChild>
            <Button
              className={uicn(
                "ui-w-full ui-justify-start ui-text-left ui-font-normal",
                (readOnly || disabled) && "hover:ui-bg-transparent",
                status === "success" &&
                  "ui-text-lime-600 placeholder:ui-text-lime-600 placeholder:ui-opacity-80 hover:ui-ring-1 hover:ui-ring-lime-600 focus-visible:ui-ring-1 focus-visible:ui-ring-lime-500",
                status === "error" &&
                  "ui-text-red-500 placeholder:ui-text-red-500 placeholder:ui-opacity-80 hover:ui-ring-1 hover:ui-ring-red-600 focus-visible:ui-ring-1 focus-visible:ui-ring-red-500",
                !valueCalendar && !dateDefault && "ui-text-muted-foreground",
              )}
              disabled={disabled || readOnly}
              id="date"
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
              {getDatesDisplayed()}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="ui-w-auto ui-p-0">
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
  },
);

DateRangePicker.displayName = "DateRangePicker";

export { DateRangePicker };
