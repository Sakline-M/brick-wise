/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { RiHomeLine } from "react-icons/ri";
import { PiArmchairLight } from "react-icons/pi";
import { RiBuilding2Line } from "react-icons/ri";
import { PiClockCountdown } from "react-icons/pi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import AllPage from "../allProduct/AllPage";

const Home = () => {
  const [open, setOpen] = useState(1);
  return (
    <div className="w-full h-full flex flex-col gap-y-3">
      <div className="w-full flex flex-col gap-y-3 xl:mt-0 mt-10">
        {/* logo and login */}
        <div className="w-full flex md:flex-row flex-col-reverse md:items-center md:justify-between py-5">
          <span className="md:text-[48px] text-2xl text-[#1F3448] font-semibold">
            Marktplatz
          </span>
          <div className="md:w-auto w-full flex items-center md:justify-normal justify-end gap-x-3">
            <button className="text-[#1F847F] md:text-[16px] text-sm font-semibold hover:bg-slate-100 px-8 py-3 rounded transition-all duration-300">
              Einloggen
            </button>
            <button className="text-white bg-[#1F847F] hover:bg-[#186965] md:text-[16px] text-sm font-semibold px-8 py-3 rounded transition-all duration-300 text-nowrap">
              Account erstellen
            </button>
          </div>
        </div>
        {/* logo and login */}
        <div className="w-full flex items-center justify-between gap-x-5">
          <div className="text-[14px] text-[#1F3448] flex items-center gap-x-2 overflow-auto">
            <button
              onClick={() => setOpen(1)}
              className={`font-medium flex items-center gap-x-1 px-4 py-2 tracking-wider transition-all duration-300  border border-slate-200 rounded-full  ${
                open === 1 ? "bg-slate-200" : "hover:bg-slate-200"
              }`}
            >
              {open === 1 ? (
                <RiHomeFill size={17} className="text-red-500" />
              ) : (
                <RiHomeLine size={17} />
              )}
              Alle
            </button>
            <button
              onClick={() => setOpen(2)}
              className={`font-medium flex items-center gap-x-2 px-4 py-2 tracking-wider transition-all duration-300  border border-slate-200 rounded-full  ${
                open === 2 ? "bg-slate-200" : "hover:bg-slate-200"
              }`}
            >
              {open === 2 ? (
                <PiArmchairFill size={17} className="text-red-500" />
              ) : (
                <PiArmchairLight size={17} />
              )}
              Wohnimmobilien
            </button>
            <button
              onClick={() => setOpen(3)}
              className={`font-medium flex items-center gap-x-1 px-4 py-2 tracking-wider transition-all duration-300  border border-slate-200 rounded-full  ${
                open === 3 ? "bg-slate-200" : "hover:bg-slate-200"
              }`}
            >
              {open === 3 ? (
                <RiBuilding2Fill size={17} className="text-red-500" />
              ) : (
                <RiBuilding2Line size={17} />
              )}
              Gewerbe
            </button>
            <button
              onClick={() => setOpen(4)}
              className={`font-medium flex items-center gap-x-1 px-4 py-2 tracking-wider transition-all duration-300  border border-slate-200 rounded-full  ${
                open === 4 ? "bg-slate-200" : "hover:bg-slate-200"
              }`}
            >
              {open === 4 ? (
                <PiClockCountdownFill size={17} className="text-red-500" />
              ) : (
                <PiClockCountdown size={17} />
              )}
              Finanzierungsphase
            </button>
            <button
              onClick={() => setOpen(5)}
              className={`font-medium flex items-center gap-x-1 px-4 py-2 tracking-wider transition-all duration-300  border border-slate-200 rounded-full  ${
                open === 5 ? "bg-slate-200" : "hover:bg-slate-200"
              }`}
            >
              {open === 5 ? (
                <IoMdCheckbox size={17} className="text-red-500" />
              ) : (
                <IoMdCheckboxOutline size={17} />
              )}
              Bestand
            </button>
          </div>
          <button className="flex items-center gap-x-1 text-[14px] text-[#1F3448] font-medium px-4 py-2 tracking-wider transition-all duration-300 hover:bg-slate-200 border border-slate-200 rounded-full">
            <FaMapMarkedAlt />
            Karte
          </button>
        </div>
      </div>
      <div className="w-full h-full overflow-auto no-scrollbar">
        <AllPage />
      </div>
    </div>
  );
};

export default Home;
