import { Metadata } from "next";
import React from "react";

import { FlowAndNav, InfoCards } from "./comp";

import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Methods - A plan is what makes the difference...",
};

export default function Methods() {
  return (
    <div className="lg:min-h-[1400px] xl:min-h-[1650px] mx-3 mt-4 grid grid-cols-1 md:grid-cols-[40%_1fr] xl:grid-cols-[30%_1fr_15%]">
      <div className="mt-5">
        <p className="text-4xl font-bold">Methods</p>
        <p className="text-lg opacity-50">
          Just doing, is sometimes not enough. A plan is what makes the
          difference...
        </p>
        <div className="space-y-10 mt-10 mx-5">
          <InfoCards
            heading="1. Simplifying the Process"
            content="At SilverBack, we prioritize simplicity for our clients. In construction and project management, we know efficiency matters. That's why we make working with us as effortless as possible."
          />
          <Separator />
          <InfoCards
            heading="2. Comprehensive Workforce Management"
            content="We handle the logistics: international and local travel, accommodations, payroll, and employee management. This frees you to focus on the bigger picture while we handle the details."
          />
          <Separator />
          <InfoCards
            heading="3. Seamless Team Integration"
            content="We select skilled foremen and equip our teams with the right tools to integrate smoothly with your project. They work under your supervision to meet your objectives."
          />
          <Separator />
          <InfoCards
            heading="4. Commitment to Client Convenience"
            content="Throughout your projects, we maintain open communication, adapting our services as needed for success. SilverBack is your reliable partner in achieving your project goals. We're here to make it happen."
          />
          <Separator />
          <InfoCards
            heading="5. Client-Centric Partnership"
            content="At SilverBack, we're more than service providers; we're your committed partners in project success. We prioritize seamless workforce integration and exceptional results, making your success our primary focus."
          />
          <Separator />
          <InfoCards
            heading="6. Tailored Workforce Solutions"
            content="SilverBack specializes in creating workforce solutions customized to your specific project needs. Whether it's a small-scale operation or a large construction project, we adapt to your requirements."
          />

          <Separator />
          <InfoCards
            heading="7. Safety First Approach"
            content="Safety is paramount at SilverBack. We ensure all our workers adhere to the highest safety standards. Our commitment to safety goes hand-in-hand with delivering quality and successful projects."
          />
        </div>
      </div>
      <FlowAndNav />
    </div>
  );
}
