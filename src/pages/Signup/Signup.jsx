/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const countries = [
  { value: "deutschland", label: "Deutschland" },
  { value: "österreich", label: "Österreich" },
  { value: "schweiz", label: "Schweiz" },
  { value: "frankreich", label: "Frankreich" },
  { value: "italien", label: "Italien" },
  { value: "spanien", label: "Spanien" },
  { value: "vereinigtes-königreich", label: "Vereinigtes Königreich" },
  { value: "niederlande", label: "Niederlande" },
  { value: "belgien", label: "Belgien" },
  { value: "schweden", label: "Schweden" },
  { value: "norwegen", label: "Norwegen" },
  { value: "dänemark", label: "Dänemark" },
  { value: "finnland", label: "Finnland" },
];

const nationalities = [
  "Afghan",
  "Albanian",
  "Algerian",
  "American",
  "Andorran",
  "Angolan",
  "Argentine",
  "Armenian",
  "Australian",
  "Austrian",
  "Azerbaijani",
  "Bahamian",
  "Bahraini",
  "Bangladeshi",
  "Barbadian",
  "Belarusian",
  "Belgian",
  "Belizean",
  "Beninese",
  "Bhutanese",
  "Bolivian",
  "Bosnian",
  "Botswanan",
  "Brazilian",
  "British",
  "Bruneian",
  "Bulgarian",
  "Burkinabe",
  "Burmese",
  "Burundian",
  "Cambodian",
  "Cameroonian",
  "Canadian",
  "Cape Verdean",
  "Central African",
  "Chadian",
  "Chilean",
  "Chinese",
  "Colombian",
  "Comoran",
  "Congolese",
  "Costa Rican",
  "Croatian",
  "Cuban",
  "Cypriot",
  "Czech",
  "Danish",
  "Djiboutian",
  "Dominican",
  "Dutch",
  "East Timorese",
  "Ecuadorean",
  "Egyptian",
  "Emirati",
  "English",
  "Equatorial Guinean",
  "Eritrean",
  "Estonian",
  "Ethiopian",
  "Fijian",
  "Filipino",
  "Finnish",
  "French",
  "Gabonese",
  "Gambian",
  "Georgian",
  "German",
  "Ghanaian",
  "Greek",
  "Grenadian",
  "Guatemalan",
  "Guinean",
  "Guyanese",
  "Haitian",
  "Honduran",
  "Hungarian",
  "Icelandic",
  "Indian",
  "Indonesian",
  "Iranian",
  "Iraqi",
  "Irish",
  "Israeli",
  "Italian",
  "Ivorian",
  "Jamaican",
  "Japanese",
  "Jordanian",
  "Kazakh",
  "Kenyan",
  "Kuwaiti",
  "Kyrgyz",
  "Lao",
  "Latvian",
  "Lebanese",
  "Liberian",
  "Libyan",
  "Liechtenstein citizen",
  "Lithuanian",
  "Luxembourger",
  "Macedonian",
  "Malagasy",
  "Malawian",
  "Malaysian",
  "Maldivian",
  "Malian",
  "Maltese",
  "Marshallese",
  "Mauritanian",
  "Mauritian",
  "Mexican",
  "Micronesian",
  "Moldovan",
  "Monegasque",
  "Mongolian",
  "Montenegrin",
  "Moroccan",
  "Mozambican",
  "Namibian",
  "Nauruan",
  "Nepalese",
  "New Zealander",
  "Nicaraguan",
  "Nigerian",
  "Nigerien",
  "North Korean",
  "Norwegian",
  "Omani",
  "Pakistani",
  "Palauan",
  "Palestinian",
  "Panamanian",
  "Papua New Guinean",
  "Paraguayan",
  "Peruvian",
  "Polish",
  "Portuguese",
  "Qatari",
  "Romanian",
  "Russian",
  "Rwandan",
  "Saint Lucian",
  "Salvadoran",
  "Samoan",
  "San Marinese",
  "Sao Tomean",
  "Saudi Arabian",
  "Scottish",
  "Senegalese",
  "Serbian",
  "Seychellois",
  "Sierra Leonean",
  "Singaporean",
  "Slovak",
  "Slovenian",
  "Solomon Islander",
  "Somali",
  "South African",
  "South Korean",
  "Spanish",
  "Sri Lankan",
  "Sudanese",
  "Surinamese",
  "Swazi",
  "Swedish",
  "Swiss",
  "Syrian",
  "Taiwanese",
  "Tajik",
  "Tanzanian",
  "Thai",
  "Togolese",
  "Tongan",
  "Trinidadian",
  "Tunisian",
  "Turkish",
  "Turkmen",
  "Tuvaluan",
  "Ugandan",
  "Ukrainian",
  "Uruguayan",
  "Uzbek",
  "Vanuatuan",
  "Venezuelan",
  "Vietnamese",
  "Welsh",
  "Yemeni",
  "Zambian",
  "Zimbabwean",
];
const numbers = Array.from({ length: 31 }, (_, i) => i + 1);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = Array.from(
  { length: 2006 - 1900 + 1 },
  (_, i) => i + 1900
).reverse();

