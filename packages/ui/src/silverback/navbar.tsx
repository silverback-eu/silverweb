import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef, useEffect, useState } from "react";
import {
  Logo,
  User,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  ScrollArea,
  Separator,
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../shared";
import { uicn } from "../lib";
import { BurgerMenuIcon } from "./burger-menu-icon";

const pages: (
  | { title: string; href: string; heading?: undefined }
  | { title: string; heading: boolean; href?: string }
)[] = [
  {
    title: "About",
    heading: true,
  },
  {
    title: "Our story",
    href: "/our-story",
  },
  {
    title: "Methods",
    href: "/methods",
  },
  {
    title: "Partnerships",
    href: "/partnerships",
  },
  {
    title: "Job board",
    heading: true,
    href: "/jobboard",
  },
  {
    title: "Architect",
    href: "/jobboard?job=architect",
  },
  {
    title: "Cable Joiner",
    href: "/jobboard?job=cable-jointer",
  },
  {
    title: "Carpenter",
    href: "/jobboard?job=carpenter",
  },
  {
    title: "Cleaner",
    href: "/jobboard?job=cleaner",
  },
  {
    title: "Commissioning Technician",
    href: "/jobboard?job=commissioning-technician",
  },
  {
    title: "Construction Manager",
    href: "/jobboard?job=construction-manager",
  },
  {
    title: "Concrete Worker",
    href: "/jobboard?job=concrete-worker",
  },
  {
    title: "Crane Operator",
    href: "/jobboard?job=crane-operator",
  },
  {
    title: "CSA Site Manager",
    href: "/jobboard?job=csa-site-manager",
  },
  {
    title: "Dryliner",
    href: "/jobboard?job=dryliner",
  },
  {
    title: "Duct Installer",
    href: "/jobboard?job=duct-installer",
  },
  {
    title: "Fitter",
    href: "/jobboard?job=fitter",
  },
  {
    title: "Electrician",
    href: "/jobboard?job=electrician",
  },
  {
    title: "General Operative",
    href: "/jobboard?job=general-operative",
  },
  {
    title: "HVAC Installer",
    href: "/jobboard?job=hvac-installer",
  },
  {
    title: "Mechanic",
    href: "/jobboard?job=mechanic",
  },
  {
    title: "Plumber",
    href: "/jobboard?job=plumber",
  },
  {
    title: "QA/QC CX Manager",
    href: "/jobboard?job=qa-qc-cx-manager",
  },
  {
    title: "Site Administrator",
    href: "/jobboard?job=site-administrator",
  },
  {
    title: "Teleporter Operator",
    href: "/jobboard?job=teleporter-operator",
  },
  {
    title: "White Wall Installer",
    href: "/jobboard?job=white-wall-installer",
  },
  {
    title: "Connect",
    heading: true,
    href: "/connect",
  },
  {
    title: "Dublin",
    href: "/connect#dublin",
  },
  {
    title: "Copenhagen",
    href: "/connect#copenhagen",
  },
  {
    title: "Lublin",
    href: "/connect#lublin",
  },
  {
    title: "Bucharest",
    href: "/connect#bucharest",
  },
  {
    title: "Industry insights",
    heading: true,
    href: "/industry-insights",
  },
  {
    title: "Company news",
    href: "/industry-insights?category=company-news",
  },
  {
    title: "Better work",
    href: "/industry-insights?category=better-work",
  },
  {
    title: "Around industry",
    href: "/industry-insights/?category=around-industry",
  },
];

const jobs: { title: string; href: string; description: string }[] = [
  {
    title: "Electrician",
    href: "/jobboard?job=electrician",
    description:
      "Do you want to bring light in the world? Be the spark for the future.",
  },
  {
    title: "Mechanic",
    href: "/jobboard?job=mechanic",
    description:
      "Are you a problem solver at heart? Keep the wheels of progress turning smoothly.",
  },
  {
    title: "Engineer",
    href: "/jobboard?job=engineer",
    description:
      "Shape the future. Your innovation powers our technological progress.",
  },
  {
    title: "Project Manager",
    href: "/jobboard?job=project-manager",
    description:
      "Lead projects to success. Your guidance drives our team's achievements.",
  },
  {
    title: "Fitter",
    href: "/jobboard?job=fitter",
    description:
      "Fit perfectly into our team. Your attention to detail ensures flawless future.",
  },
  {
    title: "and more...",
    href: "/jobboard",
    description: "Join our team! Be part of the new future and make an impact.",
  },
];

type ListItemProps = {
  className?: string;
  title?: string;
  onSelect?: (event: Event) => void;
} & ComponentPropsWithoutRef<"a">;

const ListItem = forwardRef<ElementRef<"a">, ListItemProps>(
  ({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink
        className={uicn(
          "ui-block ui-select-none ui-space-y-1 ui-rounded-md ui-p-3 ui-leading-none ui-no-underline ui-outline-none ui-transition-colors hover:ui-bg-accent hover:ui-text-accent-foreground focus:ui-bg-accent focus:ui-text-accent-foreground",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="ui-text-sm ui-font-medium ui-leading-none">{title}</div>
        <p className="ui-line-clamp-2 ui-text-sm ui-leading-snug ui-text-muted-foreground">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  ),
);
ListItem.displayName = "ListItem";

export function Navbar({
  loginUser,
}: {
  loginUser?: {
    src: string;
    fallback: string;
    alt: string;
    type: "Employee" | "Client" | "Admin";
  };
}): JSX.Element {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [pathname, setPathname] = useState<string>();

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <header className="ui-relative ui-z-50 ui-h-[53px]">
      <div className="ui-fixed ui-left-0 ui-w-screen ui-bg-black ui-bg-opacity-80 ui-from-background ui-via-background ui-to-[rgba(0,0,0,0.6)] ui-backdrop-blur-[5px] ui-backdrop-saturate-150">
        <div className="ui-mx-auto ui-flex ui-max-w-[1400px] ui-content-center ui-justify-between ui-px-3 ui-py-2">
          <NavigationMenu className="md:ui-hidden">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Sheet onOpenChange={setOpenSideMenu} open={openSideMenu}>
                  <SheetTrigger asChild>
                    <BurgerMenuIcon
                      onOpenChange={setOpenSideMenu}
                      open={openSideMenu}
                    />
                  </SheetTrigger>
                  <SheetContent>
                    <a href="/">
                      <div className="ui-flex ui-content-center">
                        <div className="ui-flex ui-select-none ui-flex-wrap ui-content-center">
                          <Logo wh={22} />
                        </div>
                        <div className="ui-flex -ui-translate-y-[2.5%]">
                          <div className="ui-grid ui-select-none ui-content-center ui-text-lg ui-font-bold ui-tracking-[-0.02em]">
                            SilverBack
                          </div>
                          <div className="ui-translate-y-[1px] ui-select-none ui-content-center ui-pl-0.5 ui-text-[1.1em] ui-font-medium ui-tracking-[-0.03em] ui-text-warm">
                            group
                          </div>
                        </div>
                      </div>
                    </a>
                    <Separator className="ui-mt-4 ui-opacity-0" />
                    <ScrollArea className="ui-grid ui-h-[calc(100vh-100px)] ui-gap-1">
                      {pages.map((page, idx) => (
                        <div key={page.title}>
                          {page.heading ? (
                            <b className="ui-font-bold">
                              {page.href ? (
                                <a href={page.href}>{page.title}</a>
                              ) : (
                                page.title
                              )}
                            </b>
                          ) : (
                            <a
                              className="ui-opacity-70"
                              href={page.href || "#"}
                            >
                              {page.title}
                            </a>
                          )}
                          {pages[idx + 1] && pages[idx + 1].heading ? (
                            <Separator className="ui-my-2" />
                          ) : null}
                        </div>
                      ))}
                      <div className="ui-h-12" />
                      <div className="ui-h-12" />
                    </ScrollArea>
                  </SheetContent>
                </Sheet>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="ui-grid ui-grid-flow-col ui-gap-1">
                <a
                  className="ui-mx-3 ui-grid ui-grid-flow-col ui-gap-1"
                  href="/"
                >
                  <div className="ui-hidden ui-translate-y-[0.5px] ui-select-none ui-flex-wrap ui-content-center sm:ui-flex">
                    <Logo wh={22} />
                  </div>
                  <div className="ui-flex ui-translate-x-5 sm:ui-translate-x-0">
                    <div className="ui-grid ui-select-none ui-content-center ui-text-lg ui-font-bold ui-tracking-[-0.03em]">
                      SilverBack
                    </div>
                    <div className="ui-hidden ui-translate-y-[0px] ui-select-none ui-content-center ui-pl-0.5 ui-text-[1.1em] ui-font-medium ui-tracking-[-0.08em] ui-text-warm sm:ui-grid">
                      group
                    </div>
                  </div>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="ui-hidden md:ui-block">
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/"
                >
                  <div
                    className={uicn(
                      "",
                      pathname === "/" &&
                        "ui-font-bold ui-drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]",
                    )}
                  >
                    Home
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="ui-hidden md:ui-block">
                <NavigationMenuTrigger>
                  <div
                    className={uicn(
                      "",
                      (pathname === "/our-story" ||
                        pathname === "/methods" ||
                        pathname === "/partnerships") &&
                        "ui-font-bold ui-drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]",
                    )}
                  >
                    About
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="ui-grid ui-gap-3 ui-p-6 md:ui-w-[400px] lg:ui-w-[500px] lg:ui-grid-cols-[.75fr_1fr]">
                    <li className="ui-row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="ui-flex ui-h-full ui-w-full ui-select-none ui-flex-col ui-justify-end ui-rounded-md ui-bg-gradient-to-b ui-from-muted/50 ui-to-muted ui-p-6 ui-no-underline ui-outline-none focus:ui-shadow-md"
                          href="/"
                        >
                          <div className="-ui-translate-x-3 ui-translate-y-3">
                            <Logo wh={60} />
                          </div>
                          <div className="mb-2 mt-4 select-none text-lg font-bold tracking-[-0.03em]">
                            SilverBack
                          </div>
                          <p className="ui-select-none ui-text-sm ui-leading-tight ui-text-muted-foreground">
                            Powering mission-critical construction throughout
                            Europe.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/our-story" title="Our story">
                      How did it start, {new Date().getFullYear() - 2012} years
                      ago that we became the Partner from Dublin to Bucharest
                      and Beyond...
                    </ListItem>
                    <ListItem href="/methods" title="Methods">
                      Just doing, is sometimes not enough. A plan is what makes
                      the difference...
                    </ListItem>
                    <ListItem href="/partnerships" title="Partnerships">
                      Alone we can do so little, together we can do so much. Who
                      are our supporter...
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="ui-hidden md:ui-block">
                <NavigationMenuTrigger>
                  <div
                    className={uicn(
                      "",
                      pathname === "/jobboard" &&
                        "ui-font-bold ui-drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]",
                    )}
                  >
                    Job board
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="ui-grid ui-w-[400px] ui-gap-3 ui-p-4 md:ui-w-[500px] md:ui-grid-cols-2 lg:ui-w-[600px]">
                    {jobs.map((job) => (
                      <ListItem
                        href={job.href}
                        key={job.title}
                        title={job.title}
                      >
                        {job.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="ui-hidden md:ui-block">
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/connect"
                >
                  <div
                    className={uicn(
                      "",
                      pathname === "/connect" &&
                        "ui-font-bold ui-drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]",
                    )}
                  >
                    Connect
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="ui-hidden md:ui-block">
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/industry-insights"
                >
                  <div
                    className={uicn(
                      "",
                      pathname === "/industry-insights" &&
                        "ui-font-bold ui-drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]",
                    )}
                  >
                    Industry insights
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                {loginUser ? (
                  <User
                    alt={loginUser.alt}
                    fallback={loginUser.fallback}
                    src={loginUser.src}
                    type={loginUser.type}
                  />
                ) : (
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href="#login"
                  >
                    Login
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Separator />
      </div>
    </header>
  );
}
