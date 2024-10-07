/* eslint-disable react/prop-types */
import { useState } from "react";

const Signup = () => {
  const [step, setStep] = useState(1);
  const handleNext = () => setStep(step + 1);
  const [selected, setSelected] = useState(null);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <div className="w-full h-full">
      <div className="w-[40rem] h-full flex flex-col gap-y-5 overflow-auto no-scrollbar p-5">
        <h1 className="text-5xl text-center text-pretty uppercase text-black">
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
            <span className="w-full">Anlegerportal</span>
            <span className="w-full">Kenntnisse</span>
            <span>Aktivierung</span>
          </div>
        </div>

        {step === 1 && <Step1 />}
        {step === 2 && (
          <Step2 handleChange={handleChange} selected={selected} />
        )}
        {step === 3 && <Step3 />}
        <button
          onClick={handleNext}
          className="w-full py-2 rounded bg-[#FF0000] transition-colors duration-300 hover:bg-[#CC0000] text-white font-medium"
        >
          Speichern & Weiter
        </button>
      </div>
    </div>
  );
};

const Step1 = () => (
  <div className="w-full flex flex-col gap-y-5">
    <span className="pb-8 border-b text-2xl text-black">
      Bitte vervollständigen Sie Ihr Profil
    </span>
    <span className="text-end text-sm font-medium">* sind Pflichtangaben</span>
    <div className="w-full flex items-center justify-between gap-x-5">
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          Anrede*
        </label>
        <select name="" id="" className="py-2 bg-white border">
          <option value="">dfjkgf</option>
          <option value="">dfjkgf</option>
          <option value="">dfjkgf</option>
        </select>
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          Titel
        </label>
        <select name="" id="" className="py-2 bg-white border">
          <option value="">dfjkgf</option>
          <option value="">dfjkgf</option>
          <option value="">dfjkgf</option>
        </select>
      </div>
    </div>
    <div className="w-full flex items-center justify-between gap-x-5">
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          Vorname*
        </label>
        <input type="text" name="" id="" className="bg-white border py-2" />
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          Nachname*
        </label>
        <input type="text" name="" id="" className="bg-white border py-2" />
      </div>
    </div>
    <div className="w-full flex items-center gap-x-5">
      <div className="w-[70%] flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          Straße*
        </label>
        <input
          type="text"
          name=""
          id=""
          className="w-full bg-white border py-2"
        />
      </div>
      <div className="w-[30%] flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          Nr.*
        </label>
        <input type="text" name="" id="" className="bg-white border py-2" />
      </div>
    </div>
    <div className="w-full flex items-center gap-x-5">
      <div className="w-[30%] flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          PLZ*
        </label>
        <input
          type="text"
          name=""
          id=""
          className="w-full bg-white border py-2"
        />
      </div>
      <div className="w-[70%] flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          Stadt*
        </label>
        <input type="text" name="" id="" className="bg-white border py-2" />
      </div>
    </div>
    <div className="w-full flex flex-col gap-y-1">
      <label htmlFor="" className="text-black">
        Politisch exponierte Person*
      </label>
      <select name="" id="" className="bg-white border py-2">
        <option value="">uhdf</option>
        <option value="">uhdf</option>
        <option value="">uhdf</option>
      </select>
    </div>
    <div className="w-full flex items-center justify-between gap-x-5">
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          Liegt eine US-Steuerpflicht vor*
        </label>
        <select name="" id="" className="py-2 bg-white border">
          <option value="">dfjkgf</option>
          <option value="">dfjkgf</option>
          <option value="">dfjkgf</option>
        </select>
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          Titel
        </label>
        <select name="" id="" className="py-2 bg-white border">
          <option value="">dfjkgf</option>
          <option value="">dfjkgf</option>
          <option value="">dfjkgf</option>
        </select>
      </div>
    </div>
    <div className="w-full flex items-center justify-between gap-x-5">
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          Geburtsort*
        </label>
        <input type="text" name="" id="" className="bg-white border py-2" />
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          Staatsangehörigkeit*
        </label>
        <select name="" id="" className="py-2 bg-white border">
          <option value="">dfjkgf</option>
          <option value="">dfjkgf</option>
          <option value="">dfjkgf</option>
        </select>
      </div>
    </div>
    <div className="w-full flex flex-col gap-y-1">
      <span className="text-black">Geburtsdatum*</span>
      <div className="w-full flex items-center justify-between gap-x-5">
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="" className="text-black">
            Tag
          </label>
          <select name="" id="" className="py-2 bg-white border">
            <option value="">dfjkgf</option>
            <option value="">dfjkgf</option>
            <option value="">dfjkgf</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="" className="text-black">
            Monat
          </label>
          <select name="" id="" className="py-2 bg-white border">
            <option value="">dfjkgf</option>
            <option value="">dfjkgf</option>
            <option value="">dfjkgf</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="" className="text-black">
            Jahr
          </label>
          <select name="" id="" className="py-2 bg-white border">
            <option value="">dfjkgf</option>
            <option value="">dfjkgf</option>
            <option value="">dfjkgf</option>
          </select>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col gap-y-1">
      <label htmlFor="">Telefonnummer*</label>
      <input type="text" name="" id="" className="bg-white border py-2" />
    </div>
    <div className="w-full flex flex-col gap-y-1">
      <label htmlFor="">E-Mail-Adresse*</label>
      <input type="email" name="" id="" className="bg-white border py-2" />
    </div>
    <div className="w-full flex items-center justify-between gap-x-5">
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          Passwort*
        </label>
        <input type="text" name="" id="" className="bg-white border py-2" />
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <label htmlFor="" className="text-black">
          Passwort bestätigen*
        </label>
        <input type="text" name="" id="" className="bg-white border py-2" />
      </div>
    </div>
    <div className="w-full flex items-baseline gap-x-1">
      <input type="checkbox" name="" id="" />
      <span>Ich akzeptiere die EV Digital Invest AGB</span>
    </div>
    <div className="w-full flex items-baseline gap-x-1">
      <input type="checkbox" name="" id="" />
      <span>
        Ich habe die Datenschutzerklärung zur Kenntnis genommen und willige in
        die Datenverarbeitung ein.
      </span>
    </div>
    <div className="w-full flex items-baseline gap-x-1">
      <input type="checkbox" name="" id="" className="text-white" />
      <span>
        Ich möchte über Projekte, Neuigkeiten und Tipps per E-Mail informiert
        werden. Es erfolgt keine Weitergabe an Dritte.
      </span>
    </div>
  </div>
);

