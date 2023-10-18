"use client";
import React, { Fragment, useLayoutEffect, useRef, useState } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "@/components/silverback/Navbar";
import Footer from "@/components/silverback/Footer";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  AirVent,
  BookCopy,
  Boxes,
  Building,
  ClipboardList,
  Cog,
  Container,
  Cpu,
  Diamond,
  Droplets,
  Eraser,
  Factory,
  Footprints,
  Forklift,
  GalleryHorizontalEnd,
  Globe2,
  GraduationCap,
  Hammer,
  HardHat,
  HeartHandshake,
  Joystick,
  KeySquare,
  Lightbulb,
  Link,
  LucideIcon,
  MessagesSquare,
  PencilRuler,
  Printer,
  Puzzle,
  Server,
  ShoppingBag,
  Shovel,
  Sofa,
  SunSnow,
  ToyBrick,
  TrainTrack,
  Unplug,
  UtilityPole,
  Wind,
  Workflow,
  Wrench,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import PhoneInput from "@/components/silverweb/inputs/PhoneInput";
import { RadioGroup } from "@/components/ui/radio-group";
import RadioInput from "@/components/silverweb/inputs/RadioInput";

export default function HomePage() {
  const parallaxRef = useRef<IParallax>(null);
  return (
    <Fragment>
      <div className="absolute z-10">
        <Navbar />
      </div>
      <Parallax
        pages={5}
        ref={parallaxRef}
        className="relative h-screen w-screen"
        style={{
          height: "100vh",
        }}
      >
        <ParallaxLayer speed={1}>
          <Image
            placeholder="empty"
            className="object-cover"
            src="/parallax/Background.svg"
            alt="Layer Background Parallax"
            fill
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0.9}>
          <Image
            placeholder="empty"
            className="object-cover"
            src="/parallax/1.svg"
            alt="Layer 1 Parallax"
            fill
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0.8}>
          <Image
            placeholder="empty"
            className="object-cover"
            src="/parallax/2.svg"
            alt="Layer 2 Parallax"
            fill
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0.7}>
          <Image
            placeholder="empty"
            className="object-cover"
            src="/parallax/3.svg"
            alt="Layer 3 Parallax"
            fill
          />
        </ParallaxLayer>

        <ParallaxLayer speed={0.6}>
          <Image
            placeholder="empty"
            className="object-cover"
            src="/parallax/4.svg"
            alt="Layer 4 Parallax"
            fill
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0.5}>
          <Image
            placeholder="empty"
            className="object-cover"
            src="/parallax/5.svg"
            alt="Layer 5 Parallax"
            fill
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0.4}>
          <Image
            placeholder="empty"
            className="object-cover"
            src="/parallax/6.svg"
            alt="Layer 6 Parallax"
            fill
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0.01}>
          <div className="flex items-center justify-center h-full w-full">
            <div className="flex -translate-y-10 font-bold text-2xl sm:text-4xl lg:text-5xl text-black tracking-tighter">
              <p>For a</p>
              <Typewriter
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
              <p className="truncate">future</p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.3}>
          <Image
            placeholder="empty"
            className="object-cover invert-[.04] sepia-[.08] saturate-[8.4] hue-rotate-[336deg] brightness-[1.06] contrast-100"
            src="/parallax/7.svg"
            alt="Layer 7 Parallax"
            fill
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={0.2}>
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 390"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150 translate-y-20"
          >
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n.path-1{\nanimation:pathAnim-1 40s;\nanimation-timing-function: linear;\nanimation-iteration-count: infinite;\n}\n@keyframes pathAnim-1{\n0%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 124.93333333333334,234.13333333333335 249.86666666666667,268.2666666666667 397,274 C 544.1333333333333,279.7333333333333 713.4666666666667,257.0666666666666 891,240 C 1068.5333333333333,222.93333333333337 1254.2666666666667,211.4666666666667 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n25%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 165.06666666666666,156.13333333333333 330.1333333333333,112.26666666666668 475,126 C 619.8666666666667,139.73333333333332 744.5333333333333,211.06666666666666 902,233 C 1059.4666666666667,254.93333333333334 1249.7333333333333,227.46666666666667 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n50%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 167.19999999999993,216.93333333333334 334.39999999999986,233.86666666666667 514,246 C 693.6000000000001,258.1333333333333 885.6000000000001,265.4666666666667 1042,257 C 1198.3999999999999,248.53333333333333 1319.1999999999998,224.26666666666665 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n75%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 112,196.8 224,193.6 407,202 C 590,210.4 844,230.4 1028,232 C 1212,233.6 1326,216.8 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n100%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 124.93333333333334,234.13333333333335 249.86666666666667,268.2666666666667 397,274 C 544.1333333333333,279.7333333333333 713.4666666666667,257.0666666666666 891,240 C 1068.5333333333333,222.93333333333337 1254.2666666666667,211.4666666666667 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n}',
              }}
            />
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 124.93333333333334,234.13333333333335 249.86666666666667,268.2666666666667 397,274 C 544.1333333333333,279.7333333333333 713.4666666666667,257.0666666666666 891,240 C 1068.5333333333333,222.93333333333337 1254.2666666666667,211.4666666666667 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              strokeWidth={0}
              fill="#fff"
              fillOpacity={1}
              className="transition-all duration-300 ease-in-out delay-150 path-1"
            />
          </svg>
          <svg
            height="50%"
            viewBox="0 0 1440 390"
            className="absolute -translate-y-1/2 max-sm:h-[65%]"
          >
            <rect fill="#fff" width={"1440px"} height={"390px"} />
          </svg>
          <svg
            height="50%"
            viewBox="0 0 1440 390"
            className="absolute -translate-y-1/2 max-sm:h-[65%] translate-x-3/4"
          >
            <rect fill="#fff" width={"1440px"} height={"390px"} />
          </svg>
          <svg
            height="50%"
            viewBox="0 0 1440 390"
            className="absolute -translate-y-[40%] max-lg:-translate-y-[47%] max-lg:h-[75%]"
          >
            <rect fill="#fff" width={"1440px"} height={"390px"} />
          </svg>
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 390"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150 rotate-180  -translate-y-10 xl:-translate-y-20"
          >
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n.path-2{\nanimation:pathAnim-2 40s;\nanimation-timing-function: linear;\nanimation-iteration-count: infinite;\n}\n@keyframes pathAnim-2{\n0%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 173.46666666666664,177.33333333333331 346.9333333333333,154.66666666666666 493,145 C 639.0666666666667,135.33333333333334 757.7333333333333,138.66666666666669 911,150 C 1064.2666666666667,161.33333333333331 1252.1333333333332,180.66666666666666 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n25%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 198.93333333333334,174.8 397.8666666666667,149.6 538,160 C 678.1333333333333,170.4 759.4666666666667,216.4 900,229 C 1040.5333333333333,241.6 1240.2666666666667,220.8 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n50%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 169.86666666666667,230.93333333333334 339.73333333333335,261.8666666666667 477,243 C 614.2666666666667,224.13333333333335 718.9333333333334,155.46666666666667 874,140 C 1029.0666666666666,124.53333333333333 1234.5333333333333,162.26666666666665 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n75%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 130.53333333333336,167.86666666666667 261.0666666666667,135.73333333333332 418,138 C 574.9333333333333,140.26666666666668 758.2666666666667,176.93333333333334 933,193 C 1107.7333333333333,209.06666666666666 1273.8666666666668,204.53333333333333 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n100%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 173.46666666666664,177.33333333333331 346.9333333333333,154.66666666666666 493,145 C 639.0666666666667,135.33333333333334 757.7333333333333,138.66666666666669 911,150 C 1064.2666666666667,161.33333333333331 1252.1333333333332,180.66666666666666 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n}',
              }}
            />
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 173.46666666666664,177.33333333333331 346.9333333333333,154.66666666666666 493,145 C 639.0666666666667,135.33333333333334 757.7333333333333,138.66666666666669 911,150 C 1064.2666666666667,161.33333333333331 1252.1333333333332,180.66666666666666 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              strokeWidth={0}
              fill="#ffff"
              fillOpacity={1}
              className="transition-all duration-300 ease-in-out delay-150 path-2"
            />
          </svg>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.2} className="light">
          <div className="max-w-[1400px] mx-auto px-3 text-primary select-none">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_2.2fr] gap-2 md:gap-10 items-center p-4 max-[390px]:-translate-y-9 max-md:-translate-y-20">
              <div className="light">
                <p className="text-4xl lg:text-5xl xl:text-6xl tracking-tight font-bold -translate-y-5">
                  We together for a better future in Europe
                </p>
                <div className="w-full justify-center hidden md:flex">
                  <div>
                    <p className="text-2xl lg:text-2xl xl:text-2xl tracking-tighter font-bold mt-5 ">
                      Start changing the future.
                    </p>
                    <div className="flex mt-3 gap-2">
                      <PhoneInput
                        popoverClassName="light"
                        placeholder="353 1 441 0102"
                        name="phone"
                      />
                      <Button className="w-32">Let&apos;s talk</Button>
                    </div>
                    <div className="p-2 text-xs opacity-60">
                      Making the future easy, green, and productive.{" "}
                      <Button className="p-0" size={"sm"} variant="link">
                        Connect
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
                <div
                  className={cn(
                    "flex content-stretch transition-all duration-700"
                  )}
                >
                  <HeroCard
                    content="We, SilverBack provide a full-service experience for clients with in-house departments for logistics, project management, finance and accounting, IT and human resources, ensuring that all aspects of the project are covered."
                    heading="Comprehensive services"
                    fallBack="In-house logistics, project management, finance and accounting, IT and human resources."
                    icon={
                      <Building className="h-6 w-6 min-[1125px]:h-8 min-[1125px]:w-8" />
                    }
                  />
                </div>
                <div
                  className={cn(
                    "flex content-stretch transition-all duration-1000"
                  )}
                >
                  <HeroCard
                    content="Our team of professionals is experienced in cutting-edge technologies for data center, battery factory construction etc., providing innovative solutions for our partners and clients."
                    heading="Expertise & innovation"
                    fallBack="Specialized in data center, battery factory, infrastructure construction etc."
                    icon={
                      <Lightbulb className="h-6 w-6 min-[1125px]:h-8 min-[1125px]:w-8" />
                    }
                  />
                </div>
                <div
                  className={cn(
                    "flex content-stretch transition-all duration-1000"
                  )}
                >
                  <HeroCard
                    content="With a team that speaks six different languages, we ensures that we communicate effectively with anybody to build strong relationships with our partners, clients and employees."
                    heading="Communication-focused"
                    fallBack="Work in six different languages."
                    icon={
                      <MessagesSquare className="h-6 w-6 min-[1125px]:h-8 min-[1125px]:w-8" />
                    }
                  />
                </div>
                <div
                  className={cn(
                    "flex content-stretch transition-all duration-700"
                  )}
                >
                  <HeroCard
                    content="We are present in 8 countries with over 500 employees and 4 offices in Europe, we provide local expertise and support to our clients worldwide while maintaining consistent quality and service."
                    heading="Global presence"
                    fallBack="We are present in 8 countries with over 500 employees and 4 offices in Europe."
                    icon={
                      <Globe2 className="h-6 w-6 min-[1125px]:h-8 min-[1125px]:w-8" />
                    }
                  />
                </div>
                <div className="block md:hidden">
                  <div className="flex mt-3 gap-2">
                    <PhoneInput
                      popoverClassName="light"
                      placeholder="353 1 441 0102"
                      name="phone"
                    />
                    <Button className="w-32">Let&apos;s talk</Button>
                  </div>
                  <div className=" leading-[0] pt-3 text-xs opacity-60">
                    Making the future easy, green, and productive.{" "}
                    <Button
                      className="p-0 leading-none"
                      size={"sm"}
                      variant="link"
                    >
                      Connect
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.999} speed={0.5}>
          <div className="mt-96 w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-8 px-5">
              <InfoFeature
                Icon={GraduationCap}
                number={new Date().getFullYear() - 2012}
                metric="Years"
                subheading="of Experience"
                content="Since 2012 supporting mission-critical and other time sensitive projects throughout Europe."
              />
              <InfoFeature
                Icon={HardHat}
                number={500}
                metric="Specialists"
                subheading="in over 8 Countries"
                content="With over 21 different Trades, we provide you everything in one place."
              />
              <InfoFeature
                Icon={Puzzle}
                number={200}
                metric="Projects"
                subheading="planed and realized"
                content="We helped over 200 dreams come to life and made europe a bit better."
              />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 390"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150 translate-y-20 mt-[850px] sm:mt-40 lg:mt-0"
          >
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n.path-3{\nanimation:pathAnim-3 40s;\nanimation-timing-function: linear;\nanimation-iteration-count: infinite;\n}\n@keyframes pathAnim-3{\n0%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 97.15789473684208,191.95215311004785 194.31578947368416,183.90430622009566 291,199 C 387.68421052631584,214.09569377990434 483.8947368421053,252.33492822966508 579,239 C 674.1052631578947,225.66507177033492 768.1052631578947,160.75598086124398 867,153 C 965.8947368421053,145.24401913875602 1069.6842105263158,194.64114832535887 1166,212 C 1262.3157894736842,229.35885167464113 1351.157894736842,214.67942583732057 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n25%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 127.11961722488039,215.63636363636363 254.23923444976077,231.27272727272725 338,235 C 421.7607655502392,238.72727272727275 462.16267942583727,230.5454545454546 544,236 C 625.8373205741627,241.4545454545454 749.1100478468901,260.54545454545456 868,268 C 986.8899521531099,275.45454545454544 1101.397129186603,271.27272727272725 1196,258 C 1290.602870813397,244.72727272727272 1365.3014354066986,222.36363636363637 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n50%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 85.45454545454544,219.99043062200957 170.90909090909088,239.9808612440191 268,218 C 365.0909090909091,196.0191387559809 473.81818181818187,132.06698564593302 589,139 C 704.1818181818181,145.93301435406698 825.8181818181818,223.75119617224883 916,228 C 1006.1818181818182,232.24880382775117 1064.909090909091,162.92822966507177 1147,146 C 1229.090909090909,129.07177033492823 1334.5454545454545,164.53588516746413 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n75%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 94.133971291866,182.10526315789474 188.267942583732,164.21052631578948 277,154 C 365.732057416268,143.78947368421052 449.0622009569378,141.26315789473682 542,154 C 634.9377990430622,166.73684210526318 737.4832535885166,194.73684210526318 829,206 C 920.5167464114834,217.26315789473682 1001.0047846889954,211.78947368421052 1101,208 C 1200.9952153110046,204.21052631578948 1320.4976076555022,202.10526315789474 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n100%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 97.15789473684208,191.95215311004785 194.31578947368416,183.90430622009566 291,199 C 387.68421052631584,214.09569377990434 483.8947368421053,252.33492822966508 579,239 C 674.1052631578947,225.66507177033492 768.1052631578947,160.75598086124398 867,153 C 965.8947368421053,145.24401913875602 1069.6842105263158,194.64114832535887 1166,212 C 1262.3157894736842,229.35885167464113 1351.157894736842,214.67942583732057 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n}',
              }}
            />
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 97.15789473684208,191.95215311004785 194.31578947368416,183.90430622009566 291,199 C 387.68421052631584,214.09569377990434 483.8947368421053,252.33492822966508 579,239 C 674.1052631578947,225.66507177033492 768.1052631578947,160.75598086124398 867,153 C 965.8947368421053,145.24401913875602 1069.6842105263158,194.64114832535887 1166,212 C 1262.3157894736842,229.35885167464113 1351.157894736842,214.67942583732057 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              strokeWidth={0}
              fill="#fff"
              fillOpacity={1}
              className="transition-all duration-300 ease-in-out delay-150 path-3"
            />
          </svg>
          <svg
            height="50%"
            viewBox="0 0 1440 390"
            className="absolute -translate-y-1/2 max-sm:h-[65%]"
          >
            <rect fill="#fff" width={"1440px"} height={"390px"} />
          </svg>
          <svg
            height="50%"
            viewBox="0 0 1440 390"
            className="absolute -translate-y-1/2 max-sm:h-[65%] translate-x-3/4"
          >
            <rect fill="#fff" width={"1440px"} height={"390px"} />
          </svg>
          <svg
            height="50%"
            viewBox="0 0 1440 390"
            className="absolute -translate-y-[40%] max-lg:-translate-y-[47%] max-lg:h-[75%]"
          >
            <rect fill="#fff" width={"1440px"} height={"390px"} />
          </svg>
          <svg
            height="50%"
            viewBox="0 0 1440 390"
            className="absolute -translate-y-20 min-[380px]:-translate-y-[7rem] md:-translate-y-80 lg:-translate-y-10 max-lg:h-[75%]"
          >
            <rect fill="#fff" width={"1440px"} height={"390px"} />
          </svg>
          <svg
            height="50%"
            viewBox="0 0 1440 390"
            className="absolute -translate-y-20 min-[380px]:-translate-y-32 md:-translate-y-80 lg:-translate-y-10 max-lg:h-[75%] translate-x-3/4"
          >
            <rect fill="#fff" width={"1440px"} height={"390px"} />
          </svg>
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 390"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150 rotate-180 translate-y-32 md:translate-y-10 xl:translate-y-20"
          >
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n.path-4{\nanimation:pathAnim-4 40s;\nanimation-timing-function: linear;\nanimation-iteration-count: infinite;\n}\n@keyframes pathAnim-4{\n0%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 101.78571428571428,227.85714285714286 203.57142857142856,255.71428571428572 336,235 C 468.42857142857144,214.28571428571428 631.5,145.00000000000003 763,149 C 894.5,152.99999999999997 994.4285714285716,230.28571428571428 1102,251 C 1209.5714285714284,271.7142857142857 1324.7857142857142,235.85714285714286 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n25%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 145.14285714285717,240.89285714285714 290.28571428571433,281.7857142857143 420,272 C 549.7142857142857,262.2142857142857 664.0000000000001,201.75 761,202 C 857.9999999999999,202.25 937.7142857142858,263.2142857142857 1048,273 C 1158.2857142857142,282.7857142857143 1299.142857142857,241.39285714285714 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n50%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 153.25,209.78571428571428 306.5,219.57142857142858 423,212 C 539.5,204.42857142857142 619.25,179.5 728,181 C 836.75,182.5 974.5,210.42857142857144 1098,218 C 1221.5,225.57142857142856 1330.75,212.78571428571428 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n75%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 109.17857142857142,223.75 218.35714285714283,247.5 347,227 C 475.64285714285717,206.5 623.7500000000001,141.75 751,146 C 878.2499999999999,150.25 984.6428571428571,223.5 1096,244 C 1207.357142857143,264.5 1323.6785714285716,232.25 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n100%{\nd: path("M 0,400 C 0,400 0,200 0,200 C 101.78571428571428,227.85714285714286 203.57142857142856,255.71428571428572 336,235 C 468.42857142857144,214.28571428571428 631.5,145.00000000000003 763,149 C 894.5,152.99999999999997 994.4285714285716,230.28571428571428 1102,251 C 1209.5714285714284,271.7142857142857 1324.7857142857142,235.85714285714286 1440,200 C 1440,200 1440,400 1440,400 Z");\n}\n}',
              }}
            />
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 101.78571428571428,227.85714285714286 203.57142857142856,255.71428571428572 336,235 C 468.42857142857144,214.28571428571428 631.5,145.00000000000003 763,149 C 894.5,152.99999999999997 994.4285714285716,230.28571428571428 1102,251 C 1209.5714285714284,271.7142857142857 1324.7857142857142,235.85714285714286 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              strokeWidth={0}
              fill="#fff"
              fillOpacity={1}
              className="transition-all duration-300 ease-in-out delay-150 path-4"
            />
          </svg>
        </ParallaxLayer>
        <ParallaxLayer offset={2.7} speed={1}>
          <div className="light text-primary grid max-w-[1400px] mx-auto px-3 mt-0 md:mt-24 lg:mt-0">
            <div className="text-right text-3xl md:text-5xl tracking-tight font-bold min-[1400px]:max-w-[1400px] w-[calc(100vw-24px)] mt-[850px] sm:mt-40 lg:mt-0">
              Specified on your ideas and plans
              <div className="w-full mt-7 ">
                <div className="h-24 flex items-center m-auto overflow-hidden relative w-full before:bg-gradient-to-r before:from-white before:to-[rgba(255,255,255,0)] before:to-50% before:content-[''] before:h-24 before:absolute before:w-64 before:z-10 before:top-0 before:left-0 after:bg-gradient-to-r after:from-white after:to-[rgba(255,255,255,0)] after:to-50% after:content-[''] after:h-24 after:absolute after:w-64 after:z-10 after:top-0 after:right-0 after:rotate-180">
                  <div className="inline-block animate-[moveLeft_40s_linear_infinite] whitespace-nowrap">
                    <FeaturesCard
                      Icon={Server}
                      content="Where Information Thrives"
                      heading="Data Center"
                    />
                    <FeaturesCard
                      Icon={Sofa}
                      content="Create Space to Life"
                      heading="Apartment"
                    />
                    <FeaturesCard
                      Icon={Workflow}
                      content="Bridging Dreams, Connecting Lives"
                      heading="Bridge"
                    />
                    <FeaturesCard
                      Icon={Factory}
                      content="Producing the Future"
                      heading="Factory"
                    />
                    <FeaturesCard
                      Icon={HeartHandshake}
                      content="Caring Beyond Boundaries"
                      heading="Hospital"
                    />
                    <FeaturesCard
                      Icon={Shovel}
                      content="Digging Deep, Building Progress"
                      heading="Mine"
                    />
                    <FeaturesCard
                      Icon={Diamond}
                      content="Preserving History, Inspiring Tomorrow"
                      heading="Museum"
                    />
                    <FeaturesCard
                      Icon={Server}
                      content="Where Information Thrives"
                      heading="Data Center"
                    />
                    <FeaturesCard
                      Icon={Sofa}
                      content="Create Space to Life and Love"
                      heading="Apartment"
                    />
                    <FeaturesCard
                      Icon={Workflow}
                      content="Bridging Dreams, Connecting Lives"
                      heading="Bridge"
                    />
                    <FeaturesCard
                      Icon={Factory}
                      content="Producing the Future"
                      heading="Factory"
                    />
                    <FeaturesCard
                      Icon={HeartHandshake}
                      content="Caring Beyond Boundaries"
                      heading="Hospital"
                    />
                    <FeaturesCard
                      Icon={Shovel}
                      content="Digging Deep, Building Progress"
                      heading="Mine"
                    />
                    <FeaturesCard
                      Icon={Diamond}
                      content="Preserving History, Inspiring Tomorrow"
                      heading="Museum"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-1 ">
                <div className="h-24 flex items-center m-auto overflow-hidden relative w-full before:bg-gradient-to-r before:from-white before:to-[rgba(255,255,255,0)] before:to-50% before:content-[''] before:h-24 before:absolute before:w-64 before:z-10 before:top-0 before:left-0 after:bg-gradient-to-r after:from-white after:to-[rgba(255,255,255,0)] after:to-50% after:content-[''] after:h-24 after:absolute after:w-64 after:z-10 after:top-0 after:right-0 after:rotate-180">
                  <div className="inline-block -ml-[2000px] animate-[moveRight_40s_linear_infinite] whitespace-nowrap">
                    <FeaturesCard
                      Icon={Printer}
                      content="Crafting Sustainability, Page by Page"
                      heading="Paper Mill"
                    />
                    <FeaturesCard
                      Icon={ToyBrick}
                      content="Shaping the Future, Piece by Piece"
                      heading="Pre-Cast Factory"
                    />
                    <FeaturesCard
                      Icon={TrainTrack}
                      content="On Track to a Better Tomorrow"
                      heading="Railway"
                    />
                    <FeaturesCard
                      Icon={BookCopy}
                      content="Nurturing Minds, Shaping Futures"
                      heading="Schools"
                    />
                    <FeaturesCard
                      Icon={ShoppingBag}
                      content="Where Shopping Meets Convenience"
                      heading="Shopping Centre"
                    />
                    <FeaturesCard
                      Icon={UtilityPole}
                      content="Powering the Present and Future"
                      heading="Substation"
                    />
                    <FeaturesCard
                      Icon={Wind}
                      content="Harnessing the Wind"
                      heading="Wind Farms"
                    />
                    <FeaturesCard
                      Icon={Printer}
                      content="Crafting Sustainability, Page by Page"
                      heading="Paper Mill"
                    />
                    <FeaturesCard
                      Icon={ToyBrick}
                      content="Shaping the Future, Piece by Piece"
                      heading="Pre-Cast Factory"
                    />
                    <FeaturesCard
                      Icon={TrainTrack}
                      content="On Track to a Better Tomorrow"
                      heading="Railway"
                    />
                    <FeaturesCard
                      Icon={BookCopy}
                      content="Nurturing Minds, Shaping Futures"
                      heading="Schools"
                    />
                    <FeaturesCard
                      Icon={ShoppingBag}
                      content="Where Shopping Meets Convenience"
                      heading="Shopping Centre"
                    />
                    <FeaturesCard
                      Icon={UtilityPole}
                      content="Powering the Present and Future"
                      heading="Substation"
                    />
                    <FeaturesCard
                      Icon={Wind}
                      content="Harnessing the Wind"
                      heading="Wind Farms"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-3xl md:text-5xl tracking-tight font-bold min-[1400px]:max-w-[1400px] w-[calc(100vw-24px)] mt-20 min-[376px]:mt-32 md:mt-20">
              Specified on your career
              <div className="w-full mt-7 ">
                <div className="h-24 flex items-center m-auto overflow-hidden relative w-full before:bg-gradient-to-r before:from-white before:to-[rgba(255,255,255,0)] before:to-50% before:content-[''] before:h-24 before:absolute before:w-64 before:z-10 before:top-0 before:left-0 after:bg-gradient-to-r after:from-white after:to-[rgba(255,255,255,0)] after:to-50% after:content-[''] after:h-24 after:absolute after:w-64 after:z-10 after:top-0 after:right-0 after:rotate-180">
                  <div className="inline-block animate-[moveLeft_60s_linear_infinite] whitespace-nowrap">
                    <FeaturesCard
                      Icon={PencilRuler}
                      content="Designing Dreams, Building Realities"
                      heading="Architect"
                    />
                    <FeaturesCard
                      Icon={Unplug}
                      content="Connecting the World, One Cable at a Time"
                      heading="Cable Joiner"
                    />
                    <FeaturesCard
                      Icon={KeySquare}
                      content="Crafting Spaces, Building Futures"
                      heading="Carpenter"
                    />
                    <FeaturesCard
                      Icon={Eraser}
                      content="Cleaning with Care, Creating Comfort"
                      heading="Cleaner"
                    />
                    <FeaturesCard
                      Icon={Cpu}
                      content="Precision in Performance, Quality in Results"
                      heading="Commissioning Technician"
                    />
                    <FeaturesCard
                      Icon={Footprints}
                      content="Building Strong Foundations, Solid Futures"
                      heading="Concrete Worker"
                    />
                    <FeaturesCard
                      Icon={Joystick}
                      content="Elevating Precision, Lifting Possibilities"
                      heading="Crane Operator"
                    />
                    <FeaturesCard
                      Icon={HardHat}
                      content="Leading with Excellence, Managing with Precision"
                      heading="CSA Site Manager"
                    />
                    <FeaturesCard
                      Icon={GalleryHorizontalEnd}
                      content="Perfecting Surfaces, Defining Spaces"
                      heading="Dryliner"
                    />
                    <FeaturesCard
                      Icon={PencilRuler}
                      content="Designing Dreams, Building Realities"
                      heading="Architect"
                    />
                    <FeaturesCard
                      Icon={Unplug}
                      content="Connecting the World, One Cable at a Time"
                      heading="Cable Joiner"
                    />
                    <FeaturesCard
                      Icon={KeySquare}
                      content="Crafting Spaces, Building Futures"
                      heading="Carpenter"
                    />
                    <FeaturesCard
                      Icon={Eraser}
                      content="Cleaning with Care, Creating Comfort"
                      heading="Cleaner"
                    />
                    <FeaturesCard
                      Icon={Cpu}
                      content="Precision in Performance, Quality in Results"
                      heading="Commissioning Technician"
                    />
                    <FeaturesCard
                      Icon={Footprints}
                      content="Building Strong Foundations, Solid Futures"
                      heading="Concrete Worker"
                    />
                    <FeaturesCard
                      Icon={Joystick}
                      content="Elevating Precision, Lifting Possibilities"
                      heading="Crane Operator"
                    />
                    <FeaturesCard
                      Icon={HardHat}
                      content="Leading with Excellence, Managing with Precision"
                      heading="CSA Site Manager"
                    />
                    <FeaturesCard
                      Icon={GalleryHorizontalEnd}
                      content="Perfecting Surfaces, Defining Spaces"
                      heading="Dryliner"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-1 ">
                <div className="h-24 flex items-center m-auto overflow-hidden relative w-full before:bg-gradient-to-r before:from-white before:to-[rgba(255,255,255,0)] before:to-50% before:content-[''] before:h-24 before:absolute before:w-64 before:z-10 before:top-0 before:left-0 after:bg-gradient-to-r after:from-white after:to-[rgba(255,255,255,0)] after:to-50% after:content-[''] after:h-24 after:absolute after:w-64 after:z-10 after:top-0 after:right-0 after:rotate-180">
                  <div className="inline-block -ml-[3500px] animate-[moveRight_60s_linear_infinite] whitespace-nowrap">
                    <FeaturesCard
                      Icon={AirVent}
                      content="Bring Air in the Future"
                      heading="Duct Fitter"
                    />
                    <FeaturesCard
                      Icon={Wrench}
                      content="Fitting Excellence into Every Detail"
                      heading="Fitter"
                    />
                    <FeaturesCard
                      Icon={Hammer}
                      content="Versatility in Action, Excellence in All"
                      heading="General Operative"
                    />
                    <FeaturesCard
                      Icon={SunSnow}
                      content="Heating, Ventilating, and Cooling Excellence"
                      heading="HVAC Installer"
                    />
                    <FeaturesCard
                      Icon={Cog}
                      content="Preserving History, Inspiring Tomorrow"
                      heading="Mechanical"
                    />
                    <FeaturesCard
                      Icon={Droplets}
                      content="Flowing with Precision, Plumbing with Excellence"
                      heading="Plumber"
                    />
                    <FeaturesCard
                      Icon={ClipboardList}
                      content="Shaping Customer Excellence"
                      heading="QA/QC CX Manager"
                    />
                    <FeaturesCard
                      Icon={Boxes}
                      content="Managing Sites, Streamlining Success"
                      heading="Site Administrator"
                    />
                    <FeaturesCard
                      Icon={Forklift}
                      content="Lifting and Shifting, Safety First"
                      heading="Teleporter Operator"
                    />
                    <FeaturesCard
                      Icon={Container}
                      content="Transforming Spaces with Flawless Walls"
                      heading="White Wall Installer"
                    />
                    <FeaturesCard
                      Icon={AirVent}
                      content="Bring Air in the Future"
                      heading="Duct Fitter"
                    />
                    <FeaturesCard
                      Icon={Wrench}
                      content="Fitting Excellence into Every Detail"
                      heading="Fitter"
                    />
                    <FeaturesCard
                      Icon={Hammer}
                      content="Versatility in Action, Excellence in All"
                      heading="General Operative"
                    />
                    <FeaturesCard
                      Icon={SunSnow}
                      content="Heating, Ventilating, and Cooling Excellence"
                      heading="HVAC Installer"
                    />
                    <FeaturesCard
                      Icon={Cog}
                      content="Preserving History, Inspiring Tomorrow"
                      heading="Mechanical"
                    />
                    <FeaturesCard
                      Icon={Droplets}
                      content="Flowing with Precision, Plumbing with Excellence"
                      heading="Plumber"
                    />
                    <FeaturesCard
                      Icon={ClipboardList}
                      content="Shaping Customer Excellence"
                      heading="QA/QC CX Manager"
                    />
                    <FeaturesCard
                      Icon={Boxes}
                      content="Managing Sites, Streamlining Success"
                      heading="Site Administrator"
                    />
                    <FeaturesCard
                      Icon={Forklift}
                      content="Lifting and Shifting, Safety First"
                      heading="Teleporter Operator"
                    />
                    <FeaturesCard
                      Icon={Container}
                      content="Transforming Spaces with Flawless Walls"
                      heading="White Wall Installer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} offset={3.5}>
          <div className="max-w-[620px] mx-auto">
            <div className="absolute w-full bottom-0 -z-20 hidden sm:block">
              <div className="w-[1000px] h-[1000px] relative flex justify-center items-center ml-[250px]">
              <div
                style={{
                  width: 1000,
                  height: 1000,
                  aspectRatio: 1,
                  margin: "auto",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image alt="Cobe" src={"/Cobe.png"} width={828} height={808} />
              </div>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[66%] right-[62%] animate-ping"
              >
                <circle cx="4" cy="4" r="4" fill="#aba6a2" />
              </svg>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[66%] right-[62%]"
              >
                <circle cx="4" cy="4" r="4" fill="#aba6a2" />
              </svg>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[65%] right-[60.5%] animate-ping"
              >
                <circle cx="4" cy="4" r="4" fill="#aba6a2" />
              </svg>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[65%] right-[60.5%]"
              >
                <circle cx="4" cy="4" r="4" fill="#aba6a2" />
              </svg>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[66%] right-[54%] animate-ping"
              >
                <circle cx="4" cy="4" r="4" fill="#aba6a2" />
              </svg>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[66%] right-[54%]"
              >
                <circle cx="4" cy="4" r="4" fill="#aba6a2" />
              </svg>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[62.5%] right-[50%] animate-ping"
              >
                <circle cx="4" cy="4" r="4" fill="#aba6a2" />
              </svg>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[62.5%] right-[50%]"
              >
                <circle cx="4" cy="4" r="4" fill="#aba6a2" />
              </svg>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[58%] right-[49%] animate-ping"
              >
                <circle cx="4" cy="4" r="4" fill="#aba6a2" />
              </svg>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[58%] right-[49%]"
              >
                <circle cx="4" cy="4" r="4" fill="#aba6a2" />
              </svg>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} className="z-50">
          <div className="max-w-[620px] mx-auto translate-y-64 sm:translate-y-0">
            <div className="mx-5">
              <p className="font-bold text-3xl hidden md:block drop-shadow-lg">
                Embrace Success with Team SilverBack:
                <br /> Shaping Futures Together!
                <br /> Get in touch
              </p>
              <p className="font-bold text-lg md:hidden text-white -z-10">
                Embrace Success with Team SilverBack:
                <br /> Shaping Futures Together!
              </p>
              <div className="flex gap-1 text-xs md:text-base">
                <p>Fill out the form or contact us directly via</p>
                <Button
                  onClick={() =>
                    window.open(
                      "mailto:work@silverback.ie?subject=Request%20via%20Website%20&body=Hey%20Team%20SilverBack%2C%0A%0AI%2FWe%20want%20to%20work%20with%20you.%0A%0AWe're%2FI'm...%0A%0ARegards%2C"
                    )
                  }
                  className="p-0 text-xs h-4 md:h-6 md:text-base"
                  variant={"link"}
                >
                  work@silverback.ie
                </Button>
              </div>
              <div className="px-2 md:px-28 mt-8">
                <RadioGroup className="grid gap-5">
                  <RadioInput
                    variant="big"
                    cardLabel="I have a project"
                    cardDescription="Work with us and be a partner"
                    icon={<Lightbulb size={24} />}
                    value="partner"
                    id="partner"
                  />
                  <RadioInput
                    variant="big"
                    cardLabel="I want to support"
                    cardDescription="Work for us and join the team"
                    icon={<Link size={24} />}
                    value="team"
                    id="team"
                  />
                </RadioGroup>
              </div>
              <div className="w-28 items-center justify-center mx-auto flex gap-2 mt-8">
                <div className="h-[18px] w-[18px] bg-muted rounded-full" />
                <div className="h-4 w-4 bg-muted opacity-70 rounded-full" />
                <div className="h-4 w-4 bg-muted opacity-70  rounded-full" />
              </div>
              <div className="mt-8 flex justify-end px-2 md:px-28">
                <Button onClick={() => {}}>Let&apos;s Work Together</Button>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4}>
          <div className="absolute w-full bottom-0">
            <Footer />
          </div>
        </ParallaxLayer>
      </Parallax>
    </Fragment>
  );
}

