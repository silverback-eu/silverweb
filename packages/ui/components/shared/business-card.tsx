import { Building, Building2, Mails, TabletSmartphone } from "lucide-react";
import { CompanyCardCommentSection, CardPopoverItem } from "./cards-helper";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Separator } from "./separator";
import { DisplayCard } from "./display-card";

export function BusinessCard({
  info,
  comments,
}: {
  info: {
    name: string;
    workingField: string;
    group: string;
    email: string;
    phone: string;
    address: { street: string; city: string; country: string };
  };
  comments: { author: string; text: string; createdAt: string }[];
}): JSX.Element {
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <DisplayCard
          Icon={<Building />}
          description={info.workingField}
          header={info.name}
        />
      </PopoverTrigger>
      <PopoverContent className="grid gap-3 w-[360px] max-h-[calc(var(--radix-popover-content-available-height)-10px)]">
        <div className="flex justify-between px-6">
          <div className="grid content-center">
            <p className="text-sm font-semibold text-start truncate">
              {info.name}
            </p>
            <p className="text-xs opacity-50 text-start truncate">
              {info.workingField}
            </p>
          </div>
          <Button size="sm" variant="secondary">
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
        <CompanyCardCommentSection comments={comments} />
      </PopoverContent>
    </Popover>
  );
}
