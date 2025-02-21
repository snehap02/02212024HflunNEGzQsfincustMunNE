import React, { useState } from "react";

const BillingInfo = () => {
  const [country, setCountry] = useState(""); // Initially empty
  const [state, setState] = useState(""); // Initially empty
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);

  // Map of countries to their respective states
  const countryStateMap = {
    India: ["Assam", "Delhi", "Maharashtra", "Kerala", "Tamil Nadu"],
    USA: ["California", "New York", "Texas", "Florida", "Illinois"],
    UK: ["England", "Scotland", "Wales", "Northern Ireland"],
  };

  const countries = Object.keys(countryStateMap);
  const states = country ? countryStateMap[country] : []; // Dynamically get states if country is selected

  return (
    <div className="w-full h-full pt-6">
      <h1 className="text-[22px] text-white name">Billing Information </h1>
      <h2 className="text-[19px] text-[#45be59] name mt-2">
        Enter your billing details for secure payment processing.{" "}
      </h2>

      <div className="form mt-10 flex flex-col gap-2 pb-20 w-[50%]">
        {/* Full Name */}
        <label className="text-[15px] md:text-[16px] tracking-wide name text-white">
          Full Name
        </label>
        <input
          type="text"
          className="bg-[#012619] rounded-md w-full mt-4 h-14 px-4 desc shadow-lg focus:outline-none text-white"
          placeholder="Full Name"
        />
        {/* Company Name */}
        <label className="text-[15px] md:text-[16px] tracking-wide name text-white mt-4">
          Company Name
        </label>
        <input
          type="text"
          className="bg-[#012619] rounded-md w-full mt-4 h-14 px-4 desc shadow-lg focus:outline-none text-white"
          placeholder="Company Name"
        />
        {/* Country Dropdown */}
        <label className="text-[15px] md:text-[16px] tracking-wide name text-white mt-4">
          Country
        </label>
        <div className="relative w-full h-10 desc">
          <button
            type="button"
            className="bg-[#012619] text-white text-left px-4 py-4 rounded-md w-full flex justify-between items-center shadow-lg focus:outline-none mt-3"
            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
          >
            {country || "Select a country"}
            <span
              className={`text-sm transform transition-transform duration-300 ${
                showCountryDropdown ? "rotate-180" : ""
              }`}
            >
              &#x25BC;
            </span>
          </button>
          {showCountryDropdown && (
            <div className="absolute top-full left-0 w-full bg-[#012619] rounded-md shadow-lg mt-10 z-10 desc px-3 py-2">
              {countries.map((c) => (
                <button
                  key={c}
                  className="block w-full text-white text-left px-4 py-3 hover:bg-forestGreen transition-colors rounded-lg"
                  onClick={() => {
                    setCountry(c);
                    setState(""); // Reset state when a new country is selected
                    setShowCountryDropdown(false);
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* State Dropdown */}
        <label className="text-[15px] md:text-[16px] tracking-wide name text-white mt-10">
          State
        </label>
        <div className="relative w-full h-10 desc">
          <button
            type="button"
            className="bg-[#012619] text-white text-left px-4 py-4 rounded-md w-full flex justify-between items-center shadow-lg focus:outline-none mt-3"
            onClick={() => setShowStateDropdown(!showStateDropdown)}
            disabled={!country} // Disable if no country is selected
          >
            {state || (country ? "Select a state" : "Select a country first")}
            <span
              className={`text-sm transform transition-transform duration-300 ${
                showStateDropdown ? "rotate-180" : ""
              }`}
            >
              &#x25BC;
            </span>
          </button>
          {showStateDropdown && (
            <div className="absolute top-full left-0 w-full bg-[#012619] rounded-md shadow-lg mt-10 z-10 desc px-3 py-2">
              {states.map((s) => (
                <button
                  key={s}
                  className="block w-full text-white text-left px-4 py-3 hover:bg-forestGreen transition-colors rounded-lg"
                  onClick={() => {
                    setState(s);
                    setShowStateDropdown(false);
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Address */}
        <label className="text-[15px] md:text-[16px] tracking-wide name text-white mt-10">
          Address
        </label>
        <textarea
          className="bg-[#012619] rounded-md w-full mt-4 h-36 px-4 desc shadow-lg focus:outline-none pt-4"
          placeholder="Address"
        ></textarea>
        {/* City */}
        <label className="text-[15px] md:text-[16px] tracking-wide name text-white mt-4">
          City
        </label>
        <input
          type="text"
          className="bg-[#012619] rounded-md w-full mt-4 h-14 px-4 desc shadow-lg focus:outline-none text-white"
          placeholder="City"
        />
        {/* Postal Code */}
        <label className="text-[15px] md:text-[16px] tracking-wide name text-white mt-4">
          Postal Code
        </label>
        <input
          type="text"
          className="bg-[#012619] rounded-md w-full mt-4 h-14 px-4 desc shadow-lg focus:outline-none text-white"
          placeholder="Postal Code"
        />
        {/* Save Changes Button */}
        <div className="submitButton flex justify-end items-center">
          <button className="ring-2 ring-green-800 hover:bg-[#013f0b] text-white font-bold py-3 px-10 rounded-lg text-[17px] bg-[#026310] mt-8">
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
