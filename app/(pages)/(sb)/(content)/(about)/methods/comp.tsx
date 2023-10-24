"use client";

import {
  Bed,
  ClipboardCheck,
  GanttChartSquare,
  HeartHandshake,
  MessageSquarePlus,
  MessagesSquare,
  Phone,
  Plane,
  Receipt,
  Search,
  Users2,
} from "lucide-react";
import { Fragment, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { useReactFlow } from "reactflow";

import Flow from "@/components/silverweb/app/Flow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function InfoCards({ heading, content }: { heading: string; content: string | ReactNode }) {
  const [infoCards, infoCardsAreVisible] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
  });

  return (
    <Card
      ref={infoCards}
      className={cn(
        "transition-all duration-1000",
        infoCardsAreVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-60",
      )}
    >
      <CardHeader className="p-3 pb-1 space-y-0">
        <CardTitle className="text-base">{heading}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm p-3 pt-0">{content}</CardContent>
    </Card>
  );
}

export function FlowAndNav() {
  const { fitBounds, fitView } = useReactFlow();

  return (
    <Fragment>
      <div>
        <div className="h-[1000px] md:h-full relative before:bg-gradient-to-r before:from-background before:to-transparent before:content-[''] before:h-full before:absolute before:w-12 md:before:w-24 before:z-10 before:top-0 before:left-0 after:bg-gradient-to-r after:to-background after:from-transparent after:content-[''] after:h-full after:absolute after:w-12 md:after:w-24 after:z-10 after:top-0 after:right-0">
          <Flow
            initialNodes={[
              {
                id: "1",
                type: "displayNodeOutput",
                data: {
                  label: "Keep in Touch",
                  description: "Team stays in touch with your project.",
                  Icon: MessagesSquare,
                  className: "text-purple-500",
                },
                position: {
                  x: 250,
                  y: 100,
                },
              },
              {
                id: "2",
                type: "displayNode",
                data: {
                  label: "Call",
                  description: "Request the team on site.",
                  Icon: Phone,
                  className: "text-green-500",
                },
                position: {
                  x: 650,
                  y: 250,
                },
              },
              {
                id: "3",
                type: "displayNode",
                data: {
                  label: "Confirmation",
                  description: "Agree the terms. (LSA)",
                  Icon: HeartHandshake,
                  className: "text-blue-500",
                },
                position: {
                  x: 450,
                  y: 400,
                },
              },
              {
                id: "4",
                type: "displayNode",
                data: {
                  label: "Search",
                  description: "Selecting suitable team.",
                  Icon: Search,
                  className: "text-purple-500",
                },
                position: {
                  x: 250,
                  y: 550,
                },
              },
              {
                id: "5",
                type: "displayNode",
                data: {
                  label: "Travel",
                  description: "Organize the logistics.",
                  Icon: Plane,
                  className: "text-purple-500",
                },
                position: {
                  x: 250,
                  y: 650,
                },
              },
              {
                id: "6",
                type: "displayNode",
                data: {
                  label: "Accommodation",
                  description: "Managing Housing for the team.",
                  Icon: Bed,
                  className: "text-purple-500",
                },
                position: {
                  x: 250,
                  y: 750,
                },
              },
              {
                id: "7",
                type: "displayNode",
                data: {
                  label: "Induction",
                  description: "Team integration",
                  Icon: Users2,
                  className: "text-blue-500",
                },
                position: {
                  x: 450,
                  y: 900,
                },
              },
              {
                id: "8",
                type: "displayNode",
                data: {
                  label: "Supervise",
                  description: "Supervision of the team.",
                  Icon: Users2,
                  className: "text-green-500",
                },
                position: {
                  x: 650,
                  y: 1050,
                },
              },
              {
                id: "9",
                type: "displayNode",
                data: {
                  label: "Quality",
                  description: "Quality control.",
                  Icon: ClipboardCheck,
                  className: "text-green-500",
                },
                position: {
                  x: 650,
                  y: 1150,
                },
              },
              {
                id: "10",
                type: "displayNode",
                data: {
                  label: "Human Resources",
                  description: "Employee management.",
                  Icon: GanttChartSquare,
                  className: "text-purple-500",
                },
                position: {
                  x: 250,
                  y: 1300,
                },
              },
              {
                id: "11",
                type: "displayNode",
                data: {
                  label: "Accounting",
                  description: "Employee payroll.",
                  Icon: Receipt,
                  className: "text-purple-500",
                },
                position: {
                  x: 250,
                  y: 1400,
                },
              },
              {
                id: "12",
                type: "displayNodeInput",
                data: {
                  label: "Feedback",
                  description: "Report us your feedback.",
                  Icon: MessageSquarePlus,
                  className: "text-green-500",
                },
                position: {
                  x: 650,
                  y: 1550,
                },
              },
            ]}
            defaultViewport={{ x: 600, y: 100, zoom: 1 }}
            initialEdges={[
              { id: "e1-2", source: "1", target: "2" },
              { id: "e2-3", source: "2", target: "3" },
              { id: "e3-4", source: "3", target: "4" },
              { id: "e4-5", source: "4", target: "5" },
              { id: "e5-6", source: "5", target: "6" },
              { id: "e6-7", source: "6", target: "7" },
              { id: "e7-8", source: "7", target: "8" },
              { id: "e8-9", source: "8", target: "9" },
              { id: "e9-10", source: "9", target: "10" },
              { id: "e10-11", source: "10", target: "11" },
              { id: "e11-12", source: "11", target: "12" },
            ]}
            fitViewOptions={{
              duration: 1000,
              padding: 0.2,
            }}
            preventScrolling={false}
          />
          <div className=" absolute bg-gradient-to-b from-background to-[80%] to-transparent top-0 left-0 w-full h-12 md:h-24" />
          <div className=" absolute bg-gradient-to-t from-background to-[80%] to-transparent bottom-0 left-0 w-full h-12 md:h-24" />
          <div className=" absolute bg-gradient-to-br from-background to-[80%] to-transparent top-0 left-0 w-24 h-24 md:w-48 md:h-48" />
          <div className=" absolute bg-gradient-to-bl from-background to-[80%] to-transparent top-0 right-0 w-24 h-24 md:w-48 md:h-48" />
          <div className=" absolute bg-gradient-to-tr from-background to-[80%] to-transparent bottom-0 left-0 w-24 h-24 md:w-48 md:h-48" />
          <div className=" absolute bg-gradient-to-tl from-background  to-[80%] to-transparent bottom-0 right-0 w-24 h-24 md:w-48 md:h-48" />
        </div>
      </div>
      <div className="hidden xl:block relative">
        <div className="sticky top-20">
          <ul>
            <li>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    left: 0,
                  });
                  fitBounds(
                    {
                      x: 100,
                      y: 400,
                      height: 112,
                      width: 300,
                    },
                    { duration: 800, padding: 0.8 },
                  );
                }}
                variant="link"
                className="p-0 min-h-6 flex justify-start text-left"
              >
                1. Team stays in touch with your project.
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    left: 0,
                  });
                  fitBounds(
                    {
                      x: 500,
                      y: 550,
                      height: 112,
                      width: 300,
                    },
                    { duration: 800, padding: 0.8 },
                  );
                }}
                variant="link"
                className="p-0 min-h-6 flex justify-start text-left"
              >
                2. Request the team on site.
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    left: 0,
                  });
                  fitBounds(
                    {
                      x: 300,
                      y: 700,
                      height: 112,
                      width: 300,
                    },
                    { duration: 800, padding: 0.8 },
                  );
                }}
                variant="link"
                className="p-0 min-h-6 flex justify-start text-left"
              >
                3. Agree the terms. (LSA)
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    left: 0,
                  });
                  fitBounds(
                    {
                      x: 100,
                      y: 850,
                      height: 112,
                      width: 300,
                    },
                    { duration: 800, padding: 0.8 },
                  );
                }}
                variant="link"
                className="p-0 min-h-6 flex justify-start text-left"
              >
                4. Selecting suitable team.
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    left: 0,
                  });
                  fitBounds(
                    {
                      x: 100,
                      y: 950,
                      height: 112,
                      width: 300,
                    },
                    { duration: 800, padding: 0.8 },
                  );
                }}
                variant="link"
                className="p-0 min-h-6 flex justify-start text-left"
              >
                5. Organize the logistics.
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    left: 0,
                  });
                  fitBounds(
                    {
                      x: 100,
                      y: 1050,
                      height: 112,
                      width: 300,
                    },
                    { duration: 800, padding: 0.8 },
                  );
                }}
                variant="link"
                className="p-0 min-h-6 flex justify-start text-left"
              >
                6. Managing Housing for the team.
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    left: 0,
                  });
                  fitBounds(
                    {
                      x: 300,
                      y: 1200,
                      height: 112,
                      width: 300,
                    },
                    { duration: 800, padding: 0.8 },
                  );
                }}
                variant="link"
                className="p-0 min-h-6 flex justify-start text-left"
              >
                7. Team integration.
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    left: 0,
                  });
                  fitBounds(
                    {
                      x: 500,
                      y: 1350,
                      height: 112,
                      width: 300,
                    },
                    { duration: 800, padding: 0.8 },
                  );
                }}
                variant="link"
                className="p-0 min-h-6 flex justify-start text-left"
              >
                8. Supervision of the team.
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    left: 0,
                  });
                  fitBounds(
                    {
                      x: 500,
                      y: 1450,
                      height: 112,
                      width: 300,
                    },
                    { duration: 800, padding: 0.8 },
                  );
                }}
                variant="link"
                className="p-0 min-h-6 flex justify-start text-left"
              >
                9. Quality control.
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    left: 0,
                  });
                  fitBounds(
                    {
                      x: 100,
                      y: 1600,
                      height: 112,
                      width: 300,
                    },
                    { duration: 800, padding: 0.8 },
                  );
                }}
                variant="link"
                className="p-0 min-h-6 flex justify-start text-left"
              >
                10. Employee management.
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    left: 0,
                  });
                  fitBounds(
                    {
                      x: 100,
                      y: 1700,
                      height: 112,
                      width: 300,
                    },
                    { duration: 800, padding: 0.8 },
                  );
                }}
                variant="link"
                className="p-0 min-h-6 flex justify-start text-left"
              >
                11. Employee payroll.
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    left: 0,
                  });
                  fitBounds(
                    {
                      x: 500,
                      y: 1850,
                      height: 112,
                      width: 300,
                    },
                    { duration: 800, padding: 0.8 },
                  );
                }}
                variant="link"
                className="p-0 min-h-6 flex justify-start text-left"
              >
                12. Report us your feedback.
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    left: 0,
                  });
                  fitView({
                    duration: 800,
                    padding: 0.2,
                  });
                }}
                variant="link"
                className="p-0 min-h-6 flex justify-start text-left"
              >
                0. See all steps.
              </Button>
            </li>
          </ul>
          <Separator className="mt-2" />
          <div className="p-2">
            <div className="p-1 flex gap-2 items-center text-purple-500">
              <div className="rounded-full h-2 w-2 bg-purple-500" />
              <p className="text-sm font-bold">What we do</p>
            </div>
            <div className="p-1 flex gap-2 items-center text-blue-500">
              <div className="rounded-full h-2 w-2 bg-blue-500" />
              <p className="text-sm font-bold">What we together do</p>
            </div>
            <div className="p-1 flex gap-2 items-center text-green-500">
              <div className="rounded-full h-2 w-2 bg-green-500" />
              <p className="text-sm font-bold">What you do</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
