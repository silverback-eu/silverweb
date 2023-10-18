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
import { ComponentType, Fragment, ReactNode, useState } from "react";
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
        icon?: LucideIcon;
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
  TableContainer: ComponentType<{ children?: ReactNode[] | ReactNode }>;
  TableHeader?: ComponentType<{ children?: ReactNode[] | ReactNode }>;
  TableHeaderItem?: ComponentType<{ children?: ReactNode[] | ReactNode }>;
  TableBody: ComponentType<{ children?: ReactNode[] | ReactNode }>;
  TableItem: ComponentType<{ children?: ReactNode[] | ReactNode }>;
  TableNoResult: ComponentType<{ children?: ReactNode[] | ReactNode }>;
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
      <div className="rounded-md border">
        <TableContainer>
          {TableHeader && (
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <Fragment key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <Fragment>
                        {TableHeaderItem && (
                          <TableHeaderItem key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHeaderItem>
                        )}
                      </Fragment>
                    );
                  })}
                </Fragment>
              ))}
            </TableHeader>
          )}
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableItem
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <Fragment key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Fragment>
                  ))}
                </TableItem>
              ))
            ) : (
                <TableNoResult/>
            )}
          </TableBody>
        </TableContainer>
      </div>
      {pagination && <Pagination table={table} />}
    </div>
  );
}
