import DatePicker from "@/components/silverweb/inputs/DatePicker";
import LoadingInput from "@/components/silverweb/inputs/LoadingInput";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "SilverWeb/Inputs/DatePicker",
  tags: ['autodocs'],
  component: DatePicker,
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

type Story = StoryObj<typeof DatePicker>;

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
    valueCalendar: new Date(),
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
  render: () => <DatePickerControlled />
}

const DatePickerControlled = () => {
  const [value, setValue] = useState<Date>();
  return(
    <div>
      <DatePicker valueCalendar={value} onChangeCalendar={setValue} />
      <div style={{
        margin: 20
      }}>
        {value?.toDateString()}
      </div>
    </div>
  )
}

export const Loading: Story = {
  render: (props) => {
    return (
      <LoadingInput variant="date" />
    )
  }
}