import React, { useState, useEffect } from "react";
import { settingsTab } from "../SellerDashboard/MockCardData"; // Assuming this is an array of tab names
import AccountInformation from "./AccountInformation";
import CoinsAndMembership from "./CoinsAndMembership";
import Notification from "./Notification";
import KYC from "./KYC";
import BankAccount from "./BankAccount";
import TaxInformation from "./TaxInformation";
import Payment from "./PaymentMethodFilling";
import { Link } from "react-router-dom";

const Settings = () => {
  const [activeEditTab, setActiveEditTab] = useState(() => {
      const savedTab = localStorage.getItem("activeSettingsTab");
      return savedTab && settingsTab.includes(savedTab) ? savedTab : settingsTab[0];
  });

  console.log("Current Tab:", activeEditTab);
  console.log("Saved Tab in localStorage:", localStorage.getItem("activeSettingsTab"));

  // Save the active tab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("activeSettingsTab", activeEditTab);
  }, [activeEditTab]);

  return (
    <div className="bg-webBg min-h-screen w-full flex flex-col md:flex-row overflow-x-hidden">
      {/* Tabs */}
      <div className="flex md:flex-col flex-row md:w-[250px] xl:w-[340px] bg-forestGreen md:overflow-y-auto md:overflow-x-hidden overflow-x-scroll no-scrollbar mt-16 scrollbarNew z-20 md:h-[100vh]">
        <div>
          <Link
            to="/"
            className="flex gap-5 h-20 items-center text-[15px] md:text-[17px] px-16 md:px-8 name text-lightChartreuse"
          >
            <img
              src="../images/settingsBack.svg"
              alt="back"
              className="cursor-pointer"
            />
            <h1 className="cursor-pointer"> Settings</h1>
          </Link>
        </div>
        {settingsTab.map((tab) => (
          <button
            key={tab}
            className={`whitespace-nowrap px-8 py-6 name text-lightChartreuse text-left md:text-[16px] text-[15px] tracking-wider ${
              activeEditTab === tab
                ? "md:bg-gradient-to-l md:from-[#011E17] md:to-[#004321] border-t-4 border-mayGreen md:border-l-4 md:border-t-0 bg-gradient-to-t from-[#011E17] to-[#004321]"
                : "hover:bg-forestGreen hover:bg-opacity-40 ml-2"
            }`}
            onClick={() => setActiveEditTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1 p-4 overflow-y-hidden">
        {activeEditTab === "Payment" && <Payment />}
        {activeEditTab === "Account Information" && <AccountInformation />}
        {activeEditTab === "Coins & Membership" && <CoinsAndMembership />}
        {activeEditTab === "Notification" && <Notification />}
        {activeEditTab === "KYC" && <KYC />}
        {activeEditTab === "Bank Account" && <BankAccount />}
        {activeEditTab === "Tax Information" && <TaxInformation />}
      </div>
    </div>
  );
};

export default Settings;
