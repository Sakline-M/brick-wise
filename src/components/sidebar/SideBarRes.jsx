/* eslint-disable react/prop-types */
import logoImg from "../../../public/logo.svg";
import { Link } from "react-router-dom";
import Login from "../Login";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const SideBarRes = ({ toggleR, setToggleR }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${
        toggleR ? "block" : "hidden"
      } inset-0 fixed w-full h-full bg-black bg-opacity-50 z-20`}
    >
      <div className="h-full md:w-[25rem] w-[17rem]">
        <OutsideClickHandler onOutsideClick={() => setToggleR(false)}>
          {/* Logo */}
          <div className="w-full h-full overflow-auto rounded-xl bg-[#F8FAFA] p-2 z-30">
            <Link to={"/"}>
              <div className="text-center mt-[40px] mb-[60px]">
                <img src={logoImg} alt="" />
              </div>
            </Link>

            {/* Menu Items */}
            <div className="space-y-4 pl-[20px] pb-4">
              <Link to={"/"}>
                <div className="flex items-center space-x-2 text-gray-700">
                  <span className="text-red-500">🏠</span>
                  <p className="font-medium">Marktplatz</p>
                </div>
              </Link>

              <Link
                to={"/support"}
                className="flex items-center space-x-2 text-gray-500"
              >
                <span>❓</span>
                <p className="font-medium">Support</p>
              </Link>
            </div>

            {/* Login and Sign Up Buttons */}
            <div className="mt-8 px-[12px]">
              <button
                onClick={() => setToggle(true)}
                className="w-full text-[#1F857E] border-2 border-[#1F857E] py-3 rounded-lg mb-4 font-sans font-medium"
              >
                Einloggen
              </button>
              {toggle && <Login setToggle={setToggle} />}
              <Link to={"/signup"}>
                <button className="w-full bg-[#1F857E] text-white py-3 rounded-lg font-sans font-medium">
                  Account erstellen
                </button>
              </Link>
            </div>

            {/* Footer */}
            <div className="mt-8 text-sm text-gray-400 text-[15px] font-semibold ml-3 font-serif">
              <p>Impressum</p>
              <p>Datenschutz</p>
              <p>©Brickwise 2024</p>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default SideBarRes;
