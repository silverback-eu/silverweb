import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";

type CardProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      className={uicn(
        "ui-rounded-xl ui-border ui-bg-card ui-text-card-foreground ui-shadow",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Card.displayName = "Card";

type CardHeaderProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      className={uicn("ui-flex ui-flex-col ui-space-y-1.5 ui-p-6", className)}
      ref={ref}
      {...props}
    />
  ),
);
CardHeader.displayName = "CardHeader";

type CardTitleProps = {
  className?: string;
} & HTMLAttributes<HTMLHeadingElement>;

const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h3
      className={uicn(
        "ui-font-semibold ui-leading-none ui-tracking-tight",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </h3>
  ),
);
CardTitle.displayName = "CardTitle";

type CardDescriptionProps = {
  className?: string;
} & HTMLAttributes<HTMLParagraphElement>;

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      className={uicn("ui-text-sm ui-text-muted-foreground", className)}
      ref={ref}
      {...props}
    />
  ),
);
CardDescription.displayName = "CardDescription";

type CardContentProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div className={uicn("ui-p-6 ui-pt-0", className)} ref={ref} {...props} />
  ),
);
CardContent.displayName = "CardContent";

type CardFooterProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      className={uicn("ui-flex ui-items-center ui-p-6 ui-pt-0", className)}
      ref={ref}
      {...props}
    />
  ),
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
