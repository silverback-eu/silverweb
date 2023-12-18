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
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
} from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";

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
      className={uicn(
        "ui-fixed ui-inset-0 ui-z-50 ui-bg-background/20 ui-backdrop-blur-[2px] data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0",
        className,
      )}
      {...props}
      ref={ref}
    />
  ),
);
SheetOverlay.displayName = Overlay.displayName;

const sheetVariants = cva(
  "ui-fixed ui-z-50 ui-gap-4 ui-bg-background ui-p-6 ui-shadow-lg ui-transition ui-ease-in-out data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-duration-300 data-[state=open]:ui-duration-500",
  {
    variants: {
      side: {
        top: "ui-inset-x-0 ui-top-0 ui-border-b data-[state=closed]:ui-slide-out-to-top data-[state=open]:ui-slide-in-from-top",
        bottom:
          "ui-inset-x-0 ui-bottom-0 ui-border-t data-[state=closed]:ui-slide-out-to-bottom data-[state=open]:ui-slide-in-from-bottom",
        left: "ui-inset-y-0 ui-left-0 ui-h-full ui-w-3/4 ui-border-r data-[state=closed]:ui-slide-out-to-left data-[state=open]:ui-slide-in-from-left sm:ui-max-w-sm",
        right:
          "ui-inset-y-0 ui-right-0 ui-h-full ui-w-3/4 ui-border-l data-[state=closed]:ui-slide-out-to-right data-[state=open]:ui-slide-in-from-right sm:ui-max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends ComponentPropsWithoutRef<typeof Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = forwardRef<ElementRef<typeof Content>, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <Content
        className={uicn(sheetVariants({ side }), className)}
        ref={ref}
        {...props}
      >
        {children}
        <Close className="ui-absolute ui-right-4 ui-top-4 ui-rounded-sm ui-opacity-70 ui-ring-offset-background ui-transition-opacity hover:ui-opacity-100 focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-ring focus:ui-ring-offset-2 disabled:ui-pointer-events-none data-[state=open]:ui-bg-secondary">
          <X className="ui-h-3 ui-w-3" />
          <span className="ui-sr-only">Close</span>
        </Close>
      </Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = Content.displayName;

type SheetHeaderProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

function SheetHeader({ className, ...props }: SheetHeaderProps): JSX.Element {
  return (
    <div
      className={uicn(
        "ui-flex ui-flex-col ui-space-y-2 ui-text-center sm:ui-text-left",
        className,
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
      className={uicn(
        "ui-flex ui-flex-col-reverse sm:ui-flex-row sm:ui-justify-end sm:ui-space-x-2",
        className,
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
      className={uicn(
        "ui-text-lg ui-font-semibold ui-text-foreground",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
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
    className={uicn("ui-text-sm ui-text-muted-foreground", className)}
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
