/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import Step1 from "./Step1";
import axios from "axios";

// react-select for nationality
// Date picker for birth date
// react-phone-number-input for phone num

// array for months

const Signup = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const password = watch("password", "");

  // Date of birth

  // all state
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(null);

  const onSubmit = async (data) => {
    try {
      // Get user Data
      const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        gender: data.gender.value,
        title: data.title.value,
        street: data.street,
        no: data.no,
        zipCode: data.zipCode,
        city: data.city,
        country: data.country.value,
        political: data.political.value,
        usTax: data.usTax.value,
        dateOfBirth:
          data.day.value + "-" + data.month.value + "-" + data.year.value,
        placeOfBirth: data.placeOfBirth,
        nationality: data.nationality.value,
        phone: data.phone,
        experience: "skip",
        investment: "yes",
      };

      console.log(user);
      // Create user
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/signup",
        user
      );
      if (res?.data.status === "success") {
        toast.success("Signup successful!");
        handleNext()
      } else {
        toast.error("Signup failed!");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Something went wrong");
    }
  };
  // navigate
  const navigate = useNavigate();

  // ALL FUNCTIONS
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  const handleNext = () => setStep(step + 1);

  // handle resend email
  const resendConfirmEmail = (email) => {
    fetch(`https://localhost:5000/api/v1/user/email`, {
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
    // Main div
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full overflow-auto no-scrollbar"
    >
      <div className="max-w-[40rem] mx-auto w-full h-auto flex flex-col gap-y-5 px-5 py-20">
        <h1 className="xl:text-5xl md:text-3xl text-xl text-center text-pretty uppercase text-black">
          In wenigen Schritten zu Ihrem Zins
        </h1>
        <div className="w-full flex flex-col py-10 gap-y-2">
          {/* color line div */}
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
            <span className="md:text-base text-xs">Aktivierung</span>
          </div>
        </div>
        {/* function for show step */}

        {step === 1 && (
          <Step1
            register={register}
            control={control}
            errors={errors}
            password={password}
            isSubmitting={isSubmitting}
          />
        )}
        {step === 2 && (
          <Step2
            handleChange={handleChange}
            selected={selected}
            handleNext={handleNext}
          />
        )}
        {step === 3 && (
          <Step3
            handleNext={handleNext}
            resendConfirmEmail={resendConfirmEmail}
          />
        )}
      </div>
    </form>
  );
};

// step 2
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

// step 3
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
