import React, { useState } from "react";
import { projectDetails } from "../SellerDashboard/MockCardData";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BuyersProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(true);
  const navigate = useNavigate();

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const switchToRegister = () => {
    setIsLoginModal(false);
  };

  const switchToLogin = () => {
    setIsLoginModal(true);
  };

  // Function to handle card click
  const handleCardClick = () => {
    const user = Cookies.get("authToken"); // Fetch user from Cookie
    if (!user) {
      // If user is not logged in, show alert and redirect to login
      handleModalToggle();
    } else {
      // Proceed with the action (e.g., open card details)
      navigate("/maintainance");
      console.log("Access granted! Proceed to card details.");
    }
  };

  return (
    <div className="min-h-screen text-white bg-webBg flex flex-col items-center px-4 md:px-8 lg:px-16 2xl:px-20 pb-20">
      <div className="pt-10 w-full relative">
        <img
          src="../images/banner.svg"
          alt="banner"
          className="object-cover w-full h-[200px] sm:h-[300px] lg:h-[400px] rounded-lg mt-10"
        />
        <div className="flex flex-col mt-10 gap-8 w-full">
          {/* Project Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {projectDetails.map((item, index) => (
              <Link to="/gig"
                key={index}
                className="bg-[#004321] rounded-lg p-4 flex flex-col h-auto cursor-pointer hover:scale-105 transition-all"
                // onClick={handleCardClick} // Handle card click
              >
                {/* Project Image */}
                <img
                  src={item.img}
                  alt="project"
                  className="object-cover w-full h-48 rounded-t-lg"
                />
                {/* Other Details */}
                <div className="flex flex-col mt-4">
                  {/* Title */}
                  <h1 className="text-base sm:text-lg font-semibold leading-6 h-[60px]">
                    {item.title}
                  </h1>
                  {/* Name and Level */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.person}
                        alt="person"
                        className="w-8 h-8 rounded-full"
                      />
                      <h2 className="text-sm sm:text-base">{item.name}</h2>
                    </div>
                    <h2 className="text-sm sm:text-base text-[#DAFF99]">
                      {item.level}
                    </h2>
                  </div>
                  {/* Delivery Time and Price */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.delivery}
                        alt="delivery"
                        className="w-5 h-5"
                      />
                      <h2 className="text-sm sm:text-base">
                        {item.deliveryTime}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm sm:text-base">Starting From</h2>
                      <p className="text-lg sm:text-xl font-bold">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[1000]">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
            onClick={handleModalToggle} // Close modal when clicking outside
          ></div>
          <div className="relative z-50 bg-[#142e03] p-6 rounded-lg shadow-lg w-full max-w-md">
            {isLoginModal ? (
              <Login switchToRegister={switchToRegister} /> // Pass the switch function as a prop
            ) : (
              <Register switchToLogin={switchToLogin} /> // Pass the switch function as a prop
            )}
          </div>
        </div>
      )} 

     
    </div>
  );
};

export default BuyersProjects;
