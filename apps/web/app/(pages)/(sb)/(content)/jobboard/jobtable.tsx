"use client";

import { Button } from "@silverweb/ui/shared";
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
        jobs.find(
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
