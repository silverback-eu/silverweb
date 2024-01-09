import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { uicn } from "../lib/utils";

const { Trigger, Portal, Close, Overlay, Content, Title, Description } =
  DrawerPrimitive;

function Drawer({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>): JSX.Element {
  return (
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  );
}
Drawer.displayName = "Drawer";

const DrawerTrigger = Trigger;

const DrawerPortal = Portal;

const DrawerClose = Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof Overlay>,
  React.ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay
    className={uicn("ui-fixed ui-inset-0 ui-z-50 ui-bg-black/80", className)}
    ref={ref}
    {...props}
  />
));
DrawerOverlay.displayName = Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <Content
      className={uicn(
        "ui-fixed ui-inset-x-0 ui-bottom-0 ui-z-50 ui-mt-24 ui-flex ui-h-auto ui-flex-col ui-rounded-t-[10px] ui-border ui-bg-background",
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className="ui-mx-auto ui-mt-4 ui-h-2 ui-w-[100px] ui-rounded-full ui-bg-muted" />
      {children}
    </Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

function DrawerHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={uicn(
        "ui-grid ui-gap-1.5 ui-p-4 ui-text-center sm:ui-text-left",
        className,
      )}
      {...props}
    />
  );
}
DrawerHeader.displayName = "DrawerHeader";

function DrawerFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={uicn(
        "ui-mt-auto ui-flex ui-flex-col ui-gap-2 ui-p-4",
        className,
      )}
      {...props}
    />
  );
}
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    className={uicn(
      "ui-text-lg ui-font-semibold ui-leading-none ui-tracking-tight",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DrawerTitle.displayName = Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    className={uicn("ui-text-sm ui-text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
));
DrawerDescription.displayName = Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
