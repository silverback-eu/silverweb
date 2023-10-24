import {
  Building, Building2, Mails, TabletSmartphone,
} from "lucide-react";

import { CompanyCardCommentSection, CardPopoverItem } from "./Tools";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export default function BusinessCard({
  info,
  comments,
}: {
  info: { name: string; workingField: string; group: string; email: string; phone: string, address: { street: string, city: string, country: string } };
  comments: { author: string; text: string; createdAt: string }[];
}) {
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <Card>
          <CardContent className="p-2 flex gap-2">
            <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
              <Building size={24} />
            </div>
            <div className="grid content-center w-[calc(100%-40px)]">
              <p className="text-sm font-semibold text-start truncate">
                {info.name}
              </p>
              <p className="text-xs opacity-50 text-start truncate">{info.workingField}</p>
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
            <p className="text-xs opacity-50 text-start truncate">{info.workingField}</p>
          </div>
          <Button variant="secondary" size="sm">
            Edit
          </Button>
        </div>
        <Separator />
        <CardPopoverItem
          icon={<Building2 size={14} />}
          label="Group"
          name={info.group}
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
        <CardPopoverItem
          icon={<Building2 size={14} />}
          label="Address"
          name={info.address.street}
        />
        <CardPopoverItem
          icon={<Mails size={14} />}
          label="City"
          name={info.address.city}
        />
        <CardPopoverItem
          icon={<TabletSmartphone size={14} />}
          label="Country"
          name={info.address.country}
        />
        <Separator />
        <CompanyCardCommentSection
          comments={comments}
        />
      </PopoverContent>
    </Popover>
  );
}
