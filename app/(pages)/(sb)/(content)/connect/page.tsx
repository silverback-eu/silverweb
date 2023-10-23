import ProjectCard from "@/components/silverweb/cards/ProjectCard";
import PhoneInput from "@/components/silverweb/inputs/PhoneInput";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  FeaturesCard,
  FlowBackground,
  HeroCards,
  InfoFeature,
  Typewriter,
} from "./comp";
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
import lillestrom_1_min from "public/projects/lillestrom-1-min.jpg";
import northvolt_ett_1 from "public/projects/northvolt-ett-1.jpg";
import datacentre_1 from "public/projects/datacentre-1.jpg";
import PartnerCard from "@/components/silverweb/cards/PartnerCard";
import suir from "public/brands/SUIR.png";
import assemblin from "public/brands/ASSEMBLIN.png";
import bravida from "public/brands/Bravida.png";
import northvolt from "public/brands/Northvolt.png";
import joneseng from "public/brands/Jones Eng.png";
import avtel from "public/brands/AVTEL.png";
import hmv from "public/brands/H&MV.png";

export default function About() {
  return (
    <div className="relative">
      <div className="text-center">
        <section aria-description="Top">
          <div className="-z-10 absolute left-1/2 -translate-x-1/2  w-full h-[800px] before:bg-gradient-to-r before:from-background before:to-transparent before:content-[''] before:h-full before:absolute before:w-12 md:before:w-24 before:z-10 before:top-0 before:left-0 after:bg-gradient-to-r after:to-background after:from-transparent after:content-[''] after:h-full after:absolute after:w-12 md:after:w-24 after:z-10 after:top-0 after:right-0">
            <FlowBackground />
            <div className="w-full h-12 absolute bottom-0 bg-gradient-to-t from-background to-transparent" />
          </div>
          <Button
            className={
              "h-8 rounded-md px-3 text-xs sm:h-9 sm:px-4 sm:py-2 sm:text-base mt-16 sm:mt-24"
            }
            variant="outline"
          >
            Newest Industry insights post...
          </Button>
          <p className="px-3 mt-2 font-bold text-4xl sm:text-6xl tracking-tighter">
            Change the world with us <b className="sm:hidden">for a</b>
          </p>
          <div className="font-bold text-4xl sm:text-6xl tracking-tighter sm:flex justify-center">
            <p className="hidden sm:block">for a</p>
            <Typewriter />
            <p className="">future</p>
          </div>
          <div className="max-w-xl sm:font-medium mx-auto px-12 sm:px-4 text-lg sm:text-xl tracking-tighter drop-shadow-lg mt-2 sm:mt-5">
            Together we can do so much. Let&apos;s change europe
            <span className="max-sm:hidden">
              and build the new mega projects for a better future
            </span>
            .
          </div>
          <div>
            <Button className="h-8 rounded-md px-3 text-xs sm:h-9 sm:px-4 sm:py-2 sm:text-base mt-5">
              Just call us
            </Button>
          </div>
        </section>
        <section aria-description="Show Projects">
          <div className="max-w-5xl mx-auto flex justify-center mt-60">
            <Button variant={"link"}>See all Projects and Partners</Button>
          </div>
          <div className="flex justify-center sm:justify-between max-w-5xl mx-auto h-full mt-2 px-10 md:px-20 lg:px-4">
            <div className="mt-5 sm:mt-0 animate-[levitate_17s_ease_infinite_1s]">
              <ProjectCard
                title="Northvolt Ett"
                location={{
                  city: "Skellefteå",
                  country: "Sweden",
                }}
                category="Energie"
                description="Provided several teams of electricians, mechanics and white collars."
                img={northvolt_ett_1}
              />
            </div>
            <div className="hidden sm:block animate-[levitate_10s_ease_infinite] mt-16">
              <ProjectCard
                title="Felleskjøpet Hovedkontor"
                location={{
                  city: "Lillestrøm",
                  country: "Norway",
                }}
                category="Commercial"
                description="Our team of plumbers installed sprinkler system for corporate HQ."
                img={lillestrom_1_min}
              />
            </div>
            <div className="hidden lg:block animate-[levitate_13s_ease_infinite_1s_reverse] mt-10">
              <ProjectCard
                title="Project Fire"
                location={{
                  city: "Odense",
                  country: "Denmark",
                }}
                category="Data Centre"
                description="We enlisted several tradespeople for various construction tasks during the development of the new data center."
                img={datacentre_1}
              />
            </div>
          </div>
        </section>
        <section aria-description="Hero">
          <div className="text-left relative  text-primary z-20 mt-32">
            <div className="grid lg:grid-cols-[0.4fr_1fr] gap-7 sm:gap-14 mt-[130px] min-[380px]:mt-[90px]  sm:mt-[230px] mx-5 sm:mx-14 items-center">
              <div className="text-center lg:text-left">
                <div className="text-4xl xl:text-6xl font-extrabold tracking-tighter">
                  We together for a better future in Europe
                </div>
                <div className="hidden sm:block text-2xl font-bold tracking-tighter mt-4 lg:mt-9">
                  Start changing the future.
                </div>
                <div className="hidden sm:flex justify-center lg:justify-start mx-2 gap-2 mt-3">
                  <PhoneInput
                    popoverClassName="light"
                    placeholder="353 1 441 0102"
                  />
                  <Button className="w-36">Let&apos;s talk</Button>
                </div>
                <div className="hidden sm:block tracking-tight text-muted-foreground text-sm mt-1">
                  <p>
                    Making the future easy, green and productive. 
                    <span className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline text-muted-foreground p-0 h-auto">
                      Connect
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-[20px_1fr_20px_1fr] gap-2 lg:gap-0 ">
                <div className="hidden sm:block relative h-full">
                  <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0 before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-10 before:bg-gradient-to-b before:from-background before:to-transparent" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
                </div>
                <HeroCards
                  content="We, SilverBack provide a full-service experience for clients with in-house departments for logistics, project management, finance and accounting, IT and human resources, ensuring that all aspects of the project are covered."
                  title="Comprehensive services"
                  fallBack="Everything in-house, working without outsourcing, saves time, resources and headaches."
                  Icon={<Building />}
                />
                <div className="hidden sm:block relative h-full">
                  <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0 before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-10 before:bg-gradient-to-b before:from-background before:to-transparent" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
                </div>
                <HeroCards
                  content="Our team of professionals is experienced in cutting-edge technologies for data center, battery factory construction etc., providing innovative solutions for our partners and clients."
                  title="Expertise & innovation"
                  fallBack="Specialized in mission-critical construction, like data center, battery factory and infrastructure."
                  Icon={<Lightbulb />}
                />
                <div className="hidden sm:block relative h-full">
                  <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0 before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-10 before:bg-gradient-to-t before:from-background before:to-transparent" />
                </div>
                <HeroCards
                  content="With a team that speaks six different languages, we ensures that we communicate effectively with anybody to build strong relationships with our partners, clients and employees."
                  title="Communication-focused"
                  fallBack="Work in six different languages ensures that we communicate effectively."
                  Icon={<MessagesSquare />}
                />
                <div className="hidden sm:block relative h-full">
                  <div className="absolute left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full h-2 w-2 outline outline-border" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-border border-dashed h-[calc(50%-8px)] w-0 before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-10 before:bg-gradient-to-t before:from-background before:to-transparent" />
                </div>
                <HeroCards
                  content="We are present in 8 countries with over 500 employees and 4 offices across Europe, we provide local expertise and support to our clients worldwide while maintaining consistent quality and service."
                  title="Global presence"
                  fallBack="Present in 8 countries with over 500 employees amd 4 offices across Europe."
                  Icon={<Globe2 />}
                />
              </div>
              <div className="block sm:hidden text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mx-2 gap-2 mt-1">
                  <PhoneInput
                    popoverClassName="light"
                    placeholder="353 1 441 0102"
                  />
                  <Button className="w-36">Let&apos;s talk</Button>
                </div>
                <div className="tracking-tight text-muted-foreground text-xs sm:text-sm mt-1">
                  <p>
                    Making the future easy, green and productive. 
                    <span className="inline-flex items-center justify-center rounded-md text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline text-muted-foreground p-0 h-auto">
                      Connect
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section aria-description="Show Partner">
          <div className="mt-64">
            <div className="font-bold text-5xl tracking-tighter">
              Trusted by our partners
            </div>
            <div className="grid sm:flex justify-center gap-5 mt-12">
              <PartnerCard
                href="https://www.assemblin.com/"
                img={assemblin}
                className="animate-[glowUp_10s_linear_infinite_1s] duration-[10s] hover:opacity-50"
              />
              <PartnerCard
                href="https://www.bravida.se/"
                img={bravida}
                className="animate-[glowUp_10s_linear_infinite_2.5s] duration-[10s] hover:opacity-50"
              />
              <PartnerCard
                href="https://northvolt.com/"
                img={northvolt}
                className="animate-[glowUp_10s_linear_infinite_4s] duration-[10s] hover:opacity-50"
              />
              <PartnerCard
                href="https://avtelglobal.com/"
                img={avtel}
                className="animate-[glowUp_10s_linear_infinite_5.5s] duration-[10s] hover:opacity-50"
              />
            </div>
            <div className="grid sm:flex justify-center gap-5 mt-5">
              <PartnerCard
                href="https://suireng.ie/"
                img={suir}
                className="animate-[glowUp_10s_linear_infinite_7s] duration-[10s] hover:opacity-50"
              />
              <PartnerCard
                href="https://www.hmvengineering.com/"
                img={hmv}
                className="animate-[glowUp_10s_linear_infinite_8.5s] duration-[10s] hover:opacity-50"
              />
              <PartnerCard
                href="https://joneseng.com/"
                img={joneseng}
                className="animate-[glowUp_10s_linear_infinite_10s] duration-[10s] hover:opacity-50"
              />
            </div>
            <Button variant="link" className="mt-4">
              See all Projects and Partners
            </Button>
          </div>
        </section>
        <section aria-description="Stats">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-8 px-5 mt-72">
            <InfoFeature
              Icon={<GraduationCap />}
              number={new Date().getFullYear() - 2012}
              metric="Years"
              subheading="of Experience"
              content="Since 2012 supporting mission-critical and other time sensitive projects throughout Europe."
            />
            <InfoFeature
              Icon={<HardHat />}
              number={500}
              metric="Specialists"
              subheading="in over 8 Countries"
              content="With over 21 different Trades, we provide you everything in one place."
            />
            <InfoFeature
              Icon={<Puzzle />}
              number={200}
              metric="Projects"
              subheading="planed and realized"
              content="We helped over 200 dreams come to life and made europe a bit better."
            />
          </div>
        </section>
        <section aria-description="Features">
          <div className="text-primary grid max-w-[1400px] mx-auto px-3 mt-72">
            <div className="text-right text-3xl md:text-4xl tracking-tight font-bold min-[1400px]:max-w-[1400px] w-[calc(100vw-24px)]">
              Specified on your ideas and plans
              <div className="w-full mt-7 ">
                <div className="h-24 flex items-center m-auto overflow-hidden relative w-full before:bg-gradient-to-r before:from-background before:to-[rgba(255,255,255,0)] before:to-50% before:content-[''] before:h-24 before:absolute before:w-64 before:z-10 before:top-0 before:left-0 after:bg-gradient-to-r after:from-background after:to-[rgba(255,255,255,0)] after:to-50% after:content-[''] after:h-24 after:absolute after:w-64 after:z-10 after:top-0 after:right-0 after:rotate-180">
                  <div className="inline-block animate-[moveLeft_40s_linear_infinite] whitespace-nowrap">
                    <FeaturesCard
                      Icon={<Server />}
                      content="Where Information Thrives"
                      heading="Data Center"
                    />
                    <FeaturesCard
                      Icon={<Sofa />}
                      content="Create Space to Life"
                      heading="Apartment"
                    />
                    <FeaturesCard
                      Icon={<Workflow />}
                      content="Bridging Dreams, Connecting Lives"
                      heading="Bridge"
                    />
                    <FeaturesCard
                      Icon={<Factory />}
                      content="Producing the Future"
                      heading="Factory"
                    />
                    <FeaturesCard
                      Icon={<HeartHandshake />}
                      content="Caring Beyond Boundaries"
                      heading="Hospital"
                    />
                    <FeaturesCard
                      Icon={<Shovel />}
                      content="Digging Deep, Building Progress"
                      heading="Mine"
                    />
                    <FeaturesCard
                      Icon={<Diamond />}
                      content="Preserving History, Inspiring Tomorrow"
                      heading="Museum"
                    />
                    <FeaturesCard
                      Icon={<Server />}
                      content="Where Information Thrives"
                      heading="Data Center"
                    />
                    <FeaturesCard
                      Icon={<Sofa />}
                      content="Create Space to Life and Love"
                      heading="Apartment"
                    />
                    <FeaturesCard
                      Icon={<Workflow />}
                      content="Bridging Dreams, Connecting Lives"
                      heading="Bridge"
                    />
                    <FeaturesCard
                      Icon={<Factory />}
                      content="Producing the Future"
                      heading="Factory"
                    />
                    <FeaturesCard
                      Icon={<HeartHandshake />}
                      content="Caring Beyond Boundaries"
                      heading="Hospital"
                    />
                    <FeaturesCard
                      Icon={<Shovel />}
                      content="Digging Deep, Building Progress"
                      heading="Mine"
                    />
                    <FeaturesCard
                      Icon={<Diamond />}
                      content="Preserving History, Inspiring Tomorrow"
                      heading="Museum"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="h-24 flex items-center m-auto overflow-hidden relative w-full before:bg-gradient-to-r before:from-background before:to-[rgba(255,255,255,0)] before:to-50% before:content-[''] before:h-24 before:absolute before:w-64 before:z-10 before:top-0 before:left-0 after:bg-gradient-to-r after:from-background after:to-[rgba(255,255,255,0)] after:to-50% after:content-[''] after:h-24 after:absolute after:w-64 after:z-10 after:top-0 after:right-0 after:rotate-180">
                  <div className="inline-block -ml-[2000px] animate-[moveRight_40s_linear_infinite] whitespace-nowrap">
                    <FeaturesCard
                      Icon={<Printer />}
                      content="Crafting Sustainability, Page by Page"
                      heading="Paper Mill"
                    />
                    <FeaturesCard
                      Icon={<ToyBrick />}
                      content="Shaping the Future, Piece by Piece"
                      heading="Pre-Cast Factory"
                    />
                    <FeaturesCard
                      Icon={<TrainTrack />}
                      content="On Track to a Better Tomorrow"
                      heading="Railway"
                    />
                    <FeaturesCard
                      Icon={<BookCopy />}
                      content="Nurturing Minds, Shaping Futures"
                      heading="Schools"
                    />
                    <FeaturesCard
                      Icon={<ShoppingBag />}
                      content="Where Shopping Meets Convenience"
                      heading="Shopping Centre"
                    />
                    <FeaturesCard
                      Icon={<UtilityPole />}
                      content="Powering the Present and Future"
                      heading="Substation"
                    />
                    <FeaturesCard
                      Icon={<Wind />}
                      content="Harnessing the Wind"
                      heading="Wind Farms"
                    />
                    <FeaturesCard
                      Icon={<Printer />}
                      content="Crafting Sustainability, Page by Page"
                      heading="Paper Mill"
                    />
                    <FeaturesCard
                      Icon={<ToyBrick />}
                      content="Shaping the Future, Piece by Piece"
                      heading="Pre-Cast Factory"
                    />
                    <FeaturesCard
                      Icon={<TrainTrack />}
                      content="On Track to a Better Tomorrow"
                      heading="Railway"
                    />
                    <FeaturesCard
                      Icon={<BookCopy />}
                      content="Nurturing Minds, Shaping Futures"
                      heading="Schools"
                    />
                    <FeaturesCard
                      Icon={<ShoppingBag />}
                      content="Where Shopping Meets Convenience"
                      heading="Shopping Centre"
                    />
                    <FeaturesCard
                      Icon={<UtilityPole />}
                      content="Powering the Present and Future"
                      heading="Substation"
                    />
                    <FeaturesCard
                      Icon={<Wind />}
                      content="Harnessing the Wind"
                      heading="Wind Farms"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-3xl md:text-4xl text-left tracking-tight font-bold min-[1400px]:max-w-[1400px] w-[calc(100vw-24px)] mt-20">
              <div>
              Specified on your career
              </div>
              <div className="w-full mt-7 ">
                <div className="h-24 flex items-center m-auto overflow-hidden relative w-full before:bg-gradient-to-r before:from-background before:to-[rgba(255,255,255,0)] before:to-50% before:content-[''] before:h-24 before:absolute before:w-64 before:z-10 before:top-0 before:left-0 after:bg-gradient-to-r after:from-background after:to-[rgba(255,255,255,0)] after:to-50% after:content-[''] after:h-24 after:absolute after:w-64 after:z-10 after:top-0 after:right-0 after:rotate-180">
                  <div className="inline-block animate-[moveLeft_60s_linear_infinite] whitespace-nowrap">
                    <FeaturesCard
                      Icon={<PencilRuler />}
                      content="Designing Dreams, Building Realities"
                      heading="Architect"
                    />
                    <FeaturesCard
                      Icon={<Unplug />}
                      content="Connecting the World, One Cable at a Time"
                      heading="Cable Joiner"
                    />
                    <FeaturesCard
                      Icon={<KeySquare />}
                      content="Crafting Spaces, Building Futures"
                      heading="Carpenter"
                    />
                    <FeaturesCard
                      Icon={<Eraser />}
                      content="Cleaning with Care, Creating Comfort"
                      heading="Cleaner"
                    />
                    <FeaturesCard
                      Icon={<Cpu />}
                      content="Precision in Performance, Quality in Results"
                      heading="Commissioning Technician"
                    />
                    <FeaturesCard
                      Icon={<Footprints />}
                      content="Building Strong Foundations, Solid Futures"
                      heading="Concrete Worker"
                    />
                    <FeaturesCard
                      Icon={<Joystick />}
                      content="Elevating Precision, Lifting Possibilities"
                      heading="Crane Operator"
                    />
                    <FeaturesCard
                      Icon={<HardHat />}
                      content="Leading with Excellence, Managing with Precision"
                      heading="CSA Site Manager"
                    />
                    <FeaturesCard
                      Icon={<GalleryHorizontalEnd />}
                      content="Perfecting Surfaces, Defining Spaces"
                      heading="Dryliner"
                    />
                    <FeaturesCard
                      Icon={<PencilRuler />}
                      content="Designing Dreams, Building Realities"
                      heading="Architect"
                    />
                    <FeaturesCard
                      Icon={<Unplug />}
                      content="Connecting the World, One Cable at a Time"
                      heading="Cable Joiner"
                    />
                    <FeaturesCard
                      Icon={<KeySquare />}
                      content="Crafting Spaces, Building Futures"
                      heading="Carpenter"
                    />
                    <FeaturesCard
                      Icon={<Eraser />}
                      content="Cleaning with Care, Creating Comfort"
                      heading="Cleaner"
                    />
                    <FeaturesCard
                      Icon={<Cpu />}
                      content="Precision in Performance, Quality in Results"
                      heading="Commissioning Technician"
                    />
                    <FeaturesCard
                      Icon={<Footprints />}
                      content="Building Strong Foundations, Solid Futures"
                      heading="Concrete Worker"
                    />
                    <FeaturesCard
                      Icon={<Joystick />}
                      content="Elevating Precision, Lifting Possibilities"
                      heading="Crane Operator"
                    />
                    <FeaturesCard
                      Icon={<HardHat />}
                      content="Leading with Excellence, Managing with Precision"
                      heading="CSA Site Manager"
                    />
                    <FeaturesCard
                      Icon={<GalleryHorizontalEnd />}
                      content="Perfecting Surfaces, Defining Spaces"
                      heading="Dryliner"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="h-24 flex items-center m-auto overflow-hidden relative w-full before:bg-gradient-to-r before:from-background before:to-[rgba(255,255,255,0)] before:to-50% before:content-[''] before:h-24 before:absolute before:w-64 before:z-10 before:top-0 before:left-0 after:bg-gradient-to-r after:from-background after:to-[rgba(255,255,255,0)] after:to-50% after:content-[''] after:h-24 after:absolute after:w-64 after:z-10 after:top-0 after:right-0 after:rotate-180">
                  <div className="inline-block -ml-[3500px] animate-[moveRight_60s_linear_infinite] whitespace-nowrap">
                    <FeaturesCard
                      Icon={<AirVent />}
                      content="Bring Air in the Future"
                      heading="Duct Fitter"
                    />
                    <FeaturesCard
                      Icon={<Wrench />}
                      content="Fitting Excellence into Every Detail"
                      heading="Fitter"
                    />
                    <FeaturesCard
                      Icon={<Hammer />}
                      content="Versatility in Action, Excellence in All"
                      heading="General Operative"
                    />
                    <FeaturesCard
                      Icon={<SunSnow />}
                      content="Heating, Ventilating, and Cooling Excellence"
                      heading="HVAC Installer"
                    />
                    <FeaturesCard
                      Icon={<Cog />}
                      content="Preserving History, Inspiring Tomorrow"
                      heading="Mechanical"
                    />
                    <FeaturesCard
                      Icon={<Droplets />}
                      content="Flowing with Precision, Plumbing with Excellence"
                      heading="Plumber"
                    />
                    <FeaturesCard
                      Icon={<ClipboardList />}
                      content="Shaping Customer Excellence"
                      heading="QA/QC CX Manager"
                    />
                    <FeaturesCard
                      Icon={<Boxes />}
                      content="Managing Sites, Streamlining Success"
                      heading="Site Administrator"
                    />
                    <FeaturesCard
                      Icon={<Forklift />}
                      content="Lifting and Shifting, Safety First"
                      heading="Teleporter Operator"
                    />
                    <FeaturesCard
                      Icon={<Container />}
                      content="Transforming Spaces with Flawless Walls"
                      heading="White Wall Installer"
                    />
                    <FeaturesCard
                      Icon={<AirVent />}
                      content="Bring Air in the Future"
                      heading="Duct Fitter"
                    />
                    <FeaturesCard
                      Icon={<Wrench />}
                      content="Fitting Excellence into Every Detail"
                      heading="Fitter"
                    />
                    <FeaturesCard
                      Icon={<Hammer />}
                      content="Versatility in Action, Excellence in All"
                      heading="General Operative"
                    />
                    <FeaturesCard
                      Icon={<SunSnow />}
                      content="Heating, Ventilating, and Cooling Excellence"
                      heading="HVAC Installer"
                    />
                    <FeaturesCard
                      Icon={<Cog />}
                      content="Preserving History, Inspiring Tomorrow"
                      heading="Mechanical"
                    />
                    <FeaturesCard
                      Icon={<Droplets />}
                      content="Flowing with Precision, Plumbing with Excellence"
                      heading="Plumber"
                    />
                    <FeaturesCard
                      Icon={<ClipboardList />}
                      content="Shaping Customer Excellence"
                      heading="QA/QC CX Manager"
                    />
                    <FeaturesCard
                      Icon={<Boxes />}
                      content="Managing Sites, Streamlining Success"
                      heading="Site Administrator"
                    />
                    <FeaturesCard
                      Icon={<Forklift />}
                      content="Lifting and Shifting, Safety First"
                      heading="Teleporter Operator"
                    />
                    <FeaturesCard
                      Icon={<Container />}
                      content="Transforming Spaces with Flawless Walls"
                      heading="White Wall Installer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
