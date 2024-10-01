/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import SinglePage from "./pages/SinglePage/SinglePage";

const App = () => {
  return (
    <div className="flex w-full h-screen bg-white p-6 gap-x-8">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singlepage" element={<SinglePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
