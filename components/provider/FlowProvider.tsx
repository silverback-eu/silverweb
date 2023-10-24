"use client";

import React from "react";
import { ReactFlowProvider } from "reactflow";

export default function FlowProvider({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  return <ReactFlowProvider>{children}</ReactFlowProvider>;
}