const Step2 = ({ handleChange, selected }) => (
  <div className="w-full h-full flex flex-col gap-y-5">
    <span className="text-2xl ">Erfahrungen und Kenntnisse</span>
    <small className="italic text-red-500 font-medium">
      Die Angaben sind freiwillig
    </small>
    <span className="">
      Wir sind gesetzlich verpflichtet, von Ihnen Informationen über Ihre
      Erfahrungen in Bezug auf getätigte Investitionen abzufragen.
    </span>
    <div className="w-full flex flex-col gap-y-5">
      <span className="font-medium text-sm">
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
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="pl-2 text-sm">Ja</span>
        </label>
        <label className="inline-flex items-center w-full">
          <input
            type="radio"
            name="checkboxGroup"
            value="option2"
            checked={selected === "option2"}
            onChange={handleChange}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="pl-2 text-sm">Nein</span>
        </label>
      </div>
      <label className="inline-flex items-center w-full">
        <input
          type="radio"
          name="checkboxGroup"
          value="option3"
          checked={selected === "option3"}
          onChange={handleChange}
          className="form-radio h-5 w-5 text-blue-600"
        />
        <span className="pl-2 text-sm">
          Ich möchte keine Angaben machen und direkt fortfahren
        </span>
      </label>
      <span className="text-pretty py-5">
        Sie können Ihr Risikoprofil auch jederzeit später in Ihren
        Profileinstellungen ändern.
      </span>
    </div>

    <span className="border-t pt-5 text-2xl">Identifizierung</span>
    <span>
      Bei Investments von größeren Beträgen ist eine Identifizierung auf unserer
      Plattform notwendig.
    </span>
    <div className="w-full flex flex-col gap-y-5 border-b pb-7">
      <span className="text-sm font-medium">
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
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="pl-2 text-sm">Ja</span>
        </label>
        <label className="inline-flex items-center w-full">
          <input
            type="radio"
            name="checkboxGroup"
            value="option5"
            checked={selected === "option5"}
            onChange={handleChange}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="pl-2 text-sm">Nein, aktuell nicht</span>
        </label>
      </div>
    </div>
  </div>
);

const Step3 = () => (
  <div className="w-full h-full flex flex-col items-center gap-y-5">
    <span className="text-2xl font-medium">
      Bitte aktivieren Sie jetzt Ihre E-Mail-Adresse!
    </span>
    <p className="text-center">
      Wir haben Ihnen soeben einen Aktivierungslink per E-Mail geschickt. Bitte
      überprüfen Sie Ihr E-Mail-Postfach. Mit der Verifizierung möchten wir
      sicherstellen, dass Ihre E-Mail-Adresse vor Missbrauch durch Dritte
      geschützt ist.
    </p>
    <span className="text-sm">
      Ihr Aktivierungslink wurde an die folgende E-Mail-Adresse geschickt
    </span>
    <span className=" font-semibold">leonali274784@gmail.com</span>
    <button className="text-red-500 hover:underline">
      Aktivierungslink erneut zuschicken
    </button>
  </div>
);

export default Signup;
