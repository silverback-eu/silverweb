/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Inspired, copied and slightly modified or directly copied from:
 * https://ui.shadcn.com/
 * Many Thanks to shadcn
 *
 */

import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

function Skeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
}

export { Skeleton };
