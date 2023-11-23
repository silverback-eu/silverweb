import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import type { CSSProperties } from "react";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./card";

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
        CardIsVisible ? "opacity-100" : "opacity-0"
      )}
      draggable={false}
      href={`${href} `}
      ref={CardRef}
      target="_blank"
    >
      <Card
        className={cn(
          "opacity-50 hover:opacity-100 transition-all duration-500 select-none",
          className
        )}
        style={style}
      >
        <CardContent className="p-5">
          <Image
            alt={img.src}
            className="w-[200px] h-auto"
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
