"use client";

import {
  ClipboardList,
  ClipboardSignature,
  Clock7,
  Eye,
  Globe2,
  HardHat,
  Lightbulb,
  Link as LinkIcon,
  Monitor,
  PencilRuler,
  Search,
  User,
  User2,
  Users,
} from "lucide-react";
import type { CSSProperties, ReactElement } from "react";
import { useLayoutEffect, useState } from "react";
import type {
  InViewHookResponse,
  IntersectionOptions,
} from "react-intersection-observer";
import { useInView } from "react-intersection-observer";
import TypewriterComponent from "typewriter-effect";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import {
  Button,
  Card,
  CardContent,
  DisplayCard,
  Flow,
  VanillaRadioGroup,
  VanillaRadioInput,
  cn,
} from "@silverweb/ui";
import Link from "next/link";

export function Typewriter(): JSX.Element {
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
}): JSX.Element {
  const [heroCards, heroCardsAreVisible] = (
    useInView as (props: IntersectionOptions) => InViewHookResponse
  )({
    threshold: 0.3,
    trackVisibility: true,
    delay: 100,
  });

  return (
    <div className="items-center p-3 lg:p-7" ref={heroCards}>
      <div
        className={cn(
          "h-full space-y-2 transition-all duration-1000",
          heroCardsAreVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-60 opacity-0",
        )}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <Icon.type {...Icon.props} className="h-6 w-6" />
        </div>
        <div className="text-xl font-bold">{title}</div>
        <div className="hidden text-muted-foreground xl:block">{content}</div>
        <div className="line-clamp-3 text-sm text-muted-foreground xl:hidden">
          {fallBack}
        </div>
      </div>
    </div>
  );
}

export function FlowBackground(): JSX.Element {
  return (
    <Flow
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
          data: {
            content: (
              <div aria-label="placeholder" className="text-transparent">
                Placeholder
              </div>
            ),
            className: "border-0",
          },
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
    />
  );
}

function AnimatedCounter({
  value,
  duration = 1000,
  start,
}: {
  duration?: number;
  value: number;
  start?: boolean;
}): JSX.Element {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    // eslint-disable-next-line no-undef -- eslint doesn't know about NodeJS.Timeout
    let interval: NodeJS.Timeout;

    if (start) {
      interval = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + 1, value));
        if (count === value) clearInterval(interval);
      }, duration / value);
    }

    return () => {
      clearInterval(interval);
    };
  }, [start, count, duration, value]);

  return <span>{count}</span>;
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
}): JSX.Element {
  const [infoFeatures, infoFeaturesAreVisible] = useInView({
    threshold: 0.4,
  });

  return (
    <div ref={infoFeatures}>
      <div className="grid justify-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-xl bg-muted p-3 opacity-50">
            <Icon.type {...Icon.props} className="h-7 w-7" />
          </div>
        </div>
        <p className="text-center text-4xl font-bold">
          <AnimatedCounter start={infoFeaturesAreVisible} value={number} />+
          {` ${metric}`}
        </p>
        <p className="text-center text-2xl font-bold">{subheading}</p>
        <p className="mt-4 max-w-md text-center text-base opacity-50">
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
}): JSX.Element {
  return (
    <div className="inline-block px-3">
      <DisplayCard Icon={Icon} description={content} header={heading} />
    </div>
  );
}

