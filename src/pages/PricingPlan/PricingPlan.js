import React, { useState } from "react";
import { plan, pricingFeature } from "../SellerDashboard/MockCardData";
import MonthlyPlan from "../../components/MonthlyPlan";
import YearlyPlan from "../../components/YearlyPlan";
import EnterprisePlan from "../../components/EnterprisePlan";

const PricingPlan = () => {
  const [activePriceTab, setActivePriceTab] = useState(plan[0]);
  const [showComparison, setShowComparison] = useState(false); // State to control table visibility

  return (
    <div className="w-full min-h-[100vh] bg-webBg pt-24 px-5 md:px-20 lg:px-48">
      <div className="title flex flex-col justify-center items-center">
        <h1 className="name text-white text-[48px]">Choose Your Plan</h1>
        <h2 className="text-[#359846] text-[24px] mt-2">
          Upgrade to explore premium features!
        </h2>
      </div>
      {/* Tab Buttons */}
      <div className="toggleButton mt-6 flex justify-between items-center mx-[565px] bg-[#012619] py-2 rounded-full border border-[#DAFF99] h-14 w-[25rem]">
        <div className="w-full flex justify-center items-center h-14 bigText text-white rounded-full">
          {plan.map((tab) => (
            <button
              key={tab}
              className={`px-[2rem] py-2 rounded-full ${
                activePriceTab === tab
                  ? "bg-[#DAFF99] text-black text-[17px] transition-all"
                  : "hover:bg-opacity-40"
              }`}
              onClick={() => setActivePriceTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Pricing Cards */}
      <div className="content">
        {activePriceTab === "Monthly" && <MonthlyPlan />}
        {activePriceTab === "Yearly" && <YearlyPlan />}
        {activePriceTab === "Enterprise" && <EnterprisePlan />}
      </div>

      {/* Conditionally render loadContent */}
      {activePriceTab !== "Enterprise" && (
        <div className="loadContent w-full flex flex-col justify-center items-center mt-6 pb-32">
          <div className="featureDeatils flex flex-col justify-center items-center gap-3">
            <h1 className="text-[30px] text-white name">Compare Features</h1>
            <div className="h-[1px] w-96 bg-[#60733F] bg-opacity-50"></div>
            <h2 className="text-[20px] text-white desc">
              Effortlessly compare the features of Fincust to see why it's the
              ultimate choice.
            </h2>
            {/* Hide button once the table is visible */}
            {!showComparison && (
              <div className="w-full flex justify-center items-center mt-6">
                <button
                  className="comparisionButton bg-button ring-2 ring-green-800 hover:bg-green-800 text-white font-bold py-3 px-10 rounded-lg text-[17px] desc tracking-wider"
                  onClick={() => setShowComparison(true)} // Show table and hide button
                >
                  Click Here
                </button>
              </div>
            )}
          </div>
          <div className="comparisionChart w-full mt-6">
            {showComparison && (
              <div className="comparison-container text-white rounded-lg mt-8 flex flex-col">
                {/* Header Row */}
                <div className="grid grid-cols-4 gap-4 pb-6 bg-[#00301F] rounded-lg place-items-center pt-6 bigText text-[22px] mb-8">
                  <div className="font-bold">Features</div>
                  <div className="font-bold">Basic</div>
                  <div className="font-bold">Professional</div>
                  <div className="font-bold">Premium</div>
                </div>
                {/* Feature Rows */}
                {pricingFeature.map((item, index) => (
                  <div
                    key={index}
                    className="pricingFeature grid grid-cols-4 gap-4 py-8 border border-[#2a3a0f] place-items-center bg-webBg"
                  >
                    <div className="text-[17px] name justify-self-start ml-6">{item.feature}</div>
                    <div className="text-white">{item.basic}</div>
                    <div>{item.advance}</div>
                    <div>{item.premium}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPlan;

