import React, { useState } from "react";
import {
  data,
  tabs,
  submittedProposals,
  jobs
} from "./MockCardData";
import { Link } from "react-router-dom";

const TabContent = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div>
      <div className="another-second-div bg-webBg w-full mt-10 rounded-lg flex flex-col justify-between gap-0">
        {/* Tab Buttons */}
        <div className="flex justify-center items-center h-16 name text-white text-[14px] 450:text-[16px] sm:text-[20px] rounded-tl-lg rounded-tr-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`w-[50%] h-full rounded-tl-lg rounded-tr-lg ${
                activeTab === tab
                  ? "bg-forestGreen"
                  : "hover:bg-forestGreen hover:bg-opacity-40"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="scrollbar bg-gradient-to-r from-[#214a25] via-[#004321] to-[#004321] h-[42vh] p-4 text-white overflow-x-hidden overflow-y-auto scroll-smooth">
          {activeTab === "Submitted Proposals" && (
            <div className="flex flex-col ml-4 gap-6 lg:p-3">
              {submittedProposals.map((proposal) => (
                <div className="w-full xl:h-[210px] md:h-[245px] h-[236px] text-black bg-limeGreen rounded-lg flex xl:flex-row flex-col xl:justify-between xl:p-20 p-6 xl:items-center">
                  <div className="details flex flex-col xl:gap-1 gap-1">
                    <h1 className="xl:text-[35px] text-[26px] name">
                      {proposal.title}
                    </h1>
                    <h2 className="xl:text-[35px] text-[26px] font-bold">
                      {proposal.price}
                    </h2>
                    <div className="flex gap-3">
                      <h2 className="xl:text-[20px] text-[18px] font-medium">
                        by {proposal.name}
                      </h2>
                      <img src={proposal.verified} alt="verified" />
                      <img src={proposal.countryImg} alt="country" />
                    </div>
                  </div>
                  <div className="links flex flex-col xl:gap-16 gap-4 cursor-not-allowed">
                    <a
                      href={proposal.coverLetterLink}
                      className="name mt-1 hover:underline hover:underline-offset-4 md:text-[18px] xl:text-[20px]"
                    >
                      View Cover Letter
                    </a>
                    <div className="flex md:gap-2 justify-center items-center bg-webBg py-3 -mt-2 rounded-full text-white gap-4 name tracking-wider">
                      <button className="cursor-not-allowed xl:text-[17px]">
                        {proposal.status}
                      </button>
                      <img src="../images/tick.svg" alt="tick" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Jobs To Apply" && (
            <div className="flex flex-col ml-4 gap-6 lg:p-3">
              {jobs.map((job) => (
                <div className="w-full xl:h-[120px] h-[160px] text-black bg-limeGreen rounded-lg xl:p-8 p-6">
                  <div className="jobs flex flex-col xl:flex-row justify-between items-center gap-8">
                    <h1 className="xl:text-[24px] text-[20px] sm:text-[24px] name text-center lg:text-left">
                      {job.title}
                    </h1>
                    <div className="flex md:gap-2 justify-center items-center bg-webBg py-3 px-10 -mt-2 rounded-lg text-white gap-4 name tracking-wider xl:mt-1">
                    <Link to="/applyjobs">
                    <button className="xl:text-[17px]">
                        Apply
                      </button>
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
  );
};

export default TabContent;
