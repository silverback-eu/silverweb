/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Inspired, copied and slightly modified or directly copied from:
 * https://ui.shadcn.com/
 * Many Thanks to shadcn
 *
 */

"use client";

import { Root, Image, Fallback } from "@radix-ui/react-avatar";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

type AvatarProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Root>;

const Avatar = forwardRef<ElementRef<typeof Root>, AvatarProps>(
  ({ className, ...props }, ref) => (
    <Root
      className={cn(
        "relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Avatar.displayName = Root.displayName;

type AvatarImageProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Image>;

const AvatarImage = forwardRef<ElementRef<typeof Image>, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <Image
      className={cn("aspect-square h-full w-full", className)}
      ref={ref}
      {...props}
    />
  )
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
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    ref={ref}
    {...props}
  />
));
AvatarFallback.displayName = Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
