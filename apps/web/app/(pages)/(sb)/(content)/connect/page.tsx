import { Button, Card } from "@silverweb/ui/components/shared";
import {
  DoorOpen,
  HardHat,
  Lightbulb,
  LocateFixed,
  MapPin,
  Phone,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { Fragment, type ReactElement } from "react";

export default function Connect(): JSX.Element {
  return (
    <div>
      <section id="top">
        <div className="grid justify-center text-center mt-20 mb-20">
          <h1 className="font-bold tracking-tight text-4xl sm:text-6xl ">
            Connect
          </h1>
          <h2 className="max-w-xl sm:font-medium mx-auto px-12 sm:px-4 text-lg sm:text-xl tracking-tighter text-warm mt-5">
            Let&apos;s team up together and build something great! Contact us
            now and schedule a meeting with our team.
          </h2>
        </div>
        <div className="grid grid-cols-4 mx-14 justify-center gap-11">
          <ContactCard
            Icon={<Lightbulb />}
            description="Speak to the professionals that can help you with your next project."
            heading="Contact Sales"
            link={{
              href: "mailto:sales@silverback.ie?subject=Sales%20Request%20via%20Website&body=Hey%20Team%20SilverBack%2C%20%0A%0AWe%20want%20to%20work%20with%20you!%0A%0AWe're...%0A%0AWe%20have%20a%20Project%20with%20this%20scope%3A%0A%0A-%20Location%3A%20e.%20g.%20Stockholm%2C%20Sweden%0A-%20Type%20of%20Project%3A%20Data%20Centre%2F%20Battery%20Factory%2F%20Power%20Plan%2F%20Mall%2F%20Apartments%2F%20Mine%2F%20Papermill%2F%20Something%20else...%0A-%20We%20need%3A%20e.%20g.%209x%20Electrician%2C%202x%20Electrician%20Team%20Leader%2C%203x%20General%20Operatives%2C%202x%20Duct%20Fitter%20%0A-%20Duration%3A%20e.%20g.%2003%2F01%20-%2016%2F04%0A%0AKind%20Regards%2C",
              text: "sales@silverback.ie",
            }}
          />
          <ContactCard
            Icon={<HardHat />}
            description="Speak to the professionals that can help you with your journey."
            heading="Contact Recruitment"
            link={{
              href: "mailto:work@silverback.ie?subject=Recruiter%20Request%20via%20Website&body=Hey%20Team%20SilverBack%2C%20%0A%0AI%20want%20to%20work%20with%20you!%0A%0AI'm...%0A%0AMy%20trade%20is...%0A%0AI%20worked%20before%20on%2Fwith...%0A%0AI%20would%20work%20in...%20(e.%20g.%20Sweden)%0A%0AKind%20Regards%2C%0A%0A",
              text: "work@silverback.ie",
            }}
          />
          <ContactCard
            Icon={<MapPin />}
            description="Visit our HQ in Dublin, Ireland and meet the team."
            heading="Vist us"
            link={{
              href: "https://maps.app.goo.gl/ryZ3tk64iqyrCJ3W7",
              text: "View on Google Maps",
            }}
          />
          <ContactCard
            Icon={<Phone />}
            description="Get in touch and speak with the team Mo - Fr from 8am to 5pm GMT."
            heading="Call us"
            link={{
              href: "tel:+35314410102",
              text: "+353 1 441 0102",
            }}
          />
        </div>
      </section>
      <section id="maps">
        <h3 className="font-bold text-5xl tracking-tighter text-center mt-64">
          All round europe
        </h3>
        <ContactInformation
          description="SilverBack HQ in Dublin, Ireland, at Station Mews, is the Headquater of SilverBack and also the starting point of our journey. From here we manage white collar, sales, HR and IT."
          location="Station Mews, Lindsay Grove, Dublin 9, D09 CC92, Ireland"
          mapsLink="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=SilverBack%20Staffing%20Ltd%20+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          name="SilverBack HQ"
          open="Mo - Fr from 8am to 5pm GMT."
          phone="+353 1 441 0102"
          scope="White Collar, Sales, HR, IT, Managment, Recruitment"
          shortLoc="Dublin, Ireland"
        />
        <ContactInformation
          description="SilverBack Polska in Lubin, Poland, is the center of Administion and also the first abroad office. From here we manage finace, accounting, administration, blue collar."
          location="Prezydenta Gabriela Narutowicza 55 B, 20-016 Lublin, Poland"
          mapsLink="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=SilverBack%20Polska%20%20+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          name="SilverBack Polska"
          open="Mo - Fr from 8am to 6pm CET."
          phone="+48 81 446 79 88"
          scope="Finance, Accounting, Administration, Blue Collar, Recruitment"
          shortLoc="Lublin, Poland"
        />
        <ContactInformation
          description="SilverBack Instal in Bucurest, Romania, is the center of Blue Collar. From here we manage blue collar, project control and recruitment."
          location="Calea Serban Voda nr. 133, Bl. Central Business Park, Bucurest, Romania"
          mapsLink="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Central%20Business%20Park,%20Calea%20%C8%98erban%20Vod%C4%83%20133%20+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          name="SilverBack Instal"
          open="Mo - Fr from 8am to 5pm CET."
          phone="+40 722 103 317"
          scope="Blue Collar, Project Control, Recruitment"
          shortLoc="Bucurest, Romania"
        />
        <ContactInformation
          description="SilverBack Danmark in Copenhagen, Denmark, is the office of Scandinavia."
          location="Pilestræde 58, 1112 København K, Danmark"
          mapsLink="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Silverback%20denmark%20+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          name="SilverBack Danmark"
          open="Mo - Fr from 8am to 5pm CET."
          phone="+45 71 99 99 99"
          scope="Project Control"
          shortLoc="Copenhagen, Denmark"
        />
      </section>
    </div>
  );
}

function ContactCard({
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

function ContactInformation({
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
    <div className="mt-12 grid grid-cols-2 gap-9 mx-36">
      <Card className="p-2 w-[538px] h-[340px]">
        <Card className="overflow-hidden w-[520px] h-80">
          <iframe
            className="filter grayscale invert-[92%] contrast-[82%] "
            height="320"
            id="gmap_canvas"
            loading="lazy"
            seamless
            src={mapsLink}
            title={`${name} Map`}
            width="520"
          />
        </Card>
      </Card>
      <div className="flex items-center">
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
