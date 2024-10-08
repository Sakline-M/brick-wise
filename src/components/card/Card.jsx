import "./card.scss";
import { AiOutlineHeart } from "react-icons/ai"; // Import heart icon from react-icons
import cardimg from "../../../public/building.jpg";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar";

const Card = () => {
  return (
    <Link
      to={"/singlepage"}
      className=" bg-white shadow-lg w-full rounded-xl relative"
    >
      <div className="relative">
        {/* Card Image */}
        <img
          src={cardimg}
          alt="cardimg"
          className="w-full h-[180px] object-cover rounded-t-lg"
        />

        {/* "New" Badge */}
        <div className="absolute top-3 left-3 rounded-full size-12 flex items-center justify-center bg-[#FFF9C4] -rotate-12 text-[#1F3448] font-semibold">
          neu
        </div>

        {/* Favorite (Heart) Button */}
        <button className="absolute top-3 right-3 text-[#1F3448] bg-white px-3 py-2 rounded-full flex items-center gap-x-1 text-xs font-semibold">
          19
          <AiOutlineHeart size={16} className="" />
        </button>
      </div>

      <div className="w-full flex flex-col h-full p-4 gap-y-2">
        {/* Badges */}
        <div className="flex gap-2 pb-2">
          <div className="px-3 text-[#1F3448] font-semibold border border-slate-200 rounded-full py-1 text-xs flex items-center gap-x-1">
            KESt
            <IoInformationCircleOutline size={16} />
          </div>
          <div className="px-3 text-[#1F3448] font-semibold border border-slate-200 rounded-full py-1 text-xs flex items-center gap-x-1">
            Bestand
            <IoInformationCircleOutline size={16} />
          </div>
        </div>

        {/* Title and Location */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <h2 className="card-title xl:text-base md:text-sm text-xs font-medium text-[#1E3548]">
              Photovoltaik Anlage mit Schnellladestation im Parkhaus Quartier
              Mitte St. Pölten
            </h2>
            <p className="md:text-xs text-[.6rem] font-medium text-zinc-500">
              Rennbahnstraße 1, 3100 St. Pölten, St. Pölten
            </p>
          </div>
          <ProgressBar />
        </div>

        {/* Percentage and Label */}
        <div className="flex flex-col justify-center items-center bg-[#F0F4F6] py-[7px] rounded-md">
          <p className="font-bold text-[#1f726d] flex items-center gap-x-1">
            6,12 % p.a.
            <IoInformationCircleOutline size={16} className="text-slate-400" />
          </p>
          <p className="text-xs font-medium text-zinc-500">
            Erw. laufende Ausschüttung
          </p>
        </div>

        {/* Details Section */}
        <div className="text-sm w-full flex flex-col gap-y-1">
          <div className="flex justify-between">
            <p className="text-zinc-600 text-xs font-semibold">
              Preis pro Anteil:
            </p>
            <p className="text-zinc-600 text-xs font-semibold">€ 507,62</p>
          </div>
          <div className="flex justify-between">
            <p className="text-zinc-600 text-xs font-semibold">Lafuzeit:</p>
            <p className="text-zinc-600 text-xs font-semibold">31.10.2039</p>
          </div>
          <div className="flex justify-between">
            <p className="text-zinc-600 text-xs font-semibold">
              Ausschuttungen er.ab:
            </p>
            <p className="text-zinc-600 text-xs font-semibold">15.11.2024</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
