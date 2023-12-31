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
import type { ReactElement } from "react";
import { Fragment } from "react";
import { uicn } from "../lib";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

type MenuListProps = {
  label: string;
  Icon: ReactElement;
  href: string;
}[][];

const AdminDropdownMenuItemList: MenuListProps = [
  [
    {
      label: "Profile",
      Icon: <User2 />,
      href: "#",
    },
    {
      label: "Settings",
      Icon: <Settings />,
      href: "#",
    },
    {
      label: "Messages",
      Icon: <MailWarning />,
      href: "#",
    },
  ],
  [
    {
      label: "Team Space",
      Icon: <Newspaper />,
      href: "#",
    },
    {
      label: "Chat",
      Icon: <MessagesSquare />,
      href: "#",
    },
    {
      label: "Task",
      Icon: <Tags />,
      href: "#",
    },
    {
      label: "SilverWeb",
      Icon: <Globe2 />,
      href: "#",
    },
  ],
  [
    {
      label: "Log out",
      Icon: <LogOut />,
      href: "#",
    },
  ],
];

const EmployeeDropdownMenuItemList: MenuListProps = [
  [
    {
      label: "Profile",
      Icon: <User2 />,
      href: "#",
    },
    {
      label: "Settings",
      Icon: <Settings />,
      href: "#",
    },
    {
      label: "Messages",
      Icon: <MailWarning />,
      href: "#",
    },
  ],
  [
    {
      label: "Team Space",
      Icon: <Newspaper />,
      href: "#",
    },
    {
      label: "Job",
      Icon: <Hammer />,
      href: "#",
    },
    {
      label: "Payroll",
      Icon: <CreditCard />,
      href: "#",
    },
  ],
  [
    {
      label: "Log out",
      Icon: <LogOut />,
      href: "#",
    },
  ],
];

const ClientDropdownMenuItemList: MenuListProps = [
  [
    {
      label: "Profile",
      Icon: <User2 />,
      href: "#",
    },
    {
      label: "Settings",
      Icon: <Settings />,
      href: "#",
    },
    {
      label: "Messages",
      Icon: <MailWarning />,
      href: "#",
    },
  ],
  [
    {
      label: "Billing",
      Icon: <CreditCard />,
      href: "#",
    },
    {
      label: "Status",
      Icon: <AreaChart />,
      href: "#",
    },
    {
      label: "Meetings",
      Icon: <Phone />,
      href: "#",
    },
  ],
  [
    {
      label: "Log out",
      Icon: <LogOut />,
      href: "#",
    },
  ],
];

export function User({
  src,
  fallback,
  alt,
  type,
}: {
  src: string;
  fallback: string;
  alt: string;
  type: "Employee" | "Client" | "Admin";
}): JSX.Element {
  let DropDownList: MenuListProps = [];
  let BorderColor: "bg-red-500" | "bg-green-600" | "bg-purple-900" | "" = "";

  switch (type) {
    case "Admin":
      DropDownList = AdminDropdownMenuItemList;
      BorderColor = "bg-purple-900";
      break;
    case "Employee":
      DropDownList = EmployeeDropdownMenuItemList;
      BorderColor = "bg-red-500";
      break;
    case "Client":
      DropDownList = ClientDropdownMenuItemList;
      BorderColor = "bg-green-600";
      break;
    default:
      break;
  }

  return (
    <div
      className={uicn(
        "ui-relative ui-flex ui-h-9 ui-w-9 ui-shrink-0 ui-items-center ui-justify-center ui-overflow-hidden ui-rounded-full",
        BorderColor,
      )}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage alt={alt} src={src} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {DropDownList.map((list, index) => (
            <Fragment key={list.length * Math.random()}>
              <DropdownMenuGroup>
                {list.map((item) => (
                  <DropdownMenuItem key={item.href + Math.random()}>
                    <a
                      className="ui-flex ui-w-full ui-items-center"
                      href={item.href}
                    >
                      <item.Icon.type
                        {...item.Icon.props}
                        className="ui-mr-2 ui-h-4 ui-w-4"
                      />
                      <span>{item.label}</span>
                    </a>
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
