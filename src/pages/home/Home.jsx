/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { RiBuilding2Fill, RiHomeFill, RiHomeLine } from "react-icons/ri";
import {
  PiArmchairFill,
  PiArmchairLight,
  PiClockCountdownFill,
} from "react-icons/pi";
import { RiBuilding2Line } from "react-icons/ri";
import { PiClockCountdown } from "react-icons/pi";
import { IoMdCheckbox, IoMdCheckboxOutline } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import AllPage from "../allProduct/AllPage";
import { Link } from "react-router-dom";
import Login from "../../components/Login";
import NewObject from "../../components/Objects/NewObject";
import OtherObjects from "../../components/Objects/OtherObjects";

const Home = () => {
  const [open, setOpen] = useState(1);
  return (
    <div className="w-full h-full flex flex-col gap-y-3 pt-16">
      <div className="w-full flex flex-col sm:gap-y-3 sm:px-5 px-3">
        {/* logo and login */}
        <span className="md:text-5xl text-3xl text-[#1F3448] font-semibold py-5">
          Marktplatz
        </span>
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
            <button
              onClick={() => setOpen(5)}
              className={`font-medium flex items-center gap-x-1 px-4 py-2 tracking-wider transition-all duration-300  border border-slate-200 rounded-full  ${
                open === 5 ? "bg-slate-200" : "hover:bg-slate-200"
              }`}
            >
              <FaMapMarkedAlt />
              Karte
            </button>
          </div>
          <button className="sm:flex hidden items-center gap-x-1 text-[14px] text-[#1F3448] font-medium px-4 py-2 tracking-wider transition-all duration-300 hover:bg-slate-200 border border-slate-200 rounded-full">
            <FaMapMarkedAlt />
            Karte
          </button>
        </div>
      </div>
      <div className="w-full h-full overflow-auto no-scrollbar">
        <NewObject />
        <OtherObjects />
      </div>
    </div>
  );
};

export default Home;
