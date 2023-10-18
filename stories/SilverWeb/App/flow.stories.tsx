
import Flow from "@/components/silverweb/app/Flow";
import type { Meta, StoryObj } from "@storybook/react";
import { Tags } from "lucide-react";

const meta: Meta<typeof Flow> = {
  title: "SilverWeb/Apps/Flow",
  tags: ['autodocs'],
  decorators: [
      (Story) => (
        <div style={{
            height: "500px",
        }}>
            <Story />
        </div>
      )
  ],
  component: Flow,
};

export default meta;

type Story = StoryObj<typeof Flow>;

export const Normal: Story = {
    args: {
        initialEdges: [
            { id: "e1-2", source: "1", target: "2" },
            { id: "e1-3", source: "1", target: "3" },
          ],
        initialNodes: [
            {
              id: "1",
              data: { label: "Node 1", description: "Description", Icon: Tags },
              position: { x: 250, y: 5 },
              type: "displayNode",
            },
            {
              id: "2",
              data: { label: "Node 2", description: "Description", Icon: Tags },
              position: { x: 100, y: 120 },
              type: "displayNode",
            },
            {
              id: "3",
              data: { label: "Node 3", description: "Description", Icon: Tags },
              position: { x: 400, y: 120 },
              type: "displayNode",
            },
            {
              id: "4",
              data: { label: "Node 4", description: "Description", Icon: Tags },
              position: { x: 400, y: 220 },
              type: "displayNode",
            },
          ]
    }
};

