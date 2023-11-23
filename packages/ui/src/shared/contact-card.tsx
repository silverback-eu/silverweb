import { Building, Mails, TabletSmartphone } from "lucide-react";
import type { HTMLAttributes} from "react";
import { forwardRef } from "react";
import { CardPopoverItem, ContactCardCommentSection } from "./card-helper";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Separator } from "./separator";
import { DisplayCard } from "./display-card";

type ContactCardProps = HTMLAttributes<HTMLDivElement> &
  (
    | {
        info: {
          name: string;
          job: string;
          company: string;
          email: string;
          phone: string;
        };
        comments: { author: string; text: string; createdAt: string }[];
      }
    | { loading: true }
  );

const ContactCard = forwardRef<HTMLDivElement, ContactCardProps>(
  ({ className, ...props }, ref) => {
    if ("loading" in props) {
      return <DisplayCard className={className} loading ref={ref} />;
    }
    const { info, comments, ...rest } = props;
    return (
      <Popover>
        <PopoverTrigger className="w-full">
          <DisplayCard
            Icon={<Building />}
            className={className}
            description={info.job}
            header={info.name}
            ref={ref}
            {...rest}
          />
        </PopoverTrigger>
        <PopoverContent className="grid gap-3 w-[360px] max-h-[calc(var(--radix-popover-content-available-height)-10px)]">
          <div className="flex justify-between px-6">
            <div className="grid content-center">
              <p className="text-sm font-semibold text-start truncate">
                {info.name}
              </p>
              <p className="text-xs opacity-50 text-start truncate">
                {info.job}
              </p>
            </div>
            <Button size="sm" variant="secondary">
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
          <ContactCardCommentSection comments={comments} />
        </PopoverContent>
      </Popover>
    );
  }
);

ContactCard.displayName = "ContactCard";

export { ContactCard };
