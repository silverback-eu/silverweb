import type { Column } from "@tanstack/react-table";
import { ChevronDown, ChevronUp, ChevronsUpDown, EyeOff } from "lucide-react";
import type { HTMLAttributes } from "react";
import { cn } from "../../../lib/utils";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../shared";

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
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="-ml-3 h-8 data-[state=open]:bg-accent"
            size="sm"
            variant="ghost"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" &&
              column.getIsSorted() !== "asc" && (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            {column.getIsSorted() === "asc" &&
              column.getIsSorted() !== "desc" && (
                <ChevronUp className="ml-2 h-4 w-4" />
              )}
            {column.getIsSorted() !== "asc" &&
              column.getIsSorted() !== "desc" && (
                <ChevronsUpDown className="ml-2 h-4 w-4" />
              )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem
            onClick={() => {
              column.toggleSorting(false);
            }}
          >
            <ChevronUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              column.toggleSorting(true);
            }}
          >
            <ChevronDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              column.toggleVisibility(false);
            }}
          >
            <EyeOff className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