const Signup = () => {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [user, setUser] = useState({
    firstName: "biplob",
    lastName: "hossain",
    email: "mdbiplub13@gmail.com",
    password: "123456",
    confirmPassword: "123456",
    gender: "male",
    title: "",
    street: "33",
    no: "33",
    zipCode: "333",
    city: "dhaka",
    country: "Germany",
    political: "yes",
    usTax: "yes",
    placeOfBirth: "natore",
    nationality: "xccv",
    day: "1",
    month: "January",
    year: "2006",
    phone: "0923872332",
    experience: "skip",
    investment: "yes",
  });

  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  const handleNext = () => setStep(step + 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    const { day, month, year } = user;
    const dateOfBirth = day + "-" + month + "-" + year;
    const newUser = { ...user, dateOfBirth };
    fetch(`http://localhost:5000/api/v1/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.status === "success") {
          handleNext();
        } else {
          setError(data.message);
        }
      });
  };

  const resendConfirmEmail = (email) => {
    fetch(`http://localhost:5000/api/v1/user/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Confirmation email sent successfully!");
        } else {
          alert(data.message);
          console.log(data);
        }
      })
      .catch((error) => {
        console.error("Error sending confirmation email:", error);
      });
  };

  return (
    <div className="w-full h-full">
      <div className="md:w-[40rem] xl:mx-0 mx-auto w-full h-full flex flex-col gap-y-5 overflow-auto no-scrollbar p-5">
        <h1 className="xl:text-5xl md:text-3xl text-xl text-center text-pretty uppercase text-black">
          In wenigen Schritten zu Ihrem Zins
        </h1>
        <div className="w-full flex flex-col py-10 gap-y-2">
          <div className="w-full flex items-center justify-between px-10">
            <div className="w-full flex items-center">
              <div className="p-[10px] rounded-full bg-[#FF0000] border-2 border-[#EAEEF2]"></div>
              <div
                className={`w-full h-[3px]  ${
                  step > 1 ? "bg-[#FF0000]" : "bg-[#EAEEF2]"
                }`}
              ></div>
            </div>
            <div className="w-full flex items-center">
              <div
                className={`p-[10px] rounded-full border-2 border-[#EAEEF2] ${
                  step > 1 ? "bg-[#FF0000]" : ""
                }`}
              ></div>
              <div
                className={`w-full h-[3px]  ${
                  step > 2 ? "bg-[#FF0000]" : "bg-[#EAEEF2]"
                }`}
              ></div>
            </div>
            <div
              className={`p-[10px] rounded-full border-2 border-[#EAEEF2] ${
                step > 2 ? "bg-[#FF0000]" : ""
              }`}
            ></div>
          </div>
          <div className="w-full flex items-center justify-between uppercase text-sm text-black font-medium">
            <span className="w-full md:text-base text-xs">Anlegerportal</span>
            <span className="w-full md:text-base text-xs">Kenntnisse</span>
            <span className=" md:text-base text-xs">Aktivierung</span>
          </div>
        </div>

        {step === 1 && (
          <Step1
            handleNext={handleNext}
            user={user}
            setUser={setUser}
            handleSubmit={handleSubmit}
            error={error}
          />
        )}
        {step === 2 && (
          <Step2
            handleChange={handleChange}
            selected={selected}
            handleNext={handleNext}
            user={user}
            setUser={setUser}
          />
        )}
        {step === 3 && (
          <Step3
            handleNext={handleNext}
            user={user}
            resendConfirmEmail={resendConfirmEmail}
          />
        )}
      </div>
    </div>
  );
};

