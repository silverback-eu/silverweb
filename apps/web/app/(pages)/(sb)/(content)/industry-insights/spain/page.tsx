"use client";

import { Button, Separator } from "@silverweb/ui/components/shared";

export default function SpainTakesTheLead(): JSX.Element {
  return (
    <div className="max-w-4xl mx-auto mt-8 space-y-4">
      <div className="flex justify-between">
        <Button
          className="p-0 text-base h-auto"
          onClick={() => {
            window.open("/industry-insights");
          }}
          variant="link"
        >
          See all posts
        </Button>
        <div className="text-muted-foreground">
          Published on August 16, 2023
        </div>
      </div>
      <h1 className="text-6xl font-bold tracking-tighter">
        Spain Takes The Lead On Cleantech
      </h1>
      <div className="text-lg text-muted-foreground">
        Spain`s cleantech leadership and the opportunity of tapping into Latin
        America`s skilled workforce.
      </div>
      <div className="aspect-[1.91/1] bg-slate-400 rounded-lg" />
      <div className="h-5" />
      <Separator />
      <div className="h-5" />
      <div>
        <p>
          Spain didn’t need the UN Secretary-General, Antonio Guterres to point
          out last week that the “era of global boiling has arrived”. As early
          as April, the Iberian nation had been sweltering in 40C temperatures
          and confirming a new phase of the global climate emergency. However,
          as outside observers watched and worried about Mediterranean waters
          bubbling to a record-shattering 28C, Spain was leading Europe in a
          much more encouraging way. Action. <br />
          <br />
          The big cleantech investment headlines have tended to focus on
          northern Europe and a cluster of monster battery gigafactory projects.
          Of course, an abundance of clean energy sources in Scandinavia has
          helped attract manufacturers in the electric vehicle (EV) ecosystem
          but the battle to match China’s almost 60% global market share of
          battery production capacity is, in reality, a continental effort. In
          fact, a recently published graphic of battery projects either in
          planning, under construction or already in operation detailed a
          whopping 46 sites spread across 14 European countries. Spain in this
          analysis had been looking forward to three EV battery projects but our
          sense is that rocketing temperatures have focused government minds and
          prompted a further flurry of initiatives. Despite a tightly-contested
          July general election the following developments suggest a quickening
          pace of action:
          <br />
          <br />
          The Spanish government is planning to approve 15% deductions on income
          tax for the purchase of electric vehicles.
          <br />
          Seat and its VW parent announced in April an incremental €300 million
          investment for a battery assembly plant in Martorell, Catalonia. For
          context, Seat and VW are already investing €10 billion to “make Spain
          a hub for European electrical mobility”.
          <br />
          As Europe’s second biggest car producer Spain is anxious to protect an
          industrial legacy which accounts for 8% of GDP and encourage
          investment in support infrastructure needed for an EV transition.
          Hence, the announced collaboration between commodities giant,
          Glencore, domestic construction player, FCC, and renewable energy
          leader, Iberdrola, to develop lithium-ion battery recycling facilities
          clearly indicates some long-term thinking by Spanish industrial and
          energy leaders.
          <br />
          It is this bigger EV ecosystem picture which makes Spain a very
          interesting watch over the next few years. We mentioned earlier the
          green energy attractions of northern Europe but Spain has big
          renewable credentials too. Currently, the country’s power grid has
          just passed the 50% renewable mark but the government expect wind and
          solar to drive a clean energy grid contribution of 81% by 2030. So, it
          is very interesting to see the latest data on where the EU’s
          Innovation Fund is investing in cleantech. A total of €3.6 billion is
          to be invested across 41 projects and, intriguingly, Spain is the
          destination leader with 7 projects, the same as Germany. Furthermore,
          four of those seven projects will focus on producing renewable
          hydrogen. This is all very exciting but we should be conscious of two
          structural headwinds facing the cleantech sector, and not just Spain.
          <br />
          <br />
          First, these cleantech projects are hugely capital intensive. The
          sector depends on other people’s money and the funding environment has
          become much tougher as interest rates have moved higher. According to
          data from venture capital analysts at Dealroom, the “recession-proof”
          2022 boom of climate tech is now a distant memory. A few 2023 numbers
          are worth highlighting:
          <br />
          <br />
          Venture funding for European climate tech companies dropped 43% in the
          first 6 months of 2023.
          <br />
          The growth stage fundings suffered most with a 48% collapse.
          <br />
          On a more positive note, clean energy has been resilient with funding
          declining by just 19%.
          <br />
          So, the apparently limitless supply of clean tech investment, as
          experienced in 2022, has met the reality of higher hurdle rates and
          returns expectations. Capital market shifts should be considered
          cyclical events which usually mean revert over time but there is one
          other significant supply issue impacting the clean tech sector. And,
          it is definitely structural. The growth of the sector, and even
          individual projects, is threatened by a shortage of talent with
          experience and expertise in clean tech construction. As an
          illustration, consider the following:
          <br />
          <br />
          Trade publication, Rewiring America, has said the USA needs 1 million
          more electricians to meet its climate goals by installing heat pumps,
          solar panels and EV charging stations.
          <br />
          Just 2% of electricians in the US are women.
          <br />
          In Germany there is a shortage of more than 200,000 skilled workers,
          particularly electricians, for wind and solar energy projects. Lead
          times to hire electricians are longer than those for software
          engineers.
          <br />
          The US reference to a huge gender gap in the electrician trade should
          not be mistaken as a regional differentiator. It is a global problem
          and the energy and construction sectors lag most sectors in the
          representation of women. This current failing could, in time, become
          an opportunity as an untapped pool of talent but, for now, this skills
          shortage could cripple high growth projects without expert planning
          and scaling experience. And again, Spain might have a fortunate legacy
          to add to its auto manufacturing and renewable energy positioning…..
          <br />
          <br />
          What are the chances the Spanish-speaking populations of Latin America
          would be an interesting skills resourcing opportunity for a
          far-sighted welcoming government in Madrid?
          <br />
        </p>
      </div>
    </div>
  );
}
