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
      <ContextProvider>
        <TooltipProvider>
          <Toaster />
          <div className="h-screen">{children}</div>
        </TooltipProvider>
      </ContextProvider>
    </ThemeProvider>
  );
}
