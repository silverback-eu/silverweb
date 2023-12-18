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
    <div className="ui-flex ui-items-center ui-justify-between">
      <div className="ui-flex ui-flex-1 ui-items-center ui-space-x-2">
        {search ? (
          <VanillaInput
            className="ui-h-8 ui-w-[150px] lg:ui-w-[250px]"
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
            className="ui-flex ui-h-8 ui-items-center ui-px-2 lg:ui-px-3"
            onClick={() => {
              table.resetColumnFilters();
            }}
            variant="ghost"
          >
            Reset
            <X className="ui-ml-2 ui-h-3 ui-w-3" />
          </Button>
        ) : null}
      </div>
      {columnFilter ? <ColumnFilter table={table} /> : null}
    </div>
  );
}
