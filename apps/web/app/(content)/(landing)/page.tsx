import {
  AirVent,
  BookCopy,
  Boxes,
  Building,
  ClipboardList,
  ClipboardSignature,
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
  Search,
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
import Link from "next/link";
import { Button, VanillaPhoneInput } from "@silverweb/ui";
import assemblin from "../../../public/brands/ASSEMBLIN.png";
import bravida from "../../../public/brands/Bravida.png";
import hmv from "../../../public/brands/H&MV.png";
import joneseng from "../../../public/brands/Jones Eng.png";
import northvolt from "../../../public/brands/Northvolt.png";
import suir from "../../../public/brands/SUIR.png";
import datacentre_1 from "../../../public/projects/datacentre-1.jpg";
import lillestrom_1_min from "../../../public/projects/lillestrom-1-min.jpg";
import northvolt_ett_1 from "../../../public/projects/northvolt-ett-1.jpg";
import avtel from "../../../public/brands/AVTEL.png";
import {
  ContactForm,
  FeaturesCard,
  FlowBackground,
  HeroCards,
  InfoFeature,
  PartnerCard,
  ProjectCard,
  Typewriter,
  WorkFlowCard,
} from "./components";

export default function Landing(): JSX.Element {
  return (
    <div className="relative">
      <div className="text-center">
        <section aria-label="Top">
          <div className="absolute left-1/2 -z-10 h-[800px]  w-full -translate-x-1/2 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 before:bg-gradient-to-r before:from-background before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 after:bg-gradient-to-r after:from-transparent after:to-background after:content-[''] md:before:w-24 md:after:w-24">
            <FlowBackground />
            <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-background to-transparent" />
          </div>
          <Button
            asChild
            className="mt-16 h-8 rounded-md px-3 text-xs sm:mt-24 sm:h-9 sm:px-4 sm:py-2 sm:text-base"
            variant="outline"
          >
            <Link href="/industry-insights">
              Newest Industry insights post...
            </Link>
          </Button>
          <h1 className="mt-2 px-3 text-4xl font-bold tracking-tighter sm:text-6xl">
            Change the world with us <b className="sm:hidden">for a</b>
          </h1>
          <div className="justify-center text-4xl font-bold tracking-tighter sm:flex sm:text-6xl">
            <h1 className="hidden sm:block">for a</h1>
            <Typewriter />
            <h1>future</h1>
          </div>
          <h2 className="mx-auto mt-2 max-w-xl px-12 text-lg tracking-tighter text-warm drop-shadow-lg sm:mt-5 sm:px-4 sm:text-xl sm:font-medium">
            Together we can do so much. Let&apos;s change europe
            <span className="max-sm:hidden">
              and build the new mega projects for a better future
            </span>
            .
          </h2>
          <div>
            <Button
              asChild
              className="mt-5 h-8 rounded-md px-3 text-xs sm:h-9 sm:px-4 sm:py-2 sm:text-base"
            >
              <Link href="tel:+35314410102">Just call us</Link>
            </Button>
          </div>
        </section>
        <section aria-label="Show Projects">
          <div className="mx-auto mt-60 flex h-full max-w-5xl justify-center px-10 sm:justify-between md:px-20 lg:px-4 ">
            <div className="mt-5 animate-[levitate_17s_ease_infinite_1s] sm:mt-0">
              <ProjectCard
                category="Energie"
                description="Provided several teams of electricians, mechanics and white collars."
                img={northvolt_ett_1}
                location={{
                  city: "Skellefteå",
                  country: "Sweden",
                }}
                title="Northvolt Ett"
              />
            </div>
            <div className="mt-16 hidden animate-[levitate_10s_ease_infinite] sm:block">
              <ProjectCard
                category="Commercial"
                description="Our team of plumbers installed sprinkler system for corporate HQ."
                img={lillestrom_1_min}
                location={{
                  city: "Lillestrøm",
                  country: "Norway",
                }}
                title="Felleskjøpet Hovedkontor"
              />
            </div>
            <div className="mt-10 hidden animate-[levitate_13s_ease_infinite_1s_reverse] lg:block">
              <ProjectCard
                category="Data Centre"
                description="We enlisted several tradespeople for various construction tasks during the development of the new data center."
                img={datacentre_1}
                location={{
                  city: "Odense",
                  country: "Denmark",
                }}
                title="Project Fire"
              />
            </div>
          </div>
          <div className="mx-auto mt-2 flex max-w-5xl justify-center">
            <Button asChild variant="link">
              <Link href="/partnerships">See all Projects and Partners</Link>
            </Button>
          </div>
        </section>
        <section aria-label="Hero">
          <div className="relative z-20  mt-32 text-left text-primary">
            <div className="mx-5 mt-[130px] grid items-center gap-7 min-[380px]:mt-[90px]  sm:mx-14 sm:mt-[230px] sm:gap-14 lg:grid-cols-[0.4fr_1fr]">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-extrabold tracking-tighter xl:text-6xl">
                  We together for a better future in Europe
                </div>
                <div className="mt-4 hidden text-2xl font-bold tracking-tighter sm:block lg:mt-9">
                  Start changing the future.
                </div>
                {/* TODO: Add proper form */}
                <div className="mx-2 mt-3 hidden justify-center gap-2 sm:flex lg:justify-start">
                  <VanillaPhoneInput
                    placeholder="353 1 441 0102"
                    popoverClassName="light"
                  />
                  <Button className="w-36">Let&apos;s talk</Button>
                </div>
                <div className="mt-1 hidden text-sm tracking-tight text-muted-foreground sm:block">
                  <p>
                    Making the future easy, green and productive.
                    <span className="inline-flex h-auto items-center justify-center rounded-md p-0 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      Connect
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-[20px_1fr_20px_1fr] lg:gap-0 ">
                <div className="relative hidden h-full sm:block">
                  <div className="absolute left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border before:absolute before:-top-1 before:left-1/2 before:h-10 before:w-2 before:-translate-x-1/2 before:bg-gradient-to-b before:from-background before:to-transparent" />
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full outline outline-border" />
                  <div className="absolute bottom-0 left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border" />
                </div>
                <HeroCards
                  Icon={<Building />}
                  content="We, SilverBack provide a full-service experience for clients with in-house departments for logistics, project management, finance and accounting, IT and human resources, ensuring that all aspects of the project are covered."
                  fallBack="Everything in-house, working without outsourcing, saves time, resources and headaches."
                  title="Comprehensive services"
                />
                <div className="relative hidden h-full sm:block">
                  <div className="absolute left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border before:absolute before:-top-1 before:left-1/2 before:h-10 before:w-2 before:-translate-x-1/2 before:bg-gradient-to-b before:from-background before:to-transparent" />
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full outline outline-border" />
                  <div className="absolute bottom-0 left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border" />
                </div>
                <HeroCards
                  Icon={<Lightbulb />}
                  content="Our team of professionals is experienced in cutting-edge technologies for data center, battery factory construction etc., providing innovative solutions for our partners and clients."
                  fallBack="Specialized in mission-critical construction, like data center, battery factory and infrastructure."
                  title="Expertise & innovation"
                />
                <div className="relative hidden h-full sm:block">
                  <div className="absolute left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border" />
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full outline outline-border" />
                  <div className="absolute bottom-0 left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border before:absolute before:-bottom-1 before:left-1/2 before:h-10 before:w-2 before:-translate-x-1/2 before:bg-gradient-to-t before:from-background before:to-transparent" />
                </div>
                <HeroCards
                  Icon={<MessagesSquare />}
                  content="With a team that speaks six different languages, we ensures that we communicate effectively with anybody to build strong relationships with our partners, clients and employees."
                  fallBack="Work in six different languages ensures that we communicate effectively."
                  title="Communication-focused"
                />
                <div className="relative hidden h-full sm:block">
                  <div className="absolute left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border" />
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full outline outline-border" />
                  <div className="absolute bottom-0 left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border before:absolute before:-bottom-1 before:left-1/2 before:h-10 before:w-2 before:-translate-x-1/2 before:bg-gradient-to-t before:from-background before:to-transparent" />
                </div>
                <HeroCards
                  Icon={<Globe2 />}
                  content="We are present in 8 countries with over 500 employees and 4 offices across Europe, we provide local expertise and support to our clients worldwide while maintaining consistent quality and service."
                  fallBack="Present in 8 countries with over 500 employees amd 4 offices across Europe."
                  title="Global presence"
                />
              </div>
              <div className="block text-center sm:hidden lg:text-left">
                <div className="mx-2 mt-1 flex justify-center gap-2 lg:justify-start">
                  <VanillaPhoneInput
                    placeholder="353 1 441 0102"
                    popoverClassName="light"
                  />
                  <Button className="w-36">Let&apos;s talk</Button>
                </div>
                <div className="mt-1 text-xs tracking-tight text-muted-foreground sm:text-sm">
                  <p>
                    Making the future easy, green and productive.
                    <span className="inline-flex h-auto items-center justify-center rounded-md p-0 text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:text-sm">
                      Connect
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section aria-label="Show Partner">
          <div className="mt-64">
            <div className="text-5xl font-bold tracking-tighter">
              Trusted by our partners
            </div>
            <div className="mt-12 grid justify-center gap-5 sm:flex">
              <PartnerCard
                className="animate-[glowUp_10s_linear_infinite_1s] hover:opacity-50"
                href="https://www.assemblin.com/"
                img={assemblin}
                style={{
                  animationDuration: "10s",
                }}
              />
              <PartnerCard
                className="animate-[glowUp_10s_linear_infinite_2.5s] hover:opacity-50"
                href="https://www.bravida.se/"
                img={bravida}
                style={{
                  animationDuration: "10s",
                }}
              />
              <PartnerCard
                className="animate-[glowUp_10s_linear_infinite_4s] hover:opacity-50"
                href="https://northvolt.com/"
                img={northvolt}
                style={{
                  animationDuration: "10s",
                }}
              />
              <PartnerCard
                className="animate-[glowUp_10s_linear_infinite_5.5s] hover:opacity-50"
                href="https://avtelglobal.com/"
                img={avtel}
                style={{
                  animationDuration: "10s",
                }}
              />
            </div>
            <div className="mt-5 grid justify-center gap-5 sm:flex">
              <PartnerCard
                className="animate-[glowUp_10s_linear_infinite_7s] hover:opacity-50"
                href="https://suireng.ie/"
                img={suir}
                style={{
                  animationDuration: "10s",
                }}
              />
              <PartnerCard
                className="animate-[glowUp_10s_linear_infinite_8.5s] hover:opacity-50"
                href="https://www.hmvengineering.com/"
                img={hmv}
                style={{
                  animationDuration: "10s",
                }}
              />
              <PartnerCard
                className="animate-[glowUp_10s_linear_infinite_10s] hover:opacity-50"
                href="https://joneseng.com/"
                img={joneseng}
                style={{
                  animationDuration: "10s",
                }}
              />
            </div>
            <Button asChild className="mt-4" variant="link">
              <Link href="/partnerships">See all Projects and Partners</Link>
            </Button>
          </div>
        </section>
        <section aria-label="Stats">
          <div className="mx-auto mt-72 grid max-w-6xl grid-cols-1 gap-20 px-5 lg:grid-cols-3 lg:gap-8">
            <InfoFeature
              Icon={<GraduationCap />}
              content="Since 2012 supporting mission-critical and other time sensitive projects throughout Europe."
              metric="Years"
              number={new Date().getFullYear() - 2012}
              subheading="of Experience"
            />
            <InfoFeature
              Icon={<HardHat />}
              content="With over 21 different Trades, we provide you everything in one place."
              metric="Specialists"
              number={500}
              subheading="in over 8 Countries"
            />
            <InfoFeature
              Icon={<Puzzle />}
              content="We helped over 200 dreams come to life and made europe a bit better."
              metric="Projects"
              number={200}
              subheading="planed and realized"
            />
          </div>
        </section>
        <section aria-label="Features">
          <div className="mx-auto mt-72 grid max-w-[1400px] px-3 text-primary">
            <div className="w-[calc(100vw-24px)] text-right text-3xl font-bold tracking-tight md:text-4xl min-[1400px]:max-w-[1400px]">
              Specified on your ideas and plans
              <div className="mt-7 w-full ">
                <div className="relative m-auto flex h-24 w-full items-center overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-24 before:w-64 before:bg-gradient-to-r before:from-background before:to-[rgba(255,255,255,0)] before:to-50% before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-24 after:w-64 after:rotate-180 after:bg-gradient-to-r after:from-background after:to-[rgba(255,255,255,0)] after:to-50% after:content-['']">
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
                <div className="relative m-auto flex h-24 w-full items-center overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-24 before:w-64 before:bg-gradient-to-r before:from-background before:to-[rgba(255,255,255,0)] before:to-50% before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-24 after:w-64 after:rotate-180 after:bg-gradient-to-r after:from-background after:to-[rgba(255,255,255,0)] after:to-50% after:content-['']">
                  <div className="-ml-[2000px] inline-block animate-[moveRight_40s_linear_infinite] whitespace-nowrap">
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
            <div className="mt-20 w-[calc(100vw-24px)] text-left text-3xl font-bold tracking-tight md:text-4xl min-[1400px]:max-w-[1400px]">
              <div>Specified on your career</div>
              <div className="mt-7 w-full ">
                <div className="relative m-auto flex h-24 w-full items-center overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-24 before:w-64 before:bg-gradient-to-r before:from-background before:to-[rgba(255,255,255,0)] before:to-50% before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-24 after:w-64 after:rotate-180 after:bg-gradient-to-r after:from-background after:to-[rgba(255,255,255,0)] after:to-50% after:content-['']">
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
                <div className="relative m-auto flex h-24 w-full items-center overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-24 before:w-64 before:bg-gradient-to-r before:from-background before:to-[rgba(255,255,255,0)] before:to-50% before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-24 after:w-64 after:rotate-180 after:bg-gradient-to-r after:from-background after:to-[rgba(255,255,255,0)] after:to-50% after:content-['']">
                  <div className="-ml-[3500px] inline-block animate-[moveRight_60s_linear_infinite] whitespace-nowrap">
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
        <section aria-label="Contact">
          <div className="mt-64">
            <div className="mx-4 grid gap-12 sm:mx-12 md:mx-24  xl:grid-cols-[1fr_640px]">
              <div className="hidden w-full grid-cols-[1fr_30px_1fr] gap-[1.5px] text-left sm:grid">
                <WorkFlowCard
                  Icon={<MessagesSquare />}
                  content="Have a meeting. Discuss your needs."
                  heading="Meeting"
                  leftRight="left"
                />
                <div className="relative block h-full">
                  <div className="absolute left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border before:absolute before:-top-1 before:left-1/2 before:h-10 before:w-2 before:-translate-x-1/2 before:bg-gradient-to-b before:from-background before:to-transparent" />
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full outline outline-border" />
                  <div className="absolute bottom-0 left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border" />
                </div>
                <div />
                <div />
                <div className="relative block h-full">
                  <div className="absolute left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border" />
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full outline outline-border" />
                  <div className="absolute bottom-0 left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border" />
                </div>
                <WorkFlowCard
                  Icon={<ClipboardSignature />}
                  content="Set up a Plan. Make decisions."
                  heading="Plan"
                />
                <WorkFlowCard
                  Icon={<MessagesSquare />}
                  content="Follow the plan. Monitor process."
                  heading="Action"
                  leftRight="left"
                />
                <div className="relative block h-full">
                  <div className="absolute left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border" />
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full outline outline-border" />
                  <div className="absolute bottom-0 left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border" />
                </div>
                <div />
                <div />
                <div className="relative block h-full">
                  <div className="absolute left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border" />
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full outline outline-border" />
                  <div className="absolute bottom-0 left-1/2 h-[calc(50%-8px)] w-0 -translate-x-1/2 border border-dashed border-border before:absolute before:-bottom-1 before:left-1/2 before:h-10 before:w-2 before:-translate-x-1/2 before:bg-gradient-to-t before:from-background before:to-transparent" />
                </div>
                <WorkFlowCard
                  Icon={<Search />}
                  content="Give feedback. Improve."
                  heading="Review"
                />
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
