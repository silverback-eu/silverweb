import { Check, Copy } from "lucide-react";
import { useState, type ReactNode } from "react";

export function Snippet({ children }: { children: ReactNode }): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="ui-w-fit ui-rounded-md ui-border ui-border-stone-500 ui-border-opacity-50 ui-px-3 ui-py-1">
      <pre>
        <code className="ui-flex ui-items-center ui-font-mono ui-tracking-tight">
          $ {children}{" "}
          <button
            className="ui-transition-opacity ui-duration-200"
            onClick={(ev) => {
              ev.preventDefault();
              const style = ev.currentTarget.style;
              style.opacity = "0";
              navigator.clipboard
                .writeText(children?.toString() || "")
                .catch(() => {
                  throw new Error("Failed to copy text to clipboard");
                });
              setTimeout(() => {
                setIsCopied(true);
                style.opacity = "1";
              }, 100);
              setTimeout(() => {
                style.opacity = "0";
              }, 3000);
              setTimeout(() => {
                style.opacity = "1";
                setIsCopied(false);
              }, 3100);
            }}
            type="button"
          >
            <Copy
              className="ui-p-1 ui-transition-opacity ui-duration-1000"
              style={{
                display: isCopied ? "none" : "block",
              }}
            />
            <Check
              className="ui-p-1 ui-transition-opacity ui-duration-1000"
              style={{
                display: !isCopied ? "none" : "block",
              }}
            />
          </button>
        </code>
      </pre>
    </div>
  );
}
