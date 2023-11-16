import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";
import { CalendarDays } from "lucide-react";

const meta: Meta<typeof HoverCard> = {
  title: "Shared/ HoverCard",
  tags: ["autodocs"],
  component: HoverCard,
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Normal: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@dontfred</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/dontfred.png" />
            <AvatarFallback>DF</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@dontfred</h4>
            <p className="text-sm">
              The Author of SilverWeb – working for @silverback-eu.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined October 2020
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
