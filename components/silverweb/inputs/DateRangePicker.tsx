import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import React, {
 forwardRef, useEffect, useState,
} from "react";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export interface DateRangePickerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status?: "success" | "error" | "default";
  valueCalendar?: DateRange;
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
      valueCalendar,
      onChangeCalendar,
      ...rest
    } = props;

    const [dateDefault, setDateDefault] = useState<DateRange | undefined>();

    useEffect(() => {
      setDateDefault(valueCalendar);
    }, [valueCalendar]);

    return (
      <div className={cn("grid gap-2 w-full", className)}>
        <Popover open={(readOnly || disabled) && false}>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                (readOnly || disabled) && "hover:bg-transparent",
                status === "success"
                  && "text-lime-600 placeholder:opacity-80 placeholder:text-lime-600 hover:ring-1 hover:ring-lime-600 focus-visible:ring-1 focus-visible:ring-lime-500",
                status === "error"
                  && "text-red-500 placeholder:opacity-80 placeholder:text-red-500 hover:ring-1 hover:ring-red-600 focus-visible:ring-1 focus-visible:ring-red-500",
                !valueCalendar && !dateDefault && "text-muted-foreground",
                disabled && "cursor-not-allowed text-muted-foreground hover:text-muted-foreground",
              )}
              ref={ref}
              {...rest}
            >
              <CalendarIcon className={cn("mr-2 h-4 w-4", status === "error" && "text-red-500 opacity-80", status === "success" && "text-lime-600 opacity-80")} />
              {valueCalendar?.from ? (
                valueCalendar.to ? (
                  <React.Fragment>
                    {format(valueCalendar.from, "LLL dd, y")}
                    {" "}
                    -
                    {" "}
                    {format(valueCalendar.to, "LLL dd, y")}
                  </React.Fragment>
                ) : (
                  format(valueCalendar.from, "LLL dd, y")
                )
              ) : dateDefault?.from ? (
                dateDefault.to ? (
                  <React.Fragment>
                    {format(dateDefault.from, "LLL dd, y")}
                    {" "}
                    -
                    {" "}
                    {format(dateDefault.to, "LLL dd, y")}
                  </React.Fragment>
                ) : (
                  format(dateDefault.from, "LLL dd, y")
                )
              ) : (
                <span className={cn("", status === "error" && "text-red-500 opacity-80", status === "success" && "text-lime-600 opacity-80")}>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={
                valueCalendar?.from
                  ? new Date(valueCalendar.from)
                  : dateDefault?.from
              }
              selected={valueCalendar || dateDefault}
              onSelect={(range) => {
                setDateDefault(range);
                if (onChangeCalendar) onChangeCalendar(range);
              }}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);

DateRangePicker.displayName = "DateRangePicker";

export default DateRangePicker;
