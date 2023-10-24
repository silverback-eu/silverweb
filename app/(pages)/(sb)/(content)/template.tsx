import { ReactNode } from "react";

import Footer from "@/components/silverback/Footer";
import Navbar from "@/components/silverback/Navbar";

export default function Template({ children }: { children: ReactNode }) {
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