//TODO: Make it a form using smart Inputs
export function ContactForm(): JSX.Element {
  return (
    <div className=" text-left md:mx-16 lg:mx-40 xl:mx-16">
      <p className="text-3xl font-bold drop-shadow-lg md:text-5xl">
        Embrace Success
        <br /> with SilverBack:
      </p>
      <p className="text-base font-bold drop-shadow-lg md:text-xl">
        Shaping Futures Together! Get in touch
      </p>
      <div className="flex gap-1 text-xs text-warm md:text-base">
        <p>
          Fill out the form or contact us directly via{" "}
          <span
            aria-roledescription="mail"
            className="inline-flex h-4 items-center justify-center rounded-md p-0 text-xs font-medium text-warm underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:h-6 md:text-base"
            onClick={() =>
              window.open(
                "mailto:work@silverback.ie?subject=Request%20via%20Website%20&body=Hey%20Team%20SilverBack%2C%0A%0AI%2FWe%20want%20to%20work%20with%20you.%0A%0AWe're%2FI'm...%0A%0ARegards%2C",
              )
            }
            onKeyDown={() =>
              window.open(
                "mailto:work@silverback.ie?subject=Request%20via%20Website%20&body=Hey%20Team%20SilverBack%2C%0A%0AI%2FWe%20want%20to%20work%20with%20you.%0A%0AWe're%2FI'm...%0A%0ARegards%2C",
              )
            }
            role="button"
            tabIndex={0}
          >
            work@silverback.ie
          </span>
        </p>
      </div>
      <div className="mt-20 px-2 md:px-20">
        <VanillaRadioGroup className="grid gap-5">
          <VanillaRadioInput
            cardDescription="Work with us and be a partner"
            cardLabel="I have a project"
            icon={<Lightbulb size={24} />}
            id="partner"
            value="partner"
            variant="big"
          />
          <VanillaRadioInput
            cardDescription="Work for us and join the team"
            cardLabel="I want to support"
            icon={<LinkIcon size={24} />}
            id="team"
            value="team"
            variant="big"
          />
        </VanillaRadioGroup>
      </div>
      <div className="mx-auto mt-8 flex w-28 items-center justify-center gap-2">
        <div className="h-[18px] w-[18px] rounded-full bg-muted" />
        <div className="h-4 w-4 rounded-full bg-muted opacity-70" />
        <div className="h-4 w-4 rounded-full bg-muted  opacity-70" />
      </div>
      <div className="mt-8 flex justify-end px-2 md:px-20">
        <Button
          onClick={() => {
            console.warn("Not implemented yet");
          }}
        >
          Let&apos;s Work Together
        </Button>
      </div>
    </div>
  );
}

export function WorkFlowCard({
  Icon,
  heading,
  content,
  leftRight,
}: {
  Icon: ReactElement;
  heading: string;
  content: string;
  leftRight?: "left" | "right";
}): JSX.Element {
  const [workFlowCard, workFlowCardAreVisible] = useInView({
    threshold: 0.4,
  });

  let CardUnvisiableStyling = "opacity-0 translate-x-20";

  if (leftRight === "left") {
    CardUnvisiableStyling = "-translate-x-20 opacity-0";
  }

  return (
    <div
      className={cn("flex items-center", leftRight === "left" && "justify-end")}
      ref={workFlowCard}
    >
      <DisplayCard
        Icon={Icon}
        className={cn(
          "h-max w-max transition-all duration-500",
          workFlowCardAreVisible
            ? "translate-x-0 opacity-100"
            : CardUnvisiableStyling,
        )}
        description={content}
        header={heading}
      />
    </div>
  );
}

export function ProjectCard({
  img,
  title,
  category,
  location,
  description,
}: {
  img: StaticImageData;
  title: string;
  category: string;
  location: {
    city: string;
    country: string;
  };
  description: string;
}): JSX.Element {
  return (
    <div>
      <Card className="w-[300px] text-left">
        <CardContent className="p-4">
          <div className="relative h-[268px] w-[268px] overflow-hidden rounded-lg bg-gray-500">
            <Image
              alt={`${title} image`}
              className="z-10 object-cover transition-all duration-500 hover:scale-105"
              fill
              loading="lazy"
              sizes="100%"
              src={img}
            />
          </div>
          <div className="mt-3 line-clamp-1 text-lg font-bold">{title}</div>
          <Button className="h-auto text-ellipsis p-0" variant="link">
            {category}
          </Button>
          <div className="line-clamp-1 text-sm font-bold text-warm">
            {location.city},{location.country}
          </div>
          <div className="line-clamp-3 text-sm text-warm">{description}</div>
        </CardContent>
      </Card>
    </div>
  );
}

export function PartnerCard({
  img,
  href,
  className,
  style,
}: {
  img: StaticImageData;
  href: string;
  className?: string;
  style?: CSSProperties;
}): JSX.Element {
  const [CardRef, CardIsVisible] = useInView({
    threshold: 0.5,
    trackVisibility: true,
    delay: 100,
  });

  return (
    <Link
      className={cn(
        "transition-all duration-500",
        CardIsVisible ? "opacity-100" : "opacity-0",
      )}
      draggable={false}
      href={`${href} `}
      ref={CardRef}
      target="_blank"
    >
      <Card
        className={cn(
          "select-none opacity-50 transition-all duration-500 hover:opacity-100",
          className,
        )}
        style={style}
      >
        <CardContent className="p-5">
          <Image
            alt={img.src}
            className="h-auto w-[200px]"
            draggable={false}
            height={67.19}
            src={img}
            width={200}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
