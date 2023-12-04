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
  img: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
  };
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
    <a
      className={cn(
        "transition-all duration-500",
        CardIsVisible ? "opacity-100" : "opacity-0"
      )}
      draggable={false}
      href={`${href} `}
      ref={CardRef}
      rel="noopener"
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
          <img
            alt={img.src}
            className="w-[200px] h-auto"
            draggable={false}
            height={67.19}
            src={img.src}
            width={200}
          />
        </CardContent>
      </Card>
    </a>
  );
}
