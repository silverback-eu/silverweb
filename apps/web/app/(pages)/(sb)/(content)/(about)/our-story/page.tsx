import { Building } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Our Story - How did it start, ${
    new Date().getFullYear() - 2012
  } years ago that we became the Partner from Dublin to Bucharest and Beyond...`,
};

export default function OurStory(): JSX.Element {
  return (
    <div>
      <div className="grid justify-center text-center mt-20 mb-20">
        <h1 className="font-bold tracking-tight text-4xl sm:text-6xl ">
          Our Story
        </h1>
        <h2 className="max-w-xl sm:font-medium mx-auto px-12 sm:px-4 text-lg sm:text-xl tracking-tighter text-warm mt-5">
          How did it start, {new Date().getFullYear() - 2012} years ago that we
          became the Partner from Dublin to Bucharest and Beyond...
        </h2>
      </div>
      <div className="max-w-[1000px] mx-auto text-primary text-xl grid grid-cols-[1fr_20px_1fr] [&getAlign_:nth-child(3n)]:text-start [&_:nth-child(3n+1)]:text-end">
        <Info />
        <div />
        <div />
        <div />
        <div />
        <Info />
        <Info />
        <div />
        <div />
        <div />
        <div />
        <Info />
        <Info />
        <div />
        <div />
        <div />
        <div />
        <Info />
      </div>
      <div className="max-w-[1000px] mx-auto text-primary text-xl grid grid-cols-[1fr_20px_1fr]">
        <div className="flex justify-start items-center">
          <p className="mt-4 text-right">
            Established in 2012 in Dublin, Ireland, SilverBack has evolved into
            SilverBack Group, a global construction and contracting company with
            a strong commitment to sustainability.
          </p>
        </div>
        <div className="block relative h-full">
          <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
        </div>
        <div className="flex justify-start items-center">
          <p className="font-bold text-2xl">About SilverBack Group</p>
        </div>
        <div className="flex justify-end items-center">
          <p className="font-bold text-2xl text-right">Our Focus</p>
        </div>
        <div className="block relative h-full">
          <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
        </div>
        <div className="flex justify-end items-center">
          <p>
            We focus on mission-critical projects across Europe, supported by
            expert teams in electrical, mechanical, and construction work. Over
            the years, we&apos;ve expanded our reach across Northern and Central
            Europe and established subsidiaries in the UK, Poland, Denmark, and
            Romania.
          </p>
        </div>
        <div className="flex justify-start items-center">
          <p className="text-right">
            Our core values center on sustainability, research, and
            client-focused services. We offer tailored sustainable solutions,
            utilize eco-friendly materials, and continuously innovate to reduce
            waste and pollution.
          </p>
        </div>
        <div className="block relative h-full">
          <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
        </div>
        <div className="flex justify-start items-center">
          <p className="font-bold text-2xl">Our Core Values</p>
        </div>
        <div className="flex justify-end items-center">
          <p className="font-bold text-2xl text-right">Our Commitment to CS</p>
        </div>
        <div className="block relative h-full">
          <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
        </div>
        <div className="flex justify-start items-center">
          <p>
            Known for exceptional customer service, our in-house departments
            cover logistics, project management, finance, accounting, and human
            resources, making us a one-stop destination for clients.
          </p>
        </div>
        <div className="flex justify-end items-center">
          <p className="text-right">
            As a growing enterprise, we&apos;re well-equipped to meet the rising
            demand for sustainable construction services, while our unwavering
            commitment to quality underscores our mission to have a positive
            global impact.
          </p>
        </div>
        <div className="block relative h-full">
          <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
        </div>
        <div className="flex justify-start items-center">
          <p className="font-bold text-2xl">Our Future</p>
        </div>
        <div className="flex justify-end items-center">
          <p className="font-bold text-2xl text-right">Our Pride</p>
        </div>
        <div className="block relative h-full">
          <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
        </div>
        <div className="flex justify-start items-center">
          <p>
            We are proud of the contributions made by SilverBack Group and
            eagerly anticipate continued innovation as we strive to be a
            catalyst for positive change on a global scale.
          </p>
        </div>
      </div>
    </div>
  );
}

function Info(): JSX.Element {
  return (
    <div className="space-y-2 h-full transition-all duration-1000">
      <div className="bg-muted h-10 w-10 rounded-lg flex justify-center items-center">
        <Building className="w-6 h-6" />
      </div>
      <div className="font-bold text-xl">Lorem, ipsum</div>
      <div className="hidden xl:block text-muted-foreground text-base">
        Lorem ipsum dolor sit amet consecteturadipisicing elit. Recusandae,
        fugiat rerum soluta maiores, hic iure quibusdam obcaecati laudantium
        dignissimos fugit similique dolore minus veniam deleniti ut voluptas
        porro sequi rem?
      </div>
    </div>
  );
}

function _StoryCard(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="bg-muted h-10 w-10 rounded-lg flex justify-center items-center">
        <Building className="w-6 h-6" />
      </div>
      <div className="font-bold text-xl">Lorem, ipsum</div>
      <div className="hidden xl:block text-muted-foreground text-base">
        Lorem ipsum dolor sit amet consecteturadipisicing elit. Recusandae,
        fugiat rerum soluta maiores, hic iure quibusdam obcaecati laudantium
        dignissimos fugit similique dolore minus veniam deleniti ut voluptas
        porro sequi rem?
      </div>
    </div>
  );
}
