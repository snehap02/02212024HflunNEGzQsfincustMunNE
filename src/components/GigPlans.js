import React, { useState } from "react";

const GigPlans = () => {
  const [selectedTab, setSelectedTab] = useState("basic");

  const tabs = {
    basic: {
      title: "Basic",
      price: "$50",
      delivery: "3-day Delivery (31/10/2024)",
      revisions: "2 Revisions",
    },
    standard: {
      title: "Standard",
      price: "$100",
      delivery: "5-day Delivery (01/11/2024)",
      revisions: "5 Revisions",
    },
    advanced: {
      title: "Advanced",
      price: "$200",
      delivery: "7-day Delivery (02/11/2024)",
      revisions: "Unlimited Revisions",
    },
  };

  return (
    <div className="w-full bg-[#00341B] shadow-lg flex flex-col rounded-bl-lg rounded-br-lg">
      {/* Tabs Navigation */}
      <div className="flex justify-between">
        {Object.keys(tabs).map((key) => (
          <label
            key={key}
            htmlFor={key}
            className={`flex flex-col items-center cursor-pointer w-[600px] p-4 ${
              selectedTab === key
                ? "bg-[#002915] text-lime-100 "
                : "text-gray-400"
            }`}
          >
            {/* Hidden Radio Input */}
            <input
              type="radio"
              name="tab"
              id={key}
              checked={selectedTab === key}
              onChange={() => setSelectedTab(key)}
              className="hidden"
            />
            {/* Custom Radio Button */}
            <span
              className={`450:w-6 450:h-6 w-4 h-4 border-2 rounded-full flex items-center justify-center mb-1 ${
                selectedTab === key
                  ? "border-lime-400 bg-lime-400"
                  : "border-gray-400 bg-transparent"
              }`}
            >
              {selectedTab === key && (
                <span className="w-2.5 h-2.5 bg-[#00341B] rounded-full"></span>
              )}
            </span>
            <span className="text-[16px] lg:text-[18px] font-medium">
              {tabs[key].title}
            </span>
            <span className="text-[24px] lg:text-[28px] font-bold">
              {tabs[key].price}
            </span>
          </label>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex flex-col gap-4 text-white bg-[#002915] p-6 lg:p-14">
        <p className="flex items-center text-[14px] md:text-[16px] name gap-6">
          <img src="../images/time.svg" alt="time" />
          {tabs[selectedTab].delivery}
        </p>
        <p className="flex items-center text-[14px] md:text-[16px] name gap-6">
          <img src="../images/revisions.svg" alt="revision" />
          {tabs[selectedTab].revisions}
        </p>
        <div className="bg-webBg p-4 md:p-6 rounded-lg border-[#5E8664] border mt-5 md:mt-6">
          <div className="flex gap-2 md:text-[19px] bigText">
            <p className="font-bold text-lime-400">“</p>
            <img src="../images/Badge.svg" alt="badge" />
            <p>Fincust Payment Protection ”</p>
          </div>

          <p className="text-[14px] md:text-[16px] text-gray-300 mt-4 desc">
          Fund the project Now.<br/>
          Seller gets paid only after you get what you need.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end items-center gap-6 bg-[#002915] h-28 py-10 px-2 md:px-14">
        <button className="px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px]">
          Purchase
        </button>
        <button className="px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px] flex items-center gap-3">
        <img src="../images/Chat.svg" alt="chat"/>
          Chat
        </button>
      </div>
    </div>
  );
};

export default GigPlans;
