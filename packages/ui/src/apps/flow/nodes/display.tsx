import type { LucideIcon } from "lucide-react";
import { memo } from "react";
import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";
import { uicn } from "../../../lib";
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
    <Card className={uicn("", dragging && "ui-cursor-grabbing", className)}>
      <CardContent className="ui-flex ui-items-center ui-justify-between ui-gap-2 ui-p-2 ui-pr-5">
        <div className="ui-flex ui-items-center ui-gap-2">
          <div className="ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted">
            <Icon size={24} />
          </div>
          <div className="ui-grid ui-content-center">
            <p className="ui-select-none ui-text-start ui-text-sm ui-font-semibold">
              {label}
            </p>
            <p className="ui-select-none ui-text-start ui-text-xs ui-opacity-50">
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
    <Card className={uicn("", dragging && "ui-cursor-grabbing", className)}>
      <CardContent className="ui-flex ui-items-center ui-justify-between ui-gap-2 ui-p-2 ui-pr-5">
        <div className="ui-flex ui-items-center ui-gap-2">
          <div className="ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted">
            <Icon size={24} />
          </div>
          <div className="ui-grid ui-content-center">
            <p className="ui-select-none ui-text-start ui-text-sm ui-font-semibold">
              {label}
            </p>
            <p className="ui-select-none ui-text-start ui-text-xs ui-opacity-50">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
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

export const DisplayNodeDefault = memo(DisplayNodeDf);

function DisplayNodeIn({
  data: { Icon, label, description, className, direction },
  dragging,
  isConnectable,
}: NodeProps<DisplayNodeProps>): JSX.Element {
  return (
    <Card className={uicn("ui-", dragging && "ui-cursor-grabbing", className)}>
      <CardContent className="ui-flex ui-items-center ui-justify-between ui-gap-2 ui-p-2 ui-pr-5">
        <div className="ui-flex ui-items-center ui-gap-2">
          <div className="ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted">
            <Icon size={24} />
          </div>
          <div className="ui-grid ui-content-center">
            <p className="ui-select-none ui-text-start ui-text-sm ui-font-semibold">
              {label}
            </p>
            <p className="ui-select-none ui-text-start ui-text-xs ui-opacity-50">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
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

export const DisplayNodeInput = memo(DisplayNodeIn);

function DisplayNodeOut({
  data: { Icon, label, description, className, direction },
  dragging,
  isConnectable,
}: NodeProps<DisplayNodeProps>): JSX.Element {
  return (
    <Card
      className={uicn(
        "ui-min-w-[200px]",
        dragging && "ui-cursor-grabbing",
        className,
      )}
    >
      <CardContent className="ui-flex ui-items-center ui-justify-between ui-gap-2 ui-p-2 ui-pr-5">
        <div className="ui-flex ui-items-center ui-gap-2">
          <div className="ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted">
            <Icon size={24} />
          </div>
          <div className="ui-grid ui-content-center">
            <p className="ui-select-none ui-text-start ui-text-sm ui-font-semibold">
              {label}
            </p>
            <p className="ui-select-none ui-text-start ui-text-xs ui-opacity-50">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
      <Handle
        className={uicn(
          direction === "horizontal"
            ? "!ui-h-8 !ui-w-0.5 !ui-min-w-0 -ui-translate-x-0.5 -ui-translate-y-1/2 !ui-transform ui- !ui-rounded-l-none !ui-rounded-r-sm !ui-border-border !ui-bg-muted"
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
