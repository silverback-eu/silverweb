import { Loader2 } from "lucide-react";
import { Fragment } from "react";
import { Toaster as PToaster } from "sonner";
import type { ToasterProps } from "./types";

export function Toaster(props: ToasterProps): JSX.Element {
  return (
    <Fragment>
      <PToaster
        closeButton
        duration={500000}
        loadingIcon={<Loader2 className="animate-spin mr-2 h-5 w-5" />}
        toastOptions={{
          style: {
            borderRadius: "0.75rem",
            border: "1px solid hsl(var(--border))",
            backgroundColor: "hsl(var(--card))",
            color: "hsl(var(--card-foreground))",
            padding: "1.5rem",
            boxShadow:
              "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000), 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)",
            fontFamily: "var(--graphik-webfont), sans-serif",
          },
          unstyled: true,
        }}
        {...props}
      />
      <style>
        {`
          [data-sonner-toast] [data-title] {
              font-weight: 600 !important;
              font-size: .875rem !important;
              line-height: 1.25rem !important;
          }
          [data-sonner-toast] [data-description] {
              font-size: .875rem !important;
              line-height: 1.25rem !important;
              opacity: 0.90;
          }
          [data-sonner-toast] [data-content] {
              gap: 0.25rem;
              display: grid;
          }
          [data-sonner-toast] [data-button] {
              font-weight: 500 !important;
              font-size: .875rem;
              line-height: 1.25rem;
              padding-left: 0.75rem;
              padding-right: 0.75rem;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              border: 1px solid hsl(var(--border));
              border-radius: calc(0.5rem - 2px);
              background-color: transparent;
              height: 2rem;
              color: inherit;
          }
          [data-sonner-toast] button[aria-label="Close toast"] {
              right: 0.75rem !important;
              left: auto !important;
              transform: translate(35%, 25%) !important;
              background-color: transparent !important;
              border: none;
              color: hsl(var(--card-foreground));
          }
          [data-sonner-toast] button[aria-label="Close toast"] > svg {
            transition: opacity 0.2s ease-in-out;
            opacity: 0.5;
            stroke-width: 2;
            height: 15px;
            width: 15px;
          }
          [data-sonner-toast] button[aria-label="Close toast"] > svg:hover {
            opacity: 1;
          }
          [data-sonner-toast] [data-button]:hover {
              background-color: hsl(var(--secondary));
          }
          li[data-type="error"] {
            color: rgb(239 68 68) !important;
          }
          li[data-type="success"] {
            color: rgb(34 197 94) !important;
          }
          li[data-type="warning"] {
            color: rgb(234 179 8) !important;
          }
          li[data-type="loading"] {
            opacity: 0.5 !important;
          }
          li[data-type="loading"] > [data-button] {
            user-select: none;
            pointer-events: none;
          }
        `}
      </style>
    </Fragment>
  );
}
