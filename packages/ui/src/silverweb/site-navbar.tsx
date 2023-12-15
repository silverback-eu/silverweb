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
import { uicn } from "../lib";
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
      className={uicn(
        "ui-flex ui-items-center ui-justify-center",
        disabled && "ui-cursor-not-allowed ui-opacity-30",
        disabled && className,
      )}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <a
            aria-disabled={disabled}
            className={uicn(
              "ui-flex ui-items-center ui-justify-center",
              className,
            )}
            href={link}
          >
            <div className="ui-relative">
              <div
                className={
                  open
                    ? "ui-absolute ui-left-[-20px] ui-top-1/2 ui-h-10 ui-w-1 -ui-translate-y-1/2 ui-rounded-r-sm ui-bg-white ui-opacity-70"
                    : ""
                }
              />
              <rest.icon
                className={uicn(
                  "",
                  !disabled &&
                    "ui-opacity-70 ui-transition-all hover:ui-opacity-100 hover:ui-drop-shadow-[0px_0px_3px_rgba(255,255,255,.4)]",
                )}
                size={23}
                strokeWidth={1.5}
              />
            </div>
          </a>
        </HoverCardTrigger>
        <HoverCardContent
          className="ui-min-w-48 ui-m-6 ui-h-[calc(100vh-48px)]"
          side="right"
          sideOffset={10}
        >
          <Card className="ui-h-full ui-w-full">
            <CardContent className="ui-p-6">{content}</CardContent>
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
      className={uicn(
        "ui-flex ui-cursor-pointer ui-items-center ui-justify-center",
        disabled && "ui-cursor-not-allowed ui-opacity-30",
        className,
      )}
      onClick={fuc}
      onKeyDown={fuc}
      role="button"
      tabIndex={0}
    >
      <rest.icon
        className={uicn(
          "",
          !disabled &&
            "ui-opacity-70 ui-transition-all hover:ui-opacity-100 hover:ui-drop-shadow-[0px_0px_3px_rgba(255,255,255,.4)]",
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
      <Card className="ui-cursor-pointer ui-transition-all hover:ui-brightness-150">
        <CardContent className="ui-flex ui-justify-between ui-gap-2 ui-px-3 ui-py-2">
          <div className="ui-flex ui-items-center ui-gap-2">
            <div className="ui-flex ui-items-center">{icon}</div>
            <p className="ui-text-sm ui-font-bold">{name}</p>
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
    <div className="ui-h-screen ui-w-16 ui-p-6">
      <Card className="ui-h-full ui-w-16 ui-">
        <CardContent
          className="ui-flex ui-h-full ui-flex-wrap ui-content-between ui-justify-center ui-p-3 ui-py-5"
          ref={CardRef}
        >
          <div className="ui-grid ui-max-h-full ui-justify-center ui-gap-8">
            <div className="ui-flex ui-items-center ui-justify-center">
              <Logo wh={30} />
            </div>
            <NavAppIcon
              className="ui-mt-9"
              content={
                <div className="ui-grid ui-gap-5">
                  <div className="ui-text-center ui-text-lg ui-font-bold">
                    Hub
                  </div>
                  <div>
                    <Card>
                      <CardContent className="ui-px-5 ui-py-3">
                        <div>
                          <p className="ui-text-lg ui-font-bold">28,123</p>
                          <p className="ui-text-xs">hours/month</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card>
                      <CardContent className="ui-px-5 ui-py-3">
                        <div>
                          <p className="ui-text-lg ui-font-bold">38</p>
                          <p className="ui-text-xs">projects current</p>
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
                  <Card className="ui-cursor-pointer ui-opacity-50 ui-transition-all hover:ui-brightness-150">
                    <CardContent className="ui-flex ui-justify-center ui-gap-1 ui-px-3 ui-py-2">
                      <div className="ui-flex ui-items-center">
                        <Settings size={18} />
                      </div>
                      <div className="ui-flex ui-items-center">
                        <p className="ui-text-xs ui-font-bold">Edit</p>
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
                <div className="ui-grid ui-gap-5">
                  <div className="ui-text-center ui-text-lg ui-font-bold">
                    Apps
                  </div>
                  <div className="ui-grid ui-grid-cols-2 ui-justify-center ui-gap-8">
                    <div className="ui-flex ui-justify-center">
                      <AppIcon
                        gradient="ui-from-cyan-500 ui-to-blue-500"
                        icon={BringToFront}
                        link=""
                        name="Order"
                      />
                    </div>
                    <div className="ui-flex ui-justify-center">
                      <AppIcon
                        gradient="ui-from-violet-400 ui-to-violet-700"
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
            <div className="ui-grid ui-justify-center ui-gap-3">
              <div className="ui-flex ui-cursor-pointer ui-justify-center ui-rounded-md ui-bg-muted ui-bg-opacity-30 ui-p-[0.33rem]">
                <PackagePlus size={20} />
              </div>
              {quickApps.map((app, index) => (
                <Fragment key={app.link}>
                  {index + 1 < restNumberForAppsInCard && (
                    <a href={app.link}>
                      <div
                        className={uicn(
                          "ui-rounded-md ui-bg-gradient-to-r ui-p-1",
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
          <div className="ui-mt-8 ui-grid ui-justify-center ui-gap-8">
            <Separator />
            <NavControlIcon
              disabled
              fuc={() => undefined}
              icon={BellRing}
              name="Notifications"
            />
            <NavControlIcon
              className="ui-mb-2"
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
      <Card className="ui-cursor-pointer ui-transition-all hover:ui-brightness-150">
        <CardContent className="ui-flex ui-justify-between ui-gap-2 ui-px-3 ui-py-2">
          <div className="ui-flex ui-items-center ui-gap-2">
            <div className="ui-flex ui-items-center">{icon}</div>
            <p className="ui-text-sm ui-font-bold">{name}</p>
          </div>
          <Skeleton className="ui-h-[22px] ui-w-8" />
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
    <div className="ui-h-screen ui-w-16 ui-p-6">
      <Card className="ui-h-full ui-w-16">
        <CardContent
          className="ui-flex ui-h-full ui-flex-wrap ui-content-between ui-justify-center ui-p-3 ui-py-5"
          ref={CardRef}
        >
          <div className="ui-grid ui-max-h-full ui-justify-center ui-gap-8">
            <div className="ui-flex ui-items-center ui-justify-center">
              <Logo wh={30} />
            </div>
            <NavAppIcon
              className="ui-mt-9"
              content={
                <div className="ui-grid ui-gap-5">
                  <div className="ui-text-center ui-text-lg ui-font-bold">
                    Hub
                  </div>
                  <div>
                    <Card>
                      <CardContent className="ui-px-5 ui-py-3">
                        <div className="ui-grid ui-gap-1">
                          <Skeleton className="ui-h-[26px] ui-w-[80px] -ui-translate-x-1" />
                          <Skeleton className="ui-h-[15px] ui-w-[100px] -ui-translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card>
                      <CardContent className="ui-px-5 ui-py-3">
                        <div className="ui-grid ui-gap-1">
                          <Skeleton className="ui-h-[26px] ui-w-[80px] -ui-translate-x-1" />
                          <Skeleton className="ui-h-[15px] ui-w-[100px] -ui-translate-x-1" />
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
                  <Card className="ui-cursor-pointer ui-opacity-50 ui-transition-all hover:ui-brightness-150">
                    <CardContent className="ui-flex ui-justify-center ui-gap-1 ui-px-3 ui-py-2">
                      <div className="ui-flex ui-items-center">
                        <Settings size={18} />
                      </div>
                      <div className="ui-flex ui-items-center">
                        <p className="ui-text-xs ui-font-bold">Edit</p>
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
                            <CardContent className="ui-flex ui-justify-between ui-gap-2 ui-px-3 ui-py-2">
                              <div className="ui-flex ui-items-center ui-gap-2">
                                <div className="ui-flex ui-items-center">
                                  <Skeleton className="ui-h-[20px] ui-w-[20px] ui-rounded-full" />
                                </div>
                                <Skeleton className="ui-h-4 ui-w-24" />
                              </div>
                              <Skeleton className="ui-h-[22px] ui-w-8" />
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
                <div className="ui-grid ui-gap-5">
                  <div className="ui-text-center ui-text-lg ui-font-bold">
                    Apps
                  </div>
                  <div className="ui-grid ui-grid-cols-2 ui-justify-center ui-gap-8">
                    <div className="ui-flex ui-justify-center">
                      <AppIcon
                        gradient="ui-from-cyan-500 ui-to-blue-500"
                        icon={BringToFront}
                        link=""
                        name="Order"
                      />
                    </div>
                    <div className="ui-flex ui-justify-center">
                      <AppIcon
                        gradient="ui-from-violet-400 ui-to-violet-700"
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
            <div className="ui-grid ui-justify-center ui-gap-3">
              <div className="ui-flex ui-cursor-pointer ui-justify-center ui-rounded-md ui-bg-muted ui-bg-opacity-30 ui-p-[0.33rem]">
                <PackagePlus size={20} />
              </div>
              {Array.from("BigAssLongStringForArray").map((app, index) => (
                <Fragment key={app + Math.random()}>
                  {index + 1 < restNumberForAppsInCard && (
                    <Skeleton className="ui-h-[31px] ui-w-[31px] ui-rounded-md" />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="ui-mt-8 ui-grid ui-justify-center ui-gap-8">
            <Separator />
            <NavControlIcon
              disabled
              fuc={() => undefined}
              icon={BellRing}
              name="Notifications"
            />
            <NavControlIcon
              className="ui-mb-2"
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
