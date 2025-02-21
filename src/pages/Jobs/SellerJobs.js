import React, { useState } from "react";
import BuyerJobContent from "../../components/BuyerJobContent";
import { Link } from "react-router-dom";
import { items } from "../SellerDashboard/MockCardData";

const SellerJobs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full min-h-[100vh] bg-webBg">
      <div className="relative">
        <div className="titleAndLine flex flex-col px-36">
          <div className="flex justify-between items-center">
            <h1 className="name text-[32px] pt-24 text-white">
              Apply For Jobs
            </h1>
            <div
              className="savedJobs flex justify-center items-center mt-24"
              onClick={openModal}
            >
              <button className="text-white bg-[#196b24] py-4 px-6 name rounded-lg tracking-wider text-[18px] hover:transition-all hover:scale-105 flex gap-3">
                <div>
                  Saved Jobs <span>(0)</span>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#DAFF99"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#6B8F71] bg-opacity-40 mt-6"></div>
        </div>
        <div className="jobSlider mt-14 px-36">
          <div className="content w-full border border-[#2B4B3B] rounded-lg relative px-32 py-16">
            <BuyerJobContent />
          </div>
        </div>
        <div className="applyBtn flex justify-end items-center mt-10 px-36">
          <button className="text-white bg-[#196b24] py-4 px-14 name rounded-lg tracking-wider text-[18px] hover:transition-all hover:scale-105 flex gap-3">
            <Link to="/applyjobs">Apply</Link>
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <div className="bg-webBg rounded-lg p-6 w-[80%] h-[90%] px-16">
              <div className="bg-webBg flex justify-between items-center mb-4">
                <h2 className="text-white text-[24px] name">Saved Jobs</h2>
                <button
                  className="text-white text-lg font-bold"
                  onClick={closeModal}
                >
                  <img src="../images/cancel.svg" alt="cancel" />
                </button>
              </div>
              <div className="w-full h-[1px] bg-[#6B8F71] bg-opacity-40 mt-6"></div>

              <div className="savedJobsList w-full max-h-[78vh] border overflow-y-scroll scrollbarNew mt-3 border-[#2B4B3B] rounded-lg p-4 flex flex-col gap-8">
                <div className="border border-[#2B4B3B] rounded-lg p-8">
                  <p className="text-sm text-[#37ca50] tracking-wide desc mb-2">
                    Posted {items[currentIndex].time}
                  </p>
                  <div className="titleAndLogo flex gap-8">
                    <h2 className="text-[26px] name text-white mb-4">
                      {items[currentIndex].title}
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="cursor-pointer mt-2"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <p className="budget text-[#37ca50] name tracking-wider text-md mb-4">
                    Fixed Budget: {items[currentIndex].budget}
                  </p>
                  <p className="description text-lg text-gray-300 mb-4 w-[80%] desc leading-10">
                    {expanded
                      ? items[currentIndex].description
                      : `${items[currentIndex].description.substring(
                          0,
                          100
                        )}...`}
                    <button
                      onClick={toggleExpanded}
                      className="text-[#DAFF99] hover:underline-offset-8 hover:underline ml-2 focus:outline-none name"
                    >
                      {expanded ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  <div className="skills flex gap-3 mb-4">
                    {items[currentIndex].skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-white text-sm desc tracking-wide bg-[#DAFF99] bg-opacity-20 rounded-lg text-center px-5 py-3"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="remaining flex flex-col w-full gap-4">
                    <div className="flex items-center">
                      <div className="flex gap-4">
                        <img
                          src="../images/userImg.svg"
                          alt="userImage"
                          className="w-5"
                        />
                        <span className="text-[17px] text-[#DAFF99] desc">
                          {items[currentIndex].user.name}
                        </span>
                      </div>
                      <img
                        src="../images/line.svg"
                        alt="divider"
                        className="w-8"
                      />
                      <span className="text-[16px] text-white desc">
                        {items[currentIndex].user.country}
                      </span>
                      <img
                        src="../images/line.svg"
                        alt="divider"
                        className="w-8"
                      />
                      {items[currentIndex].user.verified && (
                        <span className="text-[#9AF8AA] desc flex gap-4">
                          Payment Verified{" "}
                          <img src="../images/verified.svg" alt="verified" />
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="ml-auto text-md name text-white mb-20">
                        Coins Needed: {items[currentIndex].user.coins}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border border-[#2B4B3B] rounded-lg p-8">
                  <p className="text-sm text-[#37ca50] tracking-wide desc mb-2">
                    Posted {items[currentIndex].time}
                  </p>
                  <div className="titleAndLogo flex gap-8">
                    <h2 className="text-[26px] name text-white mb-4">
                      {items[currentIndex].title}
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="cursor-pointer mt-2"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <p className="budget text-[#37ca50] name tracking-wider text-md mb-4">
                    Fixed Budget: {items[currentIndex].budget}
                  </p>
                  <p className="description text-lg text-gray-300 mb-4 w-[80%] desc leading-10">
                    {expanded
                      ? items[currentIndex].description
                      : `${items[currentIndex].description.substring(
                          0,
                          100
                        )}...`}
                    <button
                      onClick={toggleExpanded}
                      className="text-[#DAFF99] hover:underline-offset-8 hover:underline ml-2 focus:outline-none name"
                    >
                      {expanded ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  <div className="skills flex gap-3 mb-4">
                    {items[currentIndex].skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-white text-sm desc tracking-wide bg-[#DAFF99] bg-opacity-20 rounded-lg text-center px-5 py-3"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="remaining flex flex-col w-full gap-4">
                    <div className="flex items-center">
                      <div className="flex gap-4">
                        <img
                          src="../images/userImg.svg"
                          alt="userImage"
                          className="w-5"
                        />
                        <span className="text-[17px] text-[#DAFF99] desc">
                          {items[currentIndex].user.name}
                        </span>
                      </div>
                      <img
                        src="../images/line.svg"
                        alt="divider"
                        className="w-8"
                      />
                      <span className="text-[16px] text-white desc">
                        {items[currentIndex].user.country}
                      </span>
                      <img
                        src="../images/line.svg"
                        alt="divider"
                        className="w-8"
                      />
                      {items[currentIndex].user.verified && (
                        <span className="text-[#9AF8AA] desc flex gap-4">
                          Payment Verified{" "}
                          <img src="../images/verified.svg" alt="verified" />
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="ml-auto text-md name text-white mb-20">
                        Coins Needed: {items[currentIndex].user.coins}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border border-[#2B4B3B] rounded-lg p-8">
                  <p className="text-sm text-[#37ca50] tracking-wide desc mb-2">
                    Posted {items[currentIndex].time}
                  </p>
                  <div className="titleAndLogo flex gap-8">
                    <h2 className="text-[26px] name text-white mb-4">
                      {items[currentIndex].title}
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="cursor-pointer mt-2"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <p className="budget text-[#37ca50] name tracking-wider text-md mb-4">
                    Fixed Budget: {items[currentIndex].budget}
                  </p>
                  <p className="description text-lg text-gray-300 mb-4 w-[80%] desc leading-10">
                    {expanded
                      ? items[currentIndex].description
                      : `${items[currentIndex].description.substring(
                          0,
                          100
                        )}...`}
                    <button
                      onClick={toggleExpanded}
                      className="text-[#DAFF99] hover:underline-offset-8 hover:underline ml-2 focus:outline-none name"
                    >
                      {expanded ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  <div className="skills flex gap-3 mb-4">
                    {items[currentIndex].skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-white text-sm desc tracking-wide bg-[#DAFF99] bg-opacity-20 rounded-lg text-center px-5 py-3"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="remaining flex flex-col w-full gap-4">
                    <div className="flex items-center">
                      <div className="flex gap-4">
                        <img
                          src="../images/userImg.svg"
                          alt="userImage"
                          className="w-5"
                        />
                        <span className="text-[17px] text-[#DAFF99] desc">
                          {items[currentIndex].user.name}
                        </span>
                      </div>
                      <img
                        src="../images/line.svg"
                        alt="divider"
                        className="w-8"
                      />
                      <span className="text-[16px] text-white desc">
                        {items[currentIndex].user.country}
                      </span>
                      <img
                        src="../images/line.svg"
                        alt="divider"
                        className="w-8"
                      />
                      {items[currentIndex].user.verified && (
                        <span className="text-[#9AF8AA] desc flex gap-4">
                          Payment Verified{" "}
                          <img src="../images/verified.svg" alt="verified" />
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="ml-auto text-md name text-white mb-20">
                        Coins Needed: {items[currentIndex].user.coins}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerJobs;
