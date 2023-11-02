/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ComponentProps } from "react";
import type { MarkerProps } from "react-map-gl";
import type Mapbox from "react-map-gl";

export interface Marker extends MarkerProps {
  id: string;
  heading?: string;
  subheading?: string;
  content?: JSX.Element;
}

type MapboxProps = ComponentProps<typeof Mapbox>;

export interface MapProps extends MapboxProps {
  className?: string;
  markers?: Marker[];
}
