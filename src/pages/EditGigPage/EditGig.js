import React, { useState } from "react";
import { editTabs } from "../SellerDashboard/MockCardData";
import Overview from "./Overview";
import Description from "./Description";
import Pricing from "./Pricing";
import Process from "./Process";
import Media from "./Media";
import Finalize from "./Finalize";
import Footer from "../../components/Footer";
import NavbarSeller from '../../components/NavbarSeller';

const EditGig = () => {
  const [activeEditTab, setActiveEditTab] = useState(editTabs[0]);
  const [formData, setFormData] = useState({
    projectTitle: "",
    customURL: "",
    tags: [],
  });

  const [errors, setErrors] = useState({
    projectTitle: "",
    customURL: "",
    tags: "",
  });

  // Track completed steps
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateErrors = (field, value) => {
    setErrors((prev) => ({ ...prev, [field]: value }));
  };

  // Validate the current tab's data
  const validateCurrentStep = () => {
    const currentErrors = {};
    if (activeEditTab === "Overview") {
      if (!formData.projectTitle) currentErrors.projectTitle = "Project title is required.";
      if (!formData.customURL) currentErrors.customURL = "Custom URL is required.";
    }
    // Add validation logic for other tabs as needed
    setErrors((prev) => ({ ...prev, ...currentErrors }));
    return Object.keys(currentErrors).length === 0;
  };

  const navigateToTab = (tabName) => {
    // Validate the current tab before proceeding
    if (validateCurrentStep()) {
      setCompletedSteps((prev) => new Set(prev.add(activeEditTab))); // Mark the current step as completed
      setActiveEditTab(tabName);
    }
  };

  return (
    <div>
      <NavbarSeller />
      <div className="pt-4 bg-webBg min-h-[100vh] w-full overflow-x-hidden">
        <div className="mx-auto flex flex-col max-w-full sm:w-full pt-12 xl:pt-16 fixed">
          <div>
            {/* Tab Buttons */}
            <div className="flex justify-between overflow-y-auto h-16 scrollbarNew bg-forestGreen no-scrollbar">
              {editTabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`px-10 sm:px-16 md:px-20 lg:px-[85px] xl:px-[120px] py-2 text-lightChartreuse name tracking-wider text-[15px] md:text-[16px] ${
                    activeEditTab === tab
                      ? "bg-gradient-to-t from-[#011E17] to-[#004321] border-t-4 border-mayGreen"
                      : completedSteps.has(tab) || index === editTabs.indexOf(activeEditTab)
                      ? "hover:bg-forestGreen hover:bg-opacity-40"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (completedSteps.has(tab) || index === editTabs.indexOf(activeEditTab)) {
                      navigateToTab(tab);
                    }
                  }}
                  disabled={!completedSteps.has(tab) && index !== editTabs.indexOf(activeEditTab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="scrollbar bg-webBg min-h-[100vh] p-4 text-white">
            {activeEditTab === "Overview" && (
              <Overview
                formData={formData}
                errors={errors}
                updateFormData={updateFormData}
                updateErrors={updateErrors}
                navigateToTab={navigateToTab}
              />
            )}
            {activeEditTab === "Description" && (
              <Description formData={formData} updateFormData={updateFormData} errors={errors} />
            )}
            {activeEditTab === "Pricing" && <Pricing formData={formData} />}
            {activeEditTab === "Process" && <Process formData={formData} />}
            {activeEditTab === "Media" && <Media formData={formData} />}
            {activeEditTab === "Finalize" && <Finalize formData={formData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGig;
