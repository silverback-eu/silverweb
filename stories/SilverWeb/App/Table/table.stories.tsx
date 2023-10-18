import { CustomTable, DataTable } from "@/components/silverweb/app/Table";
import type { Meta, StoryObj } from "@storybook/react";
import { columnsTable, data, priorities, statuses } from "./columnsTable";

const meta: Meta<typeof DataTable | typeof CustomTable> = {
  title: "SilverWeb/Apps/Table",
  component: DataTable,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DataTable | typeof CustomTable>;

export const Data: Story = {
  args: {
    data: data,
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
        }
      ]
    },
  },
};
