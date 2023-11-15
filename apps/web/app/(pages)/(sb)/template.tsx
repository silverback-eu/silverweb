import { Footer, Navbar } from "@silverweb/ui/silverback";
import type { ReactNode } from "react";

export default function Template({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="min-h-screen w-full overflow-x-clip">
      <Navbar />
      <main className="min-h-[calc(100vh-753px)] max-w-[1400px] mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
