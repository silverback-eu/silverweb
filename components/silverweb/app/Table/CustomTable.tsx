"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ComponentType, Fragment, ReactElement, ReactNode, useState } from "react";
import Toolbar from "./Toolbar";
import Pagination from "./Pagination";
import { LucideIcon } from "lucide-react";

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
  TableContainer: ReactElement;
  TableHeader?: ReactElement;
  TableHeaderItem?: ReactElement;
  TableBody: ReactElement;
  TableItem: ReactElement;
  TableNoResult: ReactElement;
}

export default function CustomTable<TData, TValue>({
  columns,
  data,
  toolbar,
  pagination,
  TableContainer,
  TableHeader,
  TableHeaderItem,
  TableBody,
  TableItem,
  TableNoResult
}: CustomTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

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
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4">
      {toolbar && <Toolbar table={table} {...toolbar} />}
      <div className="">
        <TableContainer.type {...TableContainer.props}>
          {TableHeader && (
            <TableHeader.type {...TableHeader.props}>
              {table.getHeaderGroups().map((headerGroup) => (
                <Fragment key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <Fragment key={header.id}>
                        {TableHeaderItem && (
                          <TableHeaderItem.type {...TableHeaderItem.props}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHeaderItem.type>
                        )}
                      </Fragment>
                    );
                  })}
                </Fragment>
              ))}
            </TableHeader.type>
          )}
          <TableBody.type {...TableBody.props}>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableItem.type
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
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
                <TableNoResult.type {...TableNoResult.props}/>
            )}
          </TableBody.type>
        </TableContainer.type>
      </div>
      {pagination && <Pagination table={table} />}
    </div>
  );
}
