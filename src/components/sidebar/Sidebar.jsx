import "./sidebar.scss";
import qrimage from "../../../public/qrimge.png";
import logoImg from "../../../public/logo.svg"

const Sidebar = () => {
  return (
    <div className="sidebar-container bg-[rgb(249,250,251)] mt-[20px] ml-5 w-[310px] rounded-lg  shadow-md ">
      {/* Logo */}
      <div className="text-center mt-[40px] mb-[60px]">
        <img src={logoImg} alt="" />
      </div>

      {/* Menu Items */}
      <div className="space-y-4 pl-[20px] pb-4">
        <div className="flex items-center space-x-2 text-gray-700">
          <span className="text-red-500">🏠</span>
          <p className="font-medium">Marktplatz</p>
        </div>

        <div className="flex items-center space-x-2 text-gray-500">
          <span>❓</span>
          <p className="font-medium">Support</p>
        </div>
      </div>

      {/* Login and Sign Up Buttons */}
      <div className="mt-8 px-[12px]">
        <button className="w-full text-[#1F857E] border-2 border-[#1F857E] py-3 rounded-lg mb-4 font-sans font-medium ">
          Einloggen
        </button>
        <button className="w-full bg-[#1F857E] text-white py-3 rounded-lg font-sans font-medium">
          Account erstellen
        </button>
      </div>

      {/* QR Code Section */}
      <div className="mt-8 text-center flex flex-col items-start">
        <h3 className="font-semibold font-sans text-[20px] text-gray-700 mb-2 mt-3 ml-3">
          Jetzt App downloaden!
        </h3>
        <p className="text-[14px] font-semibold font-serif text-gray-500 mb-4 flex items-start py-[8px] text-start ml-3">
        Scanne den QR Code mit einem Handy um die Brickwise App herunterzuladen.
        </p>
        <img src={qrimage} alt="QR Code" className="ml-3" />
      </div>

      {/* Footer */}
      <div className="mt-8 text-sm text-gray-400 text-[15px] font-semibold ml-3 font-serif">
        <p>Impressum</p>
        <p>Datenschutz</p>
        <p>©Brickwise 2024</p>
      </div>
    </div>
  );
};

export default Sidebar;
