import { HTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Card = forwardRef<
HTMLDivElement,
CardProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

type CardHeaderProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const CardHeader = forwardRef<
HTMLDivElement,
CardHeaderProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

type CardTitleProps = {
  className?: string;
} & HTMLAttributes<HTMLHeadingElement>;

const CardTitle = forwardRef<
HTMLParagraphElement,
CardTitleProps
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </h3>
));
CardTitle.displayName = "CardTitle";

type CardDescriptionProps = {
  className?: string;
} & HTMLAttributes<HTMLParagraphElement>;

const CardDescription = forwardRef<
HTMLParagraphElement,
CardDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

type CardContentProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const CardContent = forwardRef<
HTMLDivElement,
CardContentProps
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

type CardFooterProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const CardFooter = forwardRef<
HTMLDivElement,
CardFooterProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent,
};
