import type { Meta, StoryObj } from "@storybook/react";
import type { ColumnDef } from "@silverweb/ui/apps";
import { DataTable, CustomTable as SCustomTable } from "@silverweb/ui/apps";

const meta: Meta<typeof DataTable> = {
  title: "Apps/ Table",
  tags: ["autodocs"],
  component: DataTable,
};

export default meta;

type Story = StoryObj<typeof DataTable>;

type CStory = StoryObj<typeof SCustomTable>;

interface DemoTableItem {
  id: string;
  name: string;
  description: string;
  date: string;
  category: "A" | "B" | "C";
}

const columnsDemo: ColumnDef<DemoTableItem>[] = [
  {
    accessorKey: "id",
    cell: ({ row }) => (
      <div className="text-sm font-bold opacity-70 line-clamp-1">
        {row.getValue("id")}
      </div>
    ),
  },
  {
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="text-sm font-bold mt-3 line-clamp-1">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "category",
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
    filterFn: (row, id, value) =>
      (value as string[]).includes(row.getValue(id)),
  },
  {
    accessorKey: "description",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground line-clamp-3">
        {row.getValue("description")}
      </div>
    ),
  },
  {
    accessorKey: "date",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground line-clamp-3">
        {row.getValue("date")}
      </div>
    ),
  },
];

