import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";
import { Fragment, useEffect, useState } from "react";
import { Pagination } from "./pagination";
import { Toolbar } from "./toolbar";

interface CustomTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  toolbar?: {
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
  };
  pagination?: boolean;
  initFilters?: ColumnFiltersState;
  TableContainer: ReactElement;
  TableHeader?: ReactElement;
  TableHeaderItem?: ReactElement;
  TableBody: ReactElement;
  TableItem: ReactElement;
  TableNoResult: ReactElement;
}

export function CustomTable<TData, TValue>({
  columns,
  data,
  toolbar,
  pagination,
  TableContainer,
  TableHeader,
  TableHeaderItem,
  TableBody,
  TableItem,
  TableNoResult,
  initFilters,
}: CustomTableProps<TData, TValue>): JSX.Element {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    initFilters || []
  );
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    setColumnFilters(initFilters || []);
  }, [initFilters]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    ...(pagination && {
      getPaginationRowModel: getPaginationRowModel(),
    }),
  });

  return (
    <div className="space-y-4">
      {toolbar ? <Toolbar table={table} {...toolbar} /> : null}
      <div className="">
        <TableContainer.type {...TableContainer.props}>
          {TableHeader ? (
            <TableHeader.type {...TableHeader.props}>
              {table.getHeaderGroups().map((headerGroup) => (
                <Fragment key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <Fragment key={header.id}>
                      {TableHeaderItem ? (
                        <TableHeaderItem.type {...TableHeaderItem.props}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHeaderItem.type>
                      ) : null}
                    </Fragment>
                  ))}
                </Fragment>
              ))}
            </TableHeader.type>
          ) : null}
          <TableBody.type {...TableBody.props}>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableItem.type
                  data-state={row.getIsSelected() && "selected"}
                  key={row.id}
                  {...TableItem.props}
                >
                  {row.getVisibleCells().map((cell) => (
                    <Fragment key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Fragment>
                  ))}
                </TableItem.type>
              ))
            ) : (
              <TableNoResult.type {...TableNoResult.props} />
            )}
          </TableBody.type>
        </TableContainer.type>
      </div>
      {pagination ? <Pagination table={table} /> : null}
    </div>
  );
}
