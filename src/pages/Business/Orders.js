import React, { useState } from "react";
import { orderTabs } from "../SellerDashboard/MockCardData";
import ActiveOrder from "../../components/ActiveOrder";
import LateOrder from "../../components/LateOrder";
import CancelledOrder from "../../components/CancelledOrder";
import CompletedOrder from "../../components/CompletedOrder";

const Orders = () => {
  const [activeOrderTabs, setActiveOrderTabs] = useState(orderTabs[0]);
  return (
    <div className="w-full h-[100vh] bg-webBg">
      <div className="xl:px-20">
        <h1 className="name text-[32px] pt-24 text-white">Orders Overview</h1>

        {/* Tabs */}
        <div className="flex justify-center items-center w-full py-2 bg-[#002518] mt-4 rounded-lg">
          <div className="border border-[#4B5736] py-3 px-4 flex gap-20 rounded-lg">
            {orderTabs.map((tab) => (
              <button
                key={tab}
                className={`rounded-lg ${
                  activeOrderTabs === tab
                    ? "bg-[#daff99] px-6 py-2 text-[16px] name"
                    : "bg-transparent text-[16px] name text-white"
                }`}
                onClick={() => setActiveOrderTabs(tab)}
              >
                {tab} (0)
              </button>
            ))}
          </div>
        </div>

        {/* Tabs Content */}
        <div className="content bg-[#002518] mt-8 rounded-lg">
          {activeOrderTabs === "Active Orders" && <ActiveOrder />}
          {activeOrderTabs === "Late Orders" && <LateOrder />}
          {activeOrderTabs === "Cancelled Orders" && <CancelledOrder />}
          {activeOrderTabs === "Completed Orders" && <CompletedOrder />}
        </div>
      </div>
    </div>
  );
};

export default Orders;
