import React, { useState, useEffect } from "react";

const SellerSidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="sidebar pt-24 w-[32rem] bg-[#002915] px-8 flex flex-col gap-8">
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
                Debarun Purkayastha
              </h1>
              <img src="../images/verified.svg" alt="verify" />
            </div>

            <h1 className="name text-[13px] 2xl:text-[16px] text-[#B2E2D6] rounded-lg w-20 text-center">
              @username
            </h1>
            <div className="flex gap-3">
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
        <div className="skills flex flex-col gap-4 mt-5">
          <div className="flex justify-between items-center">
            <h1 className="text-[18px] text-white bigText">Skills</h1>
            <button className="flex items-center gap-2">
              <img src="../images/addCircle.svg" alt="edit" />
              <h1 className="text-[#B2E2D6] desc">Add New</h1>
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#DAFF99] bg-opacity-20 rounded-lg text-center px-5 py-2">
              <h1 className="name text-[15px] text-white">Graphic design</h1>
            </div>
            <div className="bg-[#DAFF99] bg-opacity-20 rounded-lg text-center px-5 py-2">
              <h1 className="name text-[15px] text-white">SEO</h1>
            </div>
            <div className="bg-[#DAFF99] bg-opacity-20 rounded-lg text-center px-5 py-2">
              <h1 className="name text-[15px] text-white">Video Editing</h1>
            </div>
            <div className="bg-[#DAFF99] bg-opacity-20 rounded-lg text-center px-5 py-2">
              <h1 className="name text-[15px] text-white">Web Development</h1>
            </div>
            <div className="bg-[#DAFF99] bg-opacity-20 rounded-lg text-center px-5 py-2">
              <h1 className="name text-[15px] text-white">Web Design</h1>
            </div>
          </div>
        </div>
        <div className="softwareExpertise flex flex-col gap-4 mt-5">
          <div className="flex justify-between items-center">
            <h1 className="text-[18px] text-white bigText">
              Software Expertise
            </h1>
            <button className="flex items-center gap-2">
              <img src="../images/addCircle.svg" alt="edit" />
              <h1 className="text-[#B2E2D6] desc">Add New</h1>
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#DAFF99] bg-opacity-20 rounded-lg text-center px-5 py-2">
              <h1 className="name text-[15px] text-white">Photoshop</h1>
            </div>
            <div className="bg-[#DAFF99] bg-opacity-20 rounded-lg text-center px-5 py-2">
              <h1 className="name text-[15px] text-white">Figma</h1>
            </div>
            <div className="bg-[#DAFF99] bg-opacity-20 rounded-lg text-center px-5 py-2">
              <h1 className="name text-[15px] text-white">Adobe xd</h1>
            </div>
          </div>
        </div>
        <div className="video mt-4 relative mb-20">
          {/* Dark overlay and play button */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
            <button
              onClick={handlePlayClick}
              className="px-4 py-2 hover:scale-110 transition-all"
            >
              <img src="../images/play.svg" alt="play" />
            </button>
          </div>
          <video
            src="../videos/video.mp4"
            className="w-full h-auto"
            muted
            loop
          />
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-10 rounded-lg relative w-[60%] h-[60%] flex flex-col items-center">
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full"
              >
                ✕
              </button>
              {/* Video with controls */}
              <video
                src="../videos/video.mp4"
                controls
                autoPlay
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerSidebar;
