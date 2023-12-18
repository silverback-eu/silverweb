"use client";

import { useSearchParams } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import { Card, CardContent, CustomTable, cn } from "@silverweb/ui";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  categories,
  columnsProject,
  countries,
  dataProject,
} from "./project-table";

export function TableContainer({
  children,
}: {
  children?: ReactNode | ReactNode[];
}): JSX.Element {
  return <div>{children}</div>;
}

export function TableBody({
  children,
}: {
  children?: ReactNode | ReactNode[];
}): JSX.Element {
  return <div className="flex flex-wrap justify-evenly gap-6">{children}</div>;
}

export function TableItem({
  children,
}: {
  children?: ReactNode | ReactNode[];
}): JSX.Element {
  return <Card className="w-[310px] p-4">{children}</Card>;
}
export function ProjectTable(): JSX.Element {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <CustomTable
      {...{
        initFilters: category
          ? [{ id: "category", value: [category] }]
          : undefined,
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
  );
}

export function PartnerCard({
  img,
  href,
  className,
  style,
}: {
  img: StaticImageData;
  href: string;
  className?: string;
  style?: CSSProperties;
}): JSX.Element {
  const [CardRef, CardIsVisible] = useInView({
    threshold: 0.5,
    trackVisibility: true,
    delay: 100,
  });

  return (
    <Link
      className={cn(
        "transition-all duration-500",
        CardIsVisible ? "opacity-100" : "opacity-0",
      )}
      draggable={false}
      href={`${href} `}
      ref={CardRef}
      target="_blank"
    >
      <Card
        className={cn(
          "select-none opacity-50 transition-all duration-500 hover:opacity-100",
          className,
        )}
        style={style}
      >
        <CardContent className="p-5">
          <Image
            alt={img.src}
            className="h-auto w-[200px]"
            draggable={false}
            height={67.19}
            src={img}
            width={200}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
