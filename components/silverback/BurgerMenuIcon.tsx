import React, { LegacyRef, forwardRef } from "react";

/**
 * Renders a BurgerMenuIcon component.
 *
 * @param {object} props - The component props.
 * @param {boolean} props.open - Whether the menu is open or not.
 * @return {JSX.Element} The rendered BurgerMenuIcon component.
 */
const BurgerMenuIcon = forwardRef(
  (
    {
      open,
      onOpenChange,
    }: { open?: boolean; onOpenChange?: (open: boolean) => void },
    ref
  ) => (
    <div>
      <div>
        <style jsx>{`
          label {
            display: flex;
            flex-direction: column;
            width: 70px;
            cursor: pointer;
          }

          label span {
            background: currentColor;
            border-radius: 10px;
            height: 7px;
            margin: 7px 0;
            transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
          }

          span:nth-of-type(1) {
            width: 50%;
          }

          span:nth-of-type(2) {
            width: 100%;
          }

          span:nth-of-type(3) {
            width: 75%;
          }

          input[type="checkbox"] {
            display: none;
          }

          input[type="checkbox"]:checked ~ span:nth-of-type(1) {
            transform-origin: bottom;
            transform: rotatez(45deg) translate(8px, 0px);
          }

          input[type="checkbox"]:checked ~ span:nth-of-type(2) {
            transform-origin: top;
            transform: rotatez(-45deg);
          }

          input[type="checkbox"]:checked ~ span:nth-of-type(3) {
            transform-origin: bottom;
            width: 50%;
            transform: translate(30px, -11px) rotatez(45deg);
          }
        `}</style>
        <div className="overflow-hidden w-8 h-8 relative">
          <div className="scale-[0.25] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <label htmlFor="check">
              <input
                ref={ref as unknown as LegacyRef<HTMLInputElement>}
                type="checkbox"
                id="check"
                {...(open !== undefined && { checked: open })}
                onChange={(e) =>
                  e.target.checked
                    ? onOpenChange?.(true)
                    : onOpenChange?.(false)
                }
                aria-label={open ? "Close menu" : "Open menu"}
              />
              <span className="select-none"></span>
              <span className="select-none"></span>
              <span className="select-none"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
);

BurgerMenuIcon.displayName = "BurderMenuIcon";

export default BurgerMenuIcon;
// export default function BurgerMenuIcon({open, onOpenChange}: {open?: boolean, onOpenChange?: (open: boolean) => void}) {
//   return (
//     <div>
//       <style jsx>{`
//         label {
//           display: flex;
//           flex-direction: column;
//           width: 70px;
//           cursor: pointer;
//         }

//         label span {
//           background: currentColor;
//           border-radius: 10px;
//           height: 7px;
//           margin: 7px 0;
//           transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
//         }

//         span:nth-of-type(1) {
//           width: 50%;
//         }

//         span:nth-of-type(2) {
//           width: 100%;
//         }

//         span:nth-of-type(3) {
//           width: 75%;
//         }

//         input[type="checkbox"] {
//           display: none;
//         }

//         input[type="checkbox"]:checked ~ span:nth-of-type(1) {
//           transform-origin: bottom;
//           transform: rotatez(45deg) translate(8px, 0px);
//         }

//         input[type="checkbox"]:checked ~ span:nth-of-type(2) {
//           transform-origin: top;
//           transform: rotatez(-45deg);
//         }

//         input[type="checkbox"]:checked ~ span:nth-of-type(3) {
//           transform-origin: bottom;
//           width: 50%;
//           transform: translate(30px, -11px) rotatez(45deg);
//         }
//       `}</style>
//       <div className="overflow-hidden w-8 h-8 relative">
//         <div className="scale-[0.25] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//           <label htmlFor="check">
//             <input type="checkbox" id="check" {...open !== undefined && {checked: open}} onChange={(e) => e.target.checked ? onOpenChange?.(true) : onOpenChange?.(false)} aria-label={open ? "Close menu" : "Open menu"}/>
//             <span className="select-none"></span>
//             <span className="select-none"></span>
//             <span className="select-none"></span>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }
