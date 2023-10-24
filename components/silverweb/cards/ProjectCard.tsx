import Image, { StaticImageData } from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectCard({
  img,
  title,
  category,
  location,
  description,
} : {
  img: StaticImageData;
  title: string;
  category: string;
  location: {
    city: string;
    country: string;
  };
  description: string;
}) {
  return (
    <div>
      <Card className="w-[300px] text-left">
        <CardContent className="p-4">
          <div className="relative bg-gray-500 w-[268px] h-[268px] rounded-lg overflow-hidden">
            <Image
              className="duration-500 object-cover transition-all hover:scale-105 z-10"
              src={img}
              fill
              sizes="100%"
              alt="Mall of Scandinavia"
            />
          </div>
          <div className="text-lg font-bold mt-3 line-clamp-1">
            {title}
          </div>
          <Button variant="link" className="p-0 h-auto text-ellipsis">
            {category}
          </Button>
          <div className="text-sm font-bold opacity-70 line-clamp-1">
            {location.city}
            ,
            {location.country}
          </div>
          <div className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
