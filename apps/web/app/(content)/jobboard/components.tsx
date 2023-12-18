"use client";

import { Button, Card, CustomTable, VanillaEmailInput } from "@silverweb/ui";
import { useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import type { Job } from "./job-table";
import { categories, columnsJob, countries, jobs } from "./job-table";

export function TableContainer({
  children,
}: {
  children?: ReactNode | ReactNode[];
}): JSX.Element {
  return <div>{children}</div>;
}

export function TableBody({
  children,
}: {
  children?: ReactNode | ReactNode[];
}): JSX.Element {
  return <div className="space-y-6">{children}</div>;
}

export function TableItem({
  children,
}: {
  children?: ReactNode | ReactNode[];
}): JSX.Element {
  return (
    <Card className="p-2 md:p-4">
      <div className="flex items-center gap-2">{children}</div>
    </Card>
  );
}

export function NoResult(): JSX.Element {
  return (
    <Card className="p-4">
      <div className="w-full">
        <div className="space-y-2">
          <div className="text-xl font-bold">No result</div>
          <div className="text-sm text-muted-foreground">
            But you can subscribe for updates
          </div>
          <div className="space-y-3">
            <VanillaEmailInput placeholder="Enter email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
export function JobTable({ data }: { data: Job[] }): JSX.Element {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const job = searchParams.get("job");

  const initFilters = [
    ...(category ? [{ id: "category", value: [category] }] : []),
    ...(job ? [{ id: "name", value: [job] }] : []),
  ];

  return (
    <CustomTable
      {...{
        initFilters: category || job ? initFilters : undefined,
        data,
        columns: columnsJob,
        TableContainer: <TableContainer />,
        toolbar: {
          resetFilter: true,
          filter: [
            {
              label: "Job",
              name: "name",
              options: jobs,
              searchPlaceholder: "Search job",
            },
            {
              label: "Category",
              name: "category",
              options: categories,
              searchPlaceholder: "Search category",
            },
            {
              label: "Country",
              name: "country",
              options: countries,
              searchPlaceholder: "Search country",
            },
          ],
        },
        TableBody: <TableBody />,
        TableItem: <TableItem />,
        TableNoResult: <NoResult />,
      }}
    />
  );
}
