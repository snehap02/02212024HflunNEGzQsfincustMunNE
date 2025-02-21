import React from "react";

const BuyerSidebarSellerPOV = () => {
  return (
    <div>
      <div className="sidebar pt-24 w-[29rem] bg-[#002915] px-8 flex flex-col gap-8 h-full">
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
            <div className="flex gap-3">
              <h1 className="text-lg name text-blueGreen">
                Local Time : 7 Nov 2024, 9:00
              </h1>
            </div>
          </div>
        </div>
        <div className="description flex flex-col gap-4">
            <h1 className="text-[17px] text-white name">Description</h1>
    

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
          </div>
        </div>
        <div className="industry mt-3 flex flex-col gap-4">
        
            <h1 className="text-[17px] text-white name">Preferred Industry</h1>
      
        </div>
        <div className="chatButton mt-3 w-full  cursor-pointer">
          <button className="flex gap-4 bg-[#106D20] p-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-all w-full items-center justify-center">
            <h1 className="text-[17px] text-white name">Chat</h1>
            <img src="../images/chatRound.svg" alt="chat" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyerSidebarSellerPOV;
