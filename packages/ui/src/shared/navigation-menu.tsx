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
import { uicn } from "../lib";

const NavigationMenuLink = Link;

type NavigationMenuViewportProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Viewport>;

const NavigationMenuViewport = forwardRef<
  ElementRef<typeof Viewport>,
  NavigationMenuViewportProps
>(({ className, ...props }, ref) => (
  <div className="ui-absolute ui-left-0 ui-top-full ui-flex ui-justify-center ui-mt-2">
    <Viewport
      className={uicn(
        "ui-origin-top-center ui-relative ui-mt-1.5 ui-h-[var(--radix-navigation-menu-viewport-height)] ui-w-full ui-overflow-hidden ui-rounded-md ui-border ui-bg-popover ui-text-popover-foreground ui-shadow data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-zoom-out-95 data-[state=open]:ui-zoom-in-90 md:ui-w-[var(--radix-navigation-menu-viewport-width)]",
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
      className={uicn(
        "ui-relative ui-z-10 ui-flex ui-max-w-max ui-flex-1 ui-items-center ui-justify-center",
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
    className={uicn(
      "ui-group ui-flex ui-flex-1 ui-list-none ui-items-center ui-justify-center ui-space-x-1",
      className,
    )}
    ref={ref}
    {...props}
  />
));
NavigationMenuList.displayName = List.displayName;

const NavigationMenuItem = Item;

const navigationMenuTriggerStyle = cva(
  "ui-text-primary ui-group ui-inline-flex ui-h-9 ui-w-max ui-items-center ui-justify-center ui-rounded-md ui-px-4 ui-py-2 ui-text-sm ui-font-medium ui-transition-colors hover:ui-bg-accent hover:ui-text-accent-foreground focus:ui-bg-accent focus:ui-text-accent-foreground focus:ui-outline-none disabled:ui-pointer-events-none disabled:ui-opacity-50 data-[active]:ui-bg-accent/50 data-[state=open]:ui-bg-accent/50",
);

type NavigationMenuTriggerProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Trigger>;

const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  NavigationMenuTriggerProps
>(({ className, children, ...props }, ref) => (
  <Trigger
    className={uicn(navigationMenuTriggerStyle(), "ui-group", className)}
    ref={ref}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      aria-hidden="true"
      className="ui-relative ui-top-[1px] ui-ml-1 ui-h-3 ui-w-3 ui-transition ui-duration-300 group-data-[state=open]:ui-rotate-180"
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
    className={uicn(
      "ui-left-0 ui-top-0 ui-w-full data-[motion^=from-]:ui-animate-in data-[motion^=to-]:ui-animate-out data-[motion^=from-]:ui-fade-in data-[motion^=to-]:ui-fade-out data-[motion=from-end]:ui-slide-in-from-right-52 data-[motion=from-start]:ui-slide-in-from-left-52 data-[motion=to-end]:ui-slide-out-to-right-52 data-[motion=to-start]:ui-slide-out-to-left-52 md:ui-absolute md:ui-w-auto ui-",
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
    className={uicn(
      "ui-top-full ui-z-[1] ui-flex ui-h-1.5 ui-items-end ui-justify-center ui-overflow-hidden data-[state=visible]:ui-animate-in data-[state=hidden]:ui-animate-out data-[state=hidden]:ui-fade-out data-[state=visible]:ui-fade-in",
      className,
    )}
    ref={ref}
    {...props}
  >
    <div className="ui-relative ui-top-[60%] ui-h-2 ui-w-2 ui-rotate-45 ui-rounded-tl-sm ui-bg-border ui-shadow-md" />
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
