import { FlowProvider } from "@silverweb/ui";
import type { ReactNode } from "react";

export default function Template({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <FlowProvider>{children}</FlowProvider>;
}
