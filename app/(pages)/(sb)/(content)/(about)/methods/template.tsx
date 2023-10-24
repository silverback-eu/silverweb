import { Metadata } from "next";
import React, { Fragment } from "react";

import FlowProvider from "@/components/provider/FlowProvider";

export const metadata: Metadata = {
  title: "About",
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <FlowProvider>
      {children}
    </FlowProvider>
  );
}
