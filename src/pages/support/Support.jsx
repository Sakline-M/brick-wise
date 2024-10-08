/* eslint-disable no-unused-vars */
import React from "react";
import SupportHeader from "../../components/supportComponents/SupportHeader";
import SupportHero from "../../components/supportComponents/SupportHero";
import SupportSidebar from "../../components/supportComponents/SupportSidebar";
import ObjectCard from "../../components/ObjectCard";

const Support = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <SupportHeader />
      <div className="flex w-full h-full">
        {/* Main Body Section */}
        <div className=" w-full">
          <SupportHero />
        </div>

        {/* Sidebar */}
        <div className="lg:w-[30%] h-full p-5 flex-col gap-y-5 bg-[#F8FAFA] rounded-xl overflow-auto no-scrollbar lg:flex hidden">
          <span className="text-black font-semibold text-xl">
            Weitere Objekte
          </span>
          <ObjectCard />
          <ObjectCard />
          <ObjectCard />
          <ObjectCard />
        </div>
      </div>
    </div>
  );
};

export default Support;
