import React, { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type CardNodeProps = {
  content?: React.ReactNode;
  className?: string;
};

function CardNodeWO({
  data: { content, className },
  dragging,
  isConnectable,
}: NodeProps<CardNodeProps>) {
  return (
    <Card className={cn("", dragging && "cursor-grabbing", className)}>
      {content}
    </Card>
  );
}

export const CardNodeWithout = memo(CardNodeWO);

function CardNodeDf({
  data: { content, className },
  dragging,
  isConnectable,
}: NodeProps<CardNodeProps>) {
  return (
    <Card className={cn("", dragging && "cursor-grabbing", className)}>
      {content}
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        className="!w-8 !min-h-0 !h-0.5 !mt-0.5 !bg-muted !border-border !rounded-t-sm !rounded-b-none"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        className="!w-8 !min-h-0 !h-0.5 !transform -translate-x-1/2 -translate-y-0.5  !bg-muted !border-border !rounded-b-sm !rounded-t-none"
      />
    </Card>
  );
}

export const CardNodeDefault = memo(CardNodeDf);

function CardNodeIn({
  data: { content, className },
  dragging,
  isConnectable,
}: NodeProps<CardNodeProps>) {
  return (
    <Card className={cn("", dragging && "cursor-grabbing", className)}>
      {content}
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        className="!w-8 !min-h-0 !h-0.5 !mt-0.5 !bg-muted !border-border !rounded-t-sm !rounded-b-none"
      />
    </Card>
  );
}

export const CardNodeInput = memo(CardNodeIn);

function CardNodeOut({
  data: { content, className },
  dragging,
  isConnectable,
}: NodeProps<CardNodeProps>) {
  return (
    <Card className={cn("", dragging && "cursor-grabbing", className)}>
      {content}
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        className="!w-8 !min-h-0 !h-0.5 !transform -translate-x-1/2 -translate-y-0.5  !bg-muted !border-border !rounded-b-sm !rounded-t-none"
      />
    </Card>
  );
}

export const CardNodeOutput = memo(CardNodeOut);
