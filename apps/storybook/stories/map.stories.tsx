import type { Meta, StoryObj } from "@storybook/react";
import { Map } from "@silverweb/ui/apps";

const meta: Meta<typeof Map> = {
  title: "SilverBack/ Map",
  tags: ["autodocs"],
  component: Map,
};

export default meta;

type Story = StoryObj<typeof Map>;

export const Normal: Story = {
  render: (props: Story["args"]) => {
    return (
      <div
        style={{
          height: "500px",
        }}
      >
        <Map {...props} />
      </div>
    );
  },
  args: {
    mapboxAccessToken: import.meta.env.STORYBOOK_MAPBOX_TOKEN,
  },
};
