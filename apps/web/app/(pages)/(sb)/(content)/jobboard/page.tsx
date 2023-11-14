import { EmailInput } from "@silverweb/ui/components/inputs/default";
import { Button, Card } from "@silverweb/ui/components/shared";
import { Mail } from "lucide-react";
import type { Metadata } from "next";
import { JobTable } from "./comp";
import type { Job } from "./jobtable";

export const dataJob: Job[] = [
  {
    id: "bszbji",
    name: "general-operative",
    category: "white-collar",
    country: "denmark",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "mfbmva",
    name: "cleaner",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "dc3psc",
    name: "teleporter-operator",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "rbtrz",
    name: "qa-qc-cx-manager",
    category: "white-collar",
    country: "poland",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "qcyhxl",
    name: "architect",
    category: "blue-collar",
    country: "poland",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "lhy26g",
    name: "teleporter-operator",
    category: "white-collar",
    country: "sweden",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "t7zji",
    name: "hvac-installer",
    category: "blue-collar",
    country: "poland",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "erlfsd",
    name: "concrete-worker",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "y7ausm",
    name: "dryliner",
    category: "white-collar",
    country: "poland",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "65gmp",
    name: "carpenter",
    category: "blue-collar",
    country: "poland",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "hh4f3",
    name: "architect",
    category: "blue-collar",
    country: "sweden",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "elvk7c",
    name: "csa-site-manager",
    category: "white-collar",
    country: "poland",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "1evcx",
    name: "crane-operator",
    category: "blue-collar",
    country: "poland",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "lmabr",
    name: "general-operative",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "tqo1ars",
    name: "concrete-worker",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "vk3n7",
    name: "concrete-worker",
    category: "white-collar",
    country: "sweden",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "zxcjyh",
    name: "hvac-installer",
    category: "blue-collar",
    country: "poland",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "xn8bl1",
    name: "dryliner",
    category: "white-collar",
    country: "sweden",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "dciriu",
    name: "site-administrator",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "mpj14a",
    name: "construction-manager",
    category: "blue-collar",
    country: "poland",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "v576vu",
    name: "white-wall-installer",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "tj9rxj",
    name: "white-wall-installer",
    category: "white-collar",
    country: "sweden",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "in7dda",
    name: "electrician",
    category: "white-collar",
    country: "denmark",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "jx8sgr",
    name: "white-wall-installer",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "dh8vdt",
    name: "hvac-installer",
    category: "white-collar",
    country: "denmark",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "6vhv4i",
    name: "construction-manager",
    category: "white-collar",
    country: "denmark",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "5nw4tt",
    name: "site-administrator",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "8zkb18",
    name: "csa-site-manager",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "b513i7",
    name: "duct-installer",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "iuqavo",
    name: "hvac-installer",
    category: "white-collar",
    country: "poland",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "7lsvkx",
    name: "fitter",
    category: "white-collar",
    country: "sweden",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "djvei",
    name: "dryliner",
    category: "blue-collar",
    country: "poland",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "zdk6y",
    name: "general-operative",
    category: "blue-collar",
    country: "poland",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "vc0p7s",
    name: "general-operative",
    category: "blue-collar",
    country: "poland",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "kywifm",
    name: "teleporter-operator",
    category: "blue-collar",
    country: "sweden",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "y5ygr",
    name: "construction-manager",
    category: "white-collar",
    country: "poland",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "b4974n",
    name: "cable-jointer",
    category: "blue-collar",
    country: "poland",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "ddau99",
    name: "dryliner",
    category: "white-collar",
    country: "denmark",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "dwifpr",
    name: "site-administrator",
    category: "white-collar",
    country: "denmark",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "gv266jh",
    name: "duct-installer",
    category: "white-collar",
    country: "denmark",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "weyp6m",
    name: "carpenter",
    category: "white-collar",
    country: "denmark",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "zusy6",
    name: "csa-site-manager",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "n73vnt",
    name: "general-operative",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "wia8p",
    name: "construction-manager",
    category: "blue-collar",
    country: "sweden",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "g7mf4",
    name: "dryliner",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "1eb6o",
    name: "site-administrator",
    category: "blue-collar",
    country: "sweden",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "tyy2a9",
    name: "electrician",
    category: "blue-collar",
    country: "sweden",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "xbh5xr",
    name: "site-administrator",
    category: "white-collar",
    country: "poland",
    company: "silverback-staffing",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "2bp8i",
    name: "crane-operator",
    category: "blue-collar",
    country: "denmark",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
  {
    id: "f4wvb9",
    name: "concrete-worker",
    category: "white-collar",
    country: "sweden",
    company: "silverback-polska",
    link: "https://silverback.bamboohr.com/careers",
  },
];

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
            <JobTable data={dataJob} />
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
