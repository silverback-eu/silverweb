import "./globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";

import { fontGraphik } from "@/config/fonts";
import { metadataConfig } from "@/config/site";
import Provider from "@/lib/Provider";
import { cn } from "@/lib/utils";

import "reactflow/dist/style.css";

export const metadata: Metadata = metadataConfig;

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased dark font-graphik selection:bg-gray-500 selection:bg-opacity-30 selection:text-opacity-75",
          fontGraphik.variable,
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
