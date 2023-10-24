import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import React, { forwardRef, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export interface DatePickerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status?: "success" | "error" | "default";
  readOnly? : boolean
  valueCalendar?: Date;
  onChangeCalendar?: (date: Date | undefined) => void;
}

const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  (props, ref) => {
    const {
      className, status, readOnly, disabled, valueCalendar, onChangeCalendar, ...rest
    } = props;
    const [dateDefault, setDateDefault] = useState<Date>();
    useEffect(() => {
      setDateDefault(valueCalendar);
    }, [valueCalendar]);

    return (
      <Popover open={(readOnly || disabled) && false}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              status === "success"
                && "text-lime-600 placeholder:opacity-80 placeholder:text-lime-600 hover:ring-1 hover:ring-lime-600 focus-visible:ring-1 focus-visible:ring-lime-500",
              status === "error"
                && "text-red-500 placeholder:opacity-80 placeholder:text-red-500 hover:ring-1 hover:ring-red-600 focus-visible:ring-1 focus-visible:ring-red-500",
              !valueCalendar && !dateDefault && "text-muted-foreground",
            )}
            ref={ref}
            {...rest}
          >
            <CalendarIcon className={cn("mr-2 h-4 w-4", status === "error" && "text-red-500 opacity-80", status === "success" && "text-lime-600 opacity-80")} />
            {valueCalendar ? (
              format(valueCalendar, "PPP")
            ) : dateDefault ? (
              format(dateDefault, "PPP")
            ) : (
              <span className={cn("", status === "error" && "text-red-500 opacity-80", status === "success" && "text-lime-600 opacity-80")}>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={valueCalendar ? new Date(valueCalendar) : dateDefault}
            onSelect={(date) => {
              setDateDefault(date);
              if (onChangeCalendar) onChangeCalendar(date);
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    );
  },
);

DatePicker.displayName = "DatePicker";

export default DatePicker;
