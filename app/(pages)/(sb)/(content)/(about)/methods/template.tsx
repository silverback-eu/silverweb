import { Metadata } from "next";
import { ReactNode } from "react";

import FlowProvider from "@/components/provider/FlowProvider";

export const metadata: Metadata = {
  title: "About",
};

export default function Template({ children }: { children: ReactNode }) {
  return (
    <FlowProvider>
      {children}
    </FlowProvider>
  );
}
