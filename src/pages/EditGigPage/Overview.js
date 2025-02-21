import React, { useState } from "react";
import OverviewCategory from "../../components/OverviewCategory";
import OverviewSubcategory from "../../components/OverviewSubcategory";
import OverviewTags from "../../components/OverviewTags";

const Overview = ({ navigateToTab }) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [customURL, setCustomURL] = useState("");
  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({
    projectTitle: "",
    customURL: "",
    tags: "",
  });

  // Handle Tags Change
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

  // Handle Project Title Change
  const handleTitleChange = (value) => {
    setProjectTitle(value);
    // Clear error when title is updated
    if (value.trim()) {
      setErrors((prev) => ({ ...prev, projectTitle: "" }));
    }
  };

  // Handle Custom URL Change
  const handleURLChange = (value) => {
    setCustomURL(value);
    // Clear error when URL is updated
    if (/^https?:\/\/.+\..+$/.test(value)) {
      setErrors((prev) => ({ ...prev, customURL: "" }));
    }
  };

  // Validate All Fields
  const validateFields = () => {
    let isValid = true;

    // Validate project title
    if (!projectTitle.trim()) {
      setErrors((prev) => ({
        ...prev,
        projectTitle: "Project title is required.",
      }));
      isValid = false;
    }

    // Validate custom URL
    if (!customURL.trim()) {
      setErrors((prev) => ({ ...prev, customURL: "Custom URL is required." }));
      isValid = false;
    } else if (!/^https?:\/\/.+\..+$/.test(customURL)) {
      setErrors((prev) => ({
        ...prev,
        customURL: "Enter a valid URL (e.g., https://example.com).",
      }));
      isValid = false;
    }

    // Validate tags
    if (tags.length !== 5) {
      setErrors((prev) => ({
        ...prev,
        tags: tags.length < 5
          ? "You must add exactly 5 tags."
          : "Only 5 tags are allowed.",
      }));
      isValid = false;
    }

    return isValid;
  };

  // Handle Form Submission
  const handleNext = async () => {
    if (!validateFields()) return;
    navigateToTab("Description"); // Navigate to the Description tab

    const dataToSave = {
      projectTitle,
      customURL,
      tags,
    };

    try {
      const response = await fetch("/api/save-overview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSave),
      });

      if (!response.ok) throw new Error("Failed to save data");

      alert("Overview saved successfully!");
      console.log("Navigating to the next section...");
    } catch (error) {
      console.error("Error saving overview:", error);
      alert("There was an issue saving your data. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full sm:px-10 md:px-20 2xl:px-72">
      <div className="border border-[#253428] w-full h-[75vh] mt-10 rounded-lg overflow-x-auto scrollbar flex flex-col lg:items-center p-5 xl:px-16 gap-10 lg:gap-14">
        {/* Project Title */}
        <div className="projectTitle flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:gap-10 xl:gap-24">
          <div className="flex flex-col gap-2">
            <h2 className="text-[17px] bigText">Title Of The Project</h2>
            <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify lg:w-64">
              Give potential buyers a clear understanding of your project’s purpose and value.
            </h2>
          </div>
          <div className="w-full">
            <input
              type="text"
              className={`mt-5 lg:mt-0 h-[88px] rounded-md bg-[#012619] px-3 lg:px-5 placeholder-opacity-20 outline-none name lg:w-full lg:text-[18px] shadow-lg shadow-[#071B16] w-full ${
                errors.projectTitle ? "border-2 border-red-500" : ""
              }`}
              value={projectTitle}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="I will create......."
            />
            {errors.projectTitle && (
              <p className="text-red-500 text-sm mt-2">{errors.projectTitle}</p>
            )}
          </div>
        </div>

        {/* Category */}
        <div className="categorypart flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:gap-10 xl:gap-24">
          <h2 className="text-[17px] bigText">Category</h2>
          <div className="flex flex-col lg:flex-row lg:gap-10 lg:-mt-4">
            <OverviewCategory />
            <OverviewSubcategory />
          </div>
        </div>

        {/* Custom URL */}
        <div className="url flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:gap-10 xl:gap-24">
          <div className="flex flex-col gap-2">
            <h2 className="text-[17px] bigText">Custom URL</h2>
            <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify lg:w-64">
              Create a personalized link to showcase your services and make it easier for clients to find you.
            </h2>
          </div>
          <div className="w-full">
            <input
              type="text"
              className={`mt-5 lg:-mt-5 h-[62px] rounded-md bg-[#012619] px-3 lg:px-5 placeholder-opacity-20 outline-none name lg:w-full lg:text-[18px] shadow-lg shadow-[#071B16] w-full ${
                errors.customURL ? "border-2 border-red-500" : ""
              }`}
              value={customURL}
              onChange={(e) => handleURLChange(e.target.value)}
              placeholder="https://websitebuilders.com"
            />
            {errors.customURL && (
              <p className="text-red-500 text-sm mt-2">{errors.customURL}</p>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="tags flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:gap-10 xl:gap-24 lg:-mt-6">
          <h2 className="text-[17px] bigText lg:w-96 lg:-mt-2">Search Tags</h2>
          <div className="flex flex-col w-full gap-3">
            <OverviewTags
              placeholder="Enter tags and press enter..."
              onTagsChange={handleTagsChange}
            />
            {errors.tags && <p className="text-red-500 text-sm">{errors.tags}</p>}
            <h2 className="desc text-[15px] text-limeGreen tracking-wider">
              Exactly 5 tags required. Use letters and numbers only.
            </h2>
          </div>
        </div>

        {/* Next Button */}
        <div className="nextButton flex justify-end items-end w-full -mt-4">
          <button
            onClick={handleNext}
            className="px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;