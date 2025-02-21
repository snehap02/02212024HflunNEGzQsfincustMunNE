import React from "react";

const SellerJobDetails = () => {
  return (
    <div className="w-full h-[65vh] border border-[#6B8F71] border-opacity-30 mt-8 rounded-lg mb-20 px-10 py-6 flex flex-col gap-10">
      <h1 className="title text-[26px] name text-white">
        Process Explainer Video
      </h1>

      <div className="timeAndLocation flex items-center gap-10 -mt-6">
        <p className="text-sm text-[#37ca50] tracking-wide desc">
          Posted 1 hour ago
        </p>
        <div className="location flex items-center gap-2">
          <img src="../images/location.svg" alt="location" />
          <h1 className="text-[14px] text-white desc ">India</h1>
          <img src="../images/india.svg" alt="flag" />
        </div>
      </div>

      <div className="description flex flex-col gap-2">
        <h1 className="text-[18px] text-white name">Description</h1>
        <p className="text-[15px] text-gray-300 desc tracking-wider leading-8 w-[80%]">
          Create a clean, modern logo for a tech startup. The logo should
          reflect the brand's identity and be easily recognizable. It will be
          used on websites, social media, and promotional materials.
        </p>
      </div>

      <div className="skills flex flex-col gap-4">
        <h1 className="text-[18px] text-white name">Skills</h1>
        <div>
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
      </div>

      <div className="software flex flex-col gap-4">
        <h1 className="text-[18px] text-white name">Software</h1>
        <div>
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
      </div>

      <div className="budget flex gap-4 items-center">
        <h1 className="text-[18px] text-white name">Budget</h1>
        <h1 className="text-[26px] bigText text-[#DAFF99]">$20</h1>
      </div>
    </div>
  );
};

export default SellerJobDetails;
