import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Partnerships - Who are our supporter...",
};

export default function Template({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <div className="h-full w-full">{children}</div>;
}
