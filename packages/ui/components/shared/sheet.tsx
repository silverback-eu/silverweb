"use client";

import type { DialogPortalProps } from "@radix-ui/react-dialog";
import {
  Root,
  Trigger,
  Content,
  Description,
  Portal,
  Close,
  Overlay,
  Title,
} from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cva, type VariantProps } from "class-variance-authority";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
} from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Sheet = Root;

const SheetTrigger = Trigger;

const SheetClose = Close;

function SheetPortal({ ...props }: DialogPortalProps): JSX.Element {
  return <Portal {...props} />;
}
SheetPortal.displayName = Portal.displayName;

type SheetOverlayProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Overlay>;

const SheetOverlay = forwardRef<ElementRef<typeof Overlay>, SheetOverlayProps>(
  ({ className, ...props }, ref) => (
    <Overlay
      className={cn(
        "fixed inset-0 z-50 bg-background/20 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
      ref={ref}
    />
  )
);
SheetOverlay.displayName = Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SheetContentProps
  extends ComponentPropsWithoutRef<typeof Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = forwardRef<ElementRef<typeof Content>, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <Content
        className={cn(sheetVariants({ side }), className)}
        ref={ref}
        {...props}
      >
        {children}
        <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Close>
      </Content>
    </SheetPortal>
  )
);
SheetContent.displayName = Content.displayName;

type SheetHeaderProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

function SheetHeader({ className, ...props }: SheetHeaderProps): JSX.Element {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      )}
      {...props}
    />
  );
}
SheetHeader.displayName = "SheetHeader";

type SheetFooterProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

function SheetFooter({ className, ...props }: SheetFooterProps): JSX.Element {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  );
}
SheetFooter.displayName = "SheetFooter";

type SheetTitleProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Title>;

const SheetTitle = forwardRef<ElementRef<typeof Title>, SheetTitleProps>(
  ({ className, ...props }, ref) => (
    <Title
      className={cn("text-lg font-semibold text-foreground", className)}
      ref={ref}
      {...props}
    />
  )
);
SheetTitle.displayName = Title.displayName;

type SheetDescriptionProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Description>;

const SheetDescription = forwardRef<
  ElementRef<typeof Description>,
  SheetDescriptionProps
>(({ className, ...props }, ref) => (
  <Description
    className={cn("text-sm text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
));
SheetDescription.displayName = Description.displayName;

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
