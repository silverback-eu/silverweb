import type { HTMLAttributes } from "react";
import { uicn } from "../lib";

function Skeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={uicn(
        "ui-animate-pulse ui-rounded-md ui-bg-primary/10",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
