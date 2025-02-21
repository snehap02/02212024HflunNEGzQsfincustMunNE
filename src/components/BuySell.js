import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const BuySell = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(true);
  const navigate = useNavigate();

  // Toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Switch to Register modal
  const switchToRegister = () => {
    setIsLoginModal(false);
  };

  // Switch to Login modal
  const switchToLogin = () => {
    setIsLoginModal(true);
  };

  // Handle button click
  const handleButtonClick = () => {
    const user = Cookies.get("authToken"); // Check if user is logged in via cookie
    if (user) {
      navigate("/sellerdashboard"); // Redirect to seller dashboard if logged in
    } else {
      handleModalToggle(); // Open modal if not logged in
    }
  };

  return (
    <div>
      {/* Button to switch to Sell */}
      <button
        onClick={handleButtonClick}
        className="navText border rounded-full px-5 hover:text-black hover:bg-buttonHover border-buySellBorder hover:transition-all hover:duration-500 hover:delay-75 ease-in-out hidden lg:flex"
      >
        Switch to Sell
      </button>

      {/* Modal for Login/Register */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
            onClick={handleModalToggle} // Close modal when clicking outside
          ></div>

          {/* Modal Content */}
          <div className="relative z-50 bg-[#142e03] p-6 rounded-lg shadow-lg w-full max-w-md">
            {isLoginModal ? (
              <Login switchToRegister={switchToRegister} /> // Show Login component
            ) : (
              <Register switchToLogin={switchToLogin} /> // Show Register component
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuySell;
