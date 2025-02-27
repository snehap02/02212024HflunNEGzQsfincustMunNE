import React, { useState } from "react";
import { Link } from "react-router-dom";
import { finalImg } from "../SellerDashboard/MockCardData";
// import GigPlans from "../../components/GigPlans";

const Content = () => {
  const [selectedImage, setSelectedImage] = useState(
    `${process.env.PUBLIC_URL}/images/GigOV1.svg`
  ); // Default image

  return (
    <div>
      <div className="content pt-28 whole-container px-5 2xl:px-[20rem] 2xl:-ml-72 left-0 h-[96vh] overflow-y-scroll scrollbarNew flex flex-col gap-8">
        <div className="home flex items-center gap-3">
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/home.svg`} alt="home" />
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/nextArrow.svg`}
            alt="nextarrow"
          />
          <h1 className="text-[15px] text-white desc hover:name cursor-pointer">
            Category
          </h1>
          <img
            src={`${process.env.PUBLIC_URL}/images/nextArrow.svg`}
            alt="nextarrow"
          />
          <h1 className="text-[15px] text-white desc hover:name cursor-pointer">
            Subcategory
          </h1>
        </div>
        <div className="title">
          <h1 className="text-[36px] text-white bigText">Gig Overview</h1>
        </div>
        <div className="section1 image-part flex lg:flex-row flex-col justify-center items-center gap-3">
          {/* Main big image */}
          <div className="big-img w-full">
            <img
              src={selectedImage} // Display the currently selected image
              alt="project-image"
              className="w-full h-full object-cover" // Ensure full width and height
            />
          </div>

          {/* Scrollable thumbnails */}
          <div className="slide-img lg:w-36 w-full lg:max-h-[490px] max-h-[100px] bg-[#00341B] lg:overflow-y-scroll overflow-x-scroll overflow-y-hidden scrollbarFinal flex lg:flex-col gap-3">
            {finalImg.map((final, index) => (
              <div
                key={index}
                className="w-full h-[150px] lg:h-[150px]  cursor-pointer"
                onClick={() => setSelectedImage(final.img)} // Update the main image on click
              >
                <img
                  src={`${process.env.PUBLIC_URL}${final.img}`}
                  alt={`img-${index}`}
                  className="max-w-[150px] h-full object-cover hover:scale-105 transition-transform" // Full size and responsive
                />
              </div>
            ))}
          </div>
        </div>
        <div className="titleAndDescription mt-4 flex flex-col gap-7">
          <h1 className="title name tracking-wide lg:text-[28px] text-[20px] text-white">
            I will build a professional and responsive squarespace website
          </h1>
          <div className="description">
            <h2 className="text-[20px] name text-white underline underline-offset-8">
              Description
            </h2>
            <p className="w-[900px] mt-10 text-white desc text-[16px] leading-7 text-justify">
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
        {/* <GigPlans/> */}
        {/* <div className="plans"></div> */}
        <div className="fileFormat flex flex-col gap-2">
          <h2 className="text-[20px] name text-white underline underline-offset-8">
            File Format
          </h2>
          <p className="text-white text-[16px] mt-4">MP4, MOV, AVI</p>
        </div>
        <div className="typeOfService flex flex-col gap-2">
          <h2 className="text-[20px] name text-white underline underline-offset-8">
            Type Of Services
          </h2>
          <div className="video">
            <img src={`${process.env.PUBLIC_URL}/images/video.png`} alt="video"  className="w-96 mt-6"/>
          </div>
        </div>
        <div className="projectWorkflow flex flex-col gap-2">
          <h2 className="text-[20px] name text-white underline underline-offset-8">
            Project Workflow / Steps
          </h2>
          <ul className="text-white mt-4">
            <li className="list-disc ml-4 desc">
              Lorem ipsum odor amet, consectetuer adipiscing elit.
            </li>
            <li className="list-disc ml-4 desc mt-2">
              Libero habitasse bibendum tristique ad nisi molestie cubilia
              ultricies
            </li>
            <li className="list-disc ml-4 desc mt-2">
              Class libero natoque porttitor dictum leo libero donec et
              praesent. 
            </li>
            <li className="list-disc ml-4 desc mt-2">
              Pulvinar dictum massa eget turpis maecenas aenean facilisis.{" "}
            </li>
            <li className="list-disc ml-4 desc mt-2">
              Urna nostra fringilla praesent lacus nascetur vitae ligula. 
            </li>
            <li className="list-disc ml-4 desc mt-2">
              Tempor aenean pretium lobortis lectus efficitur. 
            </li>
            <li className="list-disc ml-4 desc mt-2">
              Velit neque etiam ut lacinia placerat.
            </li>
            <li className="list-disc ml-4 desc mt-2">
              Quis ipsum natoque fringilla cubilia auctor aenean nec eros. 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
