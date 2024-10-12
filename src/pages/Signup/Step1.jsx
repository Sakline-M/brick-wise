/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";
import Select from "react-select";
import countryList from "react-select-country-list";
import { countries, monthOptions } from "../../utils/common";

const Step1 = ({ register, control, errors, password, isSubmitting }) => {
  const options = countryList().getData();

  return (
    <div className="w-full flex flex-col gap-y-5">
      <span className="md:pb-8 pb-3 border-b md:text-2xl text-lg text-black">
        Bitte vervollständigen Sie Ihr Profil
      </span>
      <span className="text-end sm:text-sm text-xs font-medium">
        * sind Pflichtangaben
      </span>
      {/* gender and title */}
      <div className="w-full flex items-center justify-between gap-x-5">
        <div className="w-full flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Anrede*
          </label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Bitte angeben" }}
            render={({ field }) => (
              <Select
                {...field}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: errors.gender ? "red" : base.borderColor,
                    boxShadow: errors.gender ? "0 0 0 1px red" : base.boxShadow,
                    "&:hover": {
                      borderColor: errors.gender ? "red" : base.borderColor,
                    },
                  }),
                }}
                options={[
                  { value: "male", label: "Herr" },
                  { value: "female", label: "Frau" },
                ]}
              />
            )}
          />

          {errors.gender && (
            <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
              {errors.gender.message}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Titel
          </label>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "", label: "none" },
                  { value: "Dr.", label: "Dr." },
                  { value: "Prof.", label: "Prof." },
                  { value: "Prof. Dr.", label: "Prof. Dr." },
                ]}
              />
            )}
          />
        </div>
      </div>

      {/* first name */}
      <div className="w-full flex items-center justify-between gap-x-5">
        <div className="w-full flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Vorname*
          </label>
          <input
            {...register("firstName", { required: "Bitte angeben" })}
            className={`bg-white border py-2 sm:text-base text-sm md:w-auto w-full rounded px-3 ${
              errors.firstName
                ? "focus:outline-red-500 border-red-500 border-2 hover:border-red-500"
                : "focus:outline-[#2684FF] hover:border-[#B3B3B3] border-[#cdcccc]"
            }`}
          />
          {errors.firstName && (
            <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
              {errors.firstName.message}
            </span>
          )}
        </div>

        {/* last name */}
        <div className="w-full flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Nachname*
          </label>
          <input
            {...register("lastName", { required: true })}
            className={`bg-white border py-2 sm:text-base text-sm md:w-auto w-full rounded px-3 ${
              errors.lastName
                ? "focus:outline-red-500 border-red-500 border-2 hover:border-red-500"
                : "focus:outline-[#2684FF] hover:border-[#B3B3B3] border-[#cdcccc]"
            }`}
          />
          {errors.lastName && (
            <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
              Bitte angeben
            </span>
          )}
        </div>
      </div>

      {/* street */}
      <div className="w-full flex items-center gap-x-5">
        <div className="w-[70%] flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Straße*
          </label>
          <input
            {...register("street", { required: true })}
            className={`bg-white border py-2 sm:text-base text-sm md:w-auto w-full rounded px-3 ${
              errors.street
                ? "focus:outline-red-500 border-red-500 border-2 hover:border-red-500"
                : "focus:outline-[#2684FF] hover:border-[#B3B3B3] border-[#cdcccc]"
            }`}
          />
          {errors.street && (
            <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
              Bitte angeben
            </span>
          )}
        </div>

        {/* street no. */}
        <div className="w-[30%] flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Nr.*
          </label>
          <input
            {...register("no", { required: true })}
            className={`bg-white border py-2 sm:text-base text-sm md:w-auto w-full rounded px-3 ${
              errors.no
                ? "focus:outline-red-500 border-red-500 border-2 hover:border-red-500"
                : "focus:outline-[#2684FF] hover:border-[#B3B3B3] border-[#cdcccc]"
            }`}
          />
          {errors.no && (
            <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
              Bitte angeben
            </span>
          )}
        </div>
      </div>

      {/* Zip Code */}
      <div className="w-full flex items-center gap-x-5">
        <div className="w-[30%] flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            PLZ*
          </label>
          <input
            {...register("zipCode", { required: true })}
            className={`bg-white border py-2 sm:text-base text-sm md:w-auto w-full rounded px-3 ${
              errors.zipCode
                ? "focus:outline-red-500 border-red-500 border-2 hover:border-red-500"
                : "focus:outline-[#2684FF] hover:border-[#B3B3B3] border-[#cdcccc]"
            }`}
          />
          {errors.zipCode && (
            <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
              Bitte angeben
            </span>
          )}
        </div>

        {/* City */}
        <div className="w-[70%] flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Stadt*
          </label>
          <input
            {...register("city", { required: true })}
            className={`bg-white border py-2 sm:text-base text-sm md:w-auto w-full rounded px-3 ${
              errors.city
                ? "focus:outline-red-500 border-red-500 border-2 hover:border-red-500"
                : "focus:outline-[#2684FF] hover:border-[#B3B3B3] border-[#cdcccc]"
            }`}
          />
          {errors.city && (
            <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
              Bitte angeben
            </span>
          )}
        </div>
      </div>

      {/* Country */}
      <div className="w-full flex flex-col gap-y-1 relative">
        <label htmlFor="" className="text-black md:text-base text-xs">
          Land*
        </label>
        <Controller
          name="country"
          control={control}
          rules={{ required: "Bitte angeben" }}
          render={({ field }) => (
            <Select
              {...field}
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: errors.country ? "red" : base.borderColor,
                  boxShadow: errors.country ? "0 0 0 1px red" : base.boxShadow,
                  "&:hover": {
                    borderColor: errors.country ? "red" : base.borderColor,
                  },
                }),
              }}
              options={countries}
            />
          )}
        />
        {errors.country && (
          <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
            {errors.country.message}
          </span>
        )}
      </div>

      {/* political checkbox */}
      <div className="w-full flex items-center justify-between gap-x-5">
        <div className="w-full flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Politisch exponierte Person
          </label>

          <Controller
            name="political"
            control={control}
            rules={{ required: "Bitte angeben" }}
            render={({ field }) => (
              <Select
                {...field}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: errors.political ? "red" : base.borderColor,
                    boxShadow: errors.political
                      ? "0 0 0 1px red"
                      : base.boxShadow,
                    "&:hover": {
                      borderColor: errors.political ? "red" : base.borderColor,
                    },
                  }),
                }}
                options={[
                  { value: "yes", label: "Ja" },
                  { value: "no", label: "Nein" },
                ]}
              />
            )}
          />
          {errors.political && (
            <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
              {errors.political.message}
            </span>
          )}
        </div>

        {/* Tax */}
        <div className="w-full flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Liegt eine US-Steuerpflicht vor*
          </label>

          <Controller
            name="usTax"
            control={control}
            rules={{ required: "Bitte angeben" }}
            render={({ field }) => (
              <Select
                {...field}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: errors.usTax ? "red" : base.borderColor,
                    boxShadow: errors.usTax ? "0 0 0 1px red" : base.boxShadow,
                    "&:hover": {
                      borderColor: errors.usTax ? "red" : base.borderColor,
                    },
                  }),
                }}
                options={[
                  { value: "yes", label: "Ja" },
                  { value: "no", label: "Nein" },
                ]}
              />
            )}
          />
          {errors.usTax && (
            <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
              {errors.usTax.message}
            </span>
          )}
        </div>
      </div>

      {/* Birth Place */}
      <div className="w-full flex items-center justify-between gap-x-5">
        <div className="w-full flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Geburtsort*
          </label>
          <input
            {...register("placeOfBirth", { required: true })}
            className={`bg-white border py-2 sm:text-base text-sm md:w-auto w-full rounded px-3 ${
              errors.placeOfBirth
                ? "focus:outline-red-500 border-red-500 border-2 hover:border-red-500"
                : "focus:outline-[#2684FF] hover:border-[#B3B3B3] border-[#cdcccc]"
            }`}
          />
          {errors.placeOfBirth && (
            <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
              Bitte angeben
            </span>
          )}
        </div>

        {/* Nationality */}
        <div className="w-full flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Staatsangehörigkeit*
          </label>
          <Controller
            name="nationality"
            control={control}
            rules={{ required: "Bitte angeben" }}
            render={({ field }) => (
              <Select
                {...field}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: errors.nationality ? "red" : base.borderColor,
                    boxShadow: errors.nationality
                      ? "0 0 0 1px red"
                      : base.boxShadow,
                    "&:hover": {
                      borderColor: errors.nationality
                        ? "red"
                        : base.borderColor,
                    },
                  }),
                }}
                options={options}
              />
            )}
          />
          {errors.nationality && (
            <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
              {errors.nationality.message}
            </span>
          )}
        </div>
      </div>

      {/* Date Of Barth */}
      <div className="w-full flex flex-col gap-y-1">
        <span className="text-black md:text-base text-sm">Geburtsdatum*</span>
        <div className="w-full flex items-center justify-between gap-x-5">
          {/* day */}
          <div className="flex flex-col w-full relative gap-y-1">
            <label htmlFor="" className="sm:text-base text-xs">Day</label>
            <Controller
              name="day"
              control={control}
              rules={{ required: "Bitte angeben" }}
              render={({ field }) => (
                <Select
                  {...field}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: errors.day ? "red" : base.borderColor,
                      boxShadow: errors.day ? "0 0 0 1px red" : base.boxShadow,
                      "&:hover": {
                        borderColor: errors.day ? "red" : base.borderColor,
                      },
                    }),
                  }}
                  options={Array.from({ length: 31 }, (_, i) => ({
                    value: i + 1,
                    label: (i + 1).toString(),
                  }))}
                />
              )}
            />
            {errors.day && (
              <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
                {errors.day.message}
              </span>
            )}
          </div>
          {/* month */}
          <div className="flex flex-col w-full relative gap-y-1">
            <label htmlFor="" className="sm:text-base text-xs">month</label>
            <Controller
              name="month"
              control={control}
              rules={{ required: "Bitte angeben" }}
              render={({ field }) => (
                <Select
                  {...field}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: errors.month ? "red" : base.borderColor,
                      boxShadow: errors.month
                        ? "0 0 0 1px red"
                        : base.boxShadow,
                      "&:hover": {
                        borderColor: errors.month ? "red" : base.borderColor,
                      },
                    }),
                  }}
                  options={monthOptions}
                />
              )}
            />
            {errors.month && (
              <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
                {errors.month.message}
              </span>
            )}
          </div>
          {/* year */}
          <div className="flex flex-col w-full relative gap-y-1">
            <label htmlFor="" className="sm:text-base text-xs">year</label>
            <Controller
              name="year"
              control={control}
              rules={{ required: "Bitte angeben" }}
              render={({ field }) => (
                <Select
                  {...field}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: errors.year ? "red" : base.borderColor,
                      boxShadow: errors.year ? "0 0 0 1px red" : base.boxShadow,
                      "&:hover": {
                        borderColor: errors.year ? "red" : base.borderColor,
                      },
                    }),
                  }}
                  options={Array.from({ length: 2016 - 1900 + 1 }, (_, i) => ({
                    value: 2016 - i,
                    label: (2016 - i).toString(),
                  }))}
                />
              )}
            />
            {errors.year && (
              <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
                {errors.year.message}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="w-full flex flex-col gap-y-1 relative">
        <label htmlFor="" className=" md:text-base text-xs">
          Telefonnummer*
        </label>
        <input
          {...register("phone", { required: true })}
          type="number"
          className={`bg-white border py-2 sm:text-base text-sm md:w-auto w-full rounded px-3 ${
            errors.phone
              ? "focus:outline-red-500 border-red-500 border-2 hover:border-red-500"
              : "focus:outline-[#2684FF] hover:border-[#B3B3B3] border-[#cdcccc]"
          }`}
        />
        {errors.phone && (
          <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
            Bitte angeben
          </span>
        )}
      </div>

      {/* Email */}
      <div className="w-full flex flex-col gap-y-1 relative">
        <label htmlFor="" className=" md:text-base text-xs">
          E-Mail-Adresse*
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          className={`bg-white border py-2 sm:text-base text-sm md:w-auto w-full rounded px-3 ${
            errors.email
              ? "focus:outline-red-500 border-red-500 border-2 hover:border-red-500"
              : "focus:outline-[#2684FF] hover:border-[#B3B3B3] border-[#cdcccc]"
          }`}
        />
        {errors.email && (
          <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
            Bitte angeben
          </span>
        )}
      </div>

      {/* Password */}
      <div className="w-full flex items-center justify-between gap-x-5">
        <div className="w-full flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Passwort*
          </label>
          <input
            {...register("password", { required: true })}
            type="password"
            className={`bg-white border py-2 sm:text-base text-sm md:w-auto w-full rounded px-3 ${
              errors.password
                ? "focus:outline-red-500 border-red-500 border-2 hover:border-red-500"
                : "focus:outline-[#2684FF] hover:border-[#B3B3B3] border-[#cdcccc]"
            }`}
          />
          {errors.password && (
            <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
              Bitte angeben
            </span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="w-full flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-black md:text-base text-xs">
            Passwort bestätigen*
          </label>
          <input
            {...register("confirmPassword", {
              required: "Bitte angeben",
              validate: (value) =>
                value === password || "Passwörter stimmen nicht überein",
            })}
            type="password"
            className={`bg-white border py-2 sm:text-base text-sm md:w-auto w-full rounded px-3 ${
              errors.confirmPassword
                ? "focus:outline-red-500 border-red-500 border-2 hover:border-red-500"
                : "focus:outline-[#2684FF] hover:border-[#B3B3B3] border-[#cdcccc]"
            }`}
          />
          {errors.confirmPassword && (
            <span className="text-xs text-red-600 italic absolute -bottom-4 left-0">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      </div>

      {/* All Check box */}
      <div className="flex items-center">
        <Controller
          name="acceptTerms"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              {...field}
            />
          )}
        />
        <label htmlFor="acceptTerms" className="pl-2 text-gray-700 sm:text-base text-sm">
          Ich akzeptiere die EV Digital Invest
        </label>
      </div>
      <div className="flex items-center">
        <Controller
          name="acceptTerms2"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              {...field}
            />
          )}
        />

        <label htmlFor="acceptTerms2" className="pl-2 text-gray-700 sm:text-base text-sm">
          Ich habe die Datenschutzerklärung zur Kenntnis genommen und willige in
          die Datenverarbeitung ein.
        </label>
      </div>
      <div className="flex items-center">
        <Controller
          name="acceptTerms3"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              {...field}
            />
          )}
        />
        <label htmlFor="acceptTerms3" className="pl-2 text-gray-700 sm:text-base text-sm">
          Ich möchte über Projekte, Neuigkeiten und Tipps per E-Mail informiert
          werden. Es erfolgt keine Weitergabe an Dritte.
        </label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 sm:text-base text-sm rounded bg-[#FF0000] transition-colors duration-300 hover:bg-[#CC0000] disabled:bg-[#CC0000] text-white font-medium"
      >
        {isSubmitting ? <span>Loading...</span> : "Speichern & Weiter"}
      </button>
    </div>
  );
};

export default Step1;
