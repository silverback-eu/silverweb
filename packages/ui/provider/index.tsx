"use client";
/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ReactNode } from "react";
import { FlowProvider } from "../components/apps/flow";
import { ThemeProvider } from "./theme-provider";

export function Provider({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableSystem
    >
      <div className="h-screen">{children}</div>
    </ThemeProvider>
  );
}

export { ThemeProvider, FlowProvider };
