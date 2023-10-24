import * as React from "react";

import { cn } from "@/lib/utils";

type TableProps = {
  className?: string;
} & React.HTMLAttributes<HTMLTableElement>;

const Table = React.forwardRef<
HTMLTableElement,
TableProps
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

type TableHeaderProps = {
  className?: string;
} & React.HTMLAttributes<HTMLTableSectionElement>;

const TableHeader = React.forwardRef<
HTMLTableSectionElement,
TableHeaderProps
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

type TableBodyProps = {
  className?: string;
} & React.HTMLAttributes<HTMLTableSectionElement>;

const TableBody = React.forwardRef<
HTMLTableSectionElement,
TableBodyProps
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

type TableFooterProps = {
  className?: string;
} & React.HTMLAttributes<HTMLTableSectionElement>;

const TableFooter = React.forwardRef<
HTMLTableSectionElement,
TableFooterProps
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("bg-primary font-medium text-primary-foreground", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

type TableRowProps = {
  className?: string;
} & React.HTMLAttributes<HTMLTableRowElement>;

const TableRow = React.forwardRef<
HTMLTableRowElement,
TableRowProps
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

type TableHeadProps = {
  className?: string;
} & React.ThHTMLAttributes<HTMLTableCellElement>;

const TableHead = React.forwardRef<
HTMLTableCellElement,
TableHeadProps
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

type TableCellProps = {
  className?: string;
} & React.TdHTMLAttributes<HTMLTableCellElement>;

const TableCell = React.forwardRef<
HTMLTableCellElement,
TableCellProps
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

type TableCaptionProps = {
  className?: string;
} & React.HTMLAttributes<HTMLTableCaptionElement>;

const TableCaption = React.forwardRef<
HTMLTableCaptionElement,
TableCaptionProps
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
