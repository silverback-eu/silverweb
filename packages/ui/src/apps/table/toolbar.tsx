import type { Table } from "@tanstack/react-table";
import type { LucideIcon } from "lucide-react";
import { X } from "lucide-react";
import { Fragment } from "react";
import { Button } from "../../shared";
import { VanillaInput } from "../../inputs/vanilla";
import { ColumnFilter } from "./column-filter";
import { FilterDropdown } from "./filter-dropdown";

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

export function Toolbar<TData>({
  table,
  columnFilter,
  filter,
  resetFilter,
  search,
}: ToolbarProps<TData>): JSX.Element {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {search ? (
          <VanillaInput
            className="h-8 w-[150px] lg:w-[250px]"
            onChange={(event) =>
              table.getColumn(search.name)?.setFilterValue(event.target.value)
            }
            placeholder={search.label}
            value={
              (table.getColumn(search.name)?.getFilterValue() as string) || ""
            }
          />
        ) : null}
        {filter ? (
          <Fragment>
            {filter.map((filterItem) => (
              <Fragment key={filterItem.name}>
                {table.getColumn(filterItem.name.split(".")[0]) && (
                  <FilterDropdown
                    column={table.getColumn(filterItem.name.split(".")[0])}
                    fullSearchParam={filterItem.name}
                    options={filterItem.options}
                    searchPlaceholder={filterItem.searchPlaceholder}
                    title={filterItem.label}
                  />
                )}
              </Fragment>
            ))}
          </Fragment>
        ) : null}
        {resetFilter && isFiltered ? (
          <Button
            className="h-8 px-2 lg:px-3 items-center flex"
            onClick={() => {
              table.resetColumnFilters();
            }}
            variant="ghost"
          >
            Reset
            <X className="ml-2 h-3 w-3" />
          </Button>
        ) : null}
      </div>
      {columnFilter ? <ColumnFilter table={table} /> : null}
    </div>
  );
}
