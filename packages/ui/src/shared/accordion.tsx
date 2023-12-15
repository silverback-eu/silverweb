import { ChevronDown } from "lucide-react";
import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from "@radix-ui/react-accordion";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";

const Accordion = Root;

const AccordionItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => (
  <Item className={uicn("ui-border-b", className)} ref={ref} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Header className="ui-flex">
    <Trigger
      className={uicn(
        "ui-flex ui-flex-1 ui-items-center ui-justify-between ui-py-4 ui-font-medium ui-transition-all hover:ui-underline [&[data-state=open]>svg]:ui-rotate-180",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronDown className="ui-h-4 ui-w-4 ui-shrink-0 ui-transition-transform ui-duration-200" />
    </Trigger>
  </Header>
));
AccordionTrigger.displayName = Trigger.displayName;

const AccordionContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content
    className="ui-overflow-hidden ui-text-sm ui-transition-all data-[state=closed]:ui-animate-accordion-up data-[state=open]:ui-animate-accordion-down"
    ref={ref}
    {...props}
  >
    <div className={uicn("ui-pb-4 ui-pt-0", className)}>{children}</div>
  </Content>
));

AccordionContent.displayName = Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
