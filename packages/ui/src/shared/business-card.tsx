import { Building, Building2, Mails, TabletSmartphone } from "lucide-react";
import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import { CompanyCardCommentSection, CardPopoverItem } from "./card-helper";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Separator } from "./separator";
import { DisplayCard } from "./display-card";

type BusinessCardProps = HTMLAttributes<HTMLDivElement> &
  (
    | {
        info: {
          name: string;
          workingField: string;
          group: string;
          email: string;
          phone: string;
          address: { street: string; city: string; country: string };
        };
        comments: { author: string; text: string; createdAt: string }[];
      }
    | { loading: true }
  );

const BusinessCard = forwardRef<HTMLDivElement, BusinessCardProps>(
  ({ className, ...props }, ref) => {
    if ("loading" in props) {
      return <DisplayCard className={className} loading ref={ref} />;
    }
    const { info, comments, ...rest } = props;
    return (
      <Popover>
        <PopoverTrigger className="ui-w-full">
          <DisplayCard
            Icon={<Building />}
            className={className}
            description={info.workingField}
            header={info.name}
            ref={ref}
            {...rest}
          />
        </PopoverTrigger>
        <PopoverContent className="ui-grid ui-max-h-[calc(var(--radix-popover-content-available-height)-10px)] ui-w-[360px] ui-gap-3">
          <div className="ui-flex ui-justify-between ui-px-6">
            <div className="ui-grid ui-content-center">
              <p className="ui-truncate ui-text-start ui-text-sm ui-font-semibold">
                {info.name}
              </p>
              <p className="ui-truncate ui-text-start ui-text-xs ui-opacity-50">
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
  },
);

BusinessCard.displayName = "BusinessCard";

export { BusinessCard };
