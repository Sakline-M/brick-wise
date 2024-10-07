import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { RiFileCopyLine } from "react-icons/ri";
const InvestmentInfos = () => {
  const [open, setOpen] = useState("true");
  return (
    <div className="w-full h-full flex justify-between gap-x-7 pb-10">
      <div className="w-full flex flex-col gap-y-5">
        <h1>
          Auf Grundlage der Investitionsbedingungen begibt die Emittentin
          tokenisierte Wertpapiere, die den Investoren das Recht einräumen, an
          den laufenden Überschüssen aus dem Betrieb der Photovoltaik-Anlage zu
          partizipieren.
        </h1>
        <div className="w-full bg-[#F8FAFA] flex flex-col gap-y-3 p-3 rounded-xl shadow-xl">
          <div className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">Beteiligungsart</span>
            <span className="font-medium">Genussschein (Fremdkapital)</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">Anteile Gesamt</span>
            <span className="font-medium">460</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">Laufzeit</span>
            <span className="font-medium">31.10.2039</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">Rückzahlungsbetrag (31.10.2039)</span>
            <span className="font-medium">€ 507,62</span>
          </div>
          <div className="w-full flex items-center justify-between py-4 border-y-2">
            <span className="text-sm font-medium">Ausschüttungen</span>
            <span className="font-medium">Monatlich zum 15. (Erwartet ab 15.11.2024)</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">Marktkapitalisierung</span>
            <span className="font-medium">€ 233.505,20</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-5">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between"
        >
          <span className="text-lg font-semibold">Anteilsbezeichnung</span>
          <IoIosArrowUp
            size={24}
            className={`${
              open ? "rotate-180" : "rotate-0"
            } transition-transform duration-300`}
          />
        </button>
        <div className={`w-full flex flex-col gap-y-3 ${open ? "" : "hidden"}`}>
          <h1 className="text-sm font-medium">
            Der Emittent des Wertpapiers ist der Eigentümer der Photovoltaik
            Anlage. Die ausgegebenen Wertpapiere sind Genussscheine und auf dem
            Blockchain Brick-Protokoll digitalisiert Die ISIN, kurz für
            International Securities Identification Numberm ist eine
            Internationale Identifikationsnummer mit der Wertpapiere eindeutig
            identifiziert werden können.
          </h1>
          <div className="w-full flex items-center justify-between bg-[#F1F5F6] p-4">
            <div className="flex flex-col">
              <span className="font-medium text-zinc-500 text-sm">
                Anteilsbezeichnung
              </span>
              <span className="font-medium">AT0000A3E842</span>
            </div>
            <RiFileCopyLine size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentInfos;
