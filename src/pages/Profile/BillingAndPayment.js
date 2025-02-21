import React, { useEffect, useState } from "react";
import { billingTabs } from "../SellerDashboard/MockCardData";
import BillingMethod from "../../components/BillingMethod";
import BillingInfo from "../../components/BillingInfo";
import BillingHistory from "../../components/BillingHistory";

const BillingAndPayment = () => {
  const [activeBillingTabs, setActiveBillingTabs] = useState(() => {
    const savedTab = localStorage.getItem("activeBillingTabs");
    return savedTab && billingTabs.includes(savedTab)
      ? savedTab
      : billingTabs[0];
  });

  useEffect(() => {
    localStorage.setItem("activeBillingTabs", activeBillingTabs);
  }, [activeBillingTabs]);

  return (
    <div className="w-full min-h-[100vh] bg-webBg">
      <div className="xl:px-32">
        <h1 className="name text-[32px] pt-28 text-white">
          Billing & Payments
        </h1>
        <div className="w-full h-[1px] bg-[#6B8F71] bg-opacity-40 mt-4"></div>

        {/* Tabs */}
        <div className="flex justify-center items-center w-full py-3">
          <div className="border border-[#4B5736] py-3 px-4 flex gap-20 rounded-lg">
            {billingTabs.map((tab) => (
              <button
                key={tab}
                className={`rounded-lg ${
                  activeBillingTabs === tab
                    ? "bg-[#DAFF99] px-6 py-2 text-lg name"
                    : "bg-transparent text-lg name text-white"
                }`}
                onClick={() => setActiveBillingTabs(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#6B8F71] bg-opacity-40"></div>

        {/* Tabs Content */}
        <div className="content">
          {activeBillingTabs === "Billing Info" && <BillingInfo />}
          {activeBillingTabs === "Billing Method" && <BillingMethod />}
          {activeBillingTabs === "Billing History" && <BillingHistory />}
        </div>
      </div>
    </div>
  );
};

export default BillingAndPayment;
