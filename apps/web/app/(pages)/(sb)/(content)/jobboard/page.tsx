import { EmailInput } from "@silverweb/ui/components/inputs/default";
import { Button, Card } from "@silverweb/ui/components/shared";
import { Mail } from "lucide-react";
import type { Metadata } from "next";
import { JobTable } from "./comp";

export const metadata: Metadata = {
  title:
    "Job board - Do you want to be part of our team? We are looking for you! Let's change the world...",
};

export default function JobBoard(): JSX.Element {
  return (
    <div>
      <section aria-label="Heading" id="top">
        <div className="grid justify-center text-center mt-20 mb-20">
          <h1 className="font-bold tracking-tight text-4xl sm:text-6xl ">
            Job board
          </h1>
          <h2 className="max-w-xl sm:font-medium mx-auto px-12 sm:px-4 text-lg sm:text-xl tracking-tighter text-warm mt-5">
            Do you want to be part of our team? We are looking for you!
            Let&apos;s change the world...
          </h2>
        </div>
      </section>
      <section aria-label="job-board" className="mt-32" id="job-board">
        <div className="mx-3 space-y-9">
          <div className="font-bold text-3xl sm:text-5xl tracking-tighter w-full text-center sm:text-left">
            Start your journey today
          </div>
          <div className="grid md:grid-cols-[1fr_35%] gap-6">
            <JobTable />
            <div className="mt-12 relative">
              <Card className="p-5 sticky top-32">
                <div className="h-full transition-all duration-500 flex flex-col gap-6">
                  <div className="flex">
                    <div className="bg-muted h-10 w-10 rounded-lg flex justify-center items-center">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-bold text-xl">
                      Subscribe for updates
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Turn on job alert so you find out about new jobs first!
                    </div>
                    <div className="space-y-3">
                      <EmailInput placeholder="Enter email" />
                      <Button>Subscribe</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
