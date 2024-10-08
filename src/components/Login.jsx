import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = ({ setToggle }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 flex flex-col md:flex-row relative">
        <button
          onClick={() => setToggle(false)}
          className="absolute top-5 right-5 cursor-pointer"
        >
          <IoMdClose size={24} />
        </button>
        {/* Login Section */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4">Mein Konto</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">E-Mail</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Passwort</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <button className="w-full bg-red-500 text-white py-2 rounded-lg">
              EINLOGGEN
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
  );
};

export default Login;
