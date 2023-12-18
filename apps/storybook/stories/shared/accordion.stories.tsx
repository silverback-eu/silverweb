import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@silverweb/ui";

const meta: Meta<typeof Accordion> = {
  title: "Shared/ Accordion",
  tags: ["autodocs"],
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Normal: Story = {
  args: {
    collapsible: true,
    type: "single",
  },
  render: (args) => (
    <Accordion className="w-full" {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequuntur, ducimus ut sit sapiente culpa velit nostrum impedit
          dicta. Ex ad, alias rem necessitatibus eum dolore placeat nam
          voluptatum in nostrum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          laudantium, commodi, ea impedit id fugit doloribus tempore ab, labore
          amet aut velit debitis vitae consequuntur dicta quis perspiciatis
          maxime officia.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Item 3</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae
          incidunt illo dolorum, voluptas necessitatibus ullam rem provident
          deleniti pariatur nemo quis reiciendis eligendi laudantium veniam
          suscipit assumenda sed enim.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multi: Story = {
  args: {
    type: "multiple",
  },
  render: (args) => (
    <Accordion className="w-full" {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequuntur, ducimus ut sit sapiente culpa velit nostrum impedit
          dicta. Ex ad, alias rem necessitatibus eum dolore placeat nam
          voluptatum in nostrum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          laudantium, commodi, ea impedit id fugit doloribus tempore ab, labore
          amet aut velit debitis vitae consequuntur dicta quis perspiciatis
          maxime officia.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Item 3</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae
          incidunt illo dolorum, voluptas necessitatibus ullam rem provident
          deleniti pariatur nemo quis reiciendis eligendi laudantium veniam
          suscipit assumenda sed enim.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
