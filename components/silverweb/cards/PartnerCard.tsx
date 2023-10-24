"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function PartnerCard({ img, href, className }: { img: StaticImageData; href: string, className?: string }) {
  const [CardRef, CardIsVisible] = useInView({
    threshold: 0.5,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <Link
      href={`${href} `}
      target="_blank"
      draggable={false}
      ref={CardRef}
      className={cn(
        "transition-all duration-500",
        CardIsVisible ? "opacity-100" : "opacity-0",
      )}
    >
      <Card
        className={
            cn("opacity-50 hover:opacity-100 transition-all duration-500 select-none", className)
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
