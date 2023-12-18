"use client";

import { Card, cn } from "@silverweb/ui";
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
          "h-full space-y-2 px-8 py-10 transition-all duration-500 sm:px-5",
          storyCardsAreVisible ? "opacity-100" : "opacity-0",
        )}
      >
        <div
          className={cn(
            "flex",
            justifyClasses[justify].icon,
            "max-sm:justify-start",
          )}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            <Icon.type {...Icon.props} className="h-6 w-6" />
          </div>
        </div>
        <div
          className={cn(
            "text-2xl font-bold",
            justifyClasses[justify].text,
            "max-sm:text-start",
          )}
        >
          {heading}
        </div>
        <div
          className={cn(
            "text-base text-muted-foreground sm:text-lg",
            justifyClasses[justify].text,
            "max-sm:text-start",
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
        className,
      )}
      ref={photos}
    >
      <Card
        className={cn(
          "relative h-[230px] w-[350px] overflow-hidden p-2 transition-all duration-500",
          photosAreVisible
            ? "translate-x-0 opacity-100"
            : transitionClasses[justify].unvisible,
        )}
      >
        <Card className="relative h-full overflow-hidden">
          <Image
            alt="Our Story 1"
            className="z-10 object-cover transition-all"
            fill
            sizes="100%"
            src={image}
          />
        </Card>
      </Card>
    </div>
  );
}
