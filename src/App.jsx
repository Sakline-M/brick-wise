/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import SinglePage from "./pages/SinglePage/SinglePage";
import Support from "./pages/support/Support";
import ContactUs from "./pages/contact-us/ContactUs";
import Signup from "./pages/Signup/Signup";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import SideBarRes from "./components/sidebar/SideBarRes";

const App = () => {
  const [toggleR, setToggleR] = useState(false);
  return (
    <div className="flex w-full h-screen bg-white p-6 gap-x-8">
      <div className="xl:hidden absolute top-5 left-5 z-20">
        <button
          onClick={() => setToggleR(true)}
          className=" flex items-start justify-center bg-slate-200 p-3 rounded-full"
        >
          <AiOutlineBars size={24} />
        </button>
      </div>
      <Sidebar />
      <SideBarRes toggleR={toggleR} setToggleR={setToggleR} />
      <div className="flex flex-col w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singlepage" element={<SinglePage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/write-us" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
