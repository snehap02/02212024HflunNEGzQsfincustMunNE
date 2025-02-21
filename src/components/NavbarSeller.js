import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SellBuy from "./SellBuy";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Profile from "./Profile.svg";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Notification from "./Notification";
import { notifications } from "../pages/SellerDashboard/MockCardData";

const NavbarSeller = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(true); // State to toggle between Login and Register modals
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const navigate = useNavigate(); // Use the navigate hook from react-router-dom

  const profileDropdownRef = useRef(null); // Create a ref for the dropdown
  const bussinessDropdownRef = useRef(null); // ref for bussiness dropdown
  const notificationDropdownRef = useRef(null); // ref for notification dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const switchToRegister = () => {
    setIsLoginModal(false);
  };

  const switchToLogin = () => {
    setIsLoginModal(true);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen); // Toggle the dropdown
  };

  const handleProfileOptionClick = () => {
    console.log("button is clicked");
    setIsProfileDropdownOpen(false);
  };

  const businessProfileClick = () => {
    setIsBusinessDropdownOpen(!isBusinessDropdownOpen); // Toggle the dropdown
  };

  const notificationClick = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen); // Toggle the dropdown
  };

  const handleBussinessOptionClick = () => {
    setIsBusinessDropdownOpen(false);
  };
  // const handleNotificationOptionClick = () => {
  //   setIsNotificationDropdownOpen(false);
  // };

  const handleLogout = () => {
    Cookies.remove("authToken"); // Remove the cookie (or use the correct cookie key)
    // window.location.reload(); // Reload the page after logging out to reflect changes
    navigate("/"); // Navigate to the home page
  };

  const user = Cookies.get("authToken");

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //close the bussiness dropdown in the navbar page

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        bussinessDropdownRef.current &&
        !bussinessDropdownRef.current.contains(event.target)
      ) {
        setIsBusinessDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target)
      ) {
        setIsNotificationDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-webBg w-full fixed z-50 px-10">
      <header className="h-16 flex justify-between items-center px-5 sm:px-8">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="../images/logo.svg"
              className="hover:cursor-pointer md:w-32 w-28"
              alt="logo"
            />
          </Link>
        </div>

        {/* Message and Notification Icons */}
        <div className="flex items-center gap-4 lg:hidden">
          <img
            src="../images/message.svg"
            className="hover:cursor-pointer w-6 sm:w-7"
            alt="message"
          />
          <img
            src="../images/NotificationBell.svg"
            className="hover:cursor-pointer w-6"
            alt="notification"
          />
        </div>

        {/* Hamburger / Close Button */}
        <button
          className="text-white lg:hidden focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <img src="../images/close.svg" alt="close" className="w-6 h-6" />
          ) : (
            <img src="../images/hamburger.svg" alt="menu" className="w-6 h-6" />
          )}
        </button>

        {/* Fullscreen Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-full bg-webBg transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8 text-white">
            <h2 className="navText tracking-wider">Jobs</h2>
            <div className="navText tracking-wider" onClick={toggleMenu}>
              Business
            </div>
            <SellBuy /> {/* Existing Switch Button */}
            {!user ? (
              <button className="bg-buttonHover rounded-full bigText md:text-[16px] text-[14px] px-4 text-webBg transition-all hover:scale-105">
                Login | Register
              </button>
            ) : (
              <div className="relative" ref={profileDropdownRef}>
                <img
                  src={Profile}
                  alt="profile"
                  className="hover:cursor-pointer w-6 sm:w-7"
                  onClick={handleProfileClick}
                />
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md">
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-200"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </nav>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex flex-row items-center lg:gap-10 gap-3 sm:gap-5 text-navText font-medium text-sm leading-10">
        <Link to="/messages"><img
            src="../images/message.svg"
            className="hover:cursor-pointer w-6 sm:w-7"
            alt="message"
          /></Link>
          
          <button
            className="navText tracking-wider"
            onClick={handleBussinessOptionClick}
          >
            <Link to="/sellerjob">Jobs</Link>
          </button>
          <div>
            <button
              className="navText tracking-wider"
              onClick={businessProfileClick}
              ref={bussinessDropdownRef}
            >
              Business
              {isBusinessDropdownOpen && (
                <div className="absolute right-56 mt-3 w-[14rem] bg-webBg name border border-[#DAFF99] shadow-lg rounded-lg p-2">
                  <button
                    className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg"
                    onClick={handleBussinessOptionClick}
                  >
                    <Link to="/orders">Orders</Link>
                  </button>
                  <button
                    className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg"
                    onClick={handleBussinessOptionClick}
                  >
                    Manage Gigs
                  </button>
                  <button
                    className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg"
                    onClick={handleBussinessOptionClick}
                  >
                    <Link to="/growth">Growth</Link>
                  </button>
                  <button
                    className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg"
                    onClick={handleBussinessOptionClick}
                  >
                    <Link to="/totalearning">Total Earnings</Link>
                  </button>
                  <button
                    className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg"
                    onClick={handleBussinessOptionClick}
                  >
                    <Link to="/leveloverview">Level Overview</Link>
                  </button>
                  <button
                    className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg"
                    onClick={handleBussinessOptionClick}
                  >
                    <Link to="/withdrawal">Withdrawal</Link>
                  </button>
                </div>
              )}
            </button>
          </div>
          <SellBuy /> {/* Existing Switch Button */}

          {/* notification */}
          <div className="notification relative">
            <div
              className="flex items-center"
              onClick={notificationClick}
              // ref={notificationDropdownRef}
            >
              <img
                src="../images/NotificationBell.svg"
                className="hover:cursor-pointer w-6"
                alt="notification"
              />
              
            </div>
            {isNotificationDropdownOpen && <Notification notifications={notifications} />}
          </div>
          {!user ? (
            <button className="bg-buttonHover rounded-full bigText md:text-[16px] text-[14px] px-4 text-webBg transition-all hover:scale-105">
              Login | Register
            </button>
          ) : (
            <div className="relative" ref={profileDropdownRef}>
              <img
                src={Profile}
                alt="profile"
                className="hover:cursor-pointer w-6 sm:w-7"
                onClick={handleProfileClick}
              />
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-5 w-[14rem] bg-webBg name border border-[#DAFF99] shadow-lg rounded-lg p-2">
                  <Link to="/profileSeller" onClick={handleProfileOptionClick}>
                    <button className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg">
                      Profile
                    </button>
                  </Link>
                  <Link
                    to="/billingAndPayment"
                    onClick={handleProfileOptionClick}
                  >
                    <button className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg">
                      Billing & Payments
                    </button>
                  </Link>
                  <Link to="/settings" onClick={handleProfileOptionClick}>
                    <button className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg">
                      Settings
                    </button>
                  </Link>
                  <button
                    onClick={handleProfileOptionClick}
                    className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg"
                  >
                    <Link to="/referafriend">Refer a Friend</Link>
                  </button>
                  <button
                    onClick={handleProfileOptionClick}
                    className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg"
                  >
                    <Link to="/helpcenter">Help Center</Link>
                  </button>
                  <button
                    className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
            onClick={handleModalToggle} // Close modal when clicking outside
          ></div>
          <div className="relative z-50 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
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

export default NavbarSeller;
