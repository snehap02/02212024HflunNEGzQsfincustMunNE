import React, { useState, useEffect } from "react";
import TabContent from "./TabContent";
import GigGallery from "./GigGallery";
import NavbarSeller from "../../components/NavbarSeller";
import { Link } from "react-router-dom";

const SellerDashboard = () => {
  // State for managing description and edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");

  // Load saved description from localStorage on component mount
  useEffect(() => {
    const savedDescription = localStorage.getItem("sellerDescription");
    if (savedDescription) {
      setDescription(savedDescription);
    } else {
      setDescription("Lorem Ipsum is simply dummy text of the printing.");
    }
  }, []);

  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Function to handle save button click (tick button)
  const handleSaveClick = () => {
    setIsEditing(false);
    localStorage.setItem("sellerDescription", description); // Save to localStorage
  };

  return (
    <div className="bg-webBg w-full min-h-[100vh] relative">
      <NavbarSeller />
      <div className="flex flex-col gap-4 2xl:flex-row-reverse 2xl:px-20 px-5 sm:px-8 pt-16 pb-20">
        <div className="first-two-container w-full bg-darkGreen flex flex-col py-4 px-5 mt-2 rounded-lg 2xl:w-[30%]">
          <div className="flex flex-col">
            <div className="flex flex-col sm:-mt-4">
              <div className="flex sm:flex-row flex-col gap-4">
                <img
                  src="../images/DP.svg"
                  alt="profile-photo"
                  className="w-24 flex-start mt-10"
                />
                <div className="flex flex-col w-full gap-1 sm:mt-10">
                  <div className="flex flex-row gap-2">
                    <h1 className="text-xl 450:text-2xl name text-limeGreen">
                      Kunal Purkayastha
                    </h1>
                    <img src="../images/verified.svg" alt="" className="w-6" />
                  </div>
                  <div className="flex flex-row gap-2">
                    <h1 className="text-lg name text-blueGreen">@username</h1>
                    <div className="flex gap-2">
                      <img src="../images/star.svg" alt="" className="w-4" />
                      <h1 className="text-lg name text-blueGreen">( 4.8 )</h1>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <h1 className="text-md desc text-blueGreen w-48">
                      {isEditing ? (
                        <input
                          type="text"
                          className="bg-transparent border-b-2 border-blueGreen outline-none"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          autoFocus
                        />
                      ) : (
                        description
                      )}
                    </h1>
                    <button
                      onClick={isEditing ? handleSaveClick : handleEditClick} className="h-full flex flex-start mt-1 ml-2"
                    >
                      {isEditing ? (
                        <img
                          src="../images/tick.svg"
                          alt="save"
                          className="w-5 ml-3"
                        />
                      ) : (
                        <img
                          src="../images/editPen.svg"
                          alt="edit"
                          className="w-5 ml-3"
                        />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="sm:mt-10 lg:-mt-1">
                <div className="active-orders bg-forestGreen border border-limeGreen rounded-lg w-full h-[70px] mt-8 sm:mt-0 lg:mt-8 flex justify-between items-center 450:px-6 px-2">
                  <h2 className="name text-lg text-lightChartreuse tracking-wide">
                    Active Orders (3) ----
                  </h2>
                  <h2 className="bigText text-xl sm:text-2xl text-white">
                    $271.2
                  </h2>
                </div>
                <div className="available-balance bg-forestGreen border border-limeGreen rounded-lg w-full h-[130px] mt-5 450:px-6 px-3 flex flex-col py-2">
                  <div className="flex justify-between items-center">
                    <h2 className="name text-lg text-lightChartreuse tracking-wide">
                      Available Balance
                    </h2>
                    <h2 className="bigText text-xl sm:text-2xl text-white">
                      $2500
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <Link to="/withdrawal">
                      <button className="border border-sageGreen rounded-lg mt-4 bg-pineGreen text-navText name text-[17px] tracking-wider px-10 py-3 hover:cursor-pointer hover:bg-buttonHover hover:text-black hover:border-buySellBorder hover:transition-all hover:duration-500 hover:delay-75 ease-in-out">
                        Withdraw
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row gap-3 w-full">
                <div className="active-orders bg-forestGreen border border-limeGreen rounded-lg w-full h-[130px] mt-5 px-3 flex flex-col justify-center items-center py-2">
                  <h2 className="name text-lg text-lightChartreuse tracking-wide text-center">
                    Total earnings in May
                  </h2>
                  <h2 className="bigText text-xl sm:text-2xl text-white text-center mt-2">
                    $2500
                  </h2>
                </div>
                <div className="available-balance bg-forestGreen border border-limeGreen rounded-lg w-full h-[130px] mt-5 px-3 flex flex-col justify-center items-center py-2">
                  <div className="flex flex-col justify-between items-center">
                    <h2 className="name text-lg text-lightChartreuse tracking-wide text-center">
                      Payments to be cleared
                    </h2>
                    <h2 className="bigText text-xl sm:text-2xl text-white mt-2">
                      $2500
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Link to="/growth">
                  <button className="border border-sageGreen rounded-lg mt-4 bg-pineGreen text-navText name text-[17px] tracking-wider px-5 py-3 hover:cursor-pointer hover:bg-buttonHover hover:text-black hover:border-buySellBorder hover:transition-all hover:duration-500 hover:delay-75 ease-in-out">
                    View Analytics
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center bg-forestGreen border border-limeGreen rounded-lg w-full mt-5 h-[155px]">
            <Link to="/messages" className="flex flex-row justify-between items-center px-5 h-[73px] w-full md:px-10 lg:px-5">
              <h2 className="text-white text-md tracking-wide md:text-lg name">
                <span className="unreadMessages text-[26px] text-white name">2 &nbsp;</span>
                Unread Messages
              </h2>
              <img src="../images/messageWhite.svg" alt="" />
            </Link>
            <div className="w-full h-[1px] bg-limeGreen"></div>
            <Link to="/orders" className="flex flex-row justify-between items-center px-5 h-[73px] w-full md:px-10 lg:px-5">
              <h2 className="text-white text-md tracking-wide md:text-lg name">
                <span className="text-[26px] text-white name">3 &nbsp;</span>
                Upcoming Delivery
              </h2>
              <img src="../images/delivery.svg" alt="" />
            </Link>
          </div>
        </div>

        {/* second container */}
        <div className="second-container flex flex-col w-full bg-webBg">
          <GigGallery />
          <TabContent />
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
