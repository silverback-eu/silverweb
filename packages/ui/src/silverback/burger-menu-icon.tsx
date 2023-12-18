import type { LegacyRef } from "react";
import { forwardRef } from "react";

const BurgerMenuIconPrimitive = forwardRef(
  (
    {
      open,
      onOpenChange,
    }: { open?: boolean; onOpenChange?: (open: boolean) => void },
    ref,
  ) => (
    <div>
      <div>
        <div className="ui-relative ui-h-8 ui-w-8 ui-overflow-hidden">
          <div className="ui-absolute ui-left-1/2 ui-top-1/2 -ui-translate-x-1/2 -ui-translate-y-1/2 ui-scale-[0.25]">
            <label
              className="ui-flex ui-w-[70px] ui-cursor-pointer ui-flex-col [&_span]:ui-my-[7px] [&_span]:ui-h-[7px] [&_span]:ui-rounded-[10px] [&_span]:ui-bg-current [&_span]:ui-transition-[0.4s_cubic-bezier(0.68,-0.6,0.32,1.6)]"
              htmlFor="check"
            >
              <input
                className="ui-hidden [&:checked_~_span:nth-of-type(1)]:ui-origin-bottom [&:checked_~_span:nth-of-type(1)]:ui-[transform:rotatez(45deg)_translate(8px,0px)] [&:checked_~_span:nth-of-type(2)]:ui-origin-top [&:checked_~_span:nth-of-type(2)]:ui-[transform:rotatez(-45deg)] [&:checked_~_span:nth-of-type(3)]:ui-w-1/2 [&:checked_~_span:nth-of-type(3)]:ui-origin-bottom [&:checked_~_span:nth-of-type(3)]:ui-[transform:translate(30px,-11px)_rotatez(45deg)]"
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
              <span className="ui-select-none [&:nth-of-type(1)]:ui-w-1/2 [&:nth-of-type(2)]:ui-w-full [&:nth-of-type(3)]:ui-w-3/4" />
              <span className="ui-select-none [&:nth-of-type(1)]:ui-w-1/2 [&:nth-of-type(2)]:ui-w-full [&:nth-of-type(3)]:ui-w-3/4" />
              <span className="ui-select-none [&:nth-of-type(1)]:ui-w-1/2 [&:nth-of-type(2)]:ui-w-full [&:nth-of-type(3)]:ui-w-3/4" />
            </label>
          </div>
        </div>
      </div>
    </div>
  ),
);

BurgerMenuIconPrimitive.displayName = "BurderMenuIcon";

export const BurgerMenuIcon = BurgerMenuIconPrimitive;
