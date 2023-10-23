"use client";

import { CustomTable } from "@/components/silverweb/app/Table";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { categories, columnsProject, countries, dataProject } from "./projecttable";
import { ReactNode } from "react";
import { useSearchParams } from 'next/navigation'

export function Cards({ img, href }: { img: StaticImageData; href: string }) {
  const [CardRef, CardIsVisible] = useInView({
    threshold: 0.5,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });
  return (
    <Link
      href={href + " "}
      target="_blank"
      draggable={false}
      ref={CardRef}
      className={cn(
        "transition-all duration-500",
        CardIsVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <Card
        className={
          "opacity-50 hover:opacity-100 transition-all duration-500 select-none"
        }
      >
        <CardContent className="p-5">
          <Image
            draggable={false}
            src={img}
            className="w-[200px] h-auto"
            alt={img.src}
            width={200}
            height={67.19}
          />
        </CardContent>
      </Card>
    </Link>
  );
}

export function ProjectTable(){
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  return (
    <CustomTable
    {...{
      initFilters: category ? [
        { id: "category", value: [category] },
      ] : undefined,
      data: dataProject,
      columns: columnsProject,
      TableContainer: <TableContainer />,
      toolbar: {
        resetFilter: true,
        filter: [
          {
            label: "Category",
            name: "category",
            options: categories,
            searchPlaceholder: "Search category",
          },
          {
            label: "Country",
            name: "location.country",
            options: countries,
            searchPlaceholder: "Search country",
          },
        ],
      },
      TableBody: <TableBody />,
      TableItem: <TableItem />,
      TableNoResult: <div>Nothing found</div>,
    }}
  />
  )
}

function TableContainer({ children }: { children?: ReactNode | ReactNode[] }) {
  return <div>{children}</div>;
}

function TableBody({ children }: { children?: ReactNode | ReactNode[] }) {
  return <div className="flex flex-wrap gap-6 justify-evenly">{children}</div>;
}

function TableItem({ children }: { children?: ReactNode | ReactNode[] }) {
  return <Card className="w-[310px] p-4">{children}</Card>;
}