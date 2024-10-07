import { RiDoubleQuotesL } from "react-icons/ri";

const PowerPlantInfo = () => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col md:justify-between gap-5">
      <div className="w-full flex flex-col gap-y-7">
        <p className="font-medium">
          Greeninfra hat für das Parkhaus im Quartier Mitte in St. Pölten die
          Photovoltaik-Anlage am Dach, AC-Ladestationen und eine
          Schnell-Ladestation inklusive Speicherbatterie konzipiert und
          errichtet. Das Parkhaus verfügt über 13 Parkebenen mit 467
          Stellplätzen. Die GREEMER Anlagen umfassen Photovoltaik, Speicher und
          Ladestationen. Die PV-Anlage dient dazu das Parkhaus, die
          Ladestationen und eine zu gründende Erneuerbare Energiegemeinschaft
          für das Quartier Mitte mit PV-Strom zu versorgen. Im Parkhaus werden
          die Bewohner des Quartier Mitte und Mitarbeiter der umliegenden
          Bürogebäude der Landesregierung ihre Fahrzeuge abstellen. Aufgrund der
          steigenden Anzahl an E-Fahrzeugen in Österreich (Neuzulassungen im
          ersten Halbjahr 2024: 18,4% E-PKW) ist davon auszugehen, dass auch die
          zukünftigen Bewohner des Quartier Mitte vermehrt E-Fahrzeuge im
          Parkhaus abstellen. GREEMER errichtet daher in der ersten Ausbaustufe
          eine Schnelladesäule mit 320 kW Leistung und einem integrierten
          Speicher mit 200 kWh Kapazität sowie 28 AC-Wallboxen mit jeweils 22 kW
          Leistung. Der Speicher dient der Speicherung des PV-Stroms für die
          Ladestationen und der Blackout-Vorsorge des Parkhauses.
        </p>
        <div className="w-full flex flex-col gap-y-3">
          <div className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">Leistung</span>
            <span className="font-medium">113,4 kWp</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">Geplante Nutzungsdauer</span>
            <span className="font-medium">20 Jahre</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">
              Voraus. Erzeugung pro Jahr
            </span>
            <span className="font-medium">120.000 kWh</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">Bautyp</span>
            <span className="font-medium">Aufdach</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">Grundsicherung</span>
            <span className="font-medium">Miete</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">Objektart</span>
            <span className="font-medium">Energieinfrastruktur</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">Status</span>
            <span className="font-medium">Bestand</span>
          </div>
        </div>
        <div className="w-full flex flex-col p-5 rounded-md bg-[#F8FAFA]">
          <span>
            <RiDoubleQuotesL size={25} className="text-slate-400" />
          </span>
          <span className=" font-bold text-zinc-600">
            PV-Anlage mit Speicher und E-Ladestationen
          </span>
          <span className="text-end w-full flex justify-end">
            <RiDoubleQuotesL size={25} className="text-slate-400" />
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-3">
        <img
          src="https://cdn.brickwise.at/a22489cf-0d91-4793-8b18-e0d49d4ec661.jpg"
          alt=""
        />
        <p className="pt-3 text-sm font-medium">
          Parkhaus Quartier Mitte mit Fassadeninstallation von Judith Fegerl,
          sunset patterns.
        </p>
      </div>
    </div>
  );
};

export default PowerPlantInfo;
