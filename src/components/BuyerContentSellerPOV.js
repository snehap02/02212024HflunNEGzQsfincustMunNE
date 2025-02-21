import React, { useState } from "react";
import { tabNames, jobs } from "../pages/SellerDashboard/MockCardData";
import { Link } from "react-router-dom";

const BuyerContentSellerPOV = () => {
  const [activeTab, setActiveTab] = useState(tabNames[0]);
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="title text-center w-full px-64">
        <h1 className="text-white pt-28 text-[48px] desc">
          Hey Freelancers, We Have Open Jobs. You can Apply !
        </h1>
      </div>
      <div className="tabs w-full px-36 mt-10">
        <div className="tab-contents bg-webBg w-full mt-10 rounded-lg flex flex-col justify-between gap-0">
          {/* Tab Buttons */}
          <div className="flex justify-center items-center h-16 name text-white text-[14px] 450:text-[16px] sm:text-[20px]">
            {tabNames.map((tab) => (
              <button
                key={tab}
                className={`w-[50%] h-full ${
                  activeTab === tab
                    ? "bg-forestGreen"
                    : "hover:bg-forestGreen hover:bg-opacity-20"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="scrollbar bg-gradient-to-r from-[#214a25] via-[#004321] to-[#004321] h-[52vh] p-4 text-white overflow-x-hidden overflow-y-auto scroll-smooth">
            {activeTab === "Open Jobs" && (
              <div className="flex flex-col ml-4 gap-6 lg:p-3">
                {jobs.map((job) => (
                  <div className="w-full xl:h-[100px] h-[160px] text-black bg-limeGreen rounded-lg xl:p-5 p-6">
                    <div className="jobs flex flex-col xl:flex-row justify-between items-center gap-8">
                      <h1 className="xl:text-[24px] text-[20px] sm:text-[24px] name text-center lg:text-left">
                        {job.title}
                      </h1>
                      <div className="flex md:gap-2 justify-center items-center bg-webBg py-3 px-10 -mt-2 rounded-lg text-white gap-4 name tracking-wider xl:mt-1">
                        <Link to="/maintenance">
                          <button className="xl:text-[17px]">Apply</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "Ongoing Jobs" && (
              <div className="flex flex-col ml-4 gap-6 lg:p-3">
                {jobs.map((job) => (
                  <div className="w-full xl:h-[100px] h-[160px] text-black bg-limeGreen rounded-lg xl:p-5 p-6">
                    <div className="jobs flex flex-col xl:flex-row justify-between items-center gap-8">
                      <h1 className="xl:text-[24px] text-[20px] sm:text-[24px] name text-center lg:text-left">
                        {job.title}
                      </h1>
                      <div className="flex md:gap-2 justify-center items-center bg-webBg py-3 px-10 -mt-2 rounded-lg text-white gap-4 name tracking-wider xl:mt-1">
                        <Link to="/maintenance">
                          <button className="xl:text-[17px]">Apply</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="reviews w-full px-36 mt-10 mb-20">
        <div className="w-full border border-[#4B5736] h-56 rounded-lg p-5 flex flex-col gap-2">
          <h1 className="text-white name text-[17px]">
            Reviews From Freelancers
          </h1>
          <div className="points flex flex-col justify-center items-center gap-5">
            <img src="../images/reviews.svg" alt="reviews" />
            <h1 className="text-white opacity-50 desc tracking-wider">
              You haven't received any reviews yet.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerContentSellerPOV;
