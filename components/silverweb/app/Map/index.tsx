"use client";

import dynamic from "next/dynamic";
import React, { useMemo } from "react";

import { MakerProps } from "@/components/silverweb/app/Map/RawMap";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Map(props: {
  marker?: MakerProps[] | MakerProps;
  centerMarker?: boolean;
}) {
  const Map = useMemo(
    () => dynamic(() => import("@/components/silverweb/app/Map/RawMap"), {
      loading: () => <Skeleton className="w-full h-full" />,
      ssr: false,
    }),
    [],
  );

  return (
    <Card className="w-full h-full overflow-hidden">
      <Map {...props} />
    </Card>
  );
}
