/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { LegacyRef } from "react";
import { forwardRef } from "react";

const BurgerMenuIconPrimitive = forwardRef(
  (
    {
      open,
      onOpenChange,
    }: { open?: boolean; onOpenChange?: (open: boolean) => void },
    ref
  ) => (
    <div>
      <div>
        <div className="overflow-hidden w-8 h-8 relative">
          <div className="scale-[0.25] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <label
              className="flex flex-col w-[70px] cursor-pointer [&_span]:bg-current [&_span]:rounded-[10px] [&_span]:h-[7px] [&_span]:my-[7px] [&_span]:transition-[0.4s_cubic-bezier(0.68,-0.6,0.32,1.6)]"
              htmlFor="check"
            >
              <input
                className="hidden [&:checked_~_span:nth-of-type(1)]:origin-bottom [&:checked_~_span:nth-of-type(1)]:[transform:rotatez(45deg)_translate(8px,0px)] [&:checked_~_span:nth-of-type(2)]:origin-top [&:checked_~_span:nth-of-type(2)]:[transform:rotatez(-45deg)] [&:checked_~_span:nth-of-type(3)]:origin-bottom  [&:checked_~_span:nth-of-type(3)]:w-1/2 [&:checked_~_span:nth-of-type(3)]:[transform:translate(30px,-11px)_rotatez(45deg)]"
                id="check"
                ref={ref as unknown as LegacyRef<HTMLInputElement>}
                type="checkbox"
                {...(open !== undefined && { checked: open })}
                aria-label={open ? "Close menu" : "Open menu"}
                onChange={(e) =>
                  e.target.checked
                    ? onOpenChange?.(true)
                    : onOpenChange?.(false)
                }
              />
              <span className="select-none [&:nth-of-type(1)]:w-1/2 [&:nth-of-type(2)]:w-full [&:nth-of-type(3)]:w-3/4" />
              <span className="select-none [&:nth-of-type(1)]:w-1/2 [&:nth-of-type(2)]:w-full [&:nth-of-type(3)]:w-3/4" />
              <span className="select-none [&:nth-of-type(1)]:w-1/2 [&:nth-of-type(2)]:w-full [&:nth-of-type(3)]:w-3/4" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
);

BurgerMenuIconPrimitive.displayName = "BurderMenuIcon";

export const BurgerMenuIcon = BurgerMenuIconPrimitive;
