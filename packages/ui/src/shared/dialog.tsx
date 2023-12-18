import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Close,
  Title,
  Description,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
} from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";

const Dialog = Root;

const DialogTrigger = Trigger;

const DialogPortal = Portal;

type DialogOverlayProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Overlay>;

const DialogOverlay = forwardRef<
  ElementRef<typeof Overlay>,
  DialogOverlayProps
>(({ className, ...props }, ref) => (
  <Overlay
    className={uicn(
      "ui-fixed ui-inset-0 ui-z-50 ui-bg-background/80 ui-backdrop-blur-sm data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DialogOverlay.displayName = Overlay.displayName;

type DialogContentProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Content>;

const DialogContent = forwardRef<
  ElementRef<typeof Content>,
  DialogContentProps
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <Content
      className={uicn(
        "ui-fixed ui-left-1/2 ui-top-1/2 ui-z-50 ui-grid ui-w-full ui-max-w-lg -ui-translate-x-1/2 -ui-translate-y-1/2 ui-gap-4 ui-border ui-bg-background ui-p-6 ui-shadow-lg ui-duration-200 data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0 data-[state=closed]:ui-zoom-out-95 data-[state=open]:ui-zoom-in-95 data-[state=closed]:ui-slide-out-to-left-1/2 data-[state=closed]:ui-slide-out-to-top-[48%] data-[state=open]:ui-slide-in-from-left-1/2 data-[state=open]:ui-slide-in-from-top-[48%] sm:ui-rounded-lg md:ui-w-full",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <Close className="ui-absolute ui-right-4 ui-top-4 ui-rounded-sm ui-opacity-70 ui-ring-offset-background ui-transition-opacity hover:ui-opacity-100 focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-ring focus:ui-ring-offset-2 disabled:ui-pointer-events-none data-[state=open]:ui-bg-accent data-[state=open]:ui-text-muted-foreground">
        <X className="ui-h-3 ui-w-3" />
        <span className="ui-sr-only">Close</span>
      </Close>
    </Content>
  </DialogPortal>
));
DialogContent.displayName = Content.displayName;

type DialogHeaderProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

function DialogHeader({ className, ...props }: DialogHeaderProps): JSX.Element {
  return (
    <div
      className={uicn(
        "ui-flex ui-flex-col ui-space-y-1.5 ui-text-center sm:ui-text-left",
        className,
      )}
      {...props}
    />
  );
}
DialogHeader.displayName = "DialogHeader";

type DialogFooterProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

function DialogFooter({ className, ...props }: DialogFooterProps): JSX.Element {
  return (
    <div
      className={uicn(
        "ui-flex ui-flex-col-reverse sm:ui-flex-row sm:ui-justify-end sm:ui-space-x-2",
        className,
      )}
      {...props}
    />
  );
}
DialogFooter.displayName = "DialogFooter";

type DialogTitleProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Title>;

const DialogTitle = forwardRef<ElementRef<typeof Title>, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <Title
      className={uicn(
        "ui-text-lg ui-font-semibold ui-leading-none ui-tracking-tight",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
DialogTitle.displayName = Title.displayName;

type DialogDescriptionProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Description>;

const DialogDescription = forwardRef<
  ElementRef<typeof Description>,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <Description
    className={uicn("ui-text-sm ui-text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
));
DialogDescription.displayName = Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