export const Normal: Story = {
  args: {
    columns: columnsDemo as ColumnDef<unknown>[],
    data: [
      {
        id: "1",
        name: "Item 1",
        description: "This is the first item",
        date: "2022-01-01",
        category: "A",
      },
      {
        id: "2",
        name: "Item 2",
        description: "This is the second item",
        date: "2022-01-02",
        category: "B",
      },
      {
        id: "3",
        name: "Item 3",
        description: "This is the third item",
        date: "2022-01-03",
        category: "C",
      },
      {
        id: "4",
        name: "Item 4",
        description: "This is the fourth item",
        date: "2022-01-04",
        category: "A",
      },
      {
        id: "5",
        name: "Item 5",
        description: "This is the fifth item",
        date: "2022-01-05",
        category: "B",
      },
      {
        id: "6",
        name: "Item 6",
        description: "This is the sixth item",
        date: "2022-01-06",
        category: "C",
      },
      {
        id: "7",
        name: "Item 7",
        description: "This is the seventh item",
        date: "2022-01-07",
        category: "A",
      },
      {
        id: "8",
        name: "Item 8",
        description: "This is the eighth item",
        date: "2022-01-08",
        category: "B",
      },
      {
        id: "9",
        name: "Item 9",
        description: "This is the ninth item",
        date: "2022-01-09",
        category: "C",
      },
      {
        id: "10",
        name: "Item 10",
        description: "This is the tenth item",
        date: "2022-01-10",
        category: "A",
      },
      {
        id: "11",
        name: "Item 11",
        description: "This is the eleventh item",
        date: "2022-01-11",
        category: "B",
      },
      {
        id: "12",
        name: "Item 12",
        description: "This is the twelfth item",
        date: "2022-01-12",
        category: "C",
      },
      {
        id: "13",
        name: "Item 13",
        description: "This is the thirteenth item",
        date: "2022-01-13",
        category: "A",
      },
      {
        id: "14",
        name: "Item 14",
        description: "This is the fourteenth item",
        date: "2022-01-14",
        category: "B",
      },
      {
        id: "15",
        name: "Item 15",
        description: "This is the fifteenth item",
        date: "2022-01-15",
        category: "C",
      },
      {
        id: "16",
        name: "Item 16",
        description: "This is the sixteenth item",
        date: "2022-01-16",
        category: "A",
      },
      {
        id: "17",
        name: "Item 17",
        description: "This is the seventeenth item",
        date: "2022-01-17",
        category: "B",
      },
      {
        id: "18",
        name: "Item 18",
        description: "This is the eighteenth item",
        date: "2022-01-18",
        category: "C",
      },
      {
        id: "19",
        name: "Item 19",
        description: "This is the nineteenth item",
        date: "2022-01-19",
        category: "A",
      },
      {
        id: "20",
        name: "Item 20",
        description: "This is the twentieth item",
        date: "2022-01-20",
        category: "B",
      },
      {
        id: "21",
        name: "Item 21",
        description: "This is the twenty-first item",
        date: "2022-01-21",
        category: "C",
      },
      {
        id: "22",
        name: "Item 22",
        description: "This is the twenty-second item",
        date: "2022-01-22",
        category: "A",
      },
      {
        id: "23",
        name: "Item 23",
        description: "This is the twenty-third item",
        date: "2022-01-23",
        category: "B",
      },
      {
        id: "24",
        name: "Item 24",
        description: "This is the twenty-fourth item",
        date: "2022-01-24",
        category: "C",
      },
      {
        id: "25",
        name: "Item 25",
        description: "This is the twenty-fifth item",
        date: "2022-01-25",
        category: "A",
      },
      {
        id: "26",
        name: "Item 26",
        description: "This is the twenty-sixth item",
        date: "2022-01-26",
        category: "B",
      },
      {
        id: "27",
        name: "Item 27",
        description: "This is the twenty-seventh item",
        date: "2022-01-27",
        category: "C",
      },
      {
        id: "28",
        name: "Item 28",
        description: "This is the twenty-eighth item",
        date: "2022-01-28",
        category: "A",
      },
      {
        id: "29",
        name: "Item 29",
        description: "This is the twenty-ninth item",
        date: "2022-01-29",
        category: "B",
      },
      {
        id: "30",
        name: "Item 30",
        description: "This is the thirtieth item",
        date: "2022-01-30",
        category: "C",
      },
      {
        id: "31",
        name: "Item 31",
        description: "This is the thirty-first item",
        date: "2022-01-31",
        category: "A",
      },
      {
        id: "32",
        name: "Item 32",
        description: "This is the thirty-second item",
        date: "2022-02-01",
        category: "B",
      },
      {
        id: "33",
        name: "Item 33",
        description: "This is the thirty-third item",
        date: "2022-02-02",
        category: "C",
      },
      {
        id: "34",
        name: "Item 34",
        description: "This is the thirty-fourth item",
        date: "2022-02-03",
        category: "A",
      },
      {
        id: "35",
        name: "Item 35",
        description: "This is the thirty-fifth item",
        date: "2022-02-04",
        category: "B",
      },
      {
        id: "36",
        name: "Item 36",
        description: "This is the thirty-sixth item",
        date: "2022-02-05",
        category: "C",
      },
      {
        id: "37",
        name: "Item 37",
        description: "This is the thirty-seventh item",
        date: "2022-02-06",
        category: "A",
      },
      {
        id: "38",
        name: "Item 38",
        description: "This is the thirty-eighth item",
        date: "2022-02-07",
        category: "B",
      },
      {
        id: "39",
        name: "Item 39",
        description: "This is the thirty-ninth item",
        date: "2022-02-08",
        category: "C",
      },
      {
        id: "40",
        name: "Item 40",
        description: "This is the fortieth item",
        date: "2022-02-09",
        category: "A",
      },
      {
        id: "41",
        name: "Item 41",
        description: "This is the forty-first item",
        date: "2022-02-10",
        category: "B",
      },
      {
        id: "42",
        name: "Item 42",
        description: "This is the forty-second item",
        date: "2022-02-11",
        category: "C",
      },
      {
        id: "43",
        name: "Item 43",
        description: "This is the forty-third item",
        date: "2022-02-12",
        category: "A",
      },
      {
        id: "44",
        name: "Item 44",
        description: "This is the forty-fourth item",
        date: "2022-02-13",
        category: "B",
      },
      {
        id: "45",
        name: "Item 45",
        description: "This is the forty-fifth item",
        date: "2022-02-14",
        category: "C",
      },
      {
        id: "46",
        name: "Item 46",
        description: "This is the forty-sixth item",
        date: "2022-02-15",
        category: "A",
      },
      {
        id: "47",
        name: "Item 47",
        description: "This is the forty-seventh item",
        date: "2022-02-16",
        category: "B",
      },
      {
        id: "48",
        name: "Item 48",
        description: "This is the forty-eighth item",
        date: "2022-02-17",
        category: "C",
      },
      {
        id: "49",
        name: "Item 49",
        description: "This is the forty-ninth item",
        date: "2022-02-18",
        category: "A",
      },
      {
        id: "50",
        name: "Item 50",
        description: "This is the fiftieth item",
        date: "2022-02-19",
        category: "B",
      },
    ],
    pagination: true,
    toolbar: {
      search: {
        name: "name",
        label: "Search",
      },
      resetFilter: true,
      columnFilter: true,
      filter: [
        {
          label: "Category",
          name: "category",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
          ],
        },
      ],
    },
  },
};

