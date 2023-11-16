"use client";

import { Button } from "@silverweb/ui/shared";
import type { ColumnDef } from "@silverweb/ui/apps";
import {
  PlugZap,
  ServerCog,
  ShoppingBasket,
  Sofa,
  TrainTrack,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import copenhagen_1_min from "public/projects/copenhagen-1-min.jpg";
import copenhagen_2_min from "public/projects/copenhagen-2-min.jpg";
import datacentre_1 from "public/projects/datacentre-1.jpg";
import datacentre_10 from "public/projects/datacentre-10.jpg";
import datacentre_11 from "public/projects/datacentre-11.jpg";
import datacentre_12 from "public/projects/datacentre-12.jpg";
import datacentre_13 from "public/projects/datacentre-13.jpg";
import datacentre_14 from "public/projects/datacentre-14.jpg";
import datacentre_2 from "public/projects/datacentre-2.jpg";
import datacentre_3 from "public/projects/datacentre-3.jpg";
import datacentre_4 from "public/projects/datacentre-4.jpg";
import datacentre_5 from "public/projects/datacentre-5.jpg";
import datacentre_6 from "public/projects/datacentre-6.jpg";
import datacentre_7 from "public/projects/datacentre-7.jpg";
import datacentre_8 from "public/projects/datacentre-8.jpg";
import datacentre_9 from "public/projects/datacentre-9.jpg";
import e10_1 from "public/projects/e10-1.jpg";
import energie_1 from "public/projects/energie-1.jpg";
import eurospar_1_min from "public/projects/eurospar-1-min.jpg";
import gothenburg_1_min from "public/projects/gothenburg-1-min.jpg";
import ikea_1_min from "public/projects/ikea-1-min.jpg";
import infrastructure_1 from "public/projects/infrastructure-1.jpg";
import infrastructure_2 from "public/projects/infrastructure-2.jpg";
import infrastructure_3 from "public/projects/infrastructure-3.jpg";
import infrastructure_4 from "public/projects/infrastructure-4.jpg";
import infrastructure_5 from "public/projects/infrastructure-5.jpg";
import infrastructure_6 from "public/projects/infrastructure-6.jpg";
import infrastructure_7 from "public/projects/infrastructure-7.jpg";
import infrastructure_8 from "public/projects/infrastructure-8.jpg";
import kalix_1_min from "public/projects/kalix-1-min.jpg";
import lidl_1_min from "public/projects/lidl-1-min.jpg";
import lillestrom_1_min from "public/projects/lillestrom-1-min.jpg";
import lyngby_1_min from "public/projects/lyngby-1-min.jpg";
import mall_of_scandinavia_1_min from "public/projects/mall-of-scandinavia-1-min.jpg";
import national_museum_1_min from "public/projects/national-museum-1-min.jpg";
import oslo_2_min from "public/projects/oslo-2-min.jpg";
import pharmacy_1_min from "public/projects/pharmacy-1-min.jpg";
import pool_indoor_1_min from "public/projects/pool-indoor-1-min.jpg";
import royal_arena_1_min from "public/projects/royal-arena-1-min.jpg";
import royal_college_of_music_1_min from "public/projects/royal-college-of-music-1-min.jpg";
import shooping_centre_1_min from "public/projects/shooping-centre-1-min.jpg";
import trondheim_1_min from "public/projects/trondheim-1-min.jpg";
import uppsala_1_min from "public/projects/uppsala-1-min.jpg";
import via_campus_c_min from "public/projects/via-campus-c-min.jpg";

export interface Project {
  id: string;
  name: string;
  category: string;
  location: {
    city: string;
    country: string;
  };
  description: string;
  cover: {
    url: StaticImageData;
    alt: string;
  };
}

export const categories = [
  {
    label: "Commercial",
    value: "commercial",
    icon: ShoppingBasket,
  },
  {
    label: "Data Centres",
    value: "data centres",
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

function CategoryButton({ category }: { category: string }): JSX.Element {
  const router = useRouter();

  return (
    <Button
      className="p-0 h-auto text-ellipsis"
      onClick={() => {
        router.push(`/partnerships?category=${category.toLowerCase()}`, {
          scroll: false,
        });
      }}
      variant="link"
    >
      {category}
    </Button>
  );
}

export const columnsProject: ColumnDef<Project>[] = [
  {
    accessorKey: "cover",
    cell: ({ row }) => (
      <div className="relative w-[278px] h-[268px] rounded-lg overflow-hidden">
        <Image
          about="All Photos are from unsplash https://unsplash.com"
          alt={
            (row.getValue("cover") as { url: StaticImageData; alt: string }).alt
          }
          className="duration-500 object-cover transition-all hover:scale-105 z-10"
          fill
          loading="lazy"
          resource="unsplash"
          sizes="100%"
          src={
            (row.getValue("cover") as { url: StaticImageData; alt: string }).url
          }
        />
        <div className="animate-pulse absolute top-0 right-0 bottom-0 left-0 bg-primary/10" />
      </div>
    ),
  },
  {
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="text-lg font-bold mt-3 line-clamp-1">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "category",
    cell: ({ row }) => (
      <div>
        <CategoryButton category={row.getValue("category") as string} />
      </div>
    ),
    filterFn: (row, id, value) =>
      (value as string[]).includes((row.getValue(id) as string).toLowerCase()),
  },

  {
    accessorKey: "location",
    cell: ({ row }) => (
      <div className="text-sm font-bold opacity-70 line-clamp-1">
        {(row.getValue("location") as { city: string; country: string }).city},{" "}
        {
          (row.getValue("location") as { city: string; country: string })
            .country
        }
      </div>
    ),
    filterFn: (row, id, value) =>
      (value as string[]).includes(
        (
          row.getValue(id) as { city: string; country: string }
        ).country.toLowerCase()
      ),
  },
  {
    accessorKey: "description",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground line-clamp-3">
        {row.getValue("description")}
      </div>
    ),
  },
];

export const dataProject: Project[] = [
  {
    id: "1",
    name: "Chalmers University Gothenburg",
    description:
      "SilverBack provided a team of electricians for work on a university project.",
    category: "Commercial",
    cover: {
      alt: "Chalmers University Gothenburg",
      url: gothenburg_1_min,
    },
    location: {
      city: "Gothenburg",
      country: "Sweden",
    },
  },
  {
    id: "2",
    name: "Nasjonalmuseet Oslo",
    description:
      "SilverBack provided a team of ventilation system installers for high-profile museum project in central Oslo.",
    category: "Commercial",
    cover: {
      alt: "Nasjonalmuseet Oslo",
      url: national_museum_1_min,
    },
    location: {
      city: "Oslo",
      country: "Norway",
    },
  },
  {
    id: "3",
    name: "SiS Ungdomshem Johannisberg",
    description:
      "Construction workers provided by SilverBack for work on internal and external walls of a youth facility project.",
    category: "Commercial",
    cover: {
      alt: "SiS Ungdomshem Johannisberg",
      url: kalix_1_min,
    },
    location: {
      city: "Kalix",
      country: "Sweden",
    },
  },
  {
    id: "4",
    name: "Ny Eurosparbutikk",
    description:
      "SilverBack provided a team of concrete workers for a new-build shop unit.",
    category: "Commercial",
    cover: {
      alt: "Ny Eurosparbutikk",
      url: eurospar_1_min,
    },
    location: {
      city: "Tromsø",
      country: "Norway",
    },
  },
  {
    id: "5",
    name: "Vitaminveien 11",
    description:
      "Our team of plumbers installed sprinkler system on new cinema/office/apartment complex.",
    category: "Commercial",
    cover: {
      alt: "Vitaminveien 11",
      url: oslo_2_min,
    },
    location: {
      city: "Oslo",
      country: "Norway",
    },
  },
  {
    id: "6",
    name: "Hubben",
    description:
      "Provided team of electricians for development of research and laboratory facility.",
    category: "Commercial",
    cover: {
      alt: "Hubben",
      url: uppsala_1_min,
    },
    location: {
      city: "Uppsala",
      country: "Sweden",
    },
  },
  {
    id: "7",
    name: "Tromsøbadet",
    description:
      "Teams of reinforcement workers and plumbers on filtration systems for new high-profile pool/leisure facility.",
    category: "Commercial",
    cover: {
      alt: "Tromsøbadet",
      url: pool_indoor_1_min,
    },
    location: {
      city: "Tromsø",
      country: "Norway",
    },
  },
  {
    id: "8",
    name: "OPP Kalvebod Brygge",
    description: "Provided a team on concrete element assembly workers.",
    category: "Commercial",
    cover: {
      alt: "OPP Kalvebod Brygge",
      url: copenhagen_1_min,
    },
    location: {
      city: "Copenhagen",
      country: "Denmark",
    },
  },
  {
    id: "9",
    name: "Nyhavna Dora",
    description:
      "Our small team of plumbers installed sprinkler system for new office building in converted U-boat base.",
    category: "Commercial",
    cover: {
      alt: "Nyhavna Dora",
      url: trondheim_1_min,
    },
    location: {
      city: "Trondheim",
      country: "Norway",
    },
  },
  {
    id: "10",
    name: "Lidl",
    description:
      "Provided team of electricians for installation on new retail development.",
    category: "Commercial",
    cover: {
      alt: "Lidl",
      url: lidl_1_min,
    },
    location: {
      city: "Södertalje",
      country: "Sweden",
    },
  },
  {
    id: "11",
    name: "Royal Arena",
    description:
      "Provided team of electricians for installation on major sports arena development.",
    category: "Commercial",
    cover: {
      alt: "Royal Arena",
      url: royal_arena_1_min,
    },
    location: {
      city: "Ørestad",
      country: "Denmark",
    },
  },
  {
    id: "12",
    name: "Hansakompaniet",
    description:
      "Provided team of electricians for installation on redevelopment of department store.",
    category: "Commercial",
    cover: {
      alt: "Hansakompaniet",
      url: shooping_centre_1_min,
    },
    location: {
      city: "Malmö",
      country: "Sweden",
    },
  },
  {
    id: "13",
    name: "Novo Nordisk",
    description:
      "Supplied team to complete all in-situ concrete works on pharmaceutical facility with demanding time schedule.",
    category: "Commercial",
    cover: {
      alt: "Novo Nordisk",
      url: pharmacy_1_min,
    },
    location: {
      city: "Kalundborg",
      country: "Denmark",
    },
  },
  {
    id: "14",
    name: "Musikhögskolan",
    description:
      "Supplied team of electricians over six months for installation work on new music academy.",
    category: "Commercial",
    cover: {
      alt: "Musikhögskolan",
      url: royal_college_of_music_1_min,
    },
    location: {
      city: "Stockholm",
      country: "Sweden",
    },
  },
  {
    id: "15",
    name: "Mall of Scandinavia",
    description:
      "Supplied teams of electricians and plumbers over six months - right up to opening - on biggest retail mall in Scandinavia.",
    category: "Commercial",
    cover: {
      alt: "Mall of Scandinavia",
      url: mall_of_scandinavia_1_min,
    },
    location: {
      city: "Stockholm",
      country: "Sweden",
    },
  },
  {
    id: "16",
    name: "KUA 3",
    description:
      "Supplied team of electricians for installation on new university building.",
    category: "Commercial",
    cover: {
      alt: "KUA 3",
      url: copenhagen_2_min,
    },
    location: {
      city: "Copenhagen",
      country: "Denmark",
    },
  },
  {
    id: "17",
    name: "Via Campus C",
    description:
      "Supplied team of electricians for installation on new university facility: our first Danish project.",
    category: "Commercial",
    cover: {
      alt: "Via Campus C",
      url: via_campus_c_min,
    },
    location: {
      city: "Århus",
      country: "Denmark",
    },
  },
  {
    id: "18",
    name: "DTU 220",
    description:
      "Provided team of electricians for development of biosustainability research facility.",
    category: "Commercial",
    cover: {
      alt: "DTU 220",
      url: lyngby_1_min,
    },
    location: {
      city: "Lyngby",
      country: "Denmark",
    },
  },
  {
    id: "19",
    name: "Felleskjøpet Hovedkontor",
    description:
      "Our team of plumbers installed sprinkler system for corporate HQ.",
    category: "Commercial",
    cover: {
      alt: "Felleskjøpet Hovedkontor",
      url: lillestrom_1_min,
    },
    location: {
      city: "Lillestrøm",
      country: "Norway",
    },
  },
  {
    id: "20",
    name: "IKEA",
    description:
      "Partnered with long-term client to complete concrete works for commercial development.",
    category: "Commercial",
    cover: {
      alt: "IKEA",
      url: ikea_1_min,
    },
    location: {
      city: "Hamar",
      country: "Norway",
    },
  },
  {
    id: "21",
    name: "Project Fire",
    description:
      "We enlisted several tradespeople for various construction tasks during the development of the new data center.",
    category: "Data Centres",
    cover: {
      alt: "Project Fire",
      url: datacentre_1,
    },
    location: {
      city: "Odense",
      country: "Denmark",
    },
  },
  {
    id: "22",
    name: "Project Wildcat",
    description:
      "Provided multiple tradespeople on many different aspects of technical installation in new data centre development",
    category: "Data Centres",
    cover: {
      alt: "Project Wildcat",
      url: datacentre_2,
    },
    location: {
      city: "Viborg",
      country: "Denmark",
    },
  },
  {
    id: "23",
    name: "Interxion",
    description:
      "Provided electricians for installation work on large production line installation in boxboard mill plant. Our team of electricians completed electrical installation for new data hall in co-location facility.",
    category: "Data Centres",
    cover: {
      alt: "Interxion",
      url: datacentre_3,
    },
    location: {
      city: "Stockholm",
      country: "Sweden",
    },
  },
  {
    id: "24",
    name: "Digital Realty datacentre",
    description:
      "Provided logistics and construction work on new data centre construction.",
    category: "Data Centres",
    cover: {
      alt: "Digital Realty datacentre",
      url: datacentre_4,
    },
    location: {
      city: "Hoofdorp",
      country: "Netherlands",
    },
  },
  {
    id: "25",
    name: "ICT Ericsson",
    description:
      "Provided teams of electricians for new data centre construction.",
    category: "Data Centres",
    cover: {
      alt: "ICT Ericsson",
      url: datacentre_5,
    },
    location: {
      city: "Rosersberg",
      country: "Sweden",
    },
  },
  {
    id: "26",
    name: "Facebook LLA2",
    description:
      "In the process of building the new data center, we engaged multiple tradespeople specializing in different construction aspects.",
    category: "Data Centres",
    cover: {
      alt: "Facebook LLA2",
      url: datacentre_6,
    },
    location: {
      city: "Luleå",
      country: "Sweden",
    },
  },
  {
    id: "27",
    name: "GVX02",
    description:
      "For the new data center development, we sought the expertise of numerous tradespeople, each focusing on distinct construction elements.",
    category: "Data Centres",
    cover: {
      alt: "GVX02",
      url: datacentre_7,
    },
    location: {
      city: "Gävle",
      country: "Sweden",
    },
  },
  {
    id: "23",
    name: "GVX01",
    description:
      "During the construction of the new data center, we collaborated with a variety of tradespeople, each skilled in different aspects of the project.",
    category: "Data Centres",
    cover: {
      alt: "GVX01",
      url: datacentre_8,
    },
    location: {
      city: "Gävle",
      country: "Sweden",
    },
  },
  {
    id: "24",
    name: "GVX11",
    description:
      "In the new data center development project, we involved a multitude of tradespeople, each handling different construction tasks.",
    category: "Data Centres",
    cover: {
      alt: "GVX11",
      url: datacentre_9,
    },
    location: {
      city: "Tuna",
      country: "Sweden",
    },
  },
  {
    id: "25",
    name: "GVX21",
    description:
      "We worked with a diverse group of tradespeople, each contributing their expertise to various aspects of the new data center construction.",
    category: "Data Centres",
    cover: {
      alt: "GVX21",
      url: datacentre_10,
    },
    location: {
      city: "Stackbo",
      country: "Sweden",
    },
  },
  {
    id: "26",
    name: "KAT01",
    description:
      "The development of the new data center required the coordination of several tradespeople, each specializing in different construction facets.",
    category: "Data Centres",
    cover: {
      alt: "KAT01",
      url: datacentre_11,
    },
    location: {
      city: "Katrineholm",
      country: "Sweden",
    },
  },
  {
    id: "27",
    name: "EcoDataCenter",
    description:
      "New data center construction involved the coordination of numerous tradespeople, each responsible for distinct aspects of the project.",
    category: "Data Centres",
    cover: {
      alt: "EcoDataCenter",
      url: datacentre_12,
    },
    location: {
      city: "Falun",
      country: "Sweden",
    },
  },
  {
    id: "28",
    name: "MMA01",
    description:
      "We brought in a team of tradespeople with expertise in various construction areas to work on the new data center development.",
    category: "Data Centres",
    cover: {
      alt: "MMA01",
      url: datacentre_13,
    },
    location: {
      city: "Malmö",
      country: "Sweden",
    },
  },
  {
    id: "29",
    name: "DUB01",
    description:
      "Multiple tradespeople were utilized for the diverse construction needs of the new data center development.",
    category: "Data Centres",
    cover: {
      alt: "DUB01",
      url: datacentre_14,
    },
    location: {
      city: "Dublin",
      country: "Ireland",
    },
  },
  {
    id: "29",
    name: "E10 Ravinbroar",
    description:
      "SilverBack provided a team of concrete workers for new bridge construction.",
    category: "Infrastructure",
    cover: {
      alt: "E10 Ravinbroar",
      url: e10_1,
    },
    location: {
      city: "Kiruna",
      country: "Sweden",
    },
  },
  {
    id: "30",
    name: "Lillepite",
    description:
      "SilverBack provided a team of concrete workers for new bridge construction.",
    category: "Infrastructure",
    cover: {
      alt: "Lillepite",
      url: infrastructure_1,
    },
    location: {
      city: "Piteå",
      country: "Sweden",
    },
  },
  {
    id: "31",
    name: "Högdalsdepån",
    description: "Electrical installation work on a train depot project.",
    category: "Infrastructure",
    cover: {
      alt: "Högdalsdepån",
      url: infrastructure_2,
    },
    location: {
      city: "Stockholm",
      country: "Sweden",
    },
  },
  {
    id: "32",
    name: "E6 Dovrebanen",
    description:
      "Key supplier of concrete/reinforcement workers on several sections of E6 motorway.",
    category: "Infrastructure",
    cover: {
      alt: "E6 Dovrebanen",
      url: infrastructure_3,
    },
    location: {
      city: "Btw. Minnesund and Labbdalen",
      country: "Norway",
    },
  },
  {
    id: "33",
    name: "Bybanen",
    description:
      "Provided experienced craftsmen for complete installation of overhead catenary systems on light-rail project.",
    category: "Infrastructure",
    cover: {
      alt: "Bybanen",
      url: infrastructure_4,
    },
    location: {
      city: "Bergen",
      country: "Norway",
    },
  },
  {
    id: "34",
    name: "Söderledstunneln",
    description: "Electrical refurbishment work on a busy tunnel in Stockholm.",
    category: "Infrastructure",
    cover: {
      alt: "Söderledstunneln",
      url: infrastructure_5,
    },
    location: {
      city: "Stockholm",
      country: "Sweden",
    },
  },
  {
    id: "35",
    name: "E6 Alta Vest",
    description:
      "Supplied small team for tunnel portal construction on E6 motorway.",
    category: "Infrastructure",
    cover: {
      alt: "E6 Alta Vest",
      url: infrastructure_6,
    },
    location: {
      city: "Alta",
      country: "Norway",
    },
  },
  {
    id: "36",
    name: "Bykle Dam",
    description:
      "Supplied concrete / reinforcement workers over six months for largest dam construction in Norway in modern times.",
    category: "Infrastructure",
    cover: {
      alt: "Bykle Dam",
      url: infrastructure_7,
    },
    location: {
      city: "Bykle",
      country: "Norway",
    },
  },
  {
    id: "37",
    name: "E18 Nye Holmene Tassebekk",
    description:
      "Laying of EPS substructure for new motorway construction in Vestfold, Norway.",
    category: "Infrastructure",
    cover: {
      alt: "E18 Nye Holmene Tassebekk",
      url: infrastructure_8,
    },
    location: {
      city: "Vestfold",
      country: "Norway",
    },
  },
  {
    id: "52",
    name: "Lehtirova Windfarm",
    description: "Cable work on new windfarm project in Northern Sweden.",
    category: "Energie",
    cover: {
      alt: "Lehtirova Windfarm",
      url: energie_1,
    },
    location: {
      city: "Gällivare",
      country: "Sweden",
    },
  },
];
