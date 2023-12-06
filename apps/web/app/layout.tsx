import "@/styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Provider } from "@silverweb/ui/provider";
import { metadataConfig } from "@/config/site";
import { fontGraphik } from "@/config/fonts";

export const metadata: Metadata = metadataConfig as Metadata;

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${
          (fontGraphik as NextFontWithVariable).variable
        } min-h-screen bg-background antialiased dark font-graphik selection:bg-gray-500 selection:bg-opacity-30 selection:text-opacity-75`}
      >
        <Provider>{children}</Provider>
        <Analytics />
      </body>
    </html>
  );
}
