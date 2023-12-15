import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CSSProperties, ComponentProps } from "react";
import { DayPicker } from "react-day-picker";
import { uicn } from "../lib";
import { buttonVariants } from "./button";

export type { DateRange } from "react-day-picker";

interface IconProps {
  className?: string | undefined;
  style?: CSSProperties | undefined;
}
function IconLeft(props: IconProps): JSX.Element {
  return <ChevronLeft {...props} className="ui-h-4 ui-w-4" />;
}

function IconRight(props: IconProps): JSX.Element {
  return <ChevronRight {...props} className="ui-h-4 ui-w-4" />;
}

export type CalendarProps = {
  className?: string;
  classNames?: Record<string, string>;
  showOutsideDays?: boolean;
  mode?: "default" | "single" | "multiple" | "range";
} & ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  mode,
  showOutsideDays = true,
  ...props
}: CalendarProps): JSX.Element {
  return (
    <DayPicker
      className={uicn("ui-p-3", className)}
      classNames={{
        months:
          "ui-flex ui-flex-col sm:ui-flex-row ui-space-y-4 sm:ui-space-x-4 sm:ui-space-y-0",
        month: "ui-space-y-4",
        caption:
          "ui-flex ui-justify-center ui-pt-1 ui-relative ui-items-center",
        caption_label: "ui-text-sm ui-font-medium",
        nav: "ui-space-x-1 ui-flex ui-items-center",
        nav_button: uicn(
          buttonVariants({ variant: "outline" }),
          "ui-h-7 ui-w-7 ui-bg-transparent ui-p-0 ui-opacity-50 hover:ui-opacity-100",
        ),
        nav_button_previous: "ui-absolute ui-left-1",
        nav_button_next: "ui-absolute ui-right-1",
        table: "ui-w-full ui-border-collapse ui-space-y-1",
        head_row: "ui-flex",
        head_cell:
          "ui-text-muted-foreground ui-rounded-md ui-w-8 ui-font-normal ui-text-[0.8rem]",
        row: "ui-flex ui-w-full ui-mt-2",
        cell: uicn(
          "ui-relative ui-p-0 ui-text-center ui-text-sm focus-within:ui-relative focus-within:ui-z-20 [&:ui-has([aria-selected])]:ui-bg-accent",
          mode === "range"
            ? "[&:has(>.day-range-end)]:ui-rounded-r-md [&:has(>.day-range-start)]:ui-rounded-l-md first:[&:has([aria-selected])]:ui-rounded-l-md last:[&:has([aria-selected])]:ui-rounded-r-md"
            : "[&:has([aria-selected])]:ui-rounded-md",
        ),
        day: uicn(
          buttonVariants({ variant: "ghost" }),
          "ui-h-8 ui-w-8 ui-p-0 ui-font-normal aria-selected:ui-opacity-100",
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "ui-bg-primary ui-text-primary-foreground hover:ui-bg-primary hover:ui-text-primary-foreground focus:ui-bg-primary focus:ui-text-primary-foreground",
        day_today: "ui-bg-accent ui-text-accent-foreground",
        day_outside: "ui-text-muted-foreground ui-opacity-50",
        day_disabled: "ui-text-muted-foreground ui-opacity-50",
        day_range_middle:
          "aria-selected:ui-bg-accent aria-selected:ui-text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft,
        IconRight,
      }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment -- Had to do any, as it was complaining about the type of mode being "default" | "single" | "multiple" | "range"  and "range", because the conditional was not working
      mode={mode as any}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
