"use client";

import { Button } from "@silverweb/ui/components/shared";
import type { ColumnDef } from "@tanstack/react-table";
import type { LucideIcon } from "lucide-react";
import {
  AirVent,
  Box,
  Boxes,
  Cpu,
  Droplets,
  Eraser,
  Footprints,
  Forklift,
  Hammer,
  HardHat,
  Joystick,
  KeySquare,
  ListTodo,
  Monitor,
  Pen,
  Settings,
  Sparkles,
  SunSnow,
  ToyBrick,
  Unplug,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export interface Job {
  id: string;
  name:
    | "architect"
    | "cable-jointer"
    | "carpenter"
    | "cleaner"
    | "commissioning-technician"
    | "construction-manager"
    | "concrete-worker"
    | "crane-operator"
    | "csa-site-manager"
    | "dryliner"
    | "duct-installer"
    | "fitter"
    | "electrician"
    | "general-operative"
    | "hvac-installer"
    | "mechanic"
    | "plumber"
    | "qa-qc-cx-manager"
    | "site-administrator"
    | "teleporter-operator"
    | "white-wall-installer";
  category: "blue-collar" | "white-collar";
  country: string;
  company: "silverback-polska" | "silverback-staffing";
  link: string;
}

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

export const categories: [
  {
    label: "Blue Collar";
    value: "blue-collar";
    icon: LucideIcon;
  },
  {
    label: "White Collar";
    value: "white-collar";
    icon: LucideIcon;
  },
] = [
  {
    label: "Blue Collar",
    value: "blue-collar",
    icon: HardHat,
  },
  {
    label: "White Collar",
    value: "white-collar",
    icon: ListTodo,
  },
];

export const countries: [
  {
    label: "Sweden";
    value: "sweden";
    icon: "🇸🇪";
  },
  {
    label: "Norway";
    value: "norway";
    icon: "🇳🇴";
  },
  {
    label: "Denmark";
    value: "denmark";
    icon: "🇩🇰";
  },
  {
    label: "Ireland";
    value: "ireland";
    icon: "🇮🇪";
  },
] = [
  {
    label: "Sweden",
    value: "sweden",
    icon: "🇸🇪",
  },
  {
    label: "Norway",
    value: "norway",
    icon: "🇳🇴",
  },
  {
    label: "Denmark",
    value: "denmark",
    icon: "🇩🇰",
  },
  {
    label: "Ireland",
    value: "ireland",
    icon: "🇮🇪",
  },
];

export const jobs: [
  {
    label: "Architect";
    value: "architect";
    icon: LucideIcon;
  },
  {
    label: "Cable Joiner";
    value: "cable-jointer";
    icon: LucideIcon;
  },
  {
    label: "Carpenter";
    value: "carpenter";
    icon: LucideIcon;
  },
  {
    label: "Cleaner";
    value: "cleaner";
    icon: LucideIcon;
  },
  {
    label: "Commissioning Technician";
    value: "commissioning-technician";
    icon: LucideIcon;
  },
  {
    label: "Construction Manager";
    value: "construction-manager";
    icon: LucideIcon;
  },
  {
    label: "Concrete Worker";
    value: "concrete-worker";
    icon: LucideIcon;
  },
  {
    label: "Crane Operator";
    value: "crane-operator";
    icon: LucideIcon;
  },
  {
    label: "CSA Site Manager";
    value: "csa-site-manager";
    icon: LucideIcon;
  },
  {
    label: "Dryliner";
    value: "dryliner";
    icon: LucideIcon;
  },
  {
    label: "Duct Installer";
    value: "duct-installer";
    icon: LucideIcon;
  },
  {
    label: "Fitter";
    value: "fitter";
    icon: LucideIcon;
  },
  {
    label: "Electrician";
    value: "electrician";
    icon: LucideIcon;
  },
  {
    label: "General Operative";
    value: "general-operative";
    icon: LucideIcon;
  },
  {
    label: "HVAC Installer";
    value: "hvac-installer";
    icon: LucideIcon;
  },
  {
    label: "Mechanic";
    value: "mechanic";
    icon: LucideIcon;
  },
  {
    label: "Plumber";
    value: "plumber";
    icon: LucideIcon;
  },
  {
    label: "QA/QC CX Manager";
    value: "qa-qc-cx-manager";
    icon: LucideIcon;
  },
  {
    label: "Site Administrator";
    value: "site-administrator";
    icon: LucideIcon;
  },
  {
    label: "Teleporter Operator";
    value: "teleporter-operator";
    icon: LucideIcon;
  },
  {
    label: "White Wall Installer";
    value: "white-wall-installer";
    icon: LucideIcon;
  },
] = [
  {
    label: "Architect",
    value: "architect",
    icon: Pen,
  },
  {
    label: "Cable Joiner",
    value: "cable-jointer",
    icon: Unplug,
  },
  {
    label: "Carpenter",
    value: "carpenter",
    icon: KeySquare,
  },
  {
    label: "Cleaner",
    value: "cleaner",
    icon: Eraser,
  },
  {
    label: "Commissioning Technician",
    value: "commissioning-technician",
    icon: Cpu,
  },
  {
    label: "Construction Manager",
    value: "construction-manager",
    icon: ListTodo,
  },
  {
    label: "Concrete Worker",
    value: "concrete-worker",
    icon: Footprints,
  },
  {
    label: "Crane Operator",
    value: "crane-operator",
    icon: Joystick,
  },
  {
    label: "CSA Site Manager",
    value: "csa-site-manager",
    icon: HardHat,
  },
  {
    label: "Dryliner",
    value: "dryliner",
    icon: Box,
  },
  {
    label: "Duct Installer",
    value: "duct-installer",
    icon: AirVent,
  },
  {
    label: "Fitter",
    value: "fitter",
    icon: Wrench,
  },
  {
    label: "Electrician",
    value: "electrician",
    icon: Sparkles,
  },
  {
    label: "General Operative",
    value: "general-operative",
    icon: Hammer,
  },
  {
    label: "HVAC Installer",
    value: "hvac-installer",
    icon: SunSnow,
  },
  {
    label: "Mechanic",
    value: "mechanic",
    icon: Settings,
  },
  {
    label: "Plumber",
    value: "plumber",
    icon: Droplets,
  },
  {
    label: "QA/QC CX Manager",
    value: "qa-qc-cx-manager",
    icon: Monitor,
  },
  {
    label: "Site Administrator",
    value: "site-administrator",
    icon: Boxes,
  },
  {
    label: "Teleporter Operator",
    value: "teleporter-operator",
    icon: Forklift,
  },
  {
    label: "White Wall Installer",
    value: "white-wall-installer",
    icon: ToyBrick,
  },
];

export const columnsJob: ColumnDef<Job>[] = [
  {
    accessorKey: "name",
    cell: ({ row }) => {
      const Icon = (
        jobs.findLast(
          (job) => job.value === (row.getValue("name") as Job["name"])
        ) as { label: string; value: string; icon: LucideIcon } | undefined
      )?.icon;
      return (
        <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
          {Icon ? <Icon className="h-6 w-6" /> : null}
        </div>
      );
    },
    filterFn: (row, id, value) =>
      (value as string[]).includes(
        (row.getValue(id) as string).toLowerCase().replace(/ /g, "-")
      ),
  },
  {
    accessorKey: "company",
    cell: ({ row }) => (
      <div className="grid content-center w-[calc(100%-40px)]">
        <p className="text-sm md:text-base font-semibold text-start truncate">
          {(row.getValue("name") as string)
            .replace(/-/g, " ")
            .charAt(0)
            .toUpperCase() +
            (row.getValue("name") as string).replace(/-/g, " ").slice(1)}
        </p>
        <div className="flex justify-between">
          <p className="text-xs md:text-sm text-warm text-start truncate">
            {(row.getValue("company") as string)
              .replace(/-/g, " ")
              .charAt(0)
              .toUpperCase() +
              (row.getValue("company") as string)
                .replace(/-/g, " ")
                .slice(1)}{" "}
            -{" "}
            {(row.getValue("country") as string)
              .replace(/-/g, " ")
              .charAt(0)
              .toUpperCase() +
              (row.getValue("country") as string)
                .replace(/-/g, " ")
                .slice(1)}{" "}
            -{" "}
            {(row.getValue("category") as string)
              .replace(/-/g, " ")
              .charAt(0)
              .toUpperCase() +
              (row.getValue("category") as string)
                .replace(/-/g, " ")
                .slice(1)}{" "}
          </p>
        </div>
      </div>
    ),
  },

  {
    accessorKey: "country",
    cell: () => <div className="hidden absolute" />,
    filterFn: (row, id, value) =>
      (value as string[]).includes(
        (row.getValue(id) as string).toLowerCase().replace(/ /g, "-")
      ),
  },
  {
    accessorKey: "category",
    cell: () => <div className="hidden absolute" />,
    filterFn: (row, id, value) =>
      (value as string[]).includes(
        (row.getValue(id) as string).toLowerCase().replace(/ /g, "-")
      ),
  },
  {
    accessorKey: "link",
    cell: ({ row }) => (
      <div className="flex-1">
        <Button
          asChild
          className="text-xs px-0 pr-2 md:px-4 md:text-sm"
          variant="link"
        >
          <Link href={row.getValue("link") as string}>Apply</Link>
        </Button>
      </div>
    ),
  },
];