const Step1 = ({ handleNext, setUser, user, handleSubmit, error }) => (
  <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-5">
    <span className="md:pb-8 pb-3 border-b md:text-2xl text-lg text-black">
      Bitte vervollständigen Sie Ihr Profil
    </span>
    <span className="text-end sm:text-sm text-xs font-medium">
      * sind Pflichtangaben
    </span>
    <div className="w-full flex items-center justify-between gap-x-5">
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Anrede*
        </label>
        <select
          name="gender"
          id=""
          required
          className="sm:py-2 py-1 sm:text-base text-sm bg-white border"
          onChange={(e) => {
            setUser({ ...user, gender: e.target.value });
          }}
        >
          <option disabled>Bitte wählen</option>
          <option value="male">Herr</option>
          <option value="female">Frau</option>
        </select>
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Titel
        </label>
        <select
          name=""
          id=""
          className="sm:py-2 py-1 sm:text-base text-sm bg-white border"
          onChange={(e) => {
            setUser({ ...user, title: e.target.value });
          }}
        >
          <option value={""}>keiner</option>
          <option value="Dr.">Dr.</option>
          <option value="Prof.">Prof.</option>
          <option value="Prof. Dr.">Prof. Dr.</option>
        </select>
      </div>
    </div>
    <div className="w-full flex items-center justify-between gap-x-5">
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Vorname*
        </label>
        <input
          type="text"
          name=""
          id=""
          required
          className="bg-white border sm:py-2 py-1 sm:text-base text-sm md:w-auto w-full"
          onChange={(e) => {
            setUser({ ...user, firstName: e.target.value });
          }}
        />
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Nachname*
        </label>
        <input
          type="text"
          name=""
          id=""
          required
          className="bg-white border sm:py-2 py-1 sm:text-base text-sm md:w-auto w-full"
          onChange={(e) => {
            setUser({ ...user, lastName: e.target.value });
          }}
        />
      </div>
    </div>
    <div className="w-full flex items-center gap-x-5">
      <div className="w-[70%] flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Straße*
        </label>
        <input
          type="text"
          name=""
          id=""
          required
          className="w-full bg-white border sm:py-2 py-1 sm:text-base text-sm md:w-auto"
          onChange={(e) => {
            setUser({ ...user, street: e.target.value });
          }}
        />
      </div>
      <div className="w-[30%] flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Nr.*
        </label>
        <input
          type="text"
          name=""
          id=""
          required
          className="bg-white border sm:py-2 py-1 sm:text-base text-sm md:w-auto w-full"
          onChange={(e) => {
            setUser({ ...user, no: e.target.value });
          }}
        />
      </div>
    </div>
    <div className="w-full flex items-center gap-x-5">
      <div className="w-[30%] flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          PLZ*
        </label>
        <input
          type="text"
          name=""
          id=""
          className="w-full bg-white border sm:py-2 py-1 sm:text-base text-sm md:w-auto"
          onChange={(e) => {
            setUser({ ...user, zipCode: e.target.value });
          }}
        />
      </div>
      <div className="w-[70%] flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Stadt*
        </label>
        <input
          type="text"
          name=""
          id=""
          required
          className="bg-white border sm:py-2 py-1 sm:text-base text-sm md:w-auto w-full"
          onChange={(e) => {
            setUser({ ...user, city: e.target.value });
          }}
        />
      </div>
    </div>
    <div className="w-full flex flex-col gap-y-1">
      <label htmlFor="" className="text-black md:text-base text-xs">
        Land*
      </label>
      <select
        name=""
        id=""
        required
        className="bg-white border sm:py-2 py-1 sm:text-base text-sm md:w-auto w-full"
        onChange={(e) => {
          setUser({ ...user, country: e.target.value });
        }}
      >
        <option disabled>Bitte wählen</option>
        {countries.map((country, i) => (
          <option key={i} value={country.label}>
            {country.label}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full flex items-center justify-between gap-x-5">
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Politisch exponierte Person
        </label>
        <select
          name=""
          id=""
          className="sm:py-2 py-1 sm:text-base text-sm bg-white border"
          onChange={(e) => {
            setUser({ ...user, political: e.target.value });
          }}
        >
          <option disabled>Bitte wählen</option>
          <option value="yes">Ja</option>
          <option value="no">Nein</option>
        </select>
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Liegt eine US-Steuerpflicht vor*
        </label>
        <select
          name=""
          id=""
          className="sm:py-2 py-1 sm:text-base text-sm bg-white border"
          onChange={(e) => {
            setUser({ ...user, usTax: e.target.value });
          }}
        >
          <option disabled>Bitte wählen</option>
          <option value="yes">Ja</option>
          <option value="no">Nein</option>
        </select>
      </div>
    </div>
    <div className="w-full flex items-center justify-between gap-x-5">
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Geburtsort*
        </label>
        <input
          type="text"
          name=""
          id=""
          required
          className="bg-white border sm:py-2 py-1 sm:text-base text-sm md:w-auto w-full"
          onChange={(e) => {
            setUser({ ...user, placeOfBirth: e.target.value });
          }}
        />
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Staatsangehörigkeit*
        </label>
        <select
          name=""
          id=""
          required
          className="sm:py-2 py-1 sm:text-base text-sm bg-white border"
          onChange={(e) => {
            setUser({ ...user, nationality: e.target.value });
          }}
        >
          {nationalities.map((nation, i) => (
            <option key={i} value={nation}>
              {nation}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div className="w-full flex flex-col gap-y-1">
      <span className="text-black md:text-base text-sm">Geburtsdatum*</span>
      <div className="w-full flex items-center justify-between gap-x-5">
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Tag
          </label>
          <select
            name=""
            id=""
            className="sm:py-2 py-1 sm:text-base text-sm bg-white border"
            onChange={(e) => {
              setUser({ ...user, day: e.target.value });
            }}
          >
            {numbers.map((num, i) => (
              <option key={i}>{num}</option>
            ))}
          </select>
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Monat
          </label>
          <select
            name=""
            id=""
            className="sm:py-2 py-1 sm:text-base text-sm bg-white border"
            onChange={(e) => {
              setUser({ ...user, month: e.target.value });
            }}
          >
            {months.map((month, i) => (
              <option key={i} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Jahr
          </label>
          <select
            name=""
            id=""
            className="sm:py-2 py-1 sm:text-base text-sm bg-white border"
          >
            {years.map((year, i) => (
              <option key={i} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col gap-y-1">
      <label htmlFor="" className=" md:text-base text-xs">
        Telefonnummer*
      </label>
      <input
        type="text"
        name=""
        id=""
        required
        className="bg-white border sm:py-2 py-1 sm:text-base text-sm md:w-auto w-full"
        onChange={(e) => {
          setUser({ ...user, phone: e.target.value });
        }}
      />
    </div>
    <div className="w-full flex flex-col gap-y-1">
      <label htmlFor="" className=" md:text-base text-xs">
        E-Mail-Adresse*
      </label>
      <input
        type="email"
        name=""
        id=""
        required
        className="bg-white border sm:py-2 py-1 sm:text-base text-sm md:w-auto w-full"
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
    </div>
    <div className="w-full flex items-center justify-between gap-x-5">
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Passwort*
        </label>
        <input
          type="password"
          name=""
          id=""
          required
          className="bg-white border sm:py-2 py-1 sm:text-base text-sm md:w-auto w-full"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Passwort bestätigen*
        </label>
        <input
          type="password"
          name=""
          id=""
          required
          className="bg-white border sm:py-2 py-1 sm:text-base text-sm md:w-auto w-full"
          onChange={(e) => {
            setUser({ ...user, confirmPassword: e.target.value });
          }}
        />
      </div>
    </div>
    <div className="w-full flex items-baseline gap-x-1">
      <input type="checkbox" name="" id="" />
      <span className="sm:text-base text-sm">
        Ich akzeptiere die EV Digital Invest AGB
      </span>
    </div>
    <div className="w-full flex items-baseline gap-x-1">
      <input type="checkbox" name="" id="" />
      <span className="sm:text-base text-sm">
        Ich habe die Datenschutzerklärung zur Kenntnis genommen und willige in
        die Datenverarbeitung ein.
      </span>
    </div>
    <div className="w-full flex items-baseline gap-x-1">
      <input type="checkbox" name="" id="" className="text-white" />
      <span className="sm:text-base text-sm">
        Ich möchte über Projekte, Neuigkeiten und Tipps per E-Mail informiert
        werden. Es erfolgt keine Weitergabe an Dritte.
      </span>
    </div>
    <p className="text-red-600 text-center">{error}</p>
    <button
      type="submit"
      className="w-full py-2 sm:text-base text-sm rounded bg-[#FF0000] transition-colors duration-300 hover:bg-[#CC0000] text-white font-medium"
    >
      Speichern & Weiter
    </button>
  </form>
);

const Step2 = ({ handleChange, selected, handleNext }) => (
  <div className="w-full h-full flex flex-col gap-y-5">
    <span className="sm:text-2xl text-lg">Erfahrungen und Kenntnisse</span>
    <small className="italic text-red-500 font-medium sm:text-base text-xs">
      Die Angaben sind freiwillig
    </small>
    <span className="sm:text-base text-sm">
      Wir sind gesetzlich verpflichtet, von Ihnen Informationen über Ihre
      Erfahrungen in Bezug auf getätigte Investitionen abzufragen.
    </span>
    <div className="w-full flex flex-col gap-y-5">
      <span className="font-medium sm:text-sm text-xs">
        Haben Sie Erfahrung mit Finanzanlagen?
      </span>
      <div className="w-full flex items-center justify-between">
        <label className="inline-flex items-center w-full">
          <input
            type="radio"
            name="checkboxGroup"
            value="option1"
            checked={selected === "option1"}
            onChange={handleChange}
            className="form-radio sm:size-5 size-3 text-blue-600"
          />
          <span className="pl-2 sm:text-sm text-xs">Ja</span>
        </label>
        <label className="inline-flex items-center w-full">
          <input
            type="radio"
            name="checkboxGroup"
            value="option2"
            checked={selected === "option2"}
            onChange={handleChange}
            className="form-radio sm:size-5 size-3 text-blue-600"
          />
          <span className="pl-2 sm:text-sm text-xs">Nein</span>
        </label>
      </div>
      <label className="inline-flex items-center w-full">
        <input
          type="radio"
          name="checkboxGroup"
          value="option3"
          checked={selected === "option3"}
          onChange={handleChange}
          className="form-radio sm:size-5 size-3 text-blue-600"
        />
        <span className="pl-2 sm:text-sm text-xs">
          Ich möchte keine Angaben machen und direkt fortfahren
        </span>
      </label>
      <span className="text-pretty py-5 sm:text-base text-sm">
        Sie können Ihr Risikoprofil auch jederzeit später in Ihren
        Profileinstellungen ändern.
      </span>
    </div>

    <span className="border-t pt-5 sm:text-2xl text-lg">Identifizierung</span>
    <span className="sm:text-base text-sm">
      Bei Investments von größeren Beträgen ist eine Identifizierung auf unserer
      Plattform notwendig.
    </span>
    <div className="w-full flex flex-col gap-y-5 border-b pb-7">
      <span className="sm:text-sm text-xs font-medium">
        Planen Sie Investments von mehr als 15.000 €?
      </span>
      <div className="w-full flex items-center justify-between">
        <label className="inline-flex items-center w-full">
          <input
            type="radio"
            name="checkboxGroup"
            value="option4"
            checked={selected === "option4"}
            onChange={handleChange}
            className="form-radio sm:size-5 size-3 text-blue-600"
          />
          <span className="pl-2 sm:text-sm text-xs">Ja</span>
        </label>
        <label className="inline-flex items-center w-full">
          <input
            type="radio"
            name="checkboxGroup"
            value="option5"
            checked={selected === "option5"}
            onChange={handleChange}
            className="form-radio sm:size-5 size-3 text-blue-600"
          />
          <span className="pl-2 sm:text-sm text-xs">Nein, aktuell nicht</span>
        </label>
      </div>
    </div>
    <button
      onClick={handleNext}
      className="w-full py-2 sm:text-base text-sm rounded bg-[#FF0000] transition-colors duration-300 hover:bg-[#CC0000] text-white font-medium"
    >
      Speichern & Weiter
    </button>
  </div>
);

const Step3 = (user, resendConfirmEmail) => (
  <div className="w-full h-full flex flex-col items-center gap-y-5">
    <span className="sm:text-2xl text-lg font-medium text-center">
      Bitte aktivieren Sie jetzt Ihre E-Mail-Adresse!
    </span>
    <p className="text-center sm:text-base text-sm">
      Wir haben Ihnen soeben einen Aktivierungslink per E-Mail geschickt. Bitte
      überprüfen Sie Ihr E-Mail-Postfach. Mit der Verifizierung möchten wir
      sicherstellen, dass Ihre E-Mail-Adresse vor Missbrauch durch Dritte
      geschützt ist.
    </p>
    <span className="sm:text-sm text-xs text-center">
      Ihr Aktivierungslink wurde an die folgende E-Mail-Adresse geschickt
    </span>
    <span className="sm:text-base text-sm font-semibold">
      {user?.user?.email}
    </span>
    <button
      onClick={() => {
        resendConfirmEmail(user?.user?.email);
      }}
      className="text-red-500 hover:underline sm:text-base text-sm"
    >
      Aktivierungslink erneut zuschicken
    </button>
    <Link to={"/"} className="w-full px-16">
      <button className="w-full py-2 sm:text-base text-sm rounded bg-[#FF0000] transition-colors duration-300 hover:bg-[#CC0000] text-white font-medium">
        ZUR STARTSEITE
      </button>
    </Link>
  </div>
);

export default Signup;
