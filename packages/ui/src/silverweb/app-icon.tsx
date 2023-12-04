import type { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

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
    <a className="relative" href={link}>
      <div
        className={cn(
          "rounded-md bg-gradient-to-r  p-1 w-12 h-12 flex justify-center content-center flex-wrap",
          gradient,
          size && `w-[${size / 10}rem]`
        )}
      >
        <rest.icon size={size || 30} strokeWidth={3} />
      </div>
      {name ? (
        <span className="text-xs absolute left-1/2 -translate-x-1/2">
          {name}
        </span>
      ) : null}
    </a>
  );
}
