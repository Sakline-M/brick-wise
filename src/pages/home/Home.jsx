/* eslint-disable no-unused-vars */
import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { RiHomeFill } from "react-icons/ri";
import { PiArmchairFill } from "react-icons/pi";
import { PiArmchairLight } from "react-icons/pi";
import { RiBuilding2Fill } from "react-icons/ri";
import { RiBuilding2Line } from "react-icons/ri";
import { PiClockCountdown } from "react-icons/pi";
import { PiClockCountdownFill } from "react-icons/pi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoMdCheckbox } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import AllPage from "../allProduct/AllPage";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-3">
      <div className="w-full flex flex-col gap-y-3">
        {/* logo and login */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[48px] text-[#1F3448] font-semibold">
            Marktplatz
          </span>
          <div className="flex items-center gap-x-3">
            <button className="text-[#1F847F] text-[16px] font-semibold hover:bg-slate-100 px-8 py-3 rounded transition-all duration-300">
              Einloggen
            </button>
            <button className="text-white bg-[#1F847F] hover:bg-[#186965] text-[16px] font-semibold px-8 py-3 rounded transition-all duration-300">
              Account erstellen
            </button>
          </div>
        </div>
        {/* logo and login */}
        <div className="w-full flex items-center justify-between">
          <div className="text-[14px] text-[#1F3448] flex items-center gap-x-2">
            <button className="font-medium flex items-center gap-x-1 px-4 py-2 tracking-wider transition-all duration-300 hover:bg-slate-200 border border-slate-200 rounded-full">
              <RiHomeLine size={17} />
              Alle
            </button>
            <button className="font-medium flex items-center gap-x-1 px-4 py-2 tracking-wider transition-all duration-300 hover:bg-slate-200 border border-slate-200 rounded-full">
              <PiArmchairLight size={17} />
              Wohnimmobilien
            </button>
            <button className="font-medium flex items-center gap-x-1 px-4 py-2 tracking-wider transition-all duration-300 hover:bg-slate-200 border border-slate-200 rounded-full">
              <RiBuilding2Line size={17} />
              Gewerbe
            </button>
            <button className="font-medium flex items-center gap-x-1 px-4 py-2 tracking-wider transition-all duration-300 hover:bg-slate-200 border border-slate-200 rounded-full">
              <PiClockCountdown size={17} />
              Finanzierungsphase
            </button>
            <button className="font-medium flex items-center gap-x-1 px-4 py-2 tracking-wider transition-all duration-300 hover:bg-slate-200 border border-slate-200 rounded-full">
              <IoMdCheckboxOutline size={17} />
              Bestand
            </button>
          </div>
          <button className="flex items-center gap-x-1 text-[14px] text-[#1F3448] font-medium px-4 py-2 tracking-wider transition-all duration-300 hover:bg-slate-200 border border-slate-200 rounded-full">
            <FaMapMarkedAlt />
            Karte
          </button>
        </div>
      </div>
      <div className="w-full h-full overflow-auto">
        <AllPage/>
      </div>
    </div>
  );
};

export default Home;
