import "./card.scss";
import { AiOutlineHeart } from "react-icons/ai"; // Import heart icon from react-icons
import cardimg from "../../../public/building.jpg";
import CircularProgressWithLabel from "../CircularProgressWithLabel";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to={'/singlepage'} className="card bg-white shadow-lg w-full h-[455px] rounded-xl relative my-[20px]">
      <figure className="relative">
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
      </figure>

      <div className="w-full p-4">
        {/* Badges */}
        <div className="flex gap-2 mb-2">
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
        <div className="flex items-center">
          <div>
            <h2 className="card-title text-[18px] font-medium text-[#1E3548]">
              Photovoltaik Anlage mit Schnellladestation im Parkhaus Quartier
              Mitte St. Pölten
            </h2>
            <p className="text-[11px] font-semibold text-[#8F8898]">
              Rennbahnstraße 1, 3100 St. Pölten, St. Pölten
            </p>
          </div>
          <div>
            <CircularProgressWithLabel />
          </div>
        </div>

        {/* Percentage and Label */}
        <div className="mt-4 flex flex-col justify-center items-center bg-[#F0F4F6] py-[7px] rounded-md">
          <p className="text-[16px] leading-[24px] font-semibold text-[#1F857E] flex items-center gap-x-1">
            6,12 % p.a.
            <IoInformationCircleOutline size={16} className="text-slate-400" />
          </p>
          <p className="text-[12px] font-semibold text-gray-500">
            Erw. laufende Ausschüttung
          </p>
        </div>

        {/* Details Section */}
        <div className="mt-2 mb-[-2px] space-y-2 text-sm">
          <div className="flex justify-between">
            <p className="text-[#495D7D] text-[12px] font-semibold">
              Preis pro Anteil:
            </p>
            <p className="text-[#495D7D] text-[12px] font-semibold">€ 507,62</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#495D7D] text-[12px] font-semibold">
              Lafuzeit:
            </p>
            <p className="text-[#495D7D] text-[12px] font-semibold">€ 507,62</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#495D7D] text-[12px] font-semibold">
              Ausschuttungen er.ab:
            </p>
            <p className="text-[#495D7D] text-[12px] font-semibold">€ 507,62</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
