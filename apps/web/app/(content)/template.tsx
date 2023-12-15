import type { ReactNode } from "react";
import { Footer, Navbar } from "@silverweb/ui";

export default function Template({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="min-h-screen w-full overflow-x-clip">
      <Navbar />
      <main className="mx-auto min-h-[calc(100vh-753px)] max-w-[1400px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
