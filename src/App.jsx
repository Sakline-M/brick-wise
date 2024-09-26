/* eslint-disable no-unused-vars */

import {
  Route,
  Routes,
} from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

import AllPage from "./pages/allProduct/AllPage";
import ResidentialPage from "./pages/allProduct/ResidentialPage";
import IndustryPage from "./pages/allProduct/IndustryPage";
import FinancingPage from "./pages/allProduct/FinancingPage";
import FilePage from "./pages/allProduct/FilePage";

const App = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="flex flex-col w-full overflow-auto h-full">
        <div className="sticky top-0 left-0 ">
        <Navbar />
        </div>
        <Routes>
          <Route path="/" element= {<AllPage/>} />
          <Route path="/residential" element= {<ResidentialPage/>} />
          <Route path="/industry" element= {<IndustryPage/>} />
          <Route path="/finance" element= {<FinancingPage/>} />
          <Route path="/file" element= {<FilePage/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
