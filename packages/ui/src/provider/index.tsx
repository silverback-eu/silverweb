"use client";
import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

export function Provider({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableSystem
    >
      <div className="h-screen">{children}</div>
    </ThemeProvider>
  );
}
