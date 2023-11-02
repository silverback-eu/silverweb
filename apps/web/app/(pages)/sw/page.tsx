import { SiteNavbar } from "@silverweb/ui";
import { BringToFront, Tags } from "lucide-react";

export default function SilverWebHomePage(): JSX.Element {
  const quickApps = [
    {
      icon: <BringToFront size={23} />,
      gradient: "from-blue-500 to-blue-700",
      link: "/sw/",
    },
    {
      icon: <Tags size={23} />,
      gradient: "from-violet-400 to-violet-700",
      link: "/sw/",
    },
  ];

  return (
    <div>
      Hello
      {process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      <SiteNavbar openApp={1} quickApps={quickApps} />
    </div>
  );
}
