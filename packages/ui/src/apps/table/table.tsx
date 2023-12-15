import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { forwardRef } from "react";
import { uicn } from "../../lib";

type TableProps = {
  className?: string;
} & HTMLAttributes<HTMLTableElement>;

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => (
    <div className="ui-relative ui-w-full ui-overflow-auto">
      <table
        className={uicn("ui-w-full ui-caption-bottom ui-text-sm", className)}
        ref={ref}
        {...props}
      />
    </div>
  ),
);
Table.displayName = "Table";

type TableHeaderProps = {
  className?: string;
} & HTMLAttributes<HTMLTableSectionElement>;

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead
      className={uicn("[&_tr]:ui-border-b", className)}
      ref={ref}
      {...props}
    />
  ),
);
TableHeader.displayName = "TableHeader";

type TableBodyProps = {
  className?: string;
} & HTMLAttributes<HTMLTableSectionElement>;

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody
      className={uicn("[&_tr:last-child]:ui-border-0", className)}
      ref={ref}
      {...props}
    />
  ),
);
TableBody.displayName = "TableBody";

type TableFooterProps = {
  className?: string;
} & HTMLAttributes<HTMLTableSectionElement>;

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      className={uicn(
        "ui-bg-primary ui-font-medium ui-text-primary-foreground",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
TableFooter.displayName = "TableFooter";

type TableRowProps = {
  className?: string;
} & HTMLAttributes<HTMLTableRowElement>;

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      className={uicn(
        "ui-border-b ui-transition-colors hover:ui-bg-muted/50 data-[state=selected]:ui-bg-muted",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

type TableHeadProps = {
  className?: string;
} & ThHTMLAttributes<HTMLTableCellElement>;

const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => (
    <th
      className={uicn(
        "ui-h-10 ui-px-2 ui-text-left ui-align-middle ui-font-medium ui-text-muted-foreground [&:has([role=checkbox])]:ui-pr-0 [&>[role=checkbox]]:ui-translate-y-[2px]",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

type TableCellProps = {
  className?: string;
} & TdHTMLAttributes<HTMLTableCellElement>;

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td
      className={uicn(
        "ui-p-2 ui-align-middle [&:has([role=checkbox])]:ui-pr-0 [&>[role=checkbox]]:ui-translate-y-[2px]",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
TableCell.displayName = "TableCell";

type TableCaptionProps = {
  className?: string;
} & HTMLAttributes<HTMLTableCaptionElement>;

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, ...props }, ref) => (
    <caption
      className={uicn("ui-mt-4 ui-text-sm ui-text-muted-foreground", className)}
      ref={ref}
      {...props}
    />
  ),
);
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
