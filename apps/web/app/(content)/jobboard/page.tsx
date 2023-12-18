import { VanillaEmailInput, Button, Card } from "@silverweb/ui";
import { Mail } from "lucide-react";
import type { Metadata } from "next";
import { JobTable } from "./components";
import type { Job } from "./job-table";

const dataJob: Job[] = [
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
        <div className="mb-20 mt-20 grid justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl ">
            Job board
          </h1>
          <h2 className="mx-auto mt-5 max-w-xl px-12 text-lg tracking-tighter text-warm sm:px-4 sm:text-xl sm:font-medium">
            Do you want to be part of our team? We are looking for you!
            Let&apos;s change the world...
          </h2>
        </div>
      </section>
      <section aria-label="job-board" className="mt-32" id="job-board">
        <div className="mx-3 space-y-9">
          <div className="w-full text-center text-3xl font-bold tracking-tighter sm:text-left sm:text-5xl">
            Start your journey today
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr_35%]">
            <JobTable data={dataJob} />
            <div className="relative mt-12">
              <Card className="sticky top-32 p-5">
                <div className="flex h-full flex-col gap-6 transition-all duration-500">
                  <div className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xl font-bold">
                      Subscribe for updates
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Turn on job alert so you find out about new jobs first!
                    </div>
                    <div className="space-y-3">
                      <VanillaEmailInput placeholder="Enter email" />
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
