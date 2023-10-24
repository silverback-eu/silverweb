"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import { MakerProps } from "@/components/silverweb/app/Map/RawMap";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function MapSkeleton() {
  return <Skeleton className="w-full h-full" />;
}

export default function Map(props: { marker?: MakerProps[] | MakerProps; centerMarker?: boolean }) {
  const RawMap = useMemo(
    () =>
      dynamic(() => import("@/components/silverweb/app/Map/RawMap"), {
        loading: MapSkeleton,
        ssr: false,
      }),
    [],
  );

  return (
    <Card className="w-full h-full overflow-hidden">
      <RawMap {...props} />
    </Card>
  );
}
