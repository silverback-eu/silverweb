"use client"

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export function Cards({ imgName, href } : { imgName: string, href: string }) {

    const [ CardRef, CardIsVisible ] = useInView({
      threshold: 0.5,
      trackVisibility: true,
      delay: 100
    });
    return (
      <Link href={href + " "} target="_blank" draggable={false} ref={CardRef} className={cn("transition-all duration-500", CardIsVisible ? "opacity-100" : "opacity-0")}>
      <Card className={"opacity-50 hover:opacity-100 transition-all duration-500 select-none"}>
        <CardContent className="p-5">
          <Image
            draggable={false}
            src={`/brands/${imgName}.png`}
            alt={imgName}
            width={200}
            height={67.21}
          />
        </CardContent>
      </Card>
      </Link>
    );
  }