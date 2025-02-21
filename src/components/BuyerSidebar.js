import React, { useState, useEffect } from "react";

const BuyerSidebar = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // 24-hour format
      }).format(now);

      setLocalTime(formattedTime);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className="sidebar pt-24 w-[32rem] bg-[#002915] px-8 flex flex-col gap-8 h-full">
        <div className="titleAndPhoto flex justify-around items-center gap-2">
          <div>
            <img
              src="../images/DP.svg"
              alt="profile-photo"
              className="w-28 flex-start"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <h1 className="text-2xl name text-limeGreen">
                Kunal Purkayastha
              </h1>
              <img src="../images/verified.svg" alt="verify" />
            </div>

            <h1 className="name text-[13px] 2xl:text-[16px] text-[#B2E2D6] rounded-lg w-20 text-center">
              @username
            </h1>
            <div className="localtime flex gap-3">
              <h1 className="text-lg name text-blueGreen">
                Local Time: {localTime}
              </h1>
            </div>
          </div>
        </div>
        <div className="description flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-[17px] text-white name">Description</h1>
            <button className="flex items-center gap-3">
              <img src="../images/editYellow.svg" alt="edit" className="w-4" />
              <h1 className="text-[#B2E2D6] desc">Edit Description</h1>
            </button>
          </div>

          <h1 className="text-lg text-[#c1f1e5] desc text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </h1>
        </div>
        <div className="langAndLocation flex flex-col gap-4">
          <div className="flex gap-3">
            <img src="../images/location.svg" alt="location" />
            <h1 className="text-[18px] name text-white">India</h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <img
                src="../images/language.svg"
                alt="language"
                className="ml-1"
              />
              <h1 className="text-[18px] name text-white">English, Hindi</h1>
            </div>
            <button className="flex gap-2">
              <img src="../images/addCircle.svg" alt="add" />
              <h1 className="text-[#B2E2D6] desc">Add New</h1>
            </button>
          </div>
        </div>
        <div className="industry mt-3 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-[17px] text-white name">Preferred Industry</h1>
            <button className="flex items-center gap-3">
              <img src="../images/editYellow.svg" alt="edit" className="w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerSidebar;
