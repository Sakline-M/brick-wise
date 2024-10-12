/* eslint-disable react/prop-types */
import logoImg from "../../../public/logo.svg";
import { Link } from "react-router-dom";
import Login from "../Login";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { FcFaq } from "react-icons/fc";
import { RxAvatar } from "react-icons/rx";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import LogoutButton from "../LogoutButton";
import { RiHomeLine } from "react-icons/ri";
import { AiOutlineEuro } from "react-icons/ai";

const SideBarRes = ({ toggleR, setToggleR, authToken, user }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${
        toggleR ? "block" : "hidden"
      } inset-0 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[999]`}
    >
      <div className="h-full w-[20rem]">
        <OutsideClickHandler onOutsideClick={() => setToggleR(false)}>
          {/* Logo */}
          <div className="w-full h-screen overflow-auto bg-[#F8FAFA] flex flex-col gap-y-10 p-5">
            <Link to={"/"} className="w-full flex items-center justify-center">
              <img src={logoImg} alt="" className="w-[10rem]" />
            </Link>

            {/* Menu Items */}
            <div className="w-full flex flex-col gap-y-5 text-zinc-500 text-base">
              <Link to={"/"}>
                <div className="flex items-center">
                  <div className="w-8 flex items-center justify-center">
                    <RiHomeLine size={24} />
                  </div>
                  <p className="font-medium">Marktplatz</p>
                </div>
              </Link>
              {!authToken ? (
                ""
              ) : (
                <>
                  <Link to={"/investments"}>
                    <button className="flex items-center">
                      <div className="w-8 flex items-center justify-center">
                        <AiOutlineEuro size={23} />
                      </div>
                      <span className="font-medium">Investments</span>
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className="flex items-center">
                      <div className="w-8 flex items-center justify-center">
                        <RxAvatar size={22} />
                      </div>
                      <span className="font-medium">Account</span>
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className="flex items-center">
                      <div className="w-8 flex items-center justify-center">
                        <FaRegCommentAlt size={18} />
                      </div>
                      <span className="font-medium">Nachrichte</span>
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className="flex items-center">
                      <div className="w-8 flex items-center justify-center">
                        <IoSettingsOutline size={20} />
                      </div>
                      <span className="font-medium">Settings</span>
                    </button>
                  </Link>
                </>
              )}

              <Link to={"/support"} className="flex items-center">
                <div className="w-8 flex items-center justify-center">
                  <FcFaq size={24} />
                </div>
                <p className="font-medium">Support</p>
              </Link>
            </div>

            {/* Login and Sign Up Buttons */}
            {!authToken ? (
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
            ) : (
              <div className="flex flex-col gap-y-5">
                <LogoutButton />
                <div className="flex flex-col gap-y-1">
                  <span className="text-gray-700 font-semibold">
                    Eingeloggt als:
                  </span>
                  <div className=" flex items-center gap-x-1 text-[#1F847F] font-semibold">
                    <span>{user?.firstName}</span>
                    <span>
                      <span>{user?.lastName}</span>
                    </span>
                  </div>
                </div>
              </div>
            )}

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
