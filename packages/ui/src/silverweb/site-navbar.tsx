import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import type { LucideIcon } from "lucide-react";
import {
  BellRing,
  BringToFront,
  DoorOpen,
  Home,
  LayoutGrid,
  MessagesSquare,
  PackagePlus,
  Server,
  Settings,
  Tags,
  Users2,
} from "lucide-react";
import type { ReactNode } from "react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Logo, Badge, Card, CardContent, Separator, Skeleton } from "../shared";
import { cn } from "../lib/utils";
import { AppIcon } from "./app-icon";

function NavAppIcon(props: {
  icon: LucideIcon;
  name: string;
  link: string;
  disabled?: boolean;
  open?: boolean;
  className?: string;
  content: ReactNode;
}): JSX.Element {
  const { name, link, disabled, open, className, content, ...rest } = props;

  return (
    <div
      aria-label={name}
      className={cn(
        "flex items-center justify-center",
        disabled && "cursor-not-allowed opacity-30",
        disabled && className,
      )}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <a
            aria-disabled={disabled}
            className={cn("flex items-center justify-center", className)}
            href={link}
          >
            <div className="relative">
              <div
                className={
                  open
                    ? "absolute left-[-20px] top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-sm bg-white opacity-70 "
                    : ""
                }
              />
              <rest.icon
                className={cn(
                  "",
                  !disabled &&
                    "opacity-70 transition-all hover:opacity-100 hover:drop-shadow-[0px_0px_3px_rgba(255,255,255,.4)]",
                )}
                size={23}
                strokeWidth={1.5}
              />
            </div>
          </a>
        </HoverCardTrigger>
        <HoverCardContent
          className="min-w-48 m-6 h-[calc(100vh-48px)]"
          side="right"
          sideOffset={10}
        >
          <Card className="h-full w-full">
            <CardContent className="p-6">{content}</CardContent>
          </Card>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

function NavControlIcon(props: {
  icon: LucideIcon;
  name: string;
  fuc: () => void;
  disabled?: boolean;
  className?: string;
}): JSX.Element {
  const { name, fuc, disabled, className, ...rest } = props;

  return (
    <div
      aria-disabled={disabled}
      aria-label={name}
      className={cn(
        "flex cursor-pointer items-center justify-center",
        disabled && "cursor-not-allowed opacity-30",
        className,
      )}
      onClick={fuc}
      onKeyDown={fuc}
      role="button"
      tabIndex={0}
    >
      <rest.icon
        className={cn(
          "",
          !disabled &&
            "opacity-70 transition-all hover:opacity-100 hover:drop-shadow-[0px_0px_3px_rgba(255,255,255,.4)]",
        )}
        size={23}
        strokeWidth={1.5}
      />
    </div>
  );
}

function HomeInsidesCards({
  link,
  name,
  icon,
  number,
}: {
  link: string;
  name: string;
  icon: JSX.Element;
  number: number;
}): JSX.Element {
  return (
    <a href={link}>
      <Card className="cursor-pointer transition-all hover:brightness-150">
        <CardContent className="flex justify-between gap-2 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center">{icon}</div>
            <p className="text-sm font-bold">{name}</p>
          </div>
          <Badge variant="secondary">{number}</Badge>
        </CardContent>
      </Card>
    </a>
  );
}

export function SiteNavbar({
  openApp,
  quickApps,
}: {
  openApp: number;
  quickApps: { icon: JSX.Element; gradient: string; link: string }[];
}): JSX.Element {
  const CardRef = useRef<HTMLDivElement>(null);
  const [restNumberForAppsInCard, setRestNumberForAppsInCard] =
    useState<number>(0);
  useEffect(() => {
    if (CardRef.current) {
      // 40 for 20px padding, 51 for Bottom apps in Card and 381.55 for Upper apps + add App
      // Divided by 43 to get the number of possible apps in Card (43.55px per App )
      setRestNumberForAppsInCard(
        ((CardRef.current.clientHeight || 0) - 40 - 151 - 381.55) / 43,
      );
    }
  }, [CardRef.current?.clientHeight]);

  return (
    <div className="h-screen w-16 p-6">
      <Card className="h-full w-16 ">
        <CardContent
          className="flex h-full flex-wrap content-between justify-center p-3 py-5"
          ref={CardRef}
        >
          <div className="grid max-h-full justify-center gap-8">
            <div className="flex items-center justify-center">
              <Logo wh={30} />
            </div>
            <NavAppIcon
              className="mt-9"
              content={
                <div className="grid gap-5">
                  <div className="text-center text-lg font-bold">Hub</div>
                  <div>
                    <Card>
                      <CardContent className="px-5 py-3">
                        <div>
                          <p className="text-lg font-bold">28,123</p>
                          <p className="text-xs">hours/month</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card>
                      <CardContent className="px-5 py-3">
                        <div>
                          <p className="text-lg font-bold">38</p>
                          <p className="text-xs">projects current</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <Separator />
                  <HomeInsidesCards
                    {...{
                      icon: <Tags size={20} />,
                      link: "#",
                      name: "open tasks",
                      number: 14,
                    }}
                  />
                  <HomeInsidesCards
                    {...{
                      icon: <BellRing size={18} />,
                      link: "#",
                      name: "notifs.",
                      number: 23,
                    }}
                  />
                  <Separator />
                  <Card className="cursor-pointer opacity-50 transition-all hover:brightness-150">
                    <CardContent className="flex justify-center gap-1 px-3 py-2">
                      <div className="flex items-center">
                        <Settings size={18} />
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs font-bold">Edit</p>
                      </div>
                    </CardContent>
                  </Card>
                  <HomeInsidesCards
                    {...{
                      icon: <Users2 size={18} />,
                      link: "/sw/",
                      name: "Employees",
                      number: 523,
                    }}
                  />
                </div>
              }
              icon={Home}
              link="/sw"
              name="Hub"
              open={openApp === 1}
            />
            <NavAppIcon
              content={
                <div className="grid gap-5">
                  <div className="text-center text-lg font-bold">Apps</div>
                  <div className="grid grid-cols-2 justify-center gap-8">
                    <div className="flex justify-center">
                      <AppIcon
                        gradient="from-cyan-500 to-blue-500"
                        icon={BringToFront}
                        link=""
                        name="Order"
                      />
                    </div>
                    <div className="flex justify-center">
                      <AppIcon
                        gradient="from-violet-400 to-violet-700"
                        icon={Tags}
                        link=""
                        name="KanBan"
                      />
                    </div>
                  </div>
                </div>
              }
              icon={LayoutGrid}
              link="/sw/apps"
              name="Apps"
              open={openApp === 2}
            />
            <NavAppIcon
              content={<div />}
              disabled
              icon={Server}
              link="/sb"
              name="SilverBase"
              open={openApp === 3}
            />
            <NavAppIcon
              content={<div />}
              disabled
              icon={MessagesSquare}
              link="#"
              name="SilverChat"
              open={openApp === 4}
            />
            <Separator />
            <div className="grid justify-center gap-3">
              <div className="flex cursor-pointer justify-center rounded-md bg-muted bg-opacity-30 p-[0.33rem]">
                <PackagePlus size={20} />
              </div>
              {quickApps.map((app, index) => (
                <Fragment key={app.link}>
                  {index + 1 < restNumberForAppsInCard && (
                    <a href={app.link}>
                      <div
                        className={cn(
                          "rounded-md bg-gradient-to-r p-1",
                          app.gradient,
                        )}
                      >
                        {app.icon}
                      </div>
                    </a>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="mt-8 grid justify-center gap-8">
            <Separator />
            <NavControlIcon
              disabled
              fuc={() => undefined}
              icon={BellRing}
              name="Notifications"
            />
            <NavControlIcon
              className="mb-2"
              fuc={() => undefined}
              icon={DoorOpen}
              name="Logout"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function LoadingHomeInsidesCards({
  link,
  name,
  icon,
}: {
  link: string;
  name: string;
  icon: JSX.Element;
}): JSX.Element {
  return (
    <a href={link}>
      <Card className="cursor-pointer transition-all hover:brightness-150">
        <CardContent className="flex justify-between gap-2 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center">{icon}</div>
            <p className="text-sm font-bold">{name}</p>
          </div>
          <Skeleton className="h-[22px] w-8" />
        </CardContent>
      </Card>
    </a>
  );
}

export function LoadingSiteNavbar({
  openApp,
}: {
  openApp: number;
}): JSX.Element {
  const CardRef = useRef<HTMLDivElement>(null);
  const [restNumberForAppsInCard, setRestNumberForAppsInCard] =
    useState<number>(0);
  useEffect(() => {
    if (CardRef.current) {
      // 40 for 20px padding, 51 for Bottom apps in Card and 381.55 for Upper apps + add App
      // Divided by 43 to get the number of possible apps in Card (43.55px per App )
      setRestNumberForAppsInCard(
        ((CardRef.current.clientHeight || 0) - 40 - 151 - 381.55) / 43,
      );
    }
  }, [CardRef.current?.clientHeight]);

  return (
    <div className="h-screen w-16 p-6">
      <Card className="h-full w-16 ">
        <CardContent
          className="flex h-full flex-wrap content-between justify-center p-3 py-5"
          ref={CardRef}
        >
          <div className="grid max-h-full justify-center gap-8">
            <div className="flex items-center justify-center">
              <Logo wh={30} />
            </div>
            <NavAppIcon
              className="mt-9"
              content={
                <div className="grid gap-5">
                  <div className="text-center text-lg font-bold">Hub</div>
                  <div>
                    <Card>
                      <CardContent className="px-5 py-3">
                        <div className="grid gap-1">
                          <Skeleton className=" h-[26px] w-[80px] -translate-x-1" />
                          <Skeleton className=" h-[15px] w-[100px] -translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card>
                      <CardContent className="px-5 py-3">
                        <div className="grid gap-1">
                          <Skeleton className=" h-[26px] w-[80px] -translate-x-1" />
                          <Skeleton className=" h-[15px] w-[100px] -translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <Separator />
                  <LoadingHomeInsidesCards
                    {...{
                      icon: <Tags size={20} />,
                      link: "#",
                      name: "open tasks",
                    }}
                  />
                  <LoadingHomeInsidesCards
                    {...{
                      icon: <BellRing size={18} />,
                      link: "#",
                      name: "notifs.",
                    }}
                  />
                  <Separator />
                  <Card className="cursor-pointer opacity-50 transition-all hover:brightness-150">
                    <CardContent className="flex justify-center gap-1 px-3 py-2">
                      <div className="flex items-center">
                        <Settings size={18} />
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs font-bold">Edit</p>
                      </div>
                    </CardContent>
                  </Card>
                  {Array.from("BigAssLongStringForArray").map((app, index) => {
                    if (typeof window === "undefined") return null;

                    return (
                      <Fragment key={app + Math.random()}>
                        {index + 1 <
                          (window.innerHeight - 48 - 40 - 446) / 50 && (
                          <Card>
                            <CardContent className="flex justify-between gap-2 px-3 py-2">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                  <Skeleton className="h-[20px] w-[20px] rounded-full" />
                                </div>
                                <Skeleton className="h-4 w-24" />
                              </div>
                              <Skeleton className="h-[22px] w-8" />
                            </CardContent>
                          </Card>
                        )}
                      </Fragment>
                    );
                  })}
                </div>
              }
              icon={Home}
              link="/sw"
              name="Hub"
              open={openApp === 1}
            />
            <NavAppIcon
              content={
                <div className="grid gap-5">
                  <div className="text-center text-lg font-bold">Apps</div>
                  <div className="grid grid-cols-2 justify-center gap-8">
                    <div className="flex justify-center">
                      <AppIcon
                        gradient="from-cyan-500 to-blue-500"
                        icon={BringToFront}
                        link=""
                        name="Order"
                      />
                    </div>
                    <div className="flex justify-center">
                      <AppIcon
                        gradient="from-violet-400 to-violet-700"
                        icon={Tags}
                        link=""
                        name="KanBan"
                      />
                    </div>
                  </div>
                </div>
              }
              icon={LayoutGrid}
              link="/sw/apps"
              name="Apps"
              open={openApp === 2}
            />
            <NavAppIcon
              content={<div />}
              disabled
              icon={Server}
              link="/sb"
              name="SilverBase"
              open={openApp === 3}
            />
            <NavAppIcon
              content={<div />}
              disabled
              icon={MessagesSquare}
              link="#"
              name="SilverChat"
              open={openApp === 4}
            />
            <Separator />
            <div className="grid justify-center gap-3">
              <div className="flex cursor-pointer justify-center rounded-md bg-muted bg-opacity-30 p-[0.33rem]">
                <PackagePlus size={20} />
              </div>
              {Array.from("BigAssLongStringForArray").map((app, index) => (
                <Fragment key={app + Math.random()}>
                  {index + 1 < restNumberForAppsInCard && (
                    <Skeleton className="h-[31px] w-[31px] rounded-md" />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="mt-8 grid justify-center gap-8">
            <Separator />
            <NavControlIcon
              disabled
              fuc={() => undefined}
              icon={BellRing}
              name="Notifications"
            />
            <NavControlIcon
              className="mb-2"
              fuc={() => undefined}
              icon={DoorOpen}
              name="Logout"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
