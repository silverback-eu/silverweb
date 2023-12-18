import type { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "../../shared";
import {
  VanillaSelect,
  VanillaSelectContent,
  VanillaSelectItem,
  VanillaSelectTrigger,
  VanillaSelectValue,
} from "../../inputs/vanilla";

interface PaginationProps<TData> {
  table: Table<TData>;
}

export function Pagination<TData>({
  table,
}: PaginationProps<TData>): JSX.Element {
  return (
    <div className="ui-flex ui-items-center ui-justify-between ui-px-2">
      <div className="ui-flex-1 ui-text-sm ui-text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="ui-flex ui-items-center ui-space-x-6 lg:ui-space-x-8">
        <div className="ui-flex ui-items-center ui-space-x-2">
          <p className="ui-text-sm ui-font-medium">Rows per page</p>
          <VanillaSelect
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
            value={`${table.getState().pagination.pageSize}`}
          >
            <VanillaSelectTrigger className="ui-h-8 ui-w-[70px]">
              <VanillaSelectValue
                placeholder={table.getState().pagination.pageSize}
              />
            </VanillaSelectTrigger>
            <VanillaSelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <VanillaSelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </VanillaSelectItem>
              ))}
            </VanillaSelectContent>
          </VanillaSelect>
        </div>
        <div className="ui-flex ui-w-[100px] ui-items-center ui-justify-center ui-text-sm ui-font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="ui-flex ui-items-center ui-space-x-2">
          <Button
            className="ui-hidden ui-h-8 ui-w-8 ui-p-0 lg:ui-flex"
            disabled={!table.getCanPreviousPage()}
            onClick={() => {
              table.setPageIndex(0);
            }}
            variant="outline"
          >
            <span className="ui-sr-only">Go to first page</span>
            <ChevronsLeft className="ui-h-4 ui-w-4" />
          </Button>
          <Button
            className="ui-h-8 ui-w-8 ui-p-0"
            disabled={!table.getCanPreviousPage()}
            onClick={() => {
              table.previousPage();
            }}
            variant="outline"
          >
            <span className="ui-sr-only">Go to previous page</span>
            <ChevronLeft className="ui-h-4 ui-w-4" />
          </Button>
          <Button
            className="ui-h-8 ui-w-8 ui-p-0"
            disabled={!table.getCanNextPage()}
            onClick={() => {
              table.nextPage();
            }}
            variant="outline"
          >
            <span className="ui-sr-only">Go to next page</span>
            <ChevronRight className="ui-h-4 ui-w-4" />
          </Button>
          <Button
            className="ui-hidden ui-h-8 ui-w-8 ui-p-0 lg:ui-flex"
            disabled={!table.getCanNextPage()}
            onClick={() => {
              table.setPageIndex(table.getPageCount() - 1);
            }}
            variant="outline"
          >
            <span className="ui-sr-only">Go to last page</span>
            <ChevronsRight className="ui-h-4 ui-w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
