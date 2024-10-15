/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../contextApi/UserContext";

const Login = ({ setToggle }) => {
  // navigation
  const navigate = useNavigate();

  // all state
  const [error, setError] = useState("");

  // context API
  const { refresh, setRefresh } = useContext(AuthContext);

  // use form
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  // ALL FUNCTIONS
  //login 
  const onSubmit = async (data) => {
    setError("");
    fetch(`https://brick-wise-server.onrender.com/api/v1/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Login successful!");
          navigate("/");
          localStorage.setItem("brick_token", data?.token);
          setToggle(false);
          setRefresh(refresh + 1);
        } else {
          setError(data.message);
        }
      });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 relative">
        <button
          onClick={() => setToggle(false)}
          className="absolute top-5 right-5 cursor-pointer"
        >
          <IoMdClose size={24} />
        </button>
        <div className="flex flex-col md:flex-row">
          {/* Login Section */}
          <div className="md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-4">Mein Konto</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Passwort</label>
                <input
                  type="password"
                  name="password"
                  {...register("password", { required: true })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <p className="text-red-600 text-center mb-2">{error}</p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-500 text-white py-2 rounded-lg"
              >
                {isSubmitting ? "loading..." : "EINLOGGEN"}
              </button>
            </form>
            <a href="#" className="text-red-500 mt-2 inline-block">
              Passwort vergessen?
            </a>
          </div>
          {/* Registration Section */}
          <div className="md:w-1/2 p-4 border-t md:border-t-0 md:border-l">
            <h2 className="text-xl font-semibold mb-4">
              Noch nicht registriert?
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>Gebührenfrei investieren</li>
              <li>Renditestarkes Portfolio aufbauen</li>
              <li>Profitieren von verschiedenen Anlageklassen</li>
            </ul>
            <Link to={"/signup"}>
              <button className="w-full bg-red-500 text-white py-2 rounded-lg">
                JETZT KOSTENLOS REGISTRIEREN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
