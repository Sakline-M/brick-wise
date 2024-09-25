import "./card.scss";
import { AiOutlineHeart } from "react-icons/ai"; // Import heart icon from react-icons
import cardimg from "../../../public/building.jpg";
import CircularProgressWithLabel from "../CircularProgressWithLabel"

const Card = () => {
  return (
    <div className="card bg-base-100 shadow-lg w-[465px] h-[455px] rounded-xl relative my-[20px]">
      <figure className="relative">
        {/* Card Image */}
        <img
          src={cardimg}
          alt="cardimg"
          className="w-full h-[180px] object-cover rounded-t-lg"
        />

        {/* "New" Badge */}
        <div className="absolute top-2 left-2 rounded-full badge bg-[rgb(254,248,196)]">
          neu
        </div>

        {/* Favorite (Heart) Button */}
        <button className="absolute top-2 right-2 text-black bg-white p-2 rounded-full hover:bg-red-600">
          <div className="flex items-center gap-2 my-[-3px]">
            <p className="text-[14px] font-light">3</p>
            <AiOutlineHeart className="w-6 h-6" />
          </div>
        </button>
      </figure>

      <div className="p-4">
        {/* Badges */}
        <div className="flex gap-2 mb-2">
          <div className="badge ">KESt</div>
          <div className="badge ">Bestand</div>
        </div>

        {/* Title and Location */}
        <div className="flex items-center">
        <div>
        <h2 className="card-title text-[18px] font-semibold text-[#1E3548]">
        Photovoltaik Anlage mit Schnellladestation im Parkhaus Quartier Mitte St. Pölten
        </h2>
        <p className="text-[12px] font-serif font-semibold text-[#8F8898]">
          Rennbahnstraße 1, 3100 St. Pölten
        </p>
        </div>
        <div><CircularProgressWithLabel/></div>
        </div>

        {/* Percentage and Label */}
        <div className="mt-4 flex flex-col justify-center items-center bg-[#F0F4F6] py-[7px] rounded-md">
          <p className="text-[16px] leading-[24px] font-semibold text-[#1F857E]">
            6,12 % p.a.
          </p>
          <p className="text-[12px] font-semibold text-gray-500">
            Erw. laufende Ausschüttung
          </p>
        </div>

        {/* Details Section */}
        <div className="mt-2 mb-[-2px] space-y-2 text-sm">
          <div className="flex justify-between">
            <p className="text-[#495D7D] text-[12px] font-semibold">Preis pro Anteil:</p>
            <p className="text-[#495D7D] text-[12px] font-semibold">€ 507,62</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#495D7D] text-[12px] font-semibold">Lafuzeit:</p>
            <p className="text-[#495D7D] text-[12px] font-semibold">€ 507,62</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#495D7D] text-[12px] font-semibold">Ausschuttungen er.ab:</p>
            <p className="text-[#495D7D] text-[12px] font-semibold">€ 507,62</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
