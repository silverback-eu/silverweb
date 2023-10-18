import Map from "@/components/silverweb/app/Map";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Map> = {
  title: "SilverWeb/Apps/Map",
  component: Map,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Map>;

export const Normal: Story = {
  render: () => (
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Map
        marker={[
          {
            lat: 53.36512,
            lng: 10.27083,
            content: (
              <div style={{ backgroundColor: "black", padding: 10 }}> Test</div>
            ),
            iconUrl:
              "data:image/svg+xml,%3Csvg width='245' height='245' viewBox='0 0 245 245' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M122.5 245C190.155 245 245 190.155 245 122.5C245 54.8451 190.155 0 122.5 0C54.8451 0 0 54.8451 0 122.5C0 190.155 54.8451 245 122.5 245ZM123 217C174.915 217 217 174.915 217 123C217 71.0852 174.915 29 123 29C71.0852 29 29 71.0852 29 123C29 174.915 71.0852 217 123 217Z' fill='black' fill-opacity='0.25'/%3E%3Cpath d='M217 123C217 174.915 174.915 217 123 217C71.0852 217 29 174.915 29 123C29 71.0852 71.0852 29 123 29C174.915 29 217 71.0852 217 123Z' fill='black' fill-opacity='0.25'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M122.5 245C190.155 245 245 190.155 245 122.5C245 54.8451 190.155 0 122.5 0C54.8451 0 0 54.8451 0 122.5C0 190.155 54.8451 245 122.5 245ZM123 217C174.915 217 217 174.915 217 123C217 71.0852 174.915 29 123 29C71.0852 29 29 71.0852 29 123C29 174.915 71.0852 217 123 217Z' fill='black'/%3E%3C/svg%3E",
          },
        ]}
      />
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Card className="w-full h-full overflow-hidden">
        <Skeleton className="w-full h-full" />
      </Card>
    </div>
  ),
};
