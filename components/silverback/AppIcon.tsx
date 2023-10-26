import { LucideIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export default function AppIcon(props: {
  link: string;
  gradient?: string;
  name?: string;
  icon: LucideIcon;
  size?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150;
}) {
  const { gradient, size, name, link, ...rest } = props;

  return (
    <Link href={link} className="relative">
      <div
        className={cn(
          "rounded-md bg-gradient-to-r  p-1 w-12 h-12 flex justify-center content-center flex-wrap",
          gradient,
          size && `w-[${size / 10}rem]`,
        )}
      >
        <rest.icon strokeWidth={3} size={size || 30} />
      </div>
      {name && <span className="text-xs absolute left-1/2 -translate-x-1/2">{name}</span>}
    </Link>
  );
}
