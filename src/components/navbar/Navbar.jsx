import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("Alle");

  // Function to handle button click and set active state
  const handleButtonClick = (category) => {
    setActiveButton(category);
  };

  return (
    <div className="">
      {/* Alert Section */}
      <div className="bg-red-100 text-[rgb(239,89,89)] rounded-lg text-sm text-start font-semibold mt-[20px] h-[50px] flex items-center">
        <p className="pl-[30px]">
          Klicke hier, um mit der Accountverifizierung fortzufahren.
        </p>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center py-4 px-2 bg-white">
        {/* Left Section: Marktplatz and Filters */}
        <div className="flex flex-col">
          <h1 className="text-[44px] font-semibold text-gray-800">
            Marktplatz
          </h1>
          <div className="mt-4 flex space-x-3 font-medium font-sans">
            <Link
              to={"/"}
              className={`btn-category ${
                activeButton === "Alle" ? "active border-[1px]" : "border-[1px]"
              }`}
              onClick={() => handleButtonClick("Alle")}
            >
              🏠 Alle
            </Link>
            <Link
              to={"/residential"}
              className={`btn-category ${
                activeButton === "Wohnimmobilien"
                  ? "active border-[1px]"
                  : "border-[1px]"
              }`}
              onClick={() => handleButtonClick("Wohnimmobilien")}
            >
              🏘 Wohnimmobilien
            </Link>
            <Link
              to={"/industry"}
              className={`btn-category ${
                activeButton === "Gewerbe"
                  ? "active border-[1px]"
                  : "border-[1px]"
              }`}
              onClick={() => handleButtonClick("Gewerbe")}
            >
              🏢 Gewerbe
            </Link>
            <Link
              to={"/finance"}
              className={`btn-category ${
                activeButton === "Finanzierungsphase"
                  ? "active border-[1px]"
                  : "border-[1px]"
              }`}
              onClick={() => handleButtonClick("Finanzierungsphase")}
            >
              ⌚ Finanzierungsphase
            </Link>
            <Link
              to={"/file"}
              className={`btn-category ${
                activeButton === "Bestand"
                  ? "active border-[1px]"
                  : "border-[1px]"
              }`}
              onClick={() => handleButtonClick("Bestand")}
            >
              ✔ Bestand
            </Link>
          </div>
        </div>

        {/* Right Section: Login and Account Creation Buttons */}
        <div className="flex space-x-4 text-[16px] font-serif font-semibold">
          <button className="text-teal-500 hover:text-teal-700">
            Einloggen
          </button>
          <button className="btn-account">Account erstellen</button>
        </div>
      </div>

      {/* Conditional Content Rendering based on Active Button */}
      {/* <div className="page-content mt-6">
        {activeButton === "Alle" && <AllePage />}
        {activeButton === "Wohnimmobilien" && <WohnimmobilienPage />}
        {activeButton === "Gewerbe" && <GewerbePage />}
        {activeButton === "Finanzierungsphase" && <FinanzierungsphasePage />}
        {activeButton === "Bestand" && <BestandPage />}
      </div> */}
    </div>
  );
};

// Placeholder components for each category
// const AllePage = () => (
//   <div>
//     <AllPage />
//   </div>
// );
// const WohnimmobilienPage = () => (
//   <div>
//     <ResidentialPage />
//   </div>
// );
// const GewerbePage = () => (
//   <div>
//     <IndustryPage />
//   </div>
// );
// const FinanzierungsphasePage = () => (
//   <div>
//     <FinancingPage />
//   </div>
// );
// const BestandPage = () => (
//   <div>
//     <FilePage />
//   </div>
// );

export default Navbar;
