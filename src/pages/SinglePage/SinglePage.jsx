import { FaArrowLeft } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { HiMiniSignal } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import { AiOutlineAreaChart } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import ObjectCard from "../../components/ObjectCard";
import { useState } from "react";
import Overview from "./Overview";
import PowerPlantInfo from "./PowerPlantInfo";
import LocationDetails from "./LocationDetails";
import InvestmentInfos from "./InvestmentInfos";
import CurrentIncome from "./CurrentIncome";
import { Link } from "react-router-dom";

const SinglePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [section, setSection] = useState("overview");
  return (
    <div className="w-full h-full flex flex-col sm:gap-y-5 gap-y-3 sm:px-10 sm:pt-20 pt-14">
      <div className="w-full flex md:flex-row flex-col md:items-center md:justify-between sm:gap-5 gap-y-3 px-3 sm:px-0 md:mt-0 mt-10">
        <div className="md:w-[70%] flex sm:gap-x-5 items-start">
          <Link to={'/'}><FaArrowLeft className="mt-4 text-[#1F3448] sm:block hidden" /></Link>
          <div className="w-full flex flex-col">
            <h1 className="xl:text-4xl md:text-2xl text-base font-semibold text-[#1F3448] md:leading-[1.4]">
              Photovoltaik Anlage mit Schnellladestation im Parkhaus Quartier
              Mitte St. Pölten
            </h1>
            <span className="text-zinc-600 font-semibold md:text-sm text-xs">
              Rennbahnstraße 1, 3100 St. Pölten, St. Pölten, Austria
            </span>
          </div>
        </div>
        <button className="sm:px-7 py-2 sm:py-3 sm:text-base text-sm text-nowrap bg-[#1F847F] rounded-md text-white font-semibold">
          + Weitere Anteile Kaufen
        </button>
      </div>
      <div className="w-full h-full flex flex-col overflow-hidden">
        <div className="w-full flex text-[#1F3448] font-semibold overflow-auto">
          <button
            onClick={() => setSection("overview")}
            className={`border-b-2 ${
              section === "overview" ? "border-[#1F847F]" : "border-slate-200"
            }  text-nowrap p-3 text-start flex items-center sm:gap-x-3 gap-x-1 w-full md:text-base text-sm`}
          >
            <RxDashboard className="sm:text-[25px] text-[16px]" />
            Übersicht
          </button>
          <button
            onClick={() => setSection("powerplantinfo")}
            className={`border-b-2 ${
              section === "powerplantinfo"
                ? "border-[#1F847F]"
                : "border-slate-200"
            }  text-nowrap p-3 text-start flex items-center sm:gap-x-3 gap-x-1 w-full md:text-base text-sm`}
          >
            <HiMiniSignal className="sm:text-[25px] text-[16px]" />
            Kraftwerk Infos
          </button>
          <button
            onClick={() => setSection("locationdetails")}
            className={`border-b-2 ${
              section === "locationdetails"
                ? "border-[#1F847F]"
                : "border-slate-200"
            }  text-nowrap p-3 text-start flex items-center sm:gap-x-3 gap-x-1 w-full md:text-base text-sm`}
          >
            <GrLocation className="sm:text-[25px] text-[16px]" />
            Details zur Lage
          </button>
          <button
            onClick={() => setSection("investmentinfos")}
            className={`border-b-2 ${
              section === "investmentinfos"
                ? "border-[#1F847F]"
                : "border-slate-200"
            }  text-nowrap p-3 text-start flex items-center sm:gap-x-3 gap-x-1 w-full md:text-base text-sm`}
          >
            <AiOutlineAreaChart className="sm:text-[25px] text-[16px]" />
            Investment Infos
          </button>
          <button
            onClick={() => setSection("currentincome")}
            className={`border-b-2 ${
              section === "currentincome"
                ? "border-[#1F847F]"
                : "border-slate-200"
            }  text-nowrap p-3 text-start flex items-center sm:gap-x-3 gap-x-1 w-full md:text-base text-sm`}
          >
            <IoWalletOutline className="sm:text-[25px] text-[16px]" />
            Laufende Einnahmen
          </button>
        </div>
        <div className="w-full h-full pt-8 flex justify-between gap-x-8 sm:px-0 px-3 overflow-auto">
          <div className="lg:w-[70%] w-full h-full flex flex-col gap-y-5 overflow-auto no-scrollbar">
            <img
              src="https://cdn.brickwise.at/f20a8a78-7774-4b21-8ac8-95250696e059.jpg"
              alt=""
              className="w-full h-[350px] object-cover rounded-2xl"
            />

            {section === "overview" ? (
              <Overview setShowModal={setShowModal} showModal={showModal} />
            ) : (
              ""
            )}
            {section === "powerplantinfo" ? <PowerPlantInfo /> : ""}
            {section === "locationdetails" ? <LocationDetails /> : ""}
            {section === "investmentinfos" ? <InvestmentInfos /> : ""}
            {section === "currentincome" ? <CurrentIncome /> : ""}
          </div>
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
    </div>
  );
};

export default SinglePage;
