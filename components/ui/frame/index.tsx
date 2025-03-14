import WebNavbar from "@/components/features/navbar/navbarWeb";
import React from "react";

function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col p-5 bg-light-black rounded-3xl border-light-gray border-2 relative transition-all duration-300 mt-5 mx-auto md:max-w-[700px] lg:min-w-[900px] xl:mt-0">
      <WebNavbar />
      <div className="w-full flex flex-col gap-6">{children}</div>
    </div>
  );
}

export default PageFrame;
