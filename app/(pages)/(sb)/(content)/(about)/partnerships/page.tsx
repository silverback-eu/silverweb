import { Metadata } from "next";
import ardmac from "public/brands/ARDMAC.png";
import assemblin from "public/brands/ASSEMBLIN.png";
import avtel from "public/brands/AVTEL.png";
import bilfinger from "public/brands/Bilfinger.png";
import bravida from "public/brands/Bravida.png";
import convergint from "public/brands/Convergint.png";
import elcab from "public/brands/ELCAB.png";
import elkoll from "public/brands/Elkoll.png";
import elprofilen from "public/brands/Elprofilen.png";
import hmv from "public/brands/H&MV.png";
import jmc from "public/brands/JMC.png";
import joneseng from "public/brands/Jones Eng.png";
import northvolt from "public/brands/Northvolt.png";
import sisk from "public/brands/SISK.png";
import suir from "public/brands/SUIR.png";

import { ProjectTable } from "./comp";

import PartnerCard from "@/components/silverweb/cards/PartnerCard";

export const metadata: Metadata = {
  title: "Partnerships - Who are our supporter...",
};

export default function Partnerships() {
  return (
    <div className="relative w-full px-7">
      <div className="grid justify-center text-center mt-8">
        <div className="font-bold tracking-tight text-7xl ">Meet our Partners</div>
        <div className="tracking-tighter text-xl text-muted-foreground drop-shadow-lg mt-5">
          Alone we can do so little, together we can do so much. Who are our supporter...
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mt-20 justify-center z-0">
        <PartnerCard href="https://suireng.ie/" img={suir} />
        <PartnerCard href="https://www.assemblin.com/" img={assemblin} />
        <PartnerCard href="https://www.bravida.se/" img={bravida} />
        <PartnerCard href="https://northvolt.com/" img={northvolt} />
        <PartnerCard href="https://joneseng.com/" img={joneseng} />
        <PartnerCard href="https://www.johnsiskandson.com/" img={sisk} />
        <PartnerCard href="https://elcab.se/" img={elcab} />
        <PartnerCard href="https://avtelglobal.com/" img={avtel} />
        <PartnerCard href="https://www.elprofilen.se/" img={elprofilen} />
        <PartnerCard href="https://www.hmvengineering.com/" img={hmv} />
        <PartnerCard href="https://elkoll.com/" img={elkoll} />
        <PartnerCard href="https://jmcelectrics.com/" img={jmc} />
        <PartnerCard href="https://www.convergint.com/" img={convergint} />
        <PartnerCard href="https://www.ardmac.com/" img={ardmac} />
        <PartnerCard href="https://www.bilfinger.com/en/" img={bilfinger} />
      </div>
      <div className="mt-32 mx-3 space-y-5">
        <div className="font-bold text-5xl tracking-tighter w-full text-right">
          Projects with partners
        </div>
        <ProjectTable />
      </div>
    </div>
  );
}
