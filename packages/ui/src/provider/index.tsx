import type { ReactNode } from "react";
import { ContextProvider, Toaster } from "../apps";
import { TooltipProvider } from "../shared";
import { ThemeProvider } from "./theme-provider";

export function Provider({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableSystem
    >
      <ContextProvider
        items={[
          {
            type: "submenu",
            label: "Quick Links",
            items: [
              {
                type: "item",
                label: "LinkedIn",
                onClick: () => {
                  window.open(
                    "https://www.linkedin.com/company/silverback-staffing/",
                  );
                },
              },
              {
                type: "item",
                label: "Industry Insights",
                onClick: () => {
                  window.open("/industry-insights");
                },
              },
              {
                type: "item",
                label: "Mail",
                onClick: () => {
                  window.open("mailto:work@silverback.ie  ");
                },
              },
              {
                type: "item",
                label: "Phone",
                onClick: () => {
                  window.open("tel:+35314410102");
                },
              },
              {
                type: "item",
                label: "Contact Us",
                onClick: () => {
                  window.open("/connect");
                },
              },
            ],
          },
        ]}
      >
        <TooltipProvider>
          <Toaster />
          <div className="ui-h-screen">{children}</div>
        </TooltipProvider>
      </ContextProvider>
    </ThemeProvider>
  );
}
