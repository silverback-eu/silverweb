import type { Metadata } from "next";
import { Separator } from "@silverweb/ui";
import { FlowAndNav, InfoCards } from "./components";

export const metadata: Metadata = {
  title: "Methods - A plan is what makes the difference...",
};

export default function Methods(): JSX.Element {
  return (
    <div>
      <div className="mb-12 mt-20 grid justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl ">
          Methods
        </h1>
        <h2 className="mx-auto mt-5 max-w-xl px-12 text-lg tracking-tighter text-warm sm:px-4 sm:text-xl sm:font-medium">
          Just doing, is sometimes not enough. A plan is what makes the
          difference...
        </h2>
      </div>
      <div className="mx-3 mt-4 grid grid-cols-1 md:grid-cols-[40%_1fr] lg:min-h-[1400px] xl:min-h-[1650px] xl:grid-cols-[30%_1fr_15%]">
        <div>
          <div className="mx-5 mt-14 space-y-10 sm:mt-0">
            <InfoCards
              content="At SilverBack, we prioritize simplicity for our clients. In construction and project management, we know efficiency matters. That's why we make working with us as effortless as possible."
              heading="1. Simplifying the Process"
            />
            <Separator />
            <InfoCards
              content="We handle the logistics: international and local travel, accommodations, payroll, and employee management. This frees you to focus on the bigger picture while we handle the details."
              heading="2. Comprehensive Workforce Management"
            />
            <Separator />
            <InfoCards
              content="We select skilled foremen and equip our teams with the right tools to integrate smoothly with your project. They work under your supervision to meet your objectives."
              heading="3. Seamless Team Integration"
            />
            <Separator />
            <InfoCards
              content="Throughout your projects, we maintain open communication, adapting our services as needed for success. SilverBack is your reliable partner in achieving your project goals. We're here to make it happen."
              heading="4. Commitment to Client Convenience"
            />
            <Separator />
            <InfoCards
              content="At SilverBack, we're more than service providers; we're your committed partners in project success. We prioritize seamless workforce integration and exceptional results, making your success our primary focus."
              heading="5. Client-Centric Partnership"
            />
            <Separator />
            <InfoCards
              content="SilverBack specializes in creating workforce solutions customized to your specific project needs. Whether it's a small-scale operation or a large construction project, we adapt to your requirements."
              heading="6. Tailored Workforce Solutions"
            />

            <Separator />
            <InfoCards
              content="Safety is paramount at SilverBack. We ensure all our workers adhere to the highest safety standards. Our commitment to safety goes hand-in-hand with delivering quality and successful projects."
              heading="7. Safety First Approach"
            />
          </div>
        </div>
        <FlowAndNav />
      </div>
    </div>
  );
}
