/* eslint-disable react/prop-types */
import { FaCarAlt, FaChartLine } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { RiDoubleQuotesL } from "react-icons/ri";
import Modal from "../../components/Modal";
import Map from "../../components/Map/Map";
import LineChart from "../../components/LineChart";

const Overview = ({ showModal, setShowModal }) => {
  return (
    <>
      <LineChart />
      <span className="p-3 py-4 rounded-md bg-[#F8FAFA] text-xs font-semibold text-[#1F3448] flex items-center gap-x-3">
        <FaChartLine  className="md:text-[1rem] text-[2rem]"/>
        Sobald alle Anteile der Emittentin verkauft sind, wird hier die
        historische Entwicklung angezeigt.
      </span>
      <div className="w-full flex md:flex-row flex-col md:justify-between gap-5">
        <div className="w-full flex flex-col gap-y-4">
          <div className="w-full flex sm:flex-row flex-col items-center sm:gap-0 gap-5 justify-between p-5 bg-[#F8FAFA] rounded-md shadow">
            <div className="flex flex-col gap-y-2">
              <span className="text-sm font-medium text-zinc-600">
                Ein Anteil erzeugt etwa{" "}
                <span className="text-[#1F3448]">260,9 kwh</span> pro Jahr.
              </span>
              <span className="flex items-center gap-x-2 text-[#1F3448] font-medium">
                <FaCarAlt size={20} color="#1F3448" />
                <span className="text-lg">1694.2km</span> mit einem e-Auto
                <IoInformationCircleOutline />
              </span>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="size-10 bg-black flex items-center justify-center rounded-md"
            >
              <FiArrowRight size={25} color="white" />
            </button>
            <Modal showModal={showModal} setShowModal={setShowModal} />
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
              <span className="text-xs">Rückzahlungsbetrag (31.10.2039)</span>
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
              Parkhaus „Quartier Mitte“ mit der Fassadeninstallation sunset
              patterns
            </span>
            <span className="text-end w-full flex justify-end">
              <RiDoubleQuotesL size={25} />
            </span>
          </div>
        </div>
        <div className="w-full h-full z-0">
          <Map />
        </div>
      </div>
    </>
  );
};

export default Overview;
