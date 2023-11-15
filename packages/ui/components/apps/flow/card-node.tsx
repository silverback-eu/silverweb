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
            ? "!h-8 !min-w-0 !w-0.5 !transform translate-x-0.5 -translate-y-1/2 !bg-muted !border-border !rounded-l-sm !rounded-r-none"
            : "!w-8 !min-h-0 !h-0.5 !mt-0.5 !bg-muted !border-border !rounded-t-sm !rounded-b-none"
        )}
        isConnectable={isConnectable}
        position={direction === "horizontal" ? Position.Left : Position.Top}
        type="target"
      />
      <Handle
        className={cn(
          direction === "horizontal"
            ? "!h-8 !min-w-0 !w-0.5 !transform -translate-x-0.5 -translate-y-1/2  !bg-muted !border-border !rounded-r-sm !rounded-l-none"
            : "!w-8 !min-h-0 !h-0.5 !transform -translate-x-1/2 -translate-y-0.5  !bg-muted !border-border !rounded-b-sm !rounded-t-none"
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
            ? "!h-8 !min-w-0 !w-0.5 !transform translate-x-0.5 -translate-y-1/2 !bg-muted !border-border !rounded-l-sm !rounded-r-none"
            : "!w-8 !min-h-0 !h-0.5 !mt-0.5 !bg-muted !border-border !rounded-t-sm !rounded-b-none"
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
            ? "!h-8 !min-w-0 !w-0.5 !transform -translate-x-0.5 -translate-y-1/2  !bg-muted !border-border !rounded-r-sm !rounded-l-none"
            : "!w-8 !min-h-0 !h-0.5 !transform -translate-x-1/2 -translate-y-0.5  !bg-muted !border-border !rounded-b-sm !rounded-t-none"
        )}
        isConnectable={isConnectable}
        position={direction === "horizontal" ? Position.Right : Position.Bottom}
        type="source"
      />
    </Card>
  );
}

export const CardNodeOutput = memo(CardNodeOut);
