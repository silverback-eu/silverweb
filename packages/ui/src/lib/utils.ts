import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge, twMerge } from "tailwind-merge";

export function uicn(...inputs: ClassValue[]): string {
  const uiMerge = extendTailwindMerge({
    prefix: "ui-",
  });

  return uiMerge(clsx(inputs));
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
