import type { LucideIcon } from "lucide-react";
import { memo } from "react";
import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";
import { cn } from "../../../lib/utils";
import { CardContent, Card } from "../../../shared";

export interface DisplayNodeProps {
  Icon: LucideIcon;
  label: string;
  description: string;
  direction?: "vertical" | "horizontal";
  className?: string;
}

function DisplayNodeWO({
  data: { Icon, label, description, className },
  dragging,
}: NodeProps<DisplayNodeProps>): JSX.Element {
  return (
    <Card
      className={cn("min-w-[200px]", dragging && "cursor-grabbing", className)}
    >
      <CardContent className="flex items-center justify-between gap-2 p-2 pr-5">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
            <Icon size={24} />
          </div>
          <div className="grid content-center">
            <p className="select-none text-start text-sm font-semibold">
              {label}
            </p>
            <p className="select-none text-start text-xs opacity-50">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export const DisplayNodeWithout = memo(DisplayNodeWO);

function DisplayNodeDf({
  data: { Icon, label, description, className, direction },
  dragging,
  isConnectable,
}: NodeProps<DisplayNodeProps>): JSX.Element {
  return (
    <Card
      className={cn("min-w-[200px]", dragging && "cursor-grabbing", className)}
    >
      <CardContent className="flex items-center justify-between gap-2 p-2 pr-5">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
            <Icon size={24} />
          </div>
          <div className="grid content-center">
            <p className="select-none text-start text-sm font-semibold">
              {label}
            </p>
            <p className="select-none text-start text-xs opacity-50">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
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

export const DisplayNodeDefault = memo(DisplayNodeDf);

function DisplayNodeIn({
  data: { Icon, label, description, className, direction },
  dragging,
  isConnectable,
}: NodeProps<DisplayNodeProps>): JSX.Element {
  return (
    <Card
      className={cn("min-w-[200px]", dragging && "cursor-grabbing", className)}
    >
      <CardContent className="flex items-center justify-between gap-2 p-2 pr-5">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
            <Icon size={24} />
          </div>
          <div className="grid content-center">
            <p className="select-none text-start text-sm font-semibold">
              {label}
            </p>
            <p className="select-none text-start text-xs opacity-50">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
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

export const DisplayNodeInput = memo(DisplayNodeIn);

function DisplayNodeOut({
  data: { Icon, label, description, className, direction },
  dragging,
  isConnectable,
}: NodeProps<DisplayNodeProps>): JSX.Element {
  return (
    <Card
      className={cn("min-w-[200px]", dragging && "cursor-grabbing", className)}
    >
      <CardContent className="flex items-center justify-between gap-2 p-2 pr-5">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
            <Icon size={24} />
          </div>
          <div className="grid content-center">
            <p className="select-none text-start text-sm font-semibold">
              {label}
            </p>
            <p className="select-none text-start text-xs opacity-50">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
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

export const DisplayNodeOutput = memo(DisplayNodeOut);
