import type { LucideIcon } from "lucide-react";
import { uicn } from "../lib";

export function AppIcon(props: {
  link: string;
  gradient?: string;
  name?: string;
  icon: LucideIcon;
  size?:
    | 10
    | 20
    | 30
    | 40
    | 50
    | 60
    | 70
    | 80
    | 90
    | 100
    | 110
    | 120
    | 130
    | 140
    | 150;
}): JSX.Element {
  const { gradient, size, name, link, ...rest } = props;

  return (
    <a className="ui-relative" href={link}>
      <div
        className={uicn(
          "ui-flex ui-h-12 ui-w-12 ui-flex-wrap ui-content-center ui-justify-center ui-rounded-md ui-bg-gradient-to-r ui-p-1",
          gradient,
          size && `ui-w-[${size / 10}rem]`,
        )}
      >
        <rest.icon size={size || 30} strokeWidth={3} />
      </div>
      {name ? (
        <span className="ui-absolute ui-left-1/2 -ui-translate-x-1/2 ui-text-xs">
          {name}
        </span>
      ) : null}
    </a>
  );
}
