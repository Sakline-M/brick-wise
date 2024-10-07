import React from "react";

const incomeData = [
  {
    name: "Netto-Mieteinnahmen",
    price: "€ 123.000,00",
  },
  {
    name: "Rückstellung für Rückzahlungen",
    price: "€ 15.567,01",
  },
  {
    name: "OPEX & Managmentkosten",
    price: "€ 41.000,00",
  },
  {
    name: "Instandhaltungsrücklagen jährlich",
    price: "€ 1.230,00",
  },
  {
    name: "Liquiditätsrücklage jährlich",
    price: "€ 7.380,00",
  },
  {
    name: "Dachmiete",
    price: "€ 300,00",
  },
  {
    name: "Finanzierungsaufwand FK",
    price: "€ 21.812,87",
  },
  {
    name: "Gewinnbeteiligung Emittentin",
    price: "€ 21.426,07",
  },
  {
    name: "Ausschüttung",
    price: "€ 14.284,05",
  },
];
const CurrentIncome = () => {
  return (
    <div className="w-full h-full flex justify-between gap-x-5">
      <div className="w-full flex flex-col gap-y-3">
        <p className="text-sm text-pretty font-medium">
          Die tokenisierten Wertpapiere gewähren den Investorinnen eine quotale
          Beteiligung (=Verhältnis zwischen der von den Investorinnen gehaltenen
          tokenisierten Wertpapiere zur Gesamtzahl der tokenisierten
          Wertpapiere) an 40 % der Einnahmen. Die quotale Beteiligung an den
          Einnahmen wird monatlich aliquot ausbezahlt. Die Einnahmen ergeben
          sich aus den Umsatzerlösen der durch die Photovoltaikanlage
          produzierten und verkauften Strommenge. Nach Abzug der operativen
          Kosten, Rücklagen und Verbindlichkeiten verbleiben 60 % der Einnahmen
          bei der Emittentin, während 40 % an die Investorinnen ausgeschüttet
          werden. Die Emittentin trägt dabei die Verantwortung für das
          Management und die Instandhaltung der Solaranlage, um eine
          kontinuierliche Einnahmenerzielung sicherzustellen.
        </p>
        {incomeData.map((income, i) => (
          <div key={i} className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">{income.name}</span>
            <span className="font-medium">{income.price}</span>
          </div>
        ))}
        <div className="w-full flex items-center justify-between py-5">
            <span className="text-sm font-medium">Aktuell erw. Ausschüttungsrendite</span>
            <span className="font-medium">6,12 %</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentIncome;
