import type { DateRange } from "@silverweb/ui";
import { Calendar } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Calendar> = {
  title: "Shared/ Calendar",
  tags: ["autodocs"],
  component: Calendar,
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Normal: Story = {
  render: () => <CalendarDemoSingle />,
};

export const Range: Story = {
  render: () => <CalendarDemoRange />,
};

function CalendarDemoSingle(): JSX.Element {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      className="rounded-md border"
      mode="single"
      onSelect={setDate}
      selected={date}
    />
  );
}

function CalendarDemoRange(): JSX.Element {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  return (
    <Calendar
      className="rounded-md border"
      mode="range"
      numberOfMonths={2}
      onSelect={setDate}
      selected={date}
    />
  );
}
