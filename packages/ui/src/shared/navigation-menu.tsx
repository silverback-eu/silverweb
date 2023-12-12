import { ChevronDown } from "lucide-react";
import {
  Link,
  Viewport,
  Root,
  List,
  Item,
  Trigger,
  Content,
  Indicator,
} from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { cn } from "../lib/utils";

const NavigationMenuLink = Link;

type NavigationMenuViewportProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Viewport>;

const NavigationMenuViewport = forwardRef<
  ElementRef<typeof Viewport>,
  NavigationMenuViewportProps
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center", "mt-2")}>
    <Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = Viewport.displayName;

type NavigationMenuProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Root>;

const NavigationMenu = forwardRef<ElementRef<typeof Root>, NavigationMenuProps>(
  ({ className, children, ...props }, ref) => (
    <Root
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </Root>
  ),
);
NavigationMenu.displayName = Root.displayName;

type NavigationMenuListProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof List>;

const NavigationMenuList = forwardRef<
  ElementRef<typeof List>,
  NavigationMenuListProps
>(({ className, ...props }, ref) => (
  <List
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className,
    )}
    ref={ref}
    {...props}
  />
));
NavigationMenuList.displayName = List.displayName;

const NavigationMenuItem = Item;

const navigationMenuTriggerStyle = cva(
  "text-primary group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

type NavigationMenuTriggerProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Trigger>;

const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  NavigationMenuTriggerProps
>(({ className, children, ...props }, ref) => (
  <Trigger
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    ref={ref}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      aria-hidden="true"
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
    />
  </Trigger>
));
NavigationMenuTrigger.displayName = Trigger.displayName;

type NavigationMenuContentProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Content>;

const NavigationMenuContent = forwardRef<
  ElementRef<typeof Content>,
  NavigationMenuContentProps
>(({ className, ...props }, ref) => (
  <Content
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className,
    )}
    ref={ref}
    {...props}
  />
));
NavigationMenuContent.displayName = Content.displayName;

type NavigationMenuIndicatorProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Indicator>;

const NavigationMenuIndicator = forwardRef<
  ElementRef<typeof Indicator>,
  NavigationMenuIndicatorProps
>(({ className, ...props }, ref) => (
  <Indicator
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    ref={ref}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </Indicator>
));
NavigationMenuIndicator.displayName = Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
