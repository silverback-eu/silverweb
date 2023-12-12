import type { ReactNode } from "react";
import { memo } from "react";
import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";
import { Card } from "../../../shared";
import { cn } from "../../../lib/utils";

export interface CardNodeProps {
  content?: ReactNode;
  className?: string;
  direction?: "vertical" | "horizontal";
}

function CardNodeWO({
  data: { content, className },
  dragging,
}: NodeProps<CardNodeProps>): JSX.Element {
  return (
    <Card className={cn("", dragging && "cursor-grabbing", className)}>
      {content}
    </Card>
  );
}

export const CardNodeWithout = memo(CardNodeWO);

function CardNodeDf({
  data: { content, className, direction },
  dragging,
  isConnectable,
}: NodeProps<CardNodeProps>): JSX.Element {
  return (
    <Card className={cn("", dragging && "cursor-grabbing", className)}>
      {content}
      <Handle
        className={cn(
          direction === "horizontal"
            ? "!h-8 !w-0.5 !min-w-0 -translate-y-1/2 translate-x-0.5 !transform !rounded-l-sm !rounded-r-none !border-border !bg-muted"
            : "!mt-0.5 !h-0.5 !min-h-0 !w-8 !rounded-b-none !rounded-t-sm !border-border !bg-muted",
        )}
        isConnectable={isConnectable}
        position={direction === "horizontal" ? Position.Left : Position.Top}
        type="target"
      />
      <Handle
        className={cn(
          direction === "horizontal"
            ? "!h-8 !w-0.5 !min-w-0 -translate-x-0.5 -translate-y-1/2 !transform  !rounded-l-none !rounded-r-sm !border-border !bg-muted"
            : "!h-0.5 !min-h-0 !w-8 -translate-x-1/2 -translate-y-0.5 !transform  !rounded-b-sm !rounded-t-none !border-border !bg-muted",
        )}
        isConnectable={isConnectable}
        position={direction === "horizontal" ? Position.Right : Position.Bottom}
        type="source"
      />
    </Card>
  );
}

export const CardNodeDefault = memo(CardNodeDf);

function CardNodeIn({
  data: { content, className, direction },
  dragging,
  isConnectable,
}: NodeProps<CardNodeProps>): JSX.Element {
  return (
    <Card className={cn("", dragging && "cursor-grabbing", className)}>
      {content}
      <Handle
        className={cn(
          direction === "horizontal"
            ? "!h-8 !w-0.5 !min-w-0 -translate-y-1/2 translate-x-0.5 !transform !rounded-l-sm !rounded-r-none !border-border !bg-muted"
            : "!mt-0.5 !h-0.5 !min-h-0 !w-8 !rounded-b-none !rounded-t-sm !border-border !bg-muted",
        )}
        isConnectable={isConnectable}
        position={direction === "horizontal" ? Position.Left : Position.Top}
        type="target"
      />
    </Card>
  );
}

export const CardNodeInput = memo(CardNodeIn);

function CardNodeOut({
  data: { content, className, direction },
  dragging,
  isConnectable,
}: NodeProps<CardNodeProps>): JSX.Element {
  return (
    <Card className={cn("", dragging && "cursor-grabbing", className)}>
      {content}
      <Handle
        className={cn(
          direction === "horizontal"
            ? "!h-8 !w-0.5 !min-w-0 -translate-x-0.5 -translate-y-1/2 !transform  !rounded-l-none !rounded-r-sm !border-border !bg-muted"
            : "!h-0.5 !min-h-0 !w-8 -translate-x-1/2 -translate-y-0.5 !transform  !rounded-b-sm !rounded-t-none !border-border !bg-muted",
        )}
        isConnectable={isConnectable}
        position={direction === "horizontal" ? Position.Right : Position.Bottom}
        type="source"
      />
    </Card>
  );
}

export const CardNodeOutput = memo(CardNodeOut);
