import type { Meta, StoryObj } from "@storybook/react";
import { Flow, FlowProvider, useFlow, Button } from "@silverweb/ui";
import { HardHat } from "lucide-react";

const meta: Meta<typeof Flow> = {
  title: "Apps/ Flow",
  tags: ["autodocs"],
  component: Flow,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "600px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Flow>;

export const Normal: Story = {
  args: {
    defaultViewport: { x: 600, y: 100, zoom: 1 },
    fitViewOptions: {
      duration: 1000,
      padding: 0.2,
    },
    initialEdges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e1-3", source: "1", target: "3" },
      { id: "e3-4", source: "3", target: "4" },
    ],
    initialNodes: [
      {
        id: "1",
        data: {
          Icon: HardHat,
          label: "Node 1",
          description: "Node 1 description",
        },
        type: "displayNodeOutput",
        position: { x: 200, y: 50 },
      },
      {
        id: "2",
        data: {
          Icon: HardHat,
          label: "Node 2",
          description: "Node 2 description",
        },
        type: "displayNodeInput",
        position: { x: 100, y: 200 },
      },
      {
        id: "3",
        data: {
          Icon: HardHat,
          label: "Node 3",
          description: "Node 3 description",
        },
        type: "displayNode",
        position: { x: 400, y: 200 },
      },
      {
        id: "4",
        data: {
          Icon: HardHat,
          label: "Node 4",
          description: "Node 4 description",
        },
        type: "displayNodeInput",
        position: { x: 400, y: 350 },
      },
    ],
  },
};

export const StyledNodes: Story = {
  args: {
    defaultViewport: { x: 600, y: 100, zoom: 1 },
    fitViewOptions: {
      duration: 1000,
      padding: 0.2,
    },
    initialEdges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e1-3", source: "1", target: "3" },
      { id: "e3-4", source: "3", target: "4" },
    ],
    initialNodes: [
      {
        id: "1",
        data: {
          Icon: HardHat,
          label: "Node 1",
          description: "Node 1 description",
          className: "text-blue-500",
        },
        type: "displayNodeOutput",
        position: { x: 200, y: 50 },
      },
      {
        id: "2",
        data: {
          Icon: HardHat,
          label: "Node 2",
          className: "text-red-500",
          description: "Node 2 description",
        },
        type: "displayNodeInput",
        position: { x: 100, y: 200 },
      },
      {
        id: "3",
        data: {
          Icon: HardHat,
          label: "Node 3",
          className: "text-green-500",
          description: "Node 3 description",
        },
        type: "displayNode",
        position: { x: 400, y: 200 },
      },
      {
        id: "4",
        data: {
          Icon: HardHat,
          label: "Node 4",
          className: "text-yellow-500",
          description: "Node 4 description",
        },
        type: "displayNodeInput",
        position: { x: 400, y: 350 },
      },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    defaultViewport: { x: 600, y: 100, zoom: 1 },
    fitViewOptions: {
      duration: 1000,
      padding: 0.2,
    },
    initialEdges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e1-3", source: "1", target: "3" },
      { id: "e3-4", source: "3", target: "4" },
    ],
    initialNodes: [
      {
        id: "1",
        data: {
          Icon: HardHat,
          label: "Node 1",
          description: "Node 1 description",
          className: "text-blue-500",
          direction: "horizontal",
        },
        type: "displayNodeOutput",
        position: { x: 0, y: 50 },
      },
      {
        id: "2",
        data: {
          Icon: HardHat,
          label: "Node 2",
          className: "text-red-500",
          description: "Node 2 description",
          direction: "horizontal",
        },
        type: "displayNodeInput",
        position: { x: 300, y: 100 },
      },
      {
        id: "3",
        data: {
          Icon: HardHat,
          label: "Node 3",
          className: "text-green-500",
          direction: "horizontal",
          description: "Node 3 description",
        },
        type: "displayNode",
        position: { x: 300, y: 0 },
      },
      {
        id: "4",
        data: {
          Icon: HardHat,
          label: "Node 4",
          className: "text-yellow-500",
          description: "Node 4 description",
          direction: "horizontal",
        },
        type: "displayNodeInput",
        position: { x: 600, y: -50 },
      },
    ],
  },
};

export const WithProvider: Story = {
  args: {
    defaultViewport: { x: 600, y: 100, zoom: 1 },
    fitViewOptions: {
      duration: 1000,
      padding: 0.2,
    },
    initialEdges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e1-3", source: "1", target: "3" },
      { id: "e3-4", source: "3", target: "4" },
    ],
    initialNodes: [
      {
        id: "1",
        data: {
          Icon: HardHat,
          label: "Node 1",
          description: "Node 1 description",
        },
        type: "displayNodeOutput",
        position: { x: 200, y: 50 },
      },
      {
        id: "2",
        data: {
          Icon: HardHat,
          label: "Node 2",
          description: "Node 2 description",
        },
        type: "displayNodeInput",
        position: { x: 100, y: 200 },
      },
      {
        id: "3",
        data: {
          Icon: HardHat,
          label: "Node 3",
          description: "Node 3 description",
        },
        type: "displayNode",
        position: { x: 400, y: 200 },
      },
      {
        id: "4",
        data: {
          Icon: HardHat,
          label: "Node 4",
          description: "Node 4 description",
        },
        type: "displayNodeInput",
        position: { x: 400, y: 350 },
      },
    ],
  },
  render: (args) => (
    <FlowProvider>
      <FlowWithProviderAndHook {...args} />
    </FlowProvider>
  ),
};

function FlowWithProviderAndHook(prop: Story["args"]): JSX.Element {
  const { fitBounds, fitView } = useFlow();
  return (
    <div>
      <Button
        className="mx-4"
        onClick={() => {
          fitBounds(
            {
              x: 300,
              y: 300,
              height: 112,
              width: 300,
            },
            { duration: 800, padding: 0.8 },
          );
        }}
      >
        Focus on Node 4
      </Button>
      <Button
        className="mx-4"
        onClick={() => {
          fitView({
            duration: 800,
            padding: 0.2,
          });
        }}
      >
        Focus on Center
      </Button>
      <div className="h-[400px] w-full">
        <Flow {...prop} />
      </div>
    </div>
  );
}
