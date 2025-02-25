import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { cards } from "../SellerDashboard/MockCardData";

const BuyersFreelancers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(true);
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    sellerLevel: "",
    price: "",
    country: "",
    skills: "",
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const filteredCards = cards.filter((card) => {
    const { sellerLevel, price, country, skills } = filters;

    return (
      (!sellerLevel || card.level === parseInt(sellerLevel)) &&
      (!price || card.price <= parseInt(price)) &&
      (!country || card.country === country) &&
      (!skills || card.skills.includes(skills))
    );
  });

  const uniqueSkills = Array.from(
    new Set(cards.flatMap((card) => card.skills))
  );

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const switchToRegister = () => {
    setIsLoginModal(false);
  };

  const switchToLogin = () => {
    setIsLoginModal(true);
  };


  

  const handleCardClick = () => {
    const user = Cookies.get("authToken");
    if(!user){
      handleModalToggle();
    }else{
      navigate("/sellerPOV");
      console.log("Access the card details");
    }
  }

  return (
    <div className="min-h-screen text-white bg-webBg flex flex-col items-center w-full px-4 md:px-8 lg:px-16 2xl:px-20 pb-20">
      <div className="pt-10 w-full">
        <img
          src={`${process.env.PUBLIC_URL}/images/banner.svg`}
          alt="banner"
          className="object-cover h-[200px] sm:h-[300px] lg:h-[400px] w-full rounded-lg mt-10"
        />
        <div className="flex flex-col gap-6 mt-10 w-full">
          {/* Filters Section */}
          <div className="flex flex-wrap gap-4 items-center name">
            <img src={`${process.env.PUBLIC_URL}/images/filter.svg`} alt="filter" />
            <CustomDropdown
              label="Seller Level"
              options={["1", "2", "3"]}
              filterType="sellerLevel"
              handleFilterChange={handleFilterChange}
            />
            <CustomDropdown
              label="Price"
              options={["$10", "$20", "$30"]}
              filterType="price"
              handleFilterChange={handleFilterChange}
            />
            <CustomDropdown
              label="Country"
              options={["India", "USA", "UK"]}
              filterType="country"
              handleFilterChange={handleFilterChange}
            />
            <CustomDropdown
              label="Skills"
              options={uniqueSkills}
              filterType="skills"
              handleFilterChange={handleFilterChange}
            />
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#004321] p-4 rounded shadow-lg flex flex-col items-center text-center cursor-pointer"
                // onClick={handleCardClick}
              >
                <div className="first-section flex justify-between w-full gap-4">
                  <img
                    src={`${process.env.PUBLIC_URL}${card.img}`}
                    alt="person1Img"
                    className="w-[100px] h-[140px] 2xl:w-[150px] 2xl:h-[150px] rounded-lg object-cover"
                  />
                  <div className="flex flex-col text-left gap-2">
                    <h1 className="text-[16px] 2xl:text-[22px] bigText">{card.name}</h1>
                    <h1 className="desc text-[12px] 2xl:text-[16px]">{card.title}</h1>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <h1 className="name text-[13px] 2xl:text-[16px] bg-[#011E17] text-[#DAFF99] px-2 py-1 rounded-lg">
                          Level {card.level}
                        </h1>
                        <div className="flex gap-2 items-center">
                          <p className="name text-[13px] 2xl:text-[15px]">{card.country}</p>
                          <img src={`${process.env.PUBLIC_URL}${card.flag}`} alt="country" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <h1 className="bigText bg-[#DAFF99] bg-opacity-20 text-[#DAFF99] px-2 py-1 rounded-lg text-[17px]">
                          ${card.price}
                        </h1>
                        <div className="flex gap-2 items-center">
                          <img src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="star" />
                          <p className="name text-[18px]">{card.rating}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <div className="second-section flex flex-col w-full text-left">
                    <div className="aboutme flex flex-col gap-1">
                      <h1 className="bigText text-[18px]">About Me</h1>
                      <p className="desc text-[15px]">{card.about}</p>
                    </div>
                    <div className="skills flex flex-col gap-1 mt-6">
                      <h1 className="bigText text-[18px]">Skills</h1>
                    </div>
                  </div>
                  {card.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-[#DAFF99] bg-opacity-20 px-3 py-2 rounded name"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
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

const CustomDropdown = ({ label, options, filterType, handleFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null);

  const handleOptionClick = (value) => {
    setSelected(value);
    handleFilterChange(filterType, value);
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full sm:w-40 bg-webBg border border-[#DAFF99] text-white p-2 rounded-lg flex justify-evenly items-center"
      >
        {selected || label}
        <span className="ml-2">
          {isOpen ? (
            <img src={`${process.env.PUBLIC_URL}/images/UpArrow.svg`} alt="" />
          ) : (
            <img src={`${process.env.PUBLIC_URL}/images/downArrow.svg`} alt="" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full sm:w-40 bg-webBg z-10 rounded-lg border border-[#DAFF99] px-2 py-2">
          <ul>
            <li
              onClick={() => handleOptionClick("")}
              className="p-2 hover:bg-[#003E1F] hover:text-[#DAFF99] cursor-pointer text-sm rounded-lg"
            >
              {`All ${label}`}
            </li>
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="p-2 hover:bg-[#003E1F] hover:text-[#DAFF99] cursor-pointer text-sm rounded-lg"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BuyersFreelancers;
