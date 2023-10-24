"use client";

import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

import {
  categories, columnsProject, countries, dataProject,
} from "./projecttable";

import { CustomTable } from "@/components/silverweb/app/Table";
import { Card } from "@/components/ui/card";

export function TableContainer({ children }: { children?: ReactNode | ReactNode[] }) {
  return <div>{children}</div>;
}

export function TableBody({ children }: { children?: ReactNode | ReactNode[] }) {
  return <div className="flex flex-wrap gap-6 justify-evenly">{children}</div>;
}

export function TableItem({ children }: { children?: ReactNode | ReactNode[] }) {
  return <Card className="w-[310px] p-4">{children}</Card>;
}
export function ProjectTable() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <CustomTable
      {...{
        initFilters: category ? [
          { id: "category", value: [category] },
        ] : undefined,
        data: dataProject,
        columns: columnsProject,
        TableContainer: <TableContainer />,
        toolbar: {
          resetFilter: true,
          filter: [
            {
              label: "Category",
              name: "category",
              options: categories,
              searchPlaceholder: "Search category",
            },
            {
              label: "Country",
              name: "location.country",
              options: countries,
              searchPlaceholder: "Search country",
            },
          ],
        },
        TableBody: <TableBody />,
        TableItem: <TableItem />,
        TableNoResult: <div>Nothing found</div>,
      }}
    />
  );
}
