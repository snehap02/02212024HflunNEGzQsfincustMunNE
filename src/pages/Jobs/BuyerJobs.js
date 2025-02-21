import React, { useState } from "react";
import { buyerJobTabs } from "../SellerDashboard/MockCardData";
import CreateJob from "../../components/CreateJob";
import CreateBrief from "../../components/CreateBrief";

const BuyerJobs = () => {
  const [activeJobTabs, setActiveJobTabs] = useState(buyerJobTabs[0]);
  return (
    <div className="w-full min-h-[100vh] bg-webBg">
      <div className="flex flex-col relative">
        {/* Tabs */}
        <div className="flex justify-center items-center w-full py-2 pt-28 flex-col px-72">
          <div className="border border-[#4B5736] py-3 px-4 flex gap-10 rounded-lg">
            {buyerJobTabs.map((tab) => (
              <button
                key={tab}
                className={`rounded-lg ${
                  activeJobTabs === tab
                    ? "bg-[#daff99] px-6 py-2 text-[16px] name"
                    : "bg-transparent text-[16px] name text-white"
                }`}
                onClick={() => setActiveJobTabs(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <h1 className="mt-5 lg:text-[18px] tracking-wider desc text-[#1edf3e]">
            Give Opportunity To New Freelancers
          </h1>

          <div className="w-full h-[1px] bg-[#6B8F71] bg-opacity-40 mt-8"></div>
        </div>

        {/* Tabs Content */}
        <div className="content mt-8 rounded-lg relative">
          {activeJobTabs === "Create a Job" && <CreateJob />}
          {activeJobTabs === "Create AI Brief" && <CreateBrief />}
        </div>
      </div>   
    </div>
  );
};

export default BuyerJobs;
