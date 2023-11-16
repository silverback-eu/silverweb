import { ScrollArea, ScrollBar } from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ScrollArea> = {
  title: "Shared/ ScrollArea",
  tags: ["autodocs"],
  component: ScrollArea,
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Normal: Story = {
  args: {
    style: {
      height: "200px",
      width: "350px",
      padding: "1rem",
      border: "1px solid #ccc",
    },
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ea dignissimos? Minus, similique. Inventore pariatur aspernatur commodi sed facilis id est. Molestiae voluptatibus perspiciatis magni, officiis illum nesciunt nisi ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, suscipit officia. Quidem animi enim molestiae alias beatae. Corporis numquam iure eveniet ea ut commodi, illo exercitationem id error impedit qui.",
  },
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-2 p-4">
        {[
          {
            artist: "Ornella Binni",
            art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
          },
          {
            artist: "Tom Byrom",
            art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
          },
          {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
          },
        ].map((artwork) => (
          <figure className="shrink-0" key={artwork.artist}>
            <div className="overflow-hidden rounded-md">
              <img
                alt={`by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                height={400}
                src={artwork.art}
                width={300}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};
