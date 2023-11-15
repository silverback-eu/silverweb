import { FlowProvider } from "@silverweb/ui/provider";
import type { ReactNode } from "react";

export default function Template({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <FlowProvider>{children}</FlowProvider>;
}
