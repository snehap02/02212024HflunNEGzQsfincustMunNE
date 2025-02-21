import React, { useState } from "react";
import { finalImg } from "../SellerDashboard/MockCardData";
import GigPlans from "../../components/GigPlans";
import { Link } from "react-router-dom";

const Finalize = () => {
  const [selectedImage, setSelectedImage] = useState("../images/GigOV1.svg"); // Default image

  return (
    <div className="flex flex-col justify-center items-center w-full sm:px-10 md:px-20 2xl:px-72">
      <div className="w-full h-[75vh] mt-10 overflow-x-auto scrollbar flex flex-col p-5 xl:px-16 gap-10 lg:gap-14">
        <div className="section1 image-part flex lg:flex-row flex-col justify-center items-center gap-3">
          {/* Main big image */}
          <div className="big-img w-full lg:w-[75%] h-[250px] lg:h-[450px]">
            <img
              src={selectedImage} // Display the currently selected image
              alt="project-image"
              className="w-full h-full object-cover" // Ensure full width and height
            />
          </div>

          {/* Scrollable thumbnails */}
          <div className="slide-img lg:w-36 w-full lg:max-h-[450px] max-h-[100px] bg-[#00341B] lg:overflow-y-scroll overflow-x-scroll overflow-y-hidden scrollbarFinal flex lg:flex-col gap-3">
            {finalImg.map((final, index) => (
              <div
                key={index}
                className="w-full h-[150px] lg:h-[150px]  cursor-pointer"
                onClick={() => setSelectedImage(final.img)} // Update the main image on click
              >
                <img
                  src={final.img}
                  alt={`img-${index}`}
                  className="max-w-[150px] h-full object-cover hover:scale-105 transition-transform" // Full size and responsive
                />
              </div>
            ))}
          </div>
        </div>

        <div className="section2 flex flex-col lg:px-6 xl:px-10 2xl:px-16">
          <h1 className="bigText lg:text-[32px] text-[20px]">
            I will build a professional and responsive squarespace website
          </h1>
          <div className="flex flex-col mt-10 gap-6">
            <h2 className="text-[20px] lg:text-[22px] bigText">Description</h2>
            <p className="description lg:text-[16px] text-[15px] desc text-justify leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center lg:px-6 xl:px-10 2xl:px-16">
          <GigPlans />
        </div>

        <div className="flex justify-start gap-5 lg:px-6 xl:px-10 2xl:px-16 w-full text[14px] md:text-[17px] name p-4 md:p-6">
          <input type="checkbox" className="w-4 md:w-6 h-4 md:h-6" />
          <div className="flex flex-col gap-2">
            <p>
              I understand and agree to the Fincust Terms of Services including
              User Agreement & Privacy Policy.
            </p>
            <p>
              By Submitting my gig, I declare that I either own or have rights
              to the content Posted.
            </p>
          </div>
        </div>

        <div className="nextButton flex justify-end gap-6 items-end w-full  lg:px-16">
          <button className="px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px]">
            <Link to="/gig">Publish Gig</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finalize;