function HeroCard({
  heading,
  content,
  icon,
  fallBack,
}: {
  heading: string;
  content: string;
  icon: React.ReactNode;
  fallBack: string;
}) {
  const [heroCards, heroCardsAreVisible] = useInView({
    threshold: 0.3,
    trackVisibility: true,
    delay: 100,
  });
  return (
    <Card
      ref={heroCards}
      className={cn(
        "bg-white transition-all hover:shadow-xl hover:-translate-y-1 w-full duration-700",
        heroCardsAreVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-20"
      )}
    >
      <CardHeader className="p-2 min-[391px]:pb-1 md:p-4 md:pb-2 min-[1125px]:p-6 min-[1125px]:pb-4">
        <div className="text-black text-lg md:text-xl xl:text-2xl font-bold flex items-center gap-2">
          {icon}
          {heading}
        </div>
      </CardHeader>
      <CardContent className="hidden min-[391px]:block p-3 pt-0 md:p-4 min-[1125px]:p-6 min-[1125px]:pt-0">
        <p className="text-black hidden md:block min-[1125px]:text-lg font-medium">
          {content}
        </p>
        <p className="text-black block md:hidden font-medium">{fallBack}</p>
      </CardContent>
    </Card>
  );
}

function InfoFeature({
  number,
  metric,
  Icon,
  subheading,
  content,
}: {
  number: number;
  metric: string;
  Icon: LucideIcon;
  subheading: string;
  content: string;
}) {
  const [infoFeatures, infoFeaturesAreVisible] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
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
          <div className="rounded-2xl bg-muted p-4 opacity-50">
            <Icon className="h-8 w-8" />
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

function FeaturesCard({
  Icon,
  heading,
  content,
}: {
  Icon: LucideIcon;
  heading: string;
  content: string;
}) {
  return (
    <div className="inline-block px-3">
      <Card>
        <CardContent className="p-1 flex items-center">
          <div className="p-2 bg-muted rounded-lg m-2">
            <Icon className="w-8 h-8" />
          </div>
          <div className="text-left pr-4">
            <div className="font-bold text-xl ">{heading}</div>
            <div className="text-sm font-normal opacity-50">{content}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
