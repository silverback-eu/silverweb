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
import { cn } from "../lib/utils";
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
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
    <header className={cn("relative z-50 h-[53px]")}>
      <div
        className={cn(
          "fixed right-0 w-screen bg-black bg-opacity-80 from-background via-background to-[rgba(0,0,0,0.6)] backdrop-blur-[5px] backdrop-saturate-150",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] content-center justify-between px-3 py-2">
          <NavigationMenu className="md:hidden">
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
                      <div className="flex content-center">
                        <div className="flex select-none flex-wrap content-center">
                          <Logo wh={22} />
                        </div>
                        <div className="flex -translate-y-[2.5%]">
                          <div className="grid select-none content-center text-lg font-bold tracking-[-0.02em]">
                            SilverBack
                          </div>
                          <div className="translate-y-[1px] select-none content-center pl-0.5 text-[1.1em] font-medium tracking-[-0.03em] text-warm">
                            group
                          </div>
                        </div>
                      </div>
                    </a>
                    <Separator className="mt-4 opacity-0" />
                    <ScrollArea className="grid h-[calc(100vh-100px)] gap-1">
                      {pages.map((page, idx) => (
                        <div key={page.title}>
                          {page.heading ? (
                            <b className="font-bold">
                              {page.href ? (
                                <a href={page.href}>{page.title}</a>
                              ) : (
                                page.title
                              )}
                            </b>
                          ) : (
                            <a className="opacity-70" href={page.href || "#"}>
                              {page.title}
                            </a>
                          )}
                          {pages[idx + 1] && pages[idx + 1].heading ? (
                            <Separator className="my-2" />
                          ) : null}
                        </div>
                      ))}
                      <div className="h-12" />
                      <div className="h-12" />
                    </ScrollArea>
                  </SheetContent>
                </Sheet>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className={cn("grid grid-flow-col gap-1")}>
                <a className="mx-3 grid grid-flow-col gap-1" href="/">
                  <div className="hidden translate-y-[0.5px] select-none flex-wrap content-center sm:flex">
                    <Logo wh={22} />
                  </div>
                  <div className="flex translate-x-5 sm:translate-x-0">
                    <div className="grid select-none content-center text-lg font-bold tracking-[-0.03em]">
                      SilverBack
                    </div>
                    <div className="hidden translate-y-[0px] select-none content-center pl-0.5 text-[1.1em] font-medium tracking-[-0.08em] text-warm sm:grid">
                      group
                    </div>
                  </div>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/"
                >
                  <div
                    className={cn(
                      "",
                      pathname === "/" &&
                        "font-bold drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]",
                    )}
                  >
                    Home
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuTrigger>
                  <div
                    className={cn(
                      "",
                      (pathname === "/our-story" ||
                        pathname === "/methods" ||
                        pathname === "/partnerships") &&
                        "font-bold drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]",
                    )}
                  >
                    About
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="-translate-x-3 translate-y-3">
                            <Logo wh={60} />
                          </div>
                          <div className="mb-2 mt-4 select-none text-lg font-bold tracking-[-0.03em]">
                            SilverBack
                          </div>
                          <p className="select-none text-sm leading-tight text-muted-foreground">
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
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuTrigger>
                  <div
                    className={cn(
                      "",
                      pathname === "/jobboard" &&
                        "font-bold drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]",
                    )}
                  >
                    Job board
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/connect"
                >
                  <div
                    className={cn(
                      "",
                      pathname === "/connect" &&
                        "font-bold drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]",
                    )}
                  >
                    Connect
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/industry-insights"
                >
                  <div
                    className={cn(
                      "",
                      pathname === "/industry-insights" &&
                        "font-bold drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]",
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
