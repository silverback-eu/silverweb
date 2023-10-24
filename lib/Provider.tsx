import React from "react";

import { ThemeProvider } from "@/components/provider/ThemeProvider";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
}
