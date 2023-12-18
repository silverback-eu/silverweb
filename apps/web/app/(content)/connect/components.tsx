import { Button, Card } from "@silverweb/ui";
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
      <div className="flex h-full flex-col gap-6 transition-all duration-500">
        <div className="flex">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            <Icon.type {...Icon.props} className="h-6 w-6" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-xl font-bold">{heading}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
          <div>
            <Button asChild className="h-auto p-0" variant="link">
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
    <div className="mx-5 grid gap-9 pt-14 md:mx-36 md:grid-cols-2">
      <Card className="order-2 h-[340px] w-[calc(100vw-40px)] p-2 md:order-1 md:w-full xl:w-[538px]">
        <Card className="h-80 w-[calc(100vw-58px)] overflow-hidden md:w-full xl:w-[520px]">
          <iframe
            className="w-full contrast-[82%] grayscale invert-[92%] filter "
            height="320"
            id="gmap_canvas"
            loading="lazy"
            seamless
            src={mapsLink}
            title={`${name} Map`}
          />
        </Card>
      </Card>
      <div className="order-1 flex items-center md:order-2">
        <div>
          <h4 className="text-3xl font-bold tracking-tighter">{name}</h4>
          <div className="text-xl tracking-tighter text-warm">{shortLoc}</div>
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
      <div className="flex items-center gap-1 text-sm font-bold">
        <Icon.type {...Icon.props} className="h-4 w-4 translate-y-[0.5px]" />
        {label}:
      </div>
      <div className="text-sm text-warm">{value}</div>
    </Fragment>
  );
}
