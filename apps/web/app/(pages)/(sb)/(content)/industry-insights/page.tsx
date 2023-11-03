"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Separator,
  navigationMenuTriggerStyle,
} from "@silverweb/ui/components/shared";
import { cn } from "@silverweb/ui/lib/utils";
import { format } from "date-fns";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Post({
  title,
  description,
  date,
  category,
  url,
}: // thumbnail,
{
  title: string;
  description: string;
  date: string;
  category: string;
  url: string;
  // thumbnail?: string;
}): JSX.Element {
  return (
    <div className="w-[370px] relative flex flex-col space-y-2">
      <div className="aspect-[1.91/1] bg-slate-400 rounded-lg " />
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="text-muted-foreground">{description}</div>
      <div className="text-sm text-muted-foreground">
        {format(new Date(date), "MMM dd, yyyy")},{category}
      </div>
      <Link className="absolute inset-0" href={url}>
        <span className="sr-only">Read more</span>
      </Link>
    </div>
  );
}

export default function IndustryInsights(): JSX.Element {
  const params = useSearchParams();

  return (
    <div className="max-w-7xl mx-auto">
      <section aria-label="Heading">
        <div className="mt-8 text-center tracking-tighter font-bold text-7xl">
          Industry insights
        </div>
        <div className="text-center max-w-xl sm:font-medium mx-auto px-12 sm:px-4 text-lg sm:text-xl tracking-tighter drop-shadow-lg mt-2 sm:mt-5">
          What is going on in the industry
        </div>
      </section>
      <section aria-label="BlogPostTable" className="mt-10">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/industry-insights?category=company-news"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div
                    className={cn(
                      "transition-all",
                      params.get("category") === "company-news" &&
                        "font-bold drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]"
                    )}
                  >
                    Company news
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/industry-insights?category=better-work"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div
                    className={cn(
                      "transition-all",
                      params.get("category") === "better-work" &&
                        "font-bold drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]"
                    )}
                  >
                    Better work
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/industry-insights?category=around-industry"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div
                    className={cn(
                      "transition-all",
                      params.get("category") === "around-industry" &&
                        "font-bold drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]"
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
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className={cn("transition-all")}>All</div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Separator />
        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-12  justify-around">
          <Post
            category="Industry insights"
            date="August 16, 2023"
            description="Spain's cleantech leadership and the opportunity of tapping into Latin America's skilled workforce."
            title="Spain Takes The Lead On Cleantech"
            url="/industry-insights/spain"
          />
          <Post
            category="Industry insights"
            date="August 16, 2023"
            description="Spain's cleantech leadership and the opportunity of tapping into Latin America's skilled workforce."
            title="Spain Takes The Lead On Cleantech"
            url="/industry-insights/spain"
          />
          <Post
            category="Industry insights"
            date="August 16, 2023"
            description="Spain's cleantech leadership and the opportunity of tapping into Latin America's skilled workforce."
            title="Spain Takes The Lead On Cleantech"
            url="/industry-insights/spain"
          />
          <Post
            category="Industry insights"
            date="August 16, 2023"
            description="Spain's cleantech leadership and the opportunity of tapping into Latin America's skilled workforce."
            title="Spain Takes The Lead On Cleantech"
            url="/industry-insights/spain"
          />
          <Post
            category="Industry insights"
            date="August 16, 2023"
            description="Spain's cleantech leadership and the opportunity of tapping into Latin America's skilled workforce."
            title="Spain Takes The Lead On Cleantech"
            url="/industry-insights/spain"
          />
          <Post
            category="Industry insights"
            date="August 16, 2023"
            description="Spain's cleantech leadership and the opportunity of tapping into Latin America's skilled workforce."
            title="Spain Takes The Lead On Cleantech"
            url="/industry-insights/spain"
          />
        </div>
      </section>
    </div>
  );
}
