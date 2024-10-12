/* eslint-disable react/prop-types */
import { AiOutlineBars } from "react-icons/ai";
import Login from "./Login";
import { Link } from "react-router-dom";

const Header = ({ setToggleR, authToken, setToggle, toggle }) => {
  return (
    <div className="w-full fixed top-0 left-0 flex items-center justify-between shadow sm:px-8 px-2 py-3 bg-white z-[100]">
      <button
        onClick={() => setToggleR(true)}
        className="flex items-start justify-center bg-slate-200 p-3 rounded-full"
      >
        <AiOutlineBars size={24} />
      </button>
      {!authToken ? (
        <div className="w-full flex items-center justify-end gap-x-3">
          <button
            onClick={() => setToggle(true)}
            className="text-[#1F847F] md:text-[16px] text-sm font-semibold hover:bg-slate-100 sm:px-8 px-3 py-3 rounded transition-all duration-300"
          >
            Einloggen
          </button>
          {toggle && <Login setToggle={setToggle} />}
          <Link to={"/signup"}>
            <button className="text-white bg-[#1F847F] hover:bg-[#186965] md:text-[16px] text-sm font-semibold sm:px-8 px-5 py-3 rounded transition-all duration-300 text-nowrap">
              Account erstellen
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
