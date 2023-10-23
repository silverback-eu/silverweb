"use client";

import Flow from "@/components/silverweb/app/Flow";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ClipboardList,
  ClipboardSignature,
  Clock7,
  Eye,
  Globe2,
  HardHat,
  LucideIcon,
  Monitor,
  PencilRuler,
  Search,
  User,
  User2,
  Users,
} from "lucide-react";
import { Fragment, ReactElement, useLayoutEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import TypewriterComponent from "typewriter-effect";

export function Typewriter() {
  return (
    <TypewriterComponent
      options={{
        strings: [
          " <b style='color: #fff;'>sustainable<b/>",
          " <b style='color: #fff;'>greener<b/>",
          " <b style='color: #fff;'>smarter<b/>",
          " <b style='color: #fff;'>modern<b/>",
          " <b style='color: #fff;'>digitised<b/>",
          " <b style='color: #fff;'>connected<b/>",
          " <b style='color: #fff;'>better<b/>",
        ],
        cursor: "|",
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export function HeroCards({
  title,
  content,
  Icon,
  fallBack,
}: {
  title: string;
  content: string;
  Icon: ReactElement;
  fallBack: string;
}) {
  const [heroCards, heroCardsAreVisible] = useInView({
    threshold: 0.3,
    trackVisibility: true,
    delay: 100,
  });
  return (
    <div ref={heroCards} className="p-3 lg:p-7 items-center">
      <div
        className={cn(
          "space-y-2 h-full transition-all duration-1000",
          heroCardsAreVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-60"
        )}
      >
        <div className="bg-muted h-10 w-10 rounded-lg flex justify-center items-center">
          <Icon.type {...Icon.props} className="w-6 h-6" />
        </div>
        <div className="font-bold text-xl">{title}</div>
        <div className="hidden xl:block text-muted-foreground">{content}</div>
        <div className="xl:hidden text-muted-foreground text-sm line-clamp-3">
          {fallBack}
        </div>
      </div>
    </div>
  );
}

export function FlowBackground() {
  return (
    <Flow
      initialNodes={[
        {
          id: "flow1-1",
          type: "displayNodeOutput",
          position: { x: 0, y: 120 },
          data: {
            label: "Goals and Plan",
            description: "Set your goals and sustainable plan.",
            Icon: ClipboardList,
            className: "text-green-500",
          },
        },
        {
          id: "flow1-2",
          type: "displayNode",
          position: { x: 100, y: 240 },
          data: {
            label: "Team",
            description: "Select suitable partners to assist you.",
            Icon: User2,
            className: "text-purple-500",
          },
        },
        {
          id: "flow1-3",
          type: "displayNode",
          position: { x: 200, y: 360 },
          data: {
            label: "Control",
            description: "Check the sustainability of your project.",
            Icon: Eye,
            className: "text-yellow-500",
          },
        },
        {
          id: "flow1-4",
          type: "displayNode",
          position: { x: 100, y: 480 },
          data: {
            label: "Monitor and Maintain",
            description: "Monitor the fished projects and maintain.",
            Icon: Monitor,
            className: "text-blue-500",
          },
        },
        {
          id: "flow2-1",
          type: "displayNodeOutput",
          position: { x: 900, y: 0 },
          data: {
            direction: "horizontal",
            label: "Team",
            description: "Plan scope of work.",
            className: "text-purple-500",
            Icon: ClipboardSignature,
          },
        },
        {
          id: "flow2-2",
          type: "displayNode",
          position: { x: 1100, y: 70 },
          data: {
            label: "Blue collar",
            description: "Do we need blue collar worker.",
            className: "text-blue-500",
            Icon: HardHat,
          },
        },
        {
          id: "flow2-3",
          type: "displayNode",
          position: { x: 1400, y: 70 },
          data: {
            label: "White collar",
            description: "Do we need white collar worker.",
            className: "text-yellow-500",
            Icon: PencilRuler,
          },
        },
        {
          id: "flow2-4",
          type: "displayNode",
          position: { x: 1200, y: 240 },
          data: {
            label: "Multiple vendors",
            description: "Select team from multiple vendors.",
            className: "text-orange-500",
            Icon: Users,
          },
        },
        {
          id: "flow2-5",
          type: "displayNode",
          position: { x: 1500, y: 240 },
          data: {
            label: "Single vendor",
            description: "Select team from one vendor.",
            className: "text-green-500",
            Icon: User,
          },
        },
        {
          id: "flow2-6",
          type: "displayNode",
          position: { x: 1200, y: 400 },
          data: {
            label: "More work",
            description: "Find different vendors.",
            className: "text-pink-500",
            Icon: Clock7,
          },
        },
        {
          id: "flow2-7",
          type: "displayNodeInput",
          position: { x: 1400, y: 480 },
          data: {
            label: "SilverBack",
            description: "Work with SilverBack.",
            Icon: Globe2,
          },
        },
        {
          id: "placeholder",
          type: "cardNodeWithout",
          position: { x: 1400, y: 1000 },
          data: {},
        },
        {
          id: "flow3-1",
          type: "displayNodeOutput",
          position: { x: 500, y: 500 },
          data: {
            label: "Goals",
            description: "Define your goals.",
            Icon: ClipboardList,
            className: "text-orange-500",
          },
        },
        {
          id: "flow3-2",
          type: "displayNode",
          position: { x: 650, y: 600 },
          data: {
            direction: "horizontal",
            label: "Resources",
            className: "text-blue-500",
            description: "Identify your resources.",
            Icon: Search,
          },
        },
        {
          id: "flow3-3",
          type: "displayNode",
          position: { x: 950, y: 600 },
          data: {
            label: "Plan",
            direction: "horizontal",
            className: "text-yellow-500",
            description: "Create a action plan.",
            Icon: ClipboardSignature,
          },
        },
        {
          id: "flow3-4",
          type: "displayNodeInput",
          position: { x: 950, y: 700 },
          data: {
            label: "Monitor",
            className: "text-green-500",
            description: "Monitor your progress.",
            Icon: Monitor,
          },
        },
      ]}
      defaultViewport={{
        zoom: 2,
        x: -700,
        y: -400,
      }}
      fitViewOptions={{
        duration: 1000,
        padding: 0.1,
      }}
      initialEdges={[
        {
          id: "flow1-1-2",
          source: "flow1-1",
          target: "flow1-2",
        },
        {
          id: "flow1-2-3",
          source: "flow1-2",
          target: "flow1-3",
        },
        {
          id: "flow1-3-4",
          source: "flow1-3",
          target: "flow1-4",
        },
        {
          id: "flow2-1-2",
          source: "flow2-1",
          target: "flow2-2",
        },
        {
          id: "flow2-1-3",
          source: "flow2-1",
          target: "flow2-3",
        },
        {
          id: "flow2-2-4",
          source: "flow2-2",
          target: "flow2-4",
        },
        {
          id: "flow2-2-5",
          source: "flow2-2",
          target: "flow2-5",
        },
        {
          id: "flow2-3-4",
          source: "flow2-3",
          target: "flow2-4",
        },
        {
          id: "flow2-3-5",
          source: "flow2-3",
          target: "flow2-5",
        },
        {
          id: "flow2-4-6",
          source: "flow2-4",
          target: "flow2-6",
        },
        {
          id: "flow2-4-7",
          source: "flow2-4",
          target: "flow2-7",
        },
        {
          id: "flow2-5-7",
          source: "flow2-5",
          target: "flow2-7",
        },
        {
          id: "flow3-1-2",
          source: "flow3-1",
          target: "flow3-2",
        },
        {
          id: "flow3-2-3",
          source: "flow3-2",
          target: "flow3-3",
        },
        {
          id: "flow3-3-4",
          source: "flow3-3",
          target: "flow3-4",
        },
      ]}
    />
  );
}

export function InfoFeature({
  number,
  metric,
  Icon,
  subheading,
  content,
}: {
  number: number;
  metric: string;
  Icon: ReactElement;
  subheading: string;
  content: string;
}) {
  const [infoFeatures, infoFeaturesAreVisible] = useInView({
    threshold: 0.4,
  });
  function AnimatedCounter({
    value,
    duration = 1000,
    start,
  }: {
    duration?: number;
    value: number;
    start?: boolean;
  }) {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
      let interval: NodeJS.Timeout;

      if (start) {
        interval = setInterval(() => {
          setCount((prevCount) => Math.min(prevCount + 1, value));
          if (count === value) clearInterval(interval);
        }, duration / value);
      }

      return () => clearInterval(interval);
    }, [start, count, duration, value]);

    return <Fragment>{count}</Fragment>;
  }

  return (
    <div ref={infoFeatures}>
      <div className="grid justify-center">
        <div className="flex justify-center mb-4">
          <div className="rounded-xl bg-muted p-3 opacity-50">
            <Icon.type {...Icon.props} className="h-7 w-7" />
          </div>
        </div>
        <p className="text-4xl font-bold text-center">
          <AnimatedCounter start={infoFeaturesAreVisible} value={number} />+  
          {metric}
        </p>
        <p className="font-bold text-2xl text-center">{subheading}</p>
        <p className="text-base opacity-50 text-center mt-4 max-w-md">
          {content}
        </p>
      </div>
    </div>
  );
}


export function FeaturesCard({
    Icon,
    heading,
    content,
  }: {
    Icon: ReactElement;
    heading: string;
    content: string;
  }) {
    return (
      <div className="inline-block px-3">
        <Card>
          <CardContent className="p-1 flex items-center">
            <div className="p-2 bg-muted rounded-lg m-2">
              <Icon.type {...Icon.props} className="w-6 h-6" />
            </div>
            <div className="text-left pr-4">
              <div className="font-bold text-base ">{heading}</div>
              <div className="text-xs font-normal opacity-50">{content}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }