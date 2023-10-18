import React from "react";
import { Cards } from "./comp";

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
        <Cards href="https://suireng.ie/" imgName="SUIR" />
        <Cards href="https://www.assemblin.com/" imgName="ASSEMBLIN" />
        <Cards href="https://www.bravida.se/" imgName="Bravida" />
        <Cards href="https://northvolt.com/" imgName="Northvolt" />
        <Cards href="https://joneseng.com/" imgName="Jones Eng" />
        <Cards href="https://www.johnsiskandson.com/" imgName="SISK" />
        <Cards href="https://elcab.se/" imgName="ELCAB" />
        <Cards href="https://avtelglobal.com/" imgName="AVTEL" />
        <Cards href="https://www.elprofilen.se/" imgName="Elprofilen" />
        <Cards href="https://www.hmvengineering.com/" imgName="H&MV" />
        <Cards href="https://elkoll.com/" imgName="Elkoll" />
        <Cards href="https://jmcelectrics.com/" imgName="JMC" />
        <Cards href="https://www.convergint.com/" imgName="Convergint" />
        <Cards href="https://www.ardmac.com/" imgName="ARDMAC" />
        <Cards href="https://www.bilfinger.com/en/" imgName="Bilfinger" />
      </div>
      <div className="mt-32">
        <div className="font-bold text-5xl tracking-tighter w-full text-center">
          Projects with partners
        </div>
      </div>
    </div>
  );
}
