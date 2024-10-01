import { FaArrowLeft } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { HiMiniSignal } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import { AiOutlineAreaChart } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { RiDoubleQuotesL } from "react-icons/ri";

const SinglePage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-5">
      <div className="w-full flex items-center justify-between">
        <div className="w-[70%] flex gap-x-5 items-start">
          <FaArrowLeft size={25} className="mt-4 text-[#1F3448]" />
          <div className="w-full flex flex-col">
            <h1 className="text-5xl font-semibold text-[#1F3448] leading-[1.4]">
              Photovoltaik Anlage mit Schnellladestation im Parkhaus Quartier
              Mitte St. Pölten
            </h1>
            <span className="text-zinc-600 font-semibold">
              Rennbahnstraße 1, 3100 St. Pölten, St. Pölten, Austria
            </span>
          </div>
        </div>
        <button className="px-7 py-3 bg-[#1F847F] rounded-md text-white font-semibold">
          + Weitere Anteile Kaufen
        </button>
      </div>
      <div className="w-full h-full flex flex-col overflow-hidden">
        <div className="w-full flex text-[#1F3448] font-semibold">
          <button className="border-b-2 border-[#1F847F] p-3 w-full text-start flex items-center gap-x-3">
            <RxDashboard size={25} />
            Übersicht
          </button>
          <button className="border-b-2 border-[#1F847F] p-3 w-full text-start flex items-center gap-x-3">
            <HiMiniSignal size={25} />
            Kraftwerk Infos
          </button>
          <button className="border-b-2 border-[#1F847F] p-3 w-full text-start flex items-center gap-x-3">
            <GrLocation size={25} />
            Details zur Lage
          </button>
          <button className="border-b-2 border-[#1F847F] p-3 w-full text-start flex items-center gap-x-3">
            <AiOutlineAreaChart size={25} />
            Investment Infos
          </button>
          <button className="border-b-2 border-[#1F847F] p-3 w-full text-start flex items-center gap-x-3">
            <IoWalletOutline size={25} />
            Laufende Einnahmen
          </button>
        </div>
        <div className="w-full h-full pt-8 overflow-auto">
          <div className="w-[70%] h-full flex flex-col gap-y-5">
            <img
              src="https://cdn.brickwise.at/f20a8a78-7774-4b21-8ac8-95250696e059.jpg"
              alt=""
              className="w-full h-[350px] object-cover rounded-2xl"
            />
            <span className="p-3 py-4 rounded-md bg-[#F8FAFA] text-xs font-semibold text-[#1F3448] flex items-center gap-x-3">
              <FaChartLine size={16} />
              Sobald alle Anteile der Emittentin verkauft sind, wird hier die
              historische Entwicklung angezeigt.
            </span>
            <div className="w-full flex justify-between gap-x-5">
              <div className="w-full flex flex-col gap-y-4">
                <div className="w-full flex items-center justify-between p-5 bg-[#F8FAFA] rounded-md shadow">
                  <div className="flex flex-col gap-y-2">
                    <span className="text-sm font-medium text-zinc-600">
                      Ein Anteil erzeugt etwa{" "}
                      <span className="text-[#1F3448]">260,9 kwh</span> pro
                      Jahr.
                    </span>
                    <span className="flex items-center gap-x-2 text-[#1F3448] font-medium">
                      <FaCarAlt size={20} color="#1F3448" />
                      <span className="text-lg">1694.2km</span> mit einem e-Auto
                      <IoInformationCircleOutline />
                    </span>
                  </div>
                  <button className="size-10 bg-black flex items-center justify-center rounded-md">
                    <FiArrowRight size={25} color="white" />
                  </button>
                </div>
                <div className="w-full flex flex-col gap-y-2 bg-[#F8FAFA] p-3 text-zinc-600 font-medium rounded-md shadow-md">
                  <div className="w-full flex items-center justify-between">
                    <span className="flex items-center text-xs">
                      Erw. laufende Ausschüttung
                      <IoInformationCircleOutline />
                    </span>
                    <span>6,12 % p.a.</span>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <span className="text-xs">Fremdkapitalanteil</span>
                    <span className="text-xs">Nein</span>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <span className="text-xs">Laufzeit</span>
                    <span className="text-xs">31.10.2039</span>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <span className="text-xs">
                      Rückzahlungsbetrag (31.10.2039)
                    </span>
                    <span className="text-xs">€ 507,62</span>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between font-medium text-zinc-600">
                  <span className="text-sm">Preis pro Anteil</span>
                  <span>€ 507,62</span>
                </div>
                <div className="w-full flex items-center justify-between font-medium text-zinc-600">
                  <span className="text-sm">Verfügbare Anteile</span>
                  <span>435</span>
                </div>
                <div className="w-full flex items-center justify-between font-medium text-zinc-600">
                  <span className="text-sm">Anteile Gesamt</span>
                  <span>460</span>
                </div>
                <div className="w-full flex items-center justify-between font-medium text-zinc-600 border-t-2 border-b-2 py-5">
                  <span className="text-sm flex items-center gap-x-1">
                    Marktkapitalisierung
                    <IoInformationCircleOutline />
                  </span>
                  <span>€ 233.505,20</span>
                </div>
                <div className="w-full flex items-center justify-between font-medium text-zinc-600">
                  <span className="text-sm">Objektart</span>
                  <span>Energieinfrastruktur</span>
                </div>
                <div className="w-full flex items-center justify-between font-medium text-zinc-600">
                  <span className="text-sm">Leistung</span>
                  <span>113.4 kWp</span>
                </div>
                <div className="w-full flex items-center justify-between font-medium text-zinc-600">
                  <span className="text-sm">Bautyp</span>
                  <span>Aufdach</span>
                </div>
                <div className="w-full flex items-center justify-between font-medium text-zinc-600">
                  <span className="text-sm">Status</span>
                  <span>Bestand</span>
                </div>
                <div className="w-full flex items-center justify-between font-medium text-zinc-600 border-t-2  pt-5">
                  <span className="text-sm flex items-center gap-x-1">
                    Nächste Ausschüttung
                  </span>
                  <span>Monatlich zum 15. (Erwartet ab 15.11.2024)</span>
                </div>
                <div className="w-full flex flex-col p-5 rounded-md bg-[#F8FAFA]">
                  <span>
                    <RiDoubleQuotesL size={25} />
                  </span>
                  <span className=" font-bold text-zinc-600">
                    Parkhaus „Quartier Mitte“ mit der Fassadeninstallation
                    sunset patterns
                  </span>
                  <span className="text-end w-full flex justify-end">
                    <RiDoubleQuotesL size={25} />
                  </span>
                </div>
              </div>
              <div className="w-full">right side</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
