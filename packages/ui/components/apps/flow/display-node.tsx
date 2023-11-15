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
      <CardContent className="p-2 pr-5 flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
            <Icon size={24} />
          </div>
          <div className="grid content-center">
            <p className="text-sm font-semibold text-start select-none">
              {label}
            </p>
            <p className="text-xs opacity-50 text-start select-none">
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
      <CardContent className="p-2 pr-5 flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
            <Icon size={24} />
          </div>
          <div className="grid content-center">
            <p className="text-sm font-semibold text-start select-none">
              {label}
            </p>
            <p className="text-xs opacity-50 text-start select-none">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
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
      <CardContent className="p-2 pr-5 flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
            <Icon size={24} />
          </div>
          <div className="grid content-center">
            <p className="text-sm font-semibold text-start select-none">
              {label}
            </p>
            <p className="text-xs opacity-50 text-start select-none">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
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
      <CardContent className="p-2 pr-5 flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
            <Icon size={24} />
          </div>
          <div className="grid content-center">
            <p className="text-sm font-semibold text-start select-none">
              {label}
            </p>
            <p className="text-xs opacity-50 text-start select-none">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
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

export const DisplayNodeOutput = memo(DisplayNodeOut);
