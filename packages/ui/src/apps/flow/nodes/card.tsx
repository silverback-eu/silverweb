import type { ReactNode } from "react";
import { memo } from "react";
import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";
import { Card } from "../../../shared";
import { uicn } from "../../../lib";

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
    <Card className={uicn("", dragging && "ui-cursor-grabbing", className)}>
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
    <Card className={uicn("", dragging && "ui-cursor-grabbing", className)}>
      {content}
      <Handle
        className={uicn(
          direction === "horizontal"
            ? "!ui-h-8 !ui-w-0.5 !ui-min-w-0 -ui-translate-y-1/2 ui-translate-x-0.5 !ui-transform !ui-rounded-l-sm !ui-rounded-r-none !ui-border-border !ui-bg-muted"
            : "!ui-mt-0.5 !ui-h-0.5 !ui-min-h-0 !ui-w-8 !ui-rounded-b-none !ui-rounded-t-sm !ui-border-border !ui-bg-muted",
        )}
        isConnectable={isConnectable}
        position={direction === "horizontal" ? Position.Left : Position.Top}
        type="target"
      />
      <Handle
        className={uicn(
          direction === "horizontal"
            ? "!ui-h-8 !ui-w-0.5 !ui-min-w-0 -ui-translate-x-0.5 -ui-translate-y-1/2 !ui-transform ui- !ui-rounded-l-none !ui-rounded-r-sm !ui-border-border !ui-bg-muted"
            : "!ui-h-0.5 !ui-min-h-0 !ui-w-8 -ui-translate-x-1/2 -ui-translate-y-0.5 !ui-transform ui- !ui-rounded-b-sm !ui-rounded-t-none !ui-border-border !ui-bg-muted",
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
    <Card className={uicn("", dragging && "ui-cursor-grabbing", className)}>
      {content}
      <Handle
        className={uicn(
          direction === "horizontal"
            ? "!ui-h-8 !ui-w-0.5 !ui-min-w-0 -ui-translate-y-1/2 ui-translate-x-0.5 !ui-transform !ui-rounded-l-sm !ui-rounded-r-none !ui-border-border !ui-bg-muted"
            : "!ui-mt-0.5 !ui-h-0.5 !ui-min-h-0 !ui-w-8 !ui-rounded-b-none !ui-rounded-t-sm !ui-border-border !ui-bg-muted",
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
    <Card className={uicn("", dragging && "ui-cursor-grabbing", className)}>
      {content}
      <Handle
        className={uicn(
          direction === "horizontal"
            ? "!ui-h-8 !ui-w-0.5 !ui-min-w-0 -ui-translate-x-0.5 -ui-translate-y-1/2 !ui-transform ui- !ui-rounded-l-none !ui-rounded-r-sm !ui-border-border !ui-bg-muted"
            : "!ui-h-0.5 !ui-min-h-0 !ui-w-8 -ui-translate-x-1/2 -ui-translate-y-0.5 !ui-transform ui- !ui-rounded-b-sm !ui-rounded-t-none !ui-border-border !ui-bg-muted",
        )}
        isConnectable={isConnectable}
        position={direction === "horizontal" ? Position.Right : Position.Bottom}
        type="source"
      />
    </Card>
  );
}

export const CardNodeOutput = memo(CardNodeOut);
