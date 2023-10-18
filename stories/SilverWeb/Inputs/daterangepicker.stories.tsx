import DateRangePicker from "@/components/silverweb/inputs/DateRangePicker";
import LoadingInput from "@/components/silverweb/inputs/LoadingInput";
import type { Meta, StoryObj } from "@storybook/react";
import { addWeeks } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";

const meta: Meta<typeof DateRangePicker> = {
  title: "SilverWeb/Inputs/DateRangePicker",
  component: DateRangePicker,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          margin: 20,
          width: 368,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const Normal: Story = {
  args: {
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Readonly: Story = {
  args: {
    readOnly: true,
    valueCalendar: {
      from: new Date(),
      to: addWeeks(new Date(), 3),
    },
  },
}

export const Success: Story = {
  args: {
    status: "success",
  }
}

export const Error: Story = {
  args: {
    status: "error",
  }
}

export const Controlled: Story = {
  render: () => <DateRangePickerControlled />
}

const DateRangePickerControlled = () => {
  const [value, setValue] = useState<DateRange>();
  return(
    <div>
      <DateRangePicker valueCalendar={value} onChangeCalendar={setValue} />
      <div style={{
        margin: 20
      }}>
        {value?.from?.toDateString() + ' - ' + value?.to?.toDateString()}
      </div>
    </div>
  )
}

export const Loading: Story = {
  render: (props) => {
    return (
      <LoadingInput variant="range" />
    )
  }
}