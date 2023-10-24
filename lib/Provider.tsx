

import { ThemeProvider } from "@/components/provider/ThemeProvider";

export default function Provider({ children }: { children: ReactNode }) {
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
