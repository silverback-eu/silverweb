"use client"

import { ColumnDef } from "@tanstack/react-table";
import { faker } from "@faker-js/faker";
import {
  PlugZap,
  ServerCog,
  ShoppingBasket,
  Sofa,
  TrainTrack,
} from "lucide-react";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  location: z.object({
    city: z.string(),
    country: z.string(),
  }),
  description: z.string(),
  cover: z.object({
    url: z.string().url(),
    alt: z.string(),
  }),
});

export type Project = z.infer<typeof projectSchema>;

export const categories = [
  {
    label: "Commercial",
    value: "commercial",
    icon: ShoppingBasket,
  },
  {
    label: "Data Centres",
    value: "dataCentres",
    icon: ServerCog,
  },
  {
    label: "Infrastructure",
    value: "infrastructure",
    icon: TrainTrack,
  },
  {
    label: "Living",
    value: "living",
    icon: Sofa,
  },
  {
    label: "Energie",
    value: "energie",
    icon: PlugZap,
  },
];

export const countries = [
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

export const columnsProject: ColumnDef<Project>[] = [
  {
    accessorKey: "cover",
    cell: ({ row }) => {
      return (
        <div className="bg-gray-500 w-[268px] h-[268px] rounded-lg overflow-hidden">
          <Image
            className="duration-500 object-cover transition-all hover:scale-105"
            src={(row.getValue("cover") as { url: string; alt: string }).url}
            width={268}
            height={268}
            alt={(row.getValue("cover") as { url: string; alt: string }).alt}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    cell: ({ row }) => {
      return (
        <div className="text-lg font-bold mt-3 line-clamp-1">
          {row.getValue("name")}
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    cell: ({ row }) => {
      return (
        <div>
          <Button variant={"link"} className="p-0 h-auto text-ellipsis">
            {row.getValue("category")}
          </Button>
        </div>
      );
    },
    filterFn: (row, id, value) => {
        return value.includes(
            (row.getValue(id) as string).toLowerCase()
        );
      },
  },

  {
    accessorKey: "location",
    cell: ({ row }) => {
      return (
        <div className="text-sm font-bold opacity-70 line-clamp-1">
          {(row.getValue("location") as { city: string; country: string }).city}
          ,{" "}
          {
            (row.getValue("location") as { city: string; country: string })
              .country
          }
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(
        (
          row.getValue(id) as { city: string; country: string }
        ).country.toLowerCase()
      );
    },
  },
  {
    accessorKey: "description",
    cell: ({ row }) => {
      return (
        <div className="text-sm text-muted-foreground line-clamp-3">
          {row.getValue("description")}
        </div>
      );
    },
  },
];

export const dataProject = faker.helpers.multiple(
  () => ({
    id: faker.string.uuid(),
    name: faker.lorem.words({ min: 3, max: 5 }),
    category: faker.helpers.arrayElement(categories).label,
    location: {
      city: faker.location.city(),
      country: faker.helpers.arrayElement(countries).label,
    },
    description: faker.lorem.paragraph(),
    cover: {
      url: faker.image.urlPicsumPhotos({ width: 270, height: 270 }),
      alt: faker.lorem.words(),
    },
  }),
  {
    count: {
      min: 15,
      max: 25,
    },
  }
);
