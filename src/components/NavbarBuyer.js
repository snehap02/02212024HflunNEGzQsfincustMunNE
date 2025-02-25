import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import BuySell from "./BuySell";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import profile from "./Profile.svg";
import Cookies from "js-cookie";
import SellBuy from "./SellBuy";
import Notification from "./Notification";
import { notifications } from "../pages/SellerDashboard/MockCardData";

const NavbarBuyer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null); // Ref for dropdown
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);

  const [selectedOption, setSelectedOption] = useState("projects"); // Default to 'projects'

  const navigate = useNavigate();
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Synchronize the selected option with the current path
  useEffect(() => {
    if (location.pathname === "/buyersfreelancers") {
      setSelectedOption("Freelancers");
    } else if (location.pathname === "/") {
      setSelectedOption("Projects");
    }
  }, [location.pathname]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    // Navigate to the corresponding page
    if (option === "Projects") {
      navigate("/"); // Navigate to Projects page
    } else if (option === "Freelancers") {
      navigate("/buyersfreelancers"); // Navigate to Freelancers page
    }

    setDropdownOpen(false); // Close the dropdown
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const notificationClick = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen); // Toggle the dropdown
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    Cookies.remove("authToken");
    navigate("/");
  };
  const notificationDropdownRef = useRef(null); // ref for notification dropdown

  // Handle button click
  const handleButtonClick = () => {
    const user = Cookies.get("authToken"); // Check if user is logged in via cookie
    if (user) {
      localStorage.setItem("mode", "SELLER");
      navigate("/"); // Redirect to seller dashboard if logged in
      window.location.reload();
    } else {
      handleModalToggle(); // Open modal if not logged in
    }
  };

  const isLoggedIn = Cookies.get("authToken");

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false); // Close dropdown
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
        <div className="logo">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.svg`}
              className="hover:cursor-pointer md:w-32 w-28"
              alt="logo"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden relative 1424:flex items-center w-full max-w-[60rem] bg-transparent rounded-full border border-[#6B8F71] border-opacity-65 name">
          {/* Custom Dropdown */}
          <div
            className="relative cursor-pointer flex items-center px-4 py-2 bg-transparent rounded-l-full text-white"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedOption}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-4 h-4 ml-2 transform transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>

            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-[#062d22] border border-[#9ccc65] rounded-md shadow-lg z-10 mt-2">
                <div
                  className="px-4 py-2 text-white hover:bg-[#9ccc65] hover:text-[#062d22] cursor-pointer"
                  onClick={() => handleOptionClick("Projects")}
                >
                  Projects
                </div>
                <div
                  className="px-4 py-2 text-white hover:bg-[#9ccc65] hover:text-[#062d22] cursor-pointer"
                  onClick={() => handleOptionClick("Freelancers")}
                >
                  Freelancers
                </div>
              </div>
            )}
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="What are you looking for..."
            className="flex-grow bg-transparent text-white placeholder-gray-400 px-4 py-2 focus:outline-none"
          />

          {/* Search Button */}
          <button className="flex items-center justify-center h-10 w-10 m-1 hover:scale-105 transition-transform">
            <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="search" />
          </button>
        </div>

        {/* Hamburger Menu */}
        <button
          className="block 1424:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <img src="../images/hamburger.svg" alt="hamburger" />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden 1424:flex items-center gap-8 text-navText font-medium text-sm leading-10">
          <img
            src={`${process.env.PUBLIC_URL}/images/message.svg`}
            className="hover:cursor-pointer w-6 sm:w-7"
            alt="message"
          />

          <button className="navText tracking-wider">
            <button>Jobs</button>
          </button>
          <div>Orders</div>
          {/* <BuySell /> */}
          <button
            onClick={handleButtonClick}
            className="navText border rounded-full px-5 hover:text-black hover:bg-buttonHover border-buySellBorder hover:transition-all hover:duration-500 hover:delay-75 ease-in-out hidden lg:flex"
          >
            Switch to Sell
          </button>
          {/* <SellBuy /> */}
          {/* notification */}
          <div className="notification relative">
            <div
              className="flex items-center"
              onClick={notificationClick}
              // ref={notificationDropdownRef}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/NotificationBell.svg`}
                className="hover:cursor-pointer w-6"
                alt="notification"
              />
            </div>
            {isNotificationDropdownOpen && (
              <Notification notifications={notifications} />
            )}
          </div>
          {!isLoggedIn ? (
            <button
              className="bg-buttonHover rounded-full bigText md:text-[16px] text-[14px] px-4 text-webBg transition-all hover:scale-105"
              onClick={handleModalToggle}
            >
              Login | Register
            </button>
          ) : (
            <div className="relative" ref={profileDropdownRef}>
              <img
                src={profile}
                alt="profile"
                className="hover:cursor-pointer w-6 sm:w-7"
                onClick={handleProfileClick}
              />
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-5 w-[14rem] bg-webBg name border border-[#DAFF99] shadow-lg rounded-lg p-2">
                  <Link to="/profileBuyer" onClick={handleProfileClick}>
                    <button className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg">
                      Profile
                    </button>
                  </Link>
                  <Link to="/billingAndPayment" onClick={handleProfileClick}>
                    <button className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg">
                      Billing & Payments
                    </button>
                  </Link>
                  <Link to="/settings" onClick={handleProfileClick}>
                    <button className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg">
                      Settings
                    </button>
                  </Link>
                  <button
                    onClick={handleProfileClick}
                    className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg"
                  >
                    <Link to="/referafriend">Refer a Friend</Link>
                  </button>
                  <button
                    onClick={handleProfileClick}
                    className="w-full text-left text-[14px] desc tracking-wider px-2 py-1 hover:bg-green-900 rounded-lg"
                  >
                    <Link to="/helpcenter">Help Center</Link>
                  </button>
                  <button
                    className="w-full text-left text-[14px] desc tracking-wider px-2 py-2 hover:bg-green-900 rounded-lg"
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
            onClick={handleModalToggle}
          ></div>
          <div className="relative z-50 bg-[#142e03] p-6 rounded-lg shadow-lg w-full max-w-md">
            {isLoginModal ? (
              <Login switchToRegister={switchToRegister} />
            ) : (
              <Register switchToLogin={switchToLogin} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarBuyer;
