import { Check, Copy } from "lucide-react";
import { useState, type ReactNode } from "react";

export function Snippet({ children }: { children: ReactNode }): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="w-fit rounded-md border border-stone-500 border-opacity-50 px-3 py-1 ">
      <pre>
        <code className="flex items-center font-mono tracking-tight">
          $ {children}{" "}
          <button
            className="transition-opacity duration-200"
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
              className="p-1 transition-opacity duration-1000"
              style={{
                display: isCopied ? "none" : "block",
              }}
            />
            <Check
              className="p-1 transition-opacity duration-1000"
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
