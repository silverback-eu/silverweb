import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Building, Mails, TabletSmartphone, User2 } from "lucide-react";
import React from "react";
import { CardPopoverItem, ContactCardCommentSection } from "./Tools";

export default function ContactCard({
  info,
  comments,
}: {
  info: { name: string; job: string; company: string; email: string; phone: string};
  comments: { author: string; text: string; createdAt: string }[];
}) {
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <Card>
          <CardContent className="p-2 flex gap-2">
            <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
              <User2 size={24} />
            </div>
            <div className="grid content-center w-[calc(100%-40px)]">
              <p className="text-sm font-semibold text-start truncate">
                {info.name}
              </p>
              <p className="text-xs opacity-50 text-start truncate">{info.job}</p>
            </div>
          </CardContent>
        </Card>
      </PopoverTrigger>
      <PopoverContent className="grid gap-3 w-[360px] max-h-[calc(var(--radix-popover-content-available-height)-10px)]">
        <div className="flex justify-between px-6">
          <div className="grid content-center">
            <p className="text-sm font-semibold text-start truncate">
              {info.name}
            </p>
            <p className="text-xs opacity-50 text-start truncate">{info.job}</p>
          </div>
          <Button variant={"secondary"} size={"sm"}>
            Edit
          </Button>
        </div>
        <Separator />
        <CardPopoverItem
          icon={<Building size={14} />}
          label="Company"
          name={info.company}
        />
        <CardPopoverItem
          icon={<Mails size={14} />}
          label="Email"
          name={info.email}
        />
        <CardPopoverItem
          icon={<TabletSmartphone size={14} />}
          label="Phone"
          name={info.phone}
        />
        <Separator />
        <ContactCardCommentSection
          comments={comments}
        />
      </PopoverContent>
    </Popover>
  );
}
