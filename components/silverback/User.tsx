import {
  AreaChart,
  CreditCard,
  Globe2,
  Hammer,
  LogOut,
  MailWarning,
  MessagesSquare,
  Newspaper,
  Phone,
  Settings,
  Tags,
  User2,
} from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

import {
  Avatar as AvatarPrimitive,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const AdminDropdownMenuItemList: Array<
{ label: string; icon: any; href: string }[]
> = [
  [
    {
      label: "Profile",
      icon: User2,
      href: "#",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "#",
    },
    {
      label: "Messages",
      icon: MailWarning,
      href: "#",
    },
  ],
  [
    {
      label: "Team Space",
      icon: Newspaper,
      href: "#",
    },
    {
      label: "Chat",
      icon: MessagesSquare,
      href: "#",
    },
    {
      label: "Task",
      icon: Tags,
      href: "#",
    },
    {
      label: "SilverWeb",
      icon: Globe2,
      href: "#",
    },
  ],
  [
    {
      label: "Log out",
      icon: LogOut,
      href: "#",
    },
  ],
];

const EmployeeDropdownMenuItemList: Array<
{ label: string; icon: any; href: string }[]
> = [
  [
    {
      label: "Profile",
      icon: User2,
      href: "#",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "#",
    },
    {
      label: "Messages",
      icon: MailWarning,
      href: "#",
    },
  ],
  [
    {
      label: "Team Space",
      icon: Newspaper,
      href: "#",
    },
    {
      label: "Job",
      icon: Hammer,
      href: "#",
    },
    {
      label: "Payroll",
      icon: CreditCard,
      href: "#",
    },
  ],
  [
    {
      label: "Log out",
      icon: LogOut,
      href: "#",
    },
  ],
];

const ClientDropdownMenuItemList: Array<
{ label: string; icon: any; href: string }[]
> = [
  [
    {
      label: "Profile",
      icon: User2,
      href: "#",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "#",
    },
    {
      label: "Messages",
      icon: MailWarning,
      href: "#",
    },
  ],
  [
    {
      label: "Billing",
      icon: CreditCard,
      href: "#",
    },
    {
      label: "Status",
      icon: AreaChart,
      href: "#",
    },
    {
      label: "Meetings",
      icon: Phone,
      href: "#",
    },
  ],
  [
    {
      label: "Log out",
      icon: LogOut,
      href: "#",
    },
  ],
];

/**
 * Renders an avatar component.
 *
 * @param {string} src - The URL of the avatar image.
 * @param {string} fallback - The fallback text to display if the image fails to load.
 * @param {string} alt - The alt text for the avatar image.
 * @return {JSX.Element} The rendered avatar component.
 *
 * @example <Avatar src="/avatar.png" alt="Avatar" fallback="AV" />
 */
export default function User({
  src,
  fallback,
  alt,
  type,
}: {
  src: string;
  fallback: string;
  alt: string;
  type: "Employee" | "Client" | "Admin";
}) {
  const DropDownList = type === "Employee"
    ? EmployeeDropdownMenuItemList
    : type === "Client"
      ? ClientDropdownMenuItemList
      : AdminDropdownMenuItemList;

  return (
    <div
      className={cn(
        "relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full items-center justify-center",
        type === "Employee"
          ? "bg-red-500"
          : type === "Client"
            ? "bg-green-600"
            : "bg-purple-900",
      )}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <AvatarPrimitive>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </AvatarPrimitive>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {DropDownList.map((list, index) => (
            <Fragment key={list.length * Math.random()}>
              <DropdownMenuGroup>
                {list.map((item) => (
                  <DropdownMenuItem key={item.href + Math.random()}>
                    <Link className="flex w-full items-center" href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              {index !== AdminDropdownMenuItemList.length - 1 && (
              <DropdownMenuSeparator />
              )}
            </Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
