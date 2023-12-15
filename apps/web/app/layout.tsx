import "./css-sheets.scss";
import type { Metadata } from "next";
import { Provider } from "@silverweb/ui";
import { meta } from "../config/meta";
import { fontGraphik } from "../config/font";

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html className="dark" lang="en">
      <body
        className={`${fontGraphik.variable} dark min-h-screen bg-background font-graphik antialiased selection:bg-gray-500 selection:bg-opacity-30 selection:text-opacity-75`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
