import { Root, Image, Fallback } from "@radix-ui/react-avatar";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";

type AvatarProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Root>;

const Avatar = forwardRef<ElementRef<typeof Root>, AvatarProps>(
  ({ className, ...props }, ref) => (
    <Root
      className={uicn(
        "ui-relative ui-flex ui-h-8 ui-w-8 ui-shrink-0 ui-overflow-hidden ui-rounded-full",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Avatar.displayName = Root.displayName;

type AvatarImageProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Image>;

const AvatarImage = forwardRef<ElementRef<typeof Image>, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <Image
      className={uicn("ui-aspect-square ui-h-full ui-w-full", className)}
      ref={ref}
      {...props}
    />
  ),
);
AvatarImage.displayName = Image.displayName;

type AvatarFallbackProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Fallback>;

const AvatarFallback = forwardRef<
  ElementRef<typeof Fallback>,
  AvatarFallbackProps
>(({ className, ...props }, ref) => (
  <Fallback
    className={uicn(
      "ui-flex ui-h-full ui-w-full ui-items-center ui-justify-center ui-rounded-full ui-bg-muted",
      className,
    )}
    ref={ref}
    {...props}
  />
));
AvatarFallback.displayName = Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
