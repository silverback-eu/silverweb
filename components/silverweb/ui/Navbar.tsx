"use client";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import {
  BellRing,
  BringToFront,
  DoorOpen,
  Home,
  LayoutGrid,
  LucideIcon,
  MessagesSquare,
  PackagePlus,
  Server,
  Settings,
  Tags,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

import AppIcon from "@/components/silverback/AppIcon";
import Logo from "@/components/silverback/Logo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

function NavAppIcon(props: {
  icon: LucideIcon;
  name: string;
  link: string;
  disabled?: boolean;
  open?: boolean;
  className?: string;
  content: ReactNode;
}) {
  const { name, link, disabled, open, className, content, ...rest } = props;

  return (
    <div
      aria-label={name}
      className={cn(
        "flex items-center justify-center",
        disabled && "opacity-30 cursor-not-allowed",
        disabled && className,
      )}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <Link
            aria-disabled={disabled}
            passHref={disabled}
            legacyBehavior={disabled}
            href={link}
            className={cn("flex items-center justify-center", className)}
          >
            <div className="relative">
              <div
                className={
                  open
                    ? "absolute bg-white w-1 h-10 top-1/2 -translate-y-1/2 left-[-20px] rounded-r-sm opacity-70 "
                    : ""
                }
              />
              <rest.icon
                size={23}
                strokeWidth={1.5}
                className={cn(
                  "",
                  !disabled &&
                    "opacity-70 transition-all hover:opacity-100 hover:drop-shadow-[0px_0px_3px_rgba(255,255,255,.4)]",
                )}
              />
            </div>
          </Link>
        </HoverCardTrigger>
        <HoverCardContent
          side="right"
          sideOffset={10}
          className="min-w-48 h-[calc(100vh-48px)] m-6"
        >
          <Card className="w-full h-full">
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
  open?: boolean;
  className?: string;
}) {
  const { name, fuc, disabled, open, className, ...rest } = props;

  return (
    <div
      aria-disabled={disabled}
      role="button"
      tabIndex={0}
      onKeyDown={fuc}
      onClick={fuc}
      className={cn(
        "cursor-pointer flex items-center justify-center",
        disabled && "opacity-30 cursor-not-allowed",
        className,
      )}
    >
      <rest.icon
        size={23}
        strokeWidth={1.5}
        className={cn(
          "",
          !disabled &&
            "opacity-70 transition-all hover:opacity-100 hover:drop-shadow-[0px_0px_3px_rgba(255,255,255,.4)]",
        )}
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
}) {
  return (
    <Link href={link}>
      <Card className="hover:brightness-150 cursor-pointer transition-all">
        <CardContent className="py-2 px-3 flex justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center">{icon}</div>
            <p className="text-sm font-bold">{name}</p>
          </div>
          <Badge variant="secondary">{number}</Badge>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function Navbar({
  openApp,
  quickApps,
}: {
  openApp: number;
  quickApps: { icon: JSX.Element; gradient: string; link: string }[];
}) {
  const CardRef = useRef<HTMLDivElement>(null);
  const [RestNumberForAppsInCard, setRestNumberForAppsInCard] = useState<number>(0);
  useEffect(() => {
    if (CardRef.current) {
      // 40 for 20px padding, 51 for Bottom apps in Card and 381.55 for Upper apps + add App
      // Divided by 43 to get the number of possible apps in Card (43.55px per App )
      setRestNumberForAppsInCard(((CardRef.current.clientHeight || 0) - 40 - 151 - 381.55) / 43);
    }
  }, [CardRef.current?.clientHeight]);

  return (
    <div className="p-6 w-16 h-screen">
      <Card className="w-16 h-full ">
        <CardContent
          ref={CardRef}
          className="p-3 py-5 flex content-between flex-wrap h-full justify-center"
        >
          <div className="grid gap-8 justify-center max-h-full">
            <div className="flex items-center justify-center">
              <Logo wh={30} />
            </div>
            <NavAppIcon
              icon={Home}
              name="Hub"
              link="/sw"
              className="mt-9"
              open={openApp === 1}
              content={(
                <div className="grid gap-5">
                  <div className="text-lg font-bold text-center">Hub</div>
                  <div>
                    <Card>
                      <CardContent className="py-3 px-5">
                        <div>
                          <p className="text-lg font-bold">28,123</p>
                          <p className="text-xs">hours/month</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card>
                      <CardContent className="py-3 px-5">
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
                  <Card className="hover:brightness-150 cursor-pointer transition-all opacity-50">
                    <CardContent className="py-2 px-3 flex gap-1 justify-center">
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
              )}
            />
            <NavAppIcon
              icon={LayoutGrid}
              name="Apps"
              link="/sw/apps"
              open={openApp === 2}
              content={(
                <div className="grid gap-5">
                  <div className="text-lg font-bold text-center">Apps</div>
                  <div className="grid gap-8 grid-cols-2 justify-center">
                    <div className="flex justify-center">
                      <AppIcon
                        link=""
                        icon={BringToFront}
                        name="Order"
                        gradient="from-cyan-500 to-blue-500"
                      />
                    </div>
                    <div className="flex justify-center">
                      <AppIcon
                        link=""
                        icon={Tags}
                        name="KanBan"
                        gradient="from-violet-400 to-violet-700"
                      />
                    </div>
                  </div>
                </div>
              )}
            />
            <NavAppIcon
              disabled
              icon={Server}
              name="SilverBase"
              link="/sb"
              open={openApp === 3}
              content={<div />}
            />
            <NavAppIcon
              disabled
              icon={MessagesSquare}
              name="SilverChat"
              link="#"
              open={openApp === 4}
              content={<div />}
            />
            <Separator />
            <div className="grid justify-center gap-3">
              <div className="cursor-pointer rounded-md bg-muted bg-opacity-30 p-[0.33rem] flex justify-center">
                <PackagePlus size={20} />
              </div>
              {quickApps.map((app, index) => (
                <Fragment key={app.link}>
                  {index + 1 < RestNumberForAppsInCard && (
                    <Link href={app.link}>
                      <div className={cn("rounded-md bg-gradient-to-r p-1", app.gradient)}>
                        {app.icon}
                      </div>
                    </Link>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="grid gap-8 justify-center mt-8">
            <Separator />
            <NavControlIcon disabled icon={BellRing} name="Notifications" fuc={() => undefined} />
            <NavControlIcon icon={DoorOpen} name="Logout" fuc={() => undefined} className="mb-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
