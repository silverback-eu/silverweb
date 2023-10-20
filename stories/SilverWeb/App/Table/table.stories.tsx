import { CustomTable, DataTable } from "@/components/silverweb/app/Table";
import type { Meta, StoryObj } from "@storybook/react";
import { columnsTable, dataTable, priorities, statuses } from "./columnsTable";
// import ProjectCard from "@/components/silverweb/cards/ProjectCard";
import { categories, columnsCustom, countries, dataCustom } from "./columnsCustom";
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

const meta: Meta<typeof DataTable> = {
  title: "SilverWeb/Apps/Table",
  component: DataTable,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DataTable | typeof CustomTable>;

export const Data: Story = {
  args: {
    data: dataTable,
    columns: columnsTable as any,
    pagination: true,
    toolbar: {
      columnFilter: true,
      resetFilter: true,
      search: {
        label: "Search title",
        name: "title",
      },
      filter: [
        {
          label: "Status",
          name: "status",
          options: statuses,
          searchPlaceholder: "Search status",
        },
        {
          label: "Priority",
          name: "priority",
          options: priorities,
          searchPlaceholder: "Search priority",
        },
      ],
    },
  },
};

export const Custom: Story = {
  render: (props: any) => (
    <CustomTable {...props} />
  ),
  args: {
    data: dataCustom,
    columns: columnsCustom as any,
    TableContainer: <TableContainer />,
    toolbar: {
      columnFilter: true,
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
          name: "location",
          options: countries,
          searchPlaceholder: "Search country",
        },
      ],
    },
    TableBody: <TableBody />,
    TableItem: <TableItem />,
    TableNoResult: <div>Nothing found</div>,
  },
};

function TableContainer({ children }: { children?: ReactNode | ReactNode[] }) {
  return <div className="">{children}</div>;
}

function TableBody({ children }: { children?: ReactNode | ReactNode[] }) {
  return <div className="flex flex-wrap gap-6 justify-around">{children}</div>;
}

function TableItem({ children }: { children?: ReactNode | ReactNode[] }) {
  return (
    <Card className="w-[300px]">
      <CardContent className="p-4">{children}</CardContent>
    </Card>
  );
}
