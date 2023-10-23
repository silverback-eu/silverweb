import React from "react";
import { Cards, ProjectTable } from "./comp";
import { Metadata } from "next";
import suir from "public/brands/SUIR.png";
import assemblin from "public/brands/ASSEMBLIN.png";
import bravida from "public/brands/Bravida.png";
import northvolt from "public/brands/Northvolt.png";
import joneseng from "public/brands/Jones Eng.png";
import sisk from "public/brands/SISK.png";
import elcab from "public/brands/ELCAB.png";
import avtel from "public/brands/AVTEL.png";
import elprofilen from "public/brands/Elprofilen.png";
import hmv from "public/brands/H&MV.png";
import elkoll from "public/brands/Elkoll.png";
import jmc from "public/brands/JMC.png";
import convergint from "public/brands/Convergint.png";
import ardmac from "public/brands/ARDMAC.png";
import bilfinger from "public/brands/Bilfinger.png";

export const metadata: Metadata = {
  title: "Partnerships - Who are our supporter...",
};

export default function Partnerships() {
  return (
    <div className="relative w-full px-7">
      <div className="grid justify-center text-center mt-8">
        <div className="font-bold tracking-tight text-7xl ">
          Meet our Partners
        </div>
        <div className="tracking-tighter text-xl text-muted-foreground drop-shadow-lg mt-5">
          Alone we can do so little, together we can do so much. Who are our
          supporter...
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mt-20 justify-center z-0">
        <Cards href="https://suireng.ie/" img={suir} />
        <Cards href="https://www.assemblin.com/" img={assemblin} />
        <Cards href="https://www.bravida.se/" img={bravida} />
        <Cards href="https://northvolt.com/" img={northvolt} />
        <Cards href="https://joneseng.com/" img={joneseng} />
        <Cards href="https://www.johnsiskandson.com/" img={sisk} />
        <Cards href="https://elcab.se/" img={elcab} />
        <Cards href="https://avtelglobal.com/" img={avtel} />
        <Cards href="https://www.elprofilen.se/" img={elprofilen} />
        <Cards href="https://www.hmvengineering.com/" img={hmv} />
        <Cards href="https://elkoll.com/" img={elkoll} />
        <Cards href="https://jmcelectrics.com/" img={jmc} />
        <Cards href="https://www.convergint.com/" img={convergint} />
        <Cards href="https://www.ardmac.com/" img={ardmac} />
        <Cards href="https://www.bilfinger.com/en/" img={bilfinger} />
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


