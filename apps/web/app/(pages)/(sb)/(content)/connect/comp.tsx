import { Button, Card } from "@silverweb/ui/shared";
import { DoorOpen, LocateFixed, Phone, Users2 } from "lucide-react";
import Link from "next/link";
import type { ReactElement } from "react";
import { Fragment } from "react";

export function ContactCard({
  Icon,
  heading,
  description,
  link,
}: {
  Icon: ReactElement;
  heading: string;
  description: string;
  link: { href: string; text: string };
}): JSX.Element {
  return (
    <Card className="p-5">
      <div className="h-full transition-all duration-500 flex flex-col gap-6">
        <div className="flex">
          <div className="bg-muted h-10 w-10 rounded-lg flex justify-center items-center">
            <Icon.type {...Icon.props} className="w-6 h-6" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-bold text-xl">{heading}</div>
          <div className="text-muted-foreground text-sm">{description}</div>
          <div>
            <Button asChild className="p-0 h-auto" variant="link">
              <Link href={link.href}>{link.text}</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function ContactInformation({
  mapsLink,
  name,
  location,
  shortLoc,
  phone,
  description,
  open,
  scope,
}: {
  mapsLink: string;
  name: string;
  location: string;
  shortLoc: string;
  description: string;
  phone: string;
  open: string;
  scope: string;
}): JSX.Element {
  return (
    <div className="pt-14 grid md:grid-cols-2 gap-9 mx-5 md:mx-36">
      <Card className="p-2 w-[calc(100vw-40px)] md:w-full xl:w-[538px] h-[340px] order-2 md:order-1">
        <Card className="overflow-hidden w-[calc(100vw-58px)] md:w-full xl:w-[520px] h-80">
          <iframe
            className="filter grayscale invert-[92%] contrast-[82%] w-full "
            height="320"
            id="gmap_canvas"
            loading="lazy"
            seamless
            src={mapsLink}
            title={`${name} Map`}
          />
        </Card>
      </Card>
      <div className="flex items-center order-1 md:order-2">
        <div>
          <h4 className="font-bold text-3xl tracking-tighter">{name}</h4>
          <div className="text-xl text-warm tracking-tighter">{shortLoc}</div>
          <div>{description}</div>
          <div className="mt-5 grid grid-cols-[100px_1fr] gap-2">
            <ContactInfomartionListItem
              Icon={<LocateFixed />}
              label="Address"
              value={location}
            />
            <ContactInfomartionListItem
              Icon={<Phone />}
              label="Phone"
              value={phone}
            />
            <ContactInfomartionListItem
              Icon={<DoorOpen />}
              label="Open"
              value={open}
            />
            <ContactInfomartionListItem
              Icon={<Users2 />}
              label="Scope"
              value={scope}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfomartionListItem({
  Icon,
  label,
  value,
}: {
  Icon: ReactElement;
  label: string;
  value: string;
}): JSX.Element {
  return (
    <Fragment>
      <div className="flex text-sm items-center gap-1 font-bold">
        <Icon.type {...Icon.props} className="w-4 h-4 translate-y-[0.5px]" />
        {label}:
      </div>
      <div className="text-sm text-warm">{value}</div>
    </Fragment>
  );
}
