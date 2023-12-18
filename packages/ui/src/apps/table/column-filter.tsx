import type { Table } from "@tanstack/react-table";
import { SlidersHorizontal } from "lucide-react";
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../shared";

interface ColumnFilterProps<TData> {
  table: Table<TData>;
}

export function ColumnFilter<TData>({
  table,
}: ColumnFilterProps<TData>): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="ui-ml-auto ui-hidden ui-h-8 lg:ui-flex"
          size="sm"
          variant="outline"
        >
          <SlidersHorizontal className="ui-mr-2 ui-h-4 ui-w-4" />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="ui-w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => (
            <DropdownMenuCheckboxItem
              checked={column.getIsVisible()}
              className="ui-capitalize"
              key={column.id}
              onCheckedChange={(value) => {
                column.toggleVisibility(Boolean(value));
              }}
            >
              {column.id}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
