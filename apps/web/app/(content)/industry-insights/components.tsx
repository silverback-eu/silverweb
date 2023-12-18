"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Separator,
  navigationMenuTriggerStyle,
  cn,
} from "@silverweb/ui";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

export function NavBar({
  params,
}: {
  params?: { category: string | undefined | string[] };
}): JSX.Element {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap justify-start">
        <NavigationMenuItem>
          <Link
            href="/industry-insights?category=company-news"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} justify-start px-0.5 sm:justify-center sm:px-4`}
            >
              <div
                className={cn(
                  "transition-all",
                  params &&
                    params.category === "company-news" &&
                    "font-bold drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]",
                )}
              >
                Company news
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <Separator className="block h-5 sm:hidden" orientation="vertical" />
        <NavigationMenuItem>
          <Link
            href="/industry-insights?category=better-work"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} justify-start px-0.5 sm:justify-center sm:px-4`}
            >
              <div
                className={cn(
                  "transition-all",
                  params &&
                    params.category === "better-work" &&
                    "font-bold drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]",
                )}
              >
                Better work
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <Separator className="block h-5 sm:hidden" orientation="vertical" />
        <NavigationMenuItem>
          <Link
            href="/industry-insights?category=around-industry"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} justify-start px-0.5 sm:justify-center sm:px-4`}
            >
              <div
                className={cn(
                  "transition-all",
                  params &&
                    params.category === "around-industry" &&
                    "font-bold drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]",
                )}
              >
                Around Industry
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <Separator className="h-5" orientation="vertical" />
        <NavigationMenuItem>
          <Link href="/industry-insights" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} px-0.5 sm:px-4`}
            >
              <div className={cn("transition-all")}>All</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function Post({
  title,
  description,
  date,
  category,
  url,
}: {
  title: string;
  description: string;
  date: string;
  category: string;
  url: string;
}): JSX.Element {
  return (
    <div className="relative flex w-[370px] flex-col space-y-2">
      <div className="relative aspect-[1.91/1] overflow-hidden rounded-lg">
        <Image alt={title} className="object-cover" fill src={`${url}.jpg`} />
        <div className="absolute bottom-0 left-0 right-0 top-0 animate-pulse bg-primary/10" />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex-1">
        <div className="line-clamp-3 text-muted-foreground">{description}</div>
      </div>
      <div className="text-sm text-muted-foreground">
        {dayjs(new Date(date)).format("DD MMM YYYY")}, {category}
      </div>
      <Link className="absolute inset-0" href={url}>
        <span className="sr-only">Read more</span>
      </Link>
    </div>
  );
}
