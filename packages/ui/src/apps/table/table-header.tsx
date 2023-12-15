import type { Column } from "@tanstack/react-table";
import { ChevronDown, ChevronUp, ChevronsUpDown, EyeOff } from "lucide-react";
import type { HTMLAttributes } from "react";
import { uicn } from "../../lib";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../shared";

interface TableHeaderProps<TData, TValue>
  extends HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function TableHeader<TData, TValue>({
  column,
  title,
  className,
}: TableHeaderProps<TData, TValue>): JSX.Element {
  if (!column.getCanSort()) {
    return <div className={uicn(className)}>{title}</div>;
  }

  return (
    <div className={uicn("ui-flex ui-items-center ui-space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="-ui-ml-3 ui-h-8 data-[state=open]:ui-bg-accent"
            size="sm"
            variant="ghost"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" &&
              column.getIsSorted() !== "asc" && (
                <ChevronDown className="ui-ml-2 ui-h-4 ui-w-4" />
              )}
            {column.getIsSorted() === "asc" &&
              column.getIsSorted() !== "desc" && (
                <ChevronUp className="ui-ml-2 ui-h-4 ui-w-4" />
              )}
            {column.getIsSorted() !== "asc" &&
              column.getIsSorted() !== "desc" && (
                <ChevronsUpDown className="ui-ml-2 ui-h-4 ui-w-4" />
              )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem
            onClick={() => {
              column.toggleSorting(false);
            }}
          >
            <ChevronUp className="ui-mr-2 ui-h-3.5 ui-w-3.5 ui-text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              column.toggleSorting(true);
            }}
          >
            <ChevronDown className="ui-mr-2 ui-h-3.5 ui-w-3.5 ui-text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              column.toggleVisibility(false);
            }}
          >
            <EyeOff className="ui-mr-2 ui-h-3.5 ui-w-3.5 ui-text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
