import React, { useState } from "react";
import { levels } from "../pages/SellerDashboard/MockCardData";
import OverviewTags from "../components/OverviewTags";

const CreateJob = () => {
  const [country, setCountry] = useState(""); // Initially empty
  const [seller, setSeller] = useState(""); // Initially empty
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showSellerDropdown, setShowSellerDropdown] = useState(false);
  const [selectedCategoryOption, setSelectedCategoryOption] = useState(null);
  const [selectedCountryCategoryOption, setSelectedCountryCategoryOption] =
    useState(null);
  const [selectedSellerCategoryOption, setSelectedSellerCategoryOption] =
    useState(null);
  const [isCountryCategoryOpen, setIsCountryCategoryOpen] = useState(false);
  const [isSellerCategoryOpen, setIsSellerCategoryOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [price, setPrice] = useState("");

  const currencySymbols = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    PKR: "Rs.",
  };

  const countryNames = [
    { code: "USD", name: "United States" },
    { code: "INR", name: "India" },
    { code: "EUR", name: "Europe" },
    { code: "GBP", name: "United Kingdom" },
    { code: "JPY", name: "Japan" },
    { code: "PKR", name: "Pakistan" },
  ];

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handlePriceChange = (e) => {
    const input = e.target.value;
    if (/^\d*\.?\d*$/.test(input)) {
      setPrice(input);
    }
  };

  const handleSelectCategory = (option) => {
    setSelectedCategoryOption(option);
    setIsCategoryOpen(false);
  };
  const handleSelectCountryCategory = (option) => {
    setSelectedCountryCategoryOption(option);
    setIsCountryCategoryOpen(false);
  };
  const handleSelectSellerCategory = (option) => {
    setSelectedSellerCategoryOption(option);
    setIsSellerCategoryOpen(false);
  };
  const countries = ["India", "USA", "UK"];
  const sellerLevels = ["Beginner", "Intermediate", "Pro"];

  const [tags, setTags] = useState([]);
  const [softwareTags, setSoftwareTags] = useState([]);
  const [languageTags, setLanguageTags] = useState([]);
  const [errors, setErrors] = useState({
    projectTitle: "",
    customURL: "",
    tags: "",
    softwareTags: "",
    languageTags: "",
  });

  // Handle search Tags Change
  const handleTagsChange = (newTags) => {
    setTags(newTags);
    console.log("Current Tags:", newTags);

    // Clear error if exactly 5 tags are added
    if (newTags.length === 5) {
      setErrors((prev) => ({ ...prev, tags: "" }));
    } else if (newTags.length > 5) {
      setErrors((prev) => ({
        ...prev,
        tags: "Only 5 tags are allowed.",
      }));
    } else if (newTags.length < 5) {
      setErrors((prev) => ({
        ...prev,
        tags: "You must add exactly 5 tags.",
      }));
    }
  };

  // Handle software Tags Change
  const handleSoftwareTagsChange = (newTags) => {
    setSoftwareTags(newTags);
    console.log("Current Tags:", newTags);

    // Clear error if exactly 5 tags are added
    if (newTags.length === 3) {
      setErrors((prev) => ({ ...prev, softwareTags: "" }));
    } else if (newTags.length > 3) {
      setErrors((prev) => ({
        ...prev,
        softwareTags: "Only 5 tags are allowed.",
      }));
    } else if (newTags.length < 3) {
      setErrors((prev) => ({
        ...prev,
        softwareTags: "You must add exactly 5 tags.",
      }));
    }
  };

  // Handle language Tags Change
  const handleLanguageTagsChange = (newTags) => {
    setLanguageTags(newTags);
    console.log("Current Tags:", newTags);

    // Clear error if exactly 5 tags are added
    if (newTags.length === 3) {
      setErrors((prev) => ({ ...prev, languageTags: "" }));
    } else if (newTags.length > 3) {
      setErrors((prev) => ({
        ...prev,
        languageTags: "Only 5 tags are allowed.",
      }));
    } else if (newTags.length < 3) {
      setErrors((prev) => ({
        ...prev,
        languageTags: "You must add exactly 5 tags.",
      }));
    }
  };

  return (
    <div className="px-72 flex flex-col gap-16 pb-28">
      <div className="projectTitle flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:gap-10 xl:gap-24">
        <div className="flex flex-col gap-2 w-[50%]">
          <h2 className="text-[17px] bigText text-white">Job Title</h2>
          <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify lg:w-96">
            A clear and enticing project title helps you connect with the right
            people faster.
          </h2>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="mt-5 lg:mt-0 h-[88px] rounded-md bg-[#012619] px-3 lg:px-5 placeholder-opacity-20 outline-none name lg:w-full lg:text-[18px] shadow-lg shadow-[#071B16] w-full text-white"
          />
        </div>
      </div>
      <div className="projectDescription flex flex-col lg:flex-row lg:justify-start w-full lg:gap-10 xl:gap-24">
        <div className="flex flex-col gap-2 w-[50%]">
          <h2 className="text-[17px] bigText text-white">Job Description</h2>
          <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify lg:w-96">
            A strong job description helps candidates see themselves in the
            role—make it count!
          </h2>
        </div>
        <div className="w-full">
          <textarea
            className="mt-5 lg:mt-0 h-[88px] rounded-md bg-[#012619] px-3 lg:px-5 placeholder-opacity-20 outline-none name lg:w-full lg:text-[18px] shadow-lg shadow-[#071B16] w-full text-white pt-3"
            rows="5"
            required
          ></textarea>
        </div>
      </div>
      <div className="budget flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:gap-10 xl:gap-24">
        <div className="title flex flex-col gap-2 w-[50%]">
          <h2 className="text-[17px] bigText text-white">Job Budget</h2>
          <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify lg:w-96">
            Define your budget wisely to attract skilled professionals and
            ensure project success.
          </h2>
        </div>
        <div className="budgetInput w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-lg shadow-lg w-full">
              <div className="relative bg-[#012619] flex items-center rounded-lg">
                {/* Currency Symbol */}
                <span className="text-[#012619] px-5 py-3 name rounded-tl-lg rounded-bl-lg text-[24px] mr-2 bg-[#DAFF99]">
                  {currencySymbols[selectedCurrency]}
                </span>

                {/* Price Input */}
                <input
                  type="text"
                  value={price}
                  onChange={handlePriceChange}
                  placeholder="0.00"
                  className="flex-1 outline-none text-lg bg-[#012619] text-white desc px-5"
                />

                {/* Currency Selector */}
                <select
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                  className="bg-[#DAFF99] px-5 py-3 cursor-pointer text-[18px] text-[#012619] focus:outline-none rounded-tr-lg rounded-br-lg name"
                >
                  {countryNames.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="expertiseLevel flex flex-col lg:flex-row lg:justify-between lg:items-start w-full lg:gap-10 xl:gap-24">
        <div className="flex flex-col gap-2 w-[50%]">
          <h2 className="text-[17px] bigText text-white">Expertise Level</h2>
          <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify lg:w-96">
            Match your project's needs to the right talent by specifying the
            expertise level.
          </h2>
        </div>
        <div className="idDropdown w-full flex justify-start">
          <div className="category relative w-full name lg:text-lg">
            <button
              className="w-full bg-[#012619] text-neutral-50 py-2 px-4 rounded-lg shadow-lg shadow-[#071B16] flex justify-between items-center xl:px-5 xl:py-3 desc"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              {selectedCategoryOption || "Choose a Level"}
              <svg
                className={`w-6 h-6 transition-transform text-buttonHover ${
                  isCategoryOpen ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isCategoryOpen && (
              <ul className="absolute w-full bg-[#012619] mt-2 rounded-lg shadow-lg px-2 py-1 z-50 xl:py-3 overflow-y-scroll scrollbar text-white desc">
                {levels.map((option, index) => (
                  <li
                    key={index}
                    className="py-2 px-4 w-full hover:bg-forestGreen cursor-pointer rounded-lg"
                    onClick={() => handleSelectCategory(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="tags flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:gap-10 xl:gap-24 lg:-mt-6">
        <div className="flex flex-col gap-2 w-[50%]">
          <h2 className="text-[17px] bigText text-white">Search Tags</h2>
          <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify lg:w-96">
            Make your project easy to find with clear and specific search tags
          </h2>
        </div>
        <div className="flex flex-col w-full gap-3">
          <OverviewTags
            placeholder="Enter tags and press enter..."
            onTagsChange={handleTagsChange}
          />
          {errors.tags && <p className="text-red-500 text-sm">{errors.tags}</p>}
          <h2 className="desc text-[15px] text-limeGreen tracking-wider">
            10 tags maximum. Use letters and numbers only.
          </h2>
        </div>
      </div>
      <div className="software flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:gap-10 xl:gap-24 lg:-mt-6">
        <div className="flex flex-col gap-2 w-[50%]">
          <h2 className="text-[17px] bigText text-white">Search Software</h2>
          <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify lg:w-96">
            Search and find the right software for your freelancing needs.
          </h2>
        </div>
        <div className="flex flex-col w-full gap-3">
          <OverviewTags
            placeholder="Enter tags and press enter..."
            onTagsChange={handleSoftwareTagsChange}
          />
          {errors.softwareTags && (
            <p className="text-red-500 text-sm">{errors.softwareTags}</p>
          )}
          <h2 className="desc text-[15px] text-limeGreen tracking-wider">
            3 tags maximum. Use letters and numbers only.
          </h2>
        </div>
      </div>
      <div className="divider w-full h-[1px] bg-[#6B8F71] bg-opacity-40 mt-6"></div>
      <div className="extras flex flex-col gap-16 -mt-6">
        <h1 className="name text-[24px] text-white">Extra Preference</h1>
        <div className="country flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:gap-10 xl:gap-24 lg:-mt-6">
          <div className="flex flex-col gap-2 w-[50%]">
            <h2 className="text-[17px] bigText text-white">Country</h2>
          </div>
          <div className="relative w-full h-10 desc">
            <button
              type="button"
              className="bg-[#012619] text-white text-left px-4 py-4 rounded-md w-full flex justify-between items-center shadow-lg focus:outline-none desc text-lg"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
            >
              {country || "Select a country"}
              <span
                className={`text-sm transform transition-transform duration-300 ${
                  showCountryDropdown ? "rotate-180" : ""
                }`}
              >
                <svg
                  className={`w-6 h-6 transition-transform text-buttonHover ${
                    isCountryCategoryOpen ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            {showCountryDropdown && (
              <div className="absolute top-full left-0 w-full bg-[#012619] rounded-md shadow-lg mt-5 z-10 desc px-3 py-2 text-lg">
                {countries.map((c) => (
                  <button
                    key={c}
                    className="block w-full text-white text-left px-4 py-3 hover:bg-forestGreen transition-colors rounded-lg"
                    onClick={() => {
                      setCountry(c);
                      setShowCountryDropdown(false);
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="sellerLevel flex flex-col lg:flex-row lg:justify-between lg:items-start w-full lg:gap-10 xl:gap-24">
          <div className="flex flex-col gap-2 w-[50%]">
            <h2 className="text-[17px] bigText text-white">Seller Level</h2>
          </div>
          <div className="idDropdown w-full flex justify-start">
            <div className="category relative w-full name lg:text-lg">
              <button
                className="w-full bg-[#012619] text-neutral-50 py-2 px-4 rounded-lg shadow-lg shadow-[#071B16] flex justify-between items-center xl:px-5 xl:py-3 desc"
                onClick={() => setShowSellerDropdown(!showSellerDropdown)}
              >
                {seller || "Choose a Seller Level"}
                <span
                  className={`text-sm transform transition-transform duration-300 ${
                    showSellerDropdown ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className={`w-6 h-6 transition-transform text-buttonHover ${
                      isSellerCategoryOpen ? "transform rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {showSellerDropdown && (
                <ul className="absolute w-full bg-[#012619] mt-2 rounded-lg shadow-lg px-2 py-1 z-50 xl:py-3 overflow-y-scroll scrollbar text-white desc">
                  {sellerLevels.map((s) => (
                    <li
                      key={s}
                      className="py-2 px-4 w-full hover:bg-forestGreen cursor-pointer rounded-lg"
                      onClick={() => {
                        setSeller(s);
                        setShowSellerDropdown(false);
                      }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="language flex flex-col lg:flex-row lg:justify-between lg:items-start w-full lg:gap-10 xl:gap-24 lg:-mt-6">
          <div className="flex flex-col gap-2 w-[50%]">
            <h2 className="text-[17px] bigText text-white">Language</h2>
          </div>
          <div className="flex flex-col w-full gap-3 -mt-4">
            <OverviewTags
              placeholder="Enter tags and press enter..."
              onTagsChange={handleLanguageTagsChange}
            />
            {errors.languageTags && (
              <p className="text-red-500 text-sm">{errors.languageTags}</p>
            )}
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button className="mt-3 px-16 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px] name flex justify-between items-center gap-3 text-white">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
