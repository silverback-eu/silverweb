/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { CSSProperties, ComponentType } from "react";
import type {
  CoordinateExtent,
  NodeHandleBounds,
  NodeProps,
  Position,
  XYPosition,
  internalsSymbol,
} from "reactflow";
import type { CardNodeProps } from "./card-node";
import type { DisplayNodeProps } from "./display-node";

export type Node = {
  id: string;
  position: XYPosition;
  type?: string;
  style?: CSSProperties;
  className?: string;
  sourcePosition?: Position;
  targetPosition?: Position;
  hidden?: boolean;
  selected?: boolean;
  dragging?: boolean;
  draggable?: boolean;
  selectable?: boolean;
  connectable?: boolean;
  deletable?: boolean;
  dragHandle?: string;
  width?: number | null;
  height?: number | null;
  parentNode?: string;
  zIndex?: number;
  extent?: "parent" | CoordinateExtent;
  expandParent?: boolean;
  positionAbsolute?: XYPosition;
  ariaLabel?: string;
  focusable?: boolean;
  resizing?: boolean;
  [internalsSymbol]?: {
    z?: number;
    handleBounds?: NodeHandleBounds;
    isParent?: boolean;
  };
} & (
  | {
      type: "displayNode";
      data: DisplayNodeProps;
    }
  | {
      type: "displayNodeInput";
      data: DisplayNodeProps;
    }
  | {
      type: "displayNodeOutput";
      data: DisplayNodeProps;
    }
  | {
      type: "displayNodeWithout";
      data: DisplayNodeProps;
    }
  | {
      type: "cardNode";
      data: CardNodeProps;
    }
  | {
      type: "cardNodeInput";
      data: CardNodeProps;
    }
  | {
      type: "cardNodeOutput";
      data: CardNodeProps;
    }
  | {
      type: "cardNodeWithout";
      data: CardNodeProps;
    }
);

export type NodeTypes = Record<Node["type"], ComponentType<NodeProps>>;
