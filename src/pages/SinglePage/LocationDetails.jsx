import Map from "../../components/Map/Map";

const LocationDetails = () => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col md:justify-between gap-7">
      <div className="w-full flex flex-col gap-y-5">
        <span className="text-xl font-semibold">
          Rennbahnstraße 1, 3100 St. Pölten, St. Pölten, Österreich
        </span>
        <p className="font-medium text-zinc-600">
          Die NOE Immobilien Development (NID) realisiert in St. Pölten das
          Projekt „Leben am Fluss | Wohnen am Park“ und investiert in den
          kommenden Jahren insgesamt rund 150 Mio. Euro. Das in mehreren
          Bauabschnitten geplante Objekt wird eine Gesamtnutzfläche von ca.
          38.000 m² aufweisen, der erste Bauabschnitt wurde 2020 fertiggestellt.
        </p>
        <p className="font-medium text-zinc-600">
          Das Parkhaus mit 467 Stellplätzen im Quartier Mitte ist zentraler
          Bestandteil des Park-Konzeptes für das Stadtquartier.
        </p>
          <Map />
      </div>
      <div className="w-full flex flex-col gap-y-5">
        <span className="font-semibold text-xl">LAGE</span>
        <p className="font-medium text-zinc-600">
          Mit „Leben am Fluss | Wohnen am Park“ wurde in St Pölten erstmals eine
          gesamthafte Quartiersentwicklung in Angriff genommen, bei der mit
          einem Mix aus Wohnen, Touristik, gewerblicher Nutzung mit Büros und
          Einzelhandelsflächen sowie einem Parkhaus eine attraktive neue
          Lebenswelt entsteht. Dabei entfallen auf den Bereich Wohnen mit 420
          Einheiten rund 75 Prozent der Gesamtnutzfläche, 84 Büros und
          Einzelhandel, 56 auf Touristik. Es entstehen zum überwiegenden Teil
          Mietwohnungen. Die Lage ist exzellent: Zum Bahnhof und zum
          Regierungsviertel sind es jeweils nur ca. fünf Minuten Fußweg, das
          Stadtzentrum mit seinem reichhaltigen Kultur- und Freizeitangebot ist
          ebenfalls in der gleichen Zeit erreichbar. Auch das Autobahndreieck
          Knoten St. Pölten (A1 / S33) ist nur wenige Fahrminuten entfernt
        </p>
        <img
          src="https://cdn.brickwise.at/cc8dbd96-1535-4a13-a9f1-a13ed962dc40.Poelten_c42-1024x683"
          alt=""
        />
      </div>
    </div>
  );
};

export default LocationDetails;