export const CustomTable: CStory = {
  args: {
    TableBody: <div className="flex flex-wrap" />,
    TableHeader: <div />,
    TableContainer: <div />,
    TableItem: (
      <div className="rounded-xl border bg-card text-card-foreground shadow p-3 m-2" />
    ),
    TableNoResult: <div>No Result</div>,
    columns: columnsDemo as ColumnDef<unknown>[],
    data: [
      {
        id: "1",
        name: "Item 1",
        description: "This is the first item",
        date: "2022-01-01",
        category: "A",
      },
      {
        id: "2",
        name: "Item 2",
        description: "This is the second item",
        date: "2022-01-02",
        category: "B",
      },
      {
        id: "3",
        name: "Item 3",
        description: "This is the third item",
        date: "2022-01-03",
        category: "C",
      },
      {
        id: "4",
        name: "Item 4",
        description: "This is the fourth item",
        date: "2022-01-04",
        category: "A",
      },
      {
        id: "5",
        name: "Item 5",
        description: "This is the fifth item",
        date: "2022-01-05",
        category: "B",
      },
      {
        id: "6",
        name: "Item 6",
        description: "This is the sixth item",
        date: "2022-01-06",
        category: "C",
      },
      {
        id: "7",
        name: "Item 7",
        description: "This is the seventh item",
        date: "2022-01-07",
        category: "A",
      },
      {
        id: "8",
        name: "Item 8",
        description: "This is the eighth item",
        date: "2022-01-08",
        category: "B",
      },
      {
        id: "9",
        name: "Item 9",
        description: "This is the ninth item",
        date: "2022-01-09",
        category: "C",
      },
      {
        id: "10",
        name: "Item 10",
        description: "This is the tenth item",
        date: "2022-01-10",
        category: "A",
      },
      {
        id: "11",
        name: "Item 11",
        description: "This is the eleventh item",
        date: "2022-01-11",
        category: "B",
      },
      {
        id: "12",
        name: "Item 12",
        description: "This is the twelfth item",
        date: "2022-01-12",
        category: "C",
      },
      {
        id: "13",
        name: "Item 13",
        description: "This is the thirteenth item",
        date: "2022-01-13",
        category: "A",
      },
      {
        id: "14",
        name: "Item 14",
        description: "This is the fourteenth item",
        date: "2022-01-14",
        category: "B",
      },
      {
        id: "15",
        name: "Item 15",
        description: "This is the fifteenth item",
        date: "2022-01-15",
        category: "C",
      },
      {
        id: "16",
        name: "Item 16",
        description: "This is the sixteenth item",
        date: "2022-01-16",
        category: "A",
      },
      {
        id: "17",
        name: "Item 17",
        description: "This is the seventeenth item",
        date: "2022-01-17",
        category: "B",
      },
      {
        id: "18",
        name: "Item 18",
        description: "This is the eighteenth item",
        date: "2022-01-18",
        category: "C",
      },
      {
        id: "19",
        name: "Item 19",
        description: "This is the nineteenth item",
        date: "2022-01-19",
        category: "A",
      },
      {
        id: "20",
        name: "Item 20",
        description: "This is the twentieth item",
        date: "2022-01-20",
        category: "B",
      },
      {
        id: "21",
        name: "Item 21",
        description: "This is the twenty-first item",
        date: "2022-01-21",
        category: "C",
      },
      {
        id: "22",
        name: "Item 22",
        description: "This is the twenty-second item",
        date: "2022-01-22",
        category: "A",
      },
      {
        id: "23",
        name: "Item 23",
        description: "This is the twenty-third item",
        date: "2022-01-23",
        category: "B",
      },
      {
        id: "24",
        name: "Item 24",
        description: "This is the twenty-fourth item",
        date: "2022-01-24",
        category: "C",
      },
      {
        id: "25",
        name: "Item 25",
        description: "This is the twenty-fifth item",
        date: "2022-01-25",
        category: "A",
      },
      {
        id: "26",
        name: "Item 26",
        description: "This is the twenty-sixth item",
        date: "2022-01-26",
        category: "B",
      },
      {
        id: "27",
        name: "Item 27",
        description: "This is the twenty-seventh item",
        date: "2022-01-27",
        category: "C",
      },
      {
        id: "28",
        name: "Item 28",
        description: "This is the twenty-eighth item",
        date: "2022-01-28",
        category: "A",
      },
      {
        id: "29",
        name: "Item 29",
        description: "This is the twenty-ninth item",
        date: "2022-01-29",
        category: "B",
      },
      {
        id: "30",
        name: "Item 30",
        description: "This is the thirtieth item",
        date: "2022-01-30",
        category: "C",
      },
      {
        id: "31",
        name: "Item 31",
        description: "This is the thirty-first item",
        date: "2022-01-31",
        category: "A",
      },
      {
        id: "32",
        name: "Item 32",
        description: "This is the thirty-second item",
        date: "2022-02-01",
        category: "B",
      },
      {
        id: "33",
        name: "Item 33",
        description: "This is the thirty-third item",
        date: "2022-02-02",
        category: "C",
      },
      {
        id: "34",
        name: "Item 34",
        description: "This is the thirty-fourth item",
        date: "2022-02-03",
        category: "A",
      },
      {
        id: "35",
        name: "Item 35",
        description: "This is the thirty-fifth item",
        date: "2022-02-04",
        category: "B",
      },
      {
        id: "36",
        name: "Item 36",
        description: "This is the thirty-sixth item",
        date: "2022-02-05",
        category: "C",
      },
      {
        id: "37",
        name: "Item 37",
        description: "This is the thirty-seventh item",
        date: "2022-02-06",
        category: "A",
      },
      {
        id: "38",
        name: "Item 38",
        description: "This is the thirty-eighth item",
        date: "2022-02-07",
        category: "B",
      },
      {
        id: "39",
        name: "Item 39",
        description: "This is the thirty-ninth item",
        date: "2022-02-08",
        category: "C",
      },
      {
        id: "40",
        name: "Item 40",
        description: "This is the fortieth item",
        date: "2022-02-09",
        category: "A",
      },
      {
        id: "41",
        name: "Item 41",
        description: "This is the forty-first item",
        date: "2022-02-10",
        category: "B",
      },
      {
        id: "42",
        name: "Item 42",
        description: "This is the forty-second item",
        date: "2022-02-11",
        category: "C",
      },
      {
        id: "43",
        name: "Item 43",
        description: "This is the forty-third item",
        date: "2022-02-12",
        category: "A",
      },
      {
        id: "44",
        name: "Item 44",
        description: "This is the forty-fourth item",
        date: "2022-02-13",
        category: "B",
      },
      {
        id: "45",
        name: "Item 45",
        description: "This is the forty-fifth item",
        date: "2022-02-14",
        category: "C",
      },
      {
        id: "46",
        name: "Item 46",
        description: "This is the forty-sixth item",
        date: "2022-02-15",
        category: "A",
      },
      {
        id: "47",
        name: "Item 47",
        description: "This is the forty-seventh item",
        date: "2022-02-16",
        category: "B",
      },
      {
        id: "48",
        name: "Item 48",
        description: "This is the forty-eighth item",
        date: "2022-02-17",
        category: "C",
      },
      {
        id: "49",
        name: "Item 49",
        description: "This is the forty-ninth item",
        date: "2022-02-18",
        category: "A",
      },
      {
        id: "50",
        name: "Item 50",
        description: "This is the fiftieth item",
        date: "2022-02-19",
        category: "B",
      },
    ],
    pagination: true,
    toolbar: {
      search: {
        name: "name",
        label: "Search",
      },
      resetFilter: true,
      columnFilter: true,
      filter: [
        {
          label: "Category",
          name: "category",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
          ],
        },
      ],
    },
  },
  render: (args) => <SCustomTable {...args} />,
};
