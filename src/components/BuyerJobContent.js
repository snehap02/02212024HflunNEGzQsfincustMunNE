import React, { useState } from "react";
import { items } from "../pages/SellerDashboard/MockCardData";

const BuyerJobContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="relative">
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
            : `${items[currentIndex].description.substring(0, 100)}...`}
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
            <img src="../images/line.svg" alt="divider" className="w-8" />
            <span className="text-[16px] text-white desc">
              {items[currentIndex].user.country}
            </span>
            <img src="../images/line.svg" alt="divider" className="w-8" />
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
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#196B24] text-white py-3 px-4 rounded-full hover:transition-all hover:scale-125"
      >
        <img
          src="../images/settingsBack.svg"
          alt="back"
          className="cursor-pointer"
        />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#196B24] text-white py-3 px-4 rounded-full hover:transition-all hover:scale-125"
      >
        <img
          src="../images/settingsBack.svg"
          alt="back"
          className="cursor-pointer rotate-180"
        />
      </button>
    </div>
  );
};

export default BuyerJobContent;
