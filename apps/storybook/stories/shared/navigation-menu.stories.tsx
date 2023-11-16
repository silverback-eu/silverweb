import { cn } from "@silverweb/ui/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@silverweb/ui/shared";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

const meta: Meta<typeof NavigationMenu> = {
  title: "Shared/ NavigationMenu",
  tags: ["autodocs"],
  component: NavigationMenu,
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Normal: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="hidden md:block">
          <a href="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div
                className={cn(
                  "",
                  "font-bold drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]"
                )}
              >
                Home
              </div>
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>
            <div>About</div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="-translate-x-3 translate-y-3" />
                    <div className="mb-2 mt-4 text-lg font-bold tracking-[-0.03em] select-none">
                      SilverBack
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground select-none">
                      Powering mission-critical construction throughout Europe.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/our-story" title="Our story">
                How did it start, {new Date().getFullYear() - 2012} years ago
                that we became the Partner from Dublin to Bucharest and
                Beyond...
              </ListItem>
              <ListItem href="/methods" title="Methods">
                Just doing, is sometimes not enough. A plan is what makes the
                difference...
              </ListItem>
              <ListItem href="/partnerships" title="Partnerships">
                Alone we can do so little, together we can do so much. Who are
                our supporter...
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <a href="/connect">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div>Connect</div>
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <a href="/industry-insights">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div>Industry insights</div>
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="#login">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Login
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            ref={ref}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
