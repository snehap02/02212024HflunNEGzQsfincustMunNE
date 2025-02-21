import React, { useState } from "react";

const IndividualOrder = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitDropdownOpen, setIsSubmitDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSubmitDropdown = () => {
    setIsSubmitDropdownOpen(!isSubmitDropdownOpen);
  };

  return (
    <div className="w-full min-h-[100vh] bg-webBg">
      <div className="xl:px-48 grid grid-cols-5 gap-20 pt-28 h-full">
        <div className="details-section flex flex-col justify-between col-span-3">
          <div className="flex flex-col gap-10">
            <div className="name bg-[#012619] w-full py-4 px-5 rounded-lg shadow-lg">
              <h1 className="text-white text-[20px] desc tracking-wider">
                <span className="name">Debarun Purkayastha </span>started this
                order
              </h1>
            </div>
            <div className="order-details bg-[#012619] px-5 py-4 rounded-lg shadow-lg">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <h2 className="text-white text-[20px] name">Order Details</h2>
                <span className="text-white text-lg">
                  {isDropdownOpen ? (
                    <img src="../images/upArrow.svg" alt="downdropdown" />
                  ) : (
                    <img src="../images/downArrow.svg" alt="downdropdown" />
                  )}
                </span>
              </div>
              {isDropdownOpen && (
                <div className="mt-10 flex flex-col">
                  <div className="border border-[#5E8664]  rounded-lg">
                    <div className="flex justify-between bg-[#21872F] text-white name tracking-wider p-5 text-center rounded-tl-md rounded-tr-md">
                      <div className="w-1/4 font-semibold">PROJECT</div>
                      <div className="w-1/4 font-semibold">QUANTITY</div>
                      <div className="w-1/4 font-semibold">DELIVERY TIME</div>
                      <div className="w-1/4 font-semibold">PRICE</div>
                    </div>
                    <div className="flex justify-between text-white text-center px-5 py-5 desc text-[16px] pb-5">
                      <div className="w-1/4">Whiteboard</div>
                      <div className="w-1/4">1</div>
                      <div className="w-1/4">2 Days</div>
                      <div className="w-1/4">$20</div>
                    </div>
                  </div>
                  <div>
                    <p className="mt-4 text-white cursor-pointer desc text-[17px] tracking-wider">
                      <span className="text-[#39AE4D] hover:underline hover:underline-offset-8 hover:underline-[#DAFF99] name cursor-pointer">
                        Click Here
                      </span>{" "}
                      to download invoice
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full h-[1px] bg-[#6B8F71] bg-opacity-40"></div>
            <div className="requirements-submitted bg-[#012619] px-5 py-4 rounded-lg shadow-lg">
              <div
                className="flex flex-start justify-between cursor-pointer"
                onClick={toggleSubmitDropdown}
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-white text-[20px] name">
                    Requirements Submitted
                  </h2>
                  <h2 className="text-[16px] text-[#359846] name">
                    Uploaded Files & Attachments
                  </h2>
                </div>
                <span className="text-white text-lg mt-2">
                  {isSubmitDropdownOpen ? (
                    <img src="../images/upArrow.svg" alt="downdropdown" />
                  ) : (
                    <img src="../images/downArrow.svg" alt="downdropdown" />
                  )}
                </span>
              </div>
              {isSubmitDropdownOpen && (
                <div className="mt-10 flex flex-col gap-6">
                  {/* the content inside this div will change according to the files uploaded during uploading gig requirements */}
                  <div className="files flex flex-col gap-5">
                    <div className="flex gap-4">
                      <img src="../images/img.svg" alt="img" />
                      <h2 className="desc text-white">image1.jpg</h2>
                    </div>
                    <div className="flex gap-4">
                      <img
                        src="../images/pdf.svg"
                        alt="img"
                        className="-ml-1"
                      />
                      <h2 className="desc text-white">freelance.pdf</h2>
                    </div>
                  </div>
                  <div className="qna flex flex-col gap-4 mb-5">
                    <h1 className="text-[#359846] bigText">Q & A</h1>
                    <div className="flex flex-col">
                      <p className="italic desc text-white tracking-wider">
                        1. Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry ?
                      </p>
                      <p className="ml-4 mt-2 text-white desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full h-[1px] bg-[#6B8F71] bg-opacity-40"></div>
          </div>
          <div className="addons mb-20 shadow-lg">
            <div className="name bg-[#012619] w-full py-8 px-5 rounded-lg flex justify-between">
              <h1 className="text-white text-[20px] name">Offer Add-ons</h1>
              <button>
                <img src="../images/addCircle.svg" alt="add" />
              </button>
            </div>
          </div>
        </div>
        <div className="profile-section col-span-2 flex flex-col justify-between">
          <div className="border border-[#6B8F71] rounded-lg bg-[#012119] flex flex-col gap-6 p-7">
            <div className="profile flex justify-evenly items-center">
              <img
                src="../images/DP.svg"
                alt="profile-photo"
                className="w-36 flex-start"
              />
              <div className="details flex flex-col gap-3">
                <div className="name flex gap-2">
                  <h1 className="text-xl 450:text-2xl name text-limeGreen">
                    Kunal Purkayastha
                  </h1>
                  <img src="../images/verified.svg" alt="" className="w-6" />
                </div>
                <div className="location flex gap-4">
                  <img src="../images/location.svg" alt="" className="w-8" />
                  <h1 className="text-white name text-[22px]">India</h1>
                  <img src="../images/india.svg" alt="" className="w-8" />
                </div>
              </div>
            </div>
            <div className="amount flex gap-10">
              <div className="available-balance bg-forestGreen border border-limeGreen rounded-lg w-full h-[130px] mt-5 450:px-6 px-3 flex flex-col py-2 justify-center items-center">
                <div className="flex justify-between items-center flex-col gap-4">
                  <h2 className="name text-lg text-lightChartreuse tracking-wide">
                    Project Budget
                  </h2>
                  <h2 className="bigText text-xl sm:text-[26px] text-white">
                    $2500
                  </h2>
                </div>
              </div>
              <div className="available-balance bg-forestGreen border border-limeGreen rounded-lg w-full h-[130px] mt-5 450:px-6 px-3 flex flex-col py-2 justify-center items-center">
                <div className="flex justify-between items-center flex-col gap-4">
                  <h2 className="name text-lg text-lightChartreuse tracking-wide">
                    Order ID
                  </h2>
                  <h2 className="bigText text-xl sm:text-[26px] text-white">
                    4
                  </h2>
                </div>
              </div>
            </div>
            <div className="deadline">
              <div className="available-balance bg-forestGreen border border-limeGreen rounded-lg w-full h-[130px] mt-5 450:px-6 px-3 flex flex-col py-2 justify-center items-center">
                <div className="flex justify-between items-center flex-col gap-4">
                  <h2 className="name text-lg text-lightChartreuse tracking-wide">
                    Deadline
                  </h2>
                  <h2 className="bigText text-xl sm:text-[26px] text-white">
                    08:40:10
                  </h2>
                </div>
              </div>
            </div>
            <div className="submitButton flex justify-center items-center">
              <button className="ring-2 ring-green-800 hover:bg-[#013f0b] text-white font-bold py-4 px-10 rounded-lg text-[17px] bg-[#026310]">
                Submit Work
              </button>
            </div>
          </div>
          <div className="mb-20">
            <div className="w-full">
              <button className="w-full mt-3 px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px] name flex justify-center items-center gap-3 text-[#CDFFF3]">
                Chat With Buyer
              </button>
            </div>
            <div className="w-full">
              <button className="w-full mt-3 px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px] name flex justify-center items-center gap-3 text-[#CDFFF3]">
                Resolution Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualOrder;
