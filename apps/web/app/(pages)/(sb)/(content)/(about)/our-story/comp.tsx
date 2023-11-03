"use client";

import { Card } from "@silverweb/ui/components/shared";
import { cn } from "@silverweb/ui/lib/utils";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function StoryCard({
  justify,
  Icon,
  heading,
  content,
}: {
  justify: "left" | "right";
  Icon: JSX.Element;
  heading: string;
  content: string;
}): JSX.Element {
  const justifyClasses: {
    left: {
      text: "text-left";
      icon: "justify-start";
    };
    right: {
      text: "text-right";
      icon: "justify-end";
    };
  } = {
    left: {
      text: "text-left",
      icon: "justify-start",
    },
    right: {
      text: "text-right",
      icon: "justify-end",
    },
  };

  const [storyCards, storyCardsAreVisible] = useInView({
    threshold: 0.4,
  });

  return (
    <div ref={storyCards}>
      <div
        className={cn(
          "space-y-2 h-full transition-all duration-500 py-10 px-8 sm:px-5",
          storyCardsAreVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div
          className={cn(
            "flex",
            justifyClasses[justify].icon,
            "max-sm:justify-start"
          )}
        >
          <div className="bg-muted h-10 w-10 rounded-lg flex justify-center items-center">
            <Icon.type {...Icon.props} className="w-6 h-6" />
          </div>
        </div>
        <div
          className={cn(
            "font-bold text-2xl",
            justifyClasses[justify].text,
            "max-sm:text-start"
          )}
        >
          {heading}
        </div>
        <div
          className={cn(
            "text-muted-foreground text-base sm:text-lg",
            justifyClasses[justify].text,
            "max-sm:text-start"
          )}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export function Photos({
  justify,
  image,
  className,
}: {
  justify: "left" | "right";
  image: StaticImageData;
  className?: string;
}): JSX.Element {
  const [photos, photosAreVisible] = useInView({
    threshold: 0.4,
  });

  const transitionClasses: {
    right: {
      default: "justify-end";
      unvisible: "translate-x-[-30%] opacity-0";
    };
    left: {
      default: "justify-start";
      unvisible: "translate-x-[30%] opacity-0";
    };
  } = {
    right: {
      default: "justify-end",
      unvisible: "translate-x-[-30%] opacity-0",
    },
    left: {
      default: "justify-start",
      unvisible: "translate-x-[30%] opacity-0",
    },
  };
  return (
    <div
      className={cn(
        "flex items-center",
        transitionClasses[justify].default,
        "max-sm:justify-center",
        className
      )}
      ref={photos}
    >
      <Card
        className={cn(
          "relative overflow-hidden h-[230px] w-[350px] p-2 transition-all duration-500",
          photosAreVisible
            ? "opacity-100 translate-x-0"
            : transitionClasses[justify].unvisible
        )}
      >
        <Card className="relative overflow-hidden h-full">
          <Image
            alt="Our Story 1"
            className="object-cover transition-all z-10"
            fill
            sizes="100%"
            src={image}
          />
        </Card>
      </Card>
    </div>
  );
}
