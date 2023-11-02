/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

"use client";

import { forwardRef } from "react";
import type { MapRef } from "react-map-gl";
import Mapbox, { Marker } from "react-map-gl";
import { Card } from "../../shared";
import "mapbox-gl/dist/mapbox-gl.css";
import type { MapProps } from "./types";

/**
 * A component that renders a Mapbox map with markers.
 *
 * @remarks
 * This component uses the `react-map-gl` and `mapbox-gl` libraries to render a map with markers.
 *
 * @param props - The component props of type of MapProps.
 * @param className - The CSS class name to apply to the component.
 * @param markers - An array of markers to render on the map a Marker have a type of Marker.
 * @param mapboxAccessToken - The Mapbox access token to use for the map.
 * @param mapStyle - The Mapbox map style to use for the map.
 * @param attributionControl - Whether to show the attribution control on the map.
 * @param initialViewState - The initial view state of the map.
 *
 * @returns The rendered `Map` component.
 *
 * @example
 * ```tsx
 * <Map
 *   className="w-full h-full"
 *   markers={[
 *     {
 *       id: "marker1",
 *       longitude: -122.431297,
 *       latitude: 37.773972,
 *       heading: "San Francisco",
 *       subheading: "California, USA",
 *     },
 *     {
 *       id: "marker2",
 *       longitude: -73.985664,
 *       latitude: 40.748817,
 *       heading: "NYC",
 *       subheading: "New York, USA",
 *     },
 *   ]}
 *   mapboxAccessToken={process.env.MY_MAPBOX_ACCESS_TOKEN}
 * />
 * ```
 *
 * @remarks
 * If you want to use 'useMap' hook, you need use it in a Child/Children or use a MapProvider.
 *
 * @example
 * ```tsx
 * <Map
 *  children={<Nav />}
 * />
 *
 * ...
 *
 * function Nav() {
 *  const {current: map} = useMap();
 *
 *  const onClick = () => {
 *    map.flyTo({center: [-122.4, 37.8]});
 *  };
 *
 *  return <Button onClick={onClick}>Go</Button>;
 * }
 * ```
 *
 * @example
 * ```tsx
 * <MapProvider>
 *  <Map />
 *  <Nav />
 * </MapProvider>
 *
 * ...
 *
 * function Nav() {
 *  const {current: map} = useMap();
 *
 *  const onClick = () => {
 *    map.flyTo({center: [-122.4, 37.8]});
 *  };
 *
 *  return <Button onClick={onClick}>Go</Button>;
 * }
 * ```
 */
const Map = forwardRef<MapRef, MapProps>((props, ref) => {
  const {
    markers,
    mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
    mapStyle = "mapbox://styles/mapbox/dark-v11",
    attributionControl = false,
    initialViewState = {
      longitude: 10,
      latitude: 53,
      zoom: 4,
    },
    ...rest
  } = props;

  return (
    <Card className="w-full h-full overflow-hidden !font-graphik">
      <Mapbox
        attributionControl={attributionControl}
        initialViewState={initialViewState}
        mapStyle={mapStyle}
        mapboxAccessToken={mapboxAccessToken}
        ref={ref}
        style={{ width: "100%", height: "100%" }}
        {...rest}
      >
        {markers?.map((marker) => {
          const {
            id,
            content,
            heading,
            subheading,
            anchor = "bottom",
            ...markerPropsRest
          } = marker;
          return (
            <Marker anchor={anchor} key={id} {...markerPropsRest}>
              {content ? (
                content
              ) : (
                <div className="font-graphik ">
                  <div className="text-center font-bold tracking-tight text-base leading-none">
                    {heading}
                  </div>
                  <div className="text-center text-sm text-[#aba6a2] font-bold leading-none">
                    {subheading}
                  </div>
                  <div className="flex justify-center text-[#aba6a2] pt-1">
                    <svg
                      fill="none"
                      height="14"
                      viewBox="0 0 10 14"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 5C10 2.23858 7.76142 0 5 0C2.24457 0 0.0097181 2.22887 3.16091e-05 4.98203C0 7.5 4.16667 13.3333 5 13.3333C5.83333 13.3333 10 7.76142 10 5Z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </Marker>
          );
        })}
      </Mapbox>
    </Card>
  );
});

Map.displayName = "Map";

export { Map };
