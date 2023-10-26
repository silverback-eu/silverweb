"use client";

import { ReactNode } from "react";
import { ReactFlowProvider } from "reactflow";

export default function FlowProvider({
  children,
}: {
  children: ReactNode[] | ReactNode;
}) {
  return <ReactFlowProvider>{children}</ReactFlowProvider>;
}
