import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import React, { PropsWithChildren } from "react";

const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      {/* <MobileNav /> */}
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default SiteLayout;
