import Footer from "@/components/silverback/Footer";
import Navbar from "@/components/silverback/Navbar";
import React, { Fragment } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <div className="min-h-screen w-full overflow-x-clip">
      <Navbar />
      <main className="min-h-[calc(100vh-753px)] max-w-[1400px] mx-auto">
        {children}
      </main>
      <Footer />
      </div>
    </Fragment>
  );
}
