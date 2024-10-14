/* eslint-disable no-unused-vars */
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SinglePage from "./pages/SinglePage/SinglePage";
import Support from "./pages/support/Support";
import ContactUs from "./pages/contact-us/ContactUs";
import Signup from "./pages/Signup/Signup";
import { useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import SideBarRes from "./components/sidebar/SideBarRes";
import Login from "./components/Login";
import axios from "axios";
import Header from "./components/Header";
import Investments from "./pages/Investments/Investments";

const App = () => {
  // jwt token
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  // protected user data
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error(
          "Error fetching user data:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchUserData();
  }, []);
  const [toggleR, setToggleR] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full h-screen bg-white flex flex-col relative overflow-hidden">
      <Header
        setToggleR={setToggleR}
        authToken={authToken}
        setToggle={setToggle}
        toggle={toggle}
      />
      <SideBarRes
        toggleR={toggleR}
        setToggleR={setToggleR}
        authToken={authToken}
        setAuthToken={setAuthToken}
        user={user}
      />
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singlepage" element={<SinglePage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/write-us" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/investments" element={<Investments />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
