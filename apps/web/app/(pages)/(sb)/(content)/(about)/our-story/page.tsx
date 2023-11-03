import { Building, Rocket, Search, Star, TreePine, Trophy } from "lucide-react";
import type { Metadata } from "next";
import our_story_1 from "public/our-story/our-story-1.jpg";
import our_story_2 from "public/our-story/our-story-2.jpg";
import our_story_3 from "public/our-story/our-story-3.jpg";
import our_story_4 from "public/our-story/our-story-4.jpg";
import our_story_5 from "public/our-story/our-story-5.jpg";
import our_story_6 from "public/our-story/our-story-6.jpg";
import { Photos, StoryCard } from "./comp";

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
      <div className="max-w-[1000px] mx-auto text-primary text-xl grid sm:grid-cols-[1fr_35px_1fr] gap-4 sm:gap-0">
        <div />
        <div className="hidden sm:block h-32">
          <div className="hidden sm:block relative h-full">
            <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-1px)] w-0 before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-10 before:bg-gradient-to-b before:from-background before:to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-1px)] w-0" />
          </div>
        </div>
        <div />
        <StoryCard
          Icon={<Building />}
          content="Established in 2012 in Dublin, Ireland, SilverBack has evolved into SilverBack Group, a global construction and contracting company with a strong commitment to sustainability."
          heading="About SilverBack Group"
          justify="right"
        />
        <div className="hidden sm:block relative h-full">
          <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
        </div>
        <Photos image={our_story_1} justify="left" />
        <Photos
          className="hidden sm:flex"
          image={our_story_2}
          justify="right"
        />
        <div className="hidden sm:block relative h-full">
          <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
        </div>
        <StoryCard
          Icon={<Search />}
          content="We focus on mission-critical projects across Europe, supported by expert teams in electrical, mechanical, and construction work. Over the years, we've expanded our reach across Northern and Central Europe and established subsidiaries in the UK, Poland, Denmark, and Romania."
          heading="Our Focus"
          justify="left"
        />
        <Photos
          className="flex sm:hidden"
          image={our_story_2}
          justify="right"
        />
        <StoryCard
          Icon={<TreePine />}
          content="Our core values center on sustainability, research, and client-focused services. We offer tailored sustainable solutions, utilize eco-friendly materials, and continuously innovate to reduce waste and pollution."
          heading="Our Core Values"
          justify="right"
        />
        <div className="hidden sm:block relative h-full">
          <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
        </div>
        <Photos image={our_story_3} justify="left" />
        <Photos
          className="hidden sm:flex"
          image={our_story_4}
          justify="right"
        />
        <div className="hidden sm:block relative h-full">
          <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
        </div>
        <StoryCard
          Icon={<Star />}
          content="Known for exceptional customer service, our in-house departments cover logistics, project management, finance, accounting, and human resources, making us a one-stop destination for clients."
          heading="Our Commitment to CS"
          justify="left"
        />
        <Photos
          className="flex sm:hidden"
          image={our_story_4}
          justify="right"
        />
        <StoryCard
          Icon={<Rocket />}
          content="As a growing enterprise, we're well-equipped to meet the rising demand for sustainable construction services, while our unwavering commitment to quality underscores our mission to have a positive global impact."
          heading="Our Future"
          justify="right"
        />
        <div className="hidden sm:block relative h-full">
          <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
        </div>
        <Photos image={our_story_5} justify="left" />
        <Photos
          className="hidden sm:flex"
          image={our_story_6}
          justify="right"
        />
        <div className="hidden sm:block relative h-full">
          <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
        </div>
        <StoryCard
          Icon={<Trophy />}
          content="We are proud of the contributions made by SilverBack Group and eagerly anticipate continued innovation as we strive to be a catalyst for positive change on a global scale."
          heading="Our Pride"
          justify="left"
        />
        <Photos
          className="flex sm:hidden"
          image={our_story_6}
          justify="right"
        />
      </div>
      <div />
      <div className="hidden sm:block h-32">
        <div className="hidden sm:block relative h-full">
          <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-1px)] w-0" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-1px)] w-0 before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-10 before:bg-gradient-to-t before:from-background before:to-transparent" />
        </div>
      </div>
    </div>
  );
}
