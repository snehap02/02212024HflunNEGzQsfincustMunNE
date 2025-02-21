import React, { useState } from "react";

const Pricing = () => {
  const [isThreeTier, setIsThreeTier] = useState(false);
  const [showCustomAddOns, setShowCustomAddOns] = useState(false);

  const toggleThreeTier = () => {
    setIsThreeTier(!isThreeTier);
  };

  const toggleCustomAddOns = () => {
    setShowCustomAddOns(!showCustomAddOns);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full sm:px-10 md:px-20 2xl:px-72">
      <div className="border border-[#253428] w-full h-[75vh] mt-10 rounded-lg overflow-x-auto scrollbar flex flex-col p-5 xl:px-16 gap-10 lg:gap-14">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[17px] lg:text-[22px] bigText">
            Create Pricing Plan
          </h2>
          <label className="flex items-center cursor-pointer">
            <span className="mr-2 name">3 tier</span>
            <div
              className={`w-16 h-7 flex items-center rounded-full p-1 ${
                isThreeTier ? "bg-green-500" : "bg-gray-600"
              }`}
              onClick={toggleThreeTier}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isThreeTier ? "translate-x-8" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
        {/* <div className="w-full h-[1px] bg-[#253428] -mt-8"></div> */}
        <div className="p-6 border border-[#253428] text-white -mt-6">
          {/* Shared Titles Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 xl:gap-8">
            <div className="col-span-1 mt-14 name">
              {/* <h3 className="text-lg font-bold mb-4 p-2">Details</h3> */}
              {[
                "1. Title of the Project",
                "2. Description (upto 90 characters)",
                "3. Delivery Days",
                "4. Revisions",
                "5. Running Time (in seconds)",
                "6. Coloured",
                "7. Voiceover",
                "8. Scriptwriting",
                "9. Price ($)",
              ].map((label, index) => (
                <div key={index} className="mb-6 p-2">
                  <label>{label}</label>
                </div>
              ))}
            </div>

            {/* Basic Tier */}
            <div className="col-span-1">
              <h3 className="text-center bg-green-500 px-2 py-4 rounded text-black bigText text-xl">
                BASIC
              </h3>
              <div className="mt-4 space-y-6 flex flex-col">
                <input
                  type="text"
                  className="w-full bg-[#012619] px-3 py-4 name text-[15px] rounded-md focus:outline-none"
                  placeholder="Enter project title"
                />
                <textarea
                  className="w-full bg-[#012619] px-3 py-4 name text-[15px] rounded-md focus:outline-none"
                  placeholder="Enter description"
                ></textarea>
                <select className="w-full bg-[#012619] px-3 py-4 name text-[15px] rounded-md focus:outline-none">
                  <option>Select Delivery Days</option>
                  <option>1</option>
                  <option>3</option>
                  <option>5</option>
                </select>
                <input
                  type="number"
                  className="w-full bg-[#012619] px-3 py-4 name text-[15px] rounded-md focus:outline-none"
                  defaultValue={5}
                />
                <input
                  type="number"
                  className="w-full bg-[#012619] px-3 py-4 name text-[15px] rounded-md focus:outline-none"
                  placeholder="Enter running time"
                />
                <div className="flex justify-center items-center py-10">
                  <input type="checkbox" className="ml-2 focus:outline-none" />
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    className="ml-2 -mt-2 focus:outline-none"
                  />
                </div>
                <div className="flex justify-center items-center py-5">
                  <input type="checkbox" className="ml-2 focus:outline-none" />
                </div>
                {/*                 
                <input type="checkbox" className="ml-2" />
                <input type="checkbox" className="ml-2" /> */}
                <input
                  type="number"
                  className="w-full rounded-md bg-[#012619] px-3 py-4 name text-[15px] focus:outline-none"
                  placeholder="Enter price"
                />
              </div>
            </div>

            {/* Standard and Advanced Tiers (if enabled) */}
            {isThreeTier &&
              ["STANDARD", "ADVANCED"].map((tier, index) => (
                <div className="col-span-1 name" key={index}>
                  <h3 className="text-center bg-green-500 px-2 py-4 rounded text-black bigText text-xl">
                    {tier}
                  </h3>
                  <div className="mt-4 space-y-6 flex flex-col">
                    <input
                      type="text"
                      className="w-full bg-[#012619] px-3 py-4 name text-[15px] rounded-md focus:outline-none"
                      placeholder="Enter project title"
                    />
                    <textarea
                      className="w-full bg-[#012619] px-3 py-4 name text-[15px] rounded-md focus:outline-none"
                      placeholder="Enter description"
                    ></textarea>
                    <select className="w-full bg-[#012619] px-3 py-4 name text-[15px] rounded-md focus:outline-none">
                      <option>Select Delivery Days</option>
                      <option>5</option>
                      <option>10</option>
                      <option>15</option>
                    </select>
                    <input
                      type="number"
                      className="w-full bg-[#012619] px-3 py-4 name text-[15px] rounded-md focus:outline-none"
                      defaultValue={tier === "STANDARD" ? 10 : 15}
                    />
                    <input
                      type="number"
                      className="w-full bg-[#012619] px-3 py-4 name text-[15px] rounded-md focus:outline-none"
                      placeholder="Enter running time"
                    />
                    <div className="flex justify-center items-center py-10">
                      <input type="checkbox" className="ml-2" />
                    </div>
                    <div className="flex justify-center items-center">
                      <input type="checkbox" className="ml-2 -mt-2" />
                    </div>
                    <div className="flex justify-center items-center py-5">
                      <input type="checkbox" className="ml-2" />
                    </div>
                    <input
                      type="number"
                      className="w-full bg-[#012619] px-3 py-4 name text-[15px] rounded-md focus:outline-none"
                      placeholder="Enter price"
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className="w-full h-[1px] bg-[#253428]"></div>
          {/* Add-Ons Section */}
          <div className="mt-6 name">
            <h4 className="font-bold">Add-Ons</h4>
            <div
              className={`grid ${
                isThreeTier ? "grid-cols-3" : "grid-cols-1 w-96"
              } gap-4 mt-4`}
            >
              <div className="mt-5">
                <label>Fast Delivery ($)</label>
                <input
                  type="number"
                  className="w-full bg-[#012619] px-3 py-5 name text-[15px] rounded-md focus:outline-none mt-2"
                  placeholder="Enter price"
                />
              </div>
              <div className="mt-5">
                <label>Additional Revisions ($)</label>
                <input
                  type="number"
                  className="w-full bg-[#012619] px-3 py-5 name text-[15px] rounded-md focus:outline-none mt-2"
                  placeholder="Enter price"
                />
              </div>
              {isThreeTier && (
                <div className="mt-5">
                  <label>Priority Support ($)</label>
                  <input
                    type="number"
                    className="w-full bg-[#012619] px-3 py-5 name text-[15px] rounded-md focus:outline-none mt-2"
                    placeholder="Enter price"
                  />
                </div>
              )}
            </div>
            <div className="w-full h-[1px] bg-[#253428] mt-12"></div>
            <button
              className="mt-8 bg-green-500 text-black px-4 py-2 rounded"
              onClick={toggleCustomAddOns}
            >
              Custom Add-On
            </button>

            {showCustomAddOns && (
              <div
                className={`grid ${
                  isThreeTier ? "grid-cols-3" : "grid-cols-1 w-96"
                } gap-4 mt-4`}
              >
                <div>
                  <label>Custom Add-On Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#012619] px-3 py-5 name text-[15px] rounded-md focus:outline-none mt-2"
                    placeholder="Enter add-on name"
                  />
                </div>
                <div>
                  <label>Custom Add-On Description</label>
                  <input
                    type="text"
                    className="w-full bg-[#012619] px-3 py-5 name text-[15px] rounded-md focus:outline-none mt-2"
                    placeholder="Enter description"
                  />
                </div>
                <div>
                  <label>Price ($)</label>
                  <input
                    type="number"
                    className="w-full bg-[#012619] px-3 py-5 name text-[15px] rounded-md focus:outline-none mt-2"
                    placeholder="Enter price"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Next Button */}
        <div className="nextButton flex justify-end gap-6 items-end w-full mt-8">
          <button className="px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px]">
            Previous
          </button>
          <button className="px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
