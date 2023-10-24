"use client";

import React, { Fragment, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L, { LatLngTuple } from "leaflet";
import ReactDomServer from "react-dom/server";
import { useTheme } from "next-themes";

export type MakerProps = {
  lat: number;
  lng: number;
  iconUrl?: string;
  content: React.JSX.Element;
};

/**
 * Renders a map with markers on it.
 *
 * @param {boolean} centerMarker - If true, the first marker in the array will be centered on the map.
 * @return {JSX.Element} A MapContainer component displaying the map with markers.
 */
export default function Map({
  marker,
  centerMarker,
}: {
  marker?: MakerProps[] | MakerProps;
  centerMarker?: boolean;
}) {
  const { theme } = useTheme();
  const [id, _] = useState(new Date().getMilliseconds() * Math.random());
  useEffect(() => {
    const container = L.DomUtil.get(`map-${id}`) as
      | (HTMLElement & { _leaflet_id: string | null })
      | null;

    if (container != null) {
      container._leaflet_id = null;
    }
    const center: LatLngTuple = centerMarker && marker
      ? Array.isArray(marker)
        ? [marker[0].lat, marker[0].lng]
        : [marker.lat, marker.lng]
      : [53.36512, 10.27083];
    const map = L.map(`map-${id}`).setView([...center], 4);
    L.tileLayer(
      theme === "dark" || document.getElementsByClassName("dark").length
        ? "https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=eEwhCbisjZC7pRJyDOWwji88YgxrQHeVPlTCOUGRPxRCKF8GYTBhN2Lv5HZ3sd1g"
        : "https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=eEwhCbisjZC7pRJyDOWwji88YgxrQHeVPlTCOUGRPxRCKF8GYTBhN2Lv5HZ3sd1g",
      {
        minZoom: 0,
        maxZoom: 20,
        attribution:
          "&copy; <a href=\"https://www.stadiamaps.com/\" target=\"_blank\">Stadia Maps</a> &copy; <a href=\"https://openmaptiles.org/\" target=\"_blank\">OpenMapTiles</a> &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
      },
    ).addTo(map);

    if (marker) {
      if (Array.isArray(marker)) {
        marker.map((marker, idx) => {
          const MARKER = L.marker([marker.lat, marker.lng], {
            icon: getIcon(marker.iconUrl || "/svg/fallback_icon.svg"),
          }).addTo(map);
          MARKER.bindPopup(
            ReactDomServer.renderToString(
              <div className="">{marker.content}</div>,
            ),
          );
        });
      } else {
        const MARKER = L.marker([marker.lat, marker.lng], {
          icon: getIcon(marker.iconUrl || "/svg/fallback_icon.svg"),
        }).addTo(map);
        MARKER.bindPopup(
          ReactDomServer.renderToString(
            <div className="">{marker.content}</div>,
          ),
        );
      }
    }
  });

  return (
    <React.Fragment>
      <style jsx global>
        {`
        .leaflet-c-popover {
          border-radius: 14px;
        }
        .map-tiles {
          filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg)
            saturate(0.3) brightness(0.7);
        }
        .leaflet-c-popover :first-child {
          background: black;
          color: white;
        }
        .leaflet-popup-content {
          margin: 0 !important;
          background: black;
          color: white;
          border-radius: 14px;
        }
        .leaflet-popup-close-button {
          display: none;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 14px;
          background: transparent;
        }
        .leaflet-popup-tip {
          background: black;
        }
        .leaflet-container {
          width: 100% !important;
          height: 100% !important;
        }
        .leaflet-control {
          display: none !important;
        }
        .leaflet-popup-tip-container {
          opacity: 0;
        }
        .leaflet-popup-content {
          background: transparent;
        }
      `}
      </style>
      <div id={`map-${id}`} style={{ height: "100%", width: "100%" }} />
    </React.Fragment>
  );
}

function getIcon(link: string) {
  return L.icon({
    iconUrl: link,
    iconSize: [20, 20],
  });
}
