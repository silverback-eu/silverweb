import Image from "next/image";
import React from "react";

export default function OurStory() {
  return (
    <div>
      <div className="pt-24 text-xl max-w-[700px] mx-auto gap-16 space-y-4 mb-12">
            <p className="font-bold tracking-tighter text-5xl">Our Story</p>
            <p className="tracking-tighter text-xl mt-3 ml-8">
              How did it start, {new Date().getFullYear() - 2012} years ago that
              we became the Partner from Dublin to Bucharest and Beyond...
            </p>
      </div>
      <div className="max-w-[900px] mx-auto text-primary text-xl grid grid-cols-2 gap-16 space-y-4">
        <p className="mt-4 text-right">
          Established in 2012 in Dublin, Ireland, SilverBack has evolved into
          SilverBack Group, a global construction and contracting company with a
          strong commitment to sustainability.
        </p>
        <p className="font-bold text-2xl">About SilverBack Group</p>
        <p className="font-bold text-2xl text-right">Our Focus</p>
        <p>
          We focus on mission-critical projects across Europe, supported by
          expert teams in electrical, mechanical, and construction work. Over
          the years, we&apos;ve expanded our reach across Northern and Central Europe
          and established subsidiaries in the UK, Poland, Denmark, and Romania.
        </p>

        <p className="text-right">
          Our core values center on sustainability, research, and client-focused
          services. We offer tailored sustainable solutions, utilize
          eco-friendly materials, and continuously innovate to reduce waste and
          pollution.
        </p>
        <p className="font-bold text-2xl">Our Core Values</p>
        <p className="font-bold text-2xl text-right">
          Our Commitment to Customer Service
        </p>
        <p>
          Known for exceptional customer service, our in-house departments cover
          logistics, project management, finance, accounting, and human
          resources, making us a one-stop destination for clients.
        </p>

        <p className="text-right">
          As a growing enterprise, we&apos;re well-equipped to meet the rising demand
          for sustainable construction services, while our unwavering commitment
          to quality underscores our mission to have a positive global impact.
        </p>
        <p className="font-bold text-2xl">Our Future</p>
        <p className="font-bold text-2xl text-right">Our Pride</p>
        <p>
          We are proud of the contributions made by SilverBack Group and eagerly
          anticipate continued innovation as we strive to be a catalyst for
          positive change on a global scale.
        </p>
      </div>
    </div>
  );
}
