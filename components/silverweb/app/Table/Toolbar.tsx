"use client";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ColumnFilter from "./ColumnFilter";
import FilterDropdown from "./FilterDropdown";
import { LucideIcon, X } from "lucide-react";
import { Fragment } from "react";

interface ToolbarProps<TData> {
  table: Table<TData>;
  filter?: {
    name: string;
    label: string;
    searchPlaceholder?: string;
    options: {
      label: string;
      value: string;
      icon?: LucideIcon | string;
    }[];
  }[];
  resetFilter?: boolean;
  columnFilter?: boolean;
  search?: {
    name: string;
    label: string;
  };
}

export default function Toolbar<TData>({
  table,
  columnFilter,
  filter,
  resetFilter,
  search,
}: ToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {search && (
          <Input
            placeholder={search.label}
            value={
              (table.getColumn(search.name)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(search.name)?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
        )}
        {filter && (
          <Fragment>
            {filter.map((filter) => (
              <Fragment key={filter.name}>
                {table.getColumn(filter.name) && (
                  <FilterDropdown
                    column={table.getColumn(filter.name)}
                    title={filter.label}
                    options={filter.options}
                    searchPlaceholder={filter.searchPlaceholder}
                  />
                )}
              </Fragment>
            ))}
          </Fragment>
        )}
        {resetFilter && isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3 items-center flex"
          >
            Reset
            <X className="ml-2 h-3 w-3" />
          </Button>
        )}
      </div>
      {columnFilter && (
      <ColumnFilter table={table} />
      )}
    </div>
  );
}
