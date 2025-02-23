import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// require('dotenv').config();
import axios from 'axios';
import Cookies from 'js-cookie';
import {UAParser} from "ua-parser-js";
import { Link } from "react-router-dom";

const Register = ({ switchToLogin }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [dropdowns, setDropdowns] = useState({
    role: false,
    state: false,
    country: false,
  });
  const [formData, setFormData] = useState({
    role: "",
    email: "",
    username: "",
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const steps = ["1", "2", "3", "4", "5"];
  const states = [
    "Andhra Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const countries = ["United States", "Canada", "India", "Australia"];

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = "This field is required.";
    } else {
      switch (name) {
        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            error = "Enter a valid email address.";
          } else if (/[A-Z]{2,}\.COM$/i.test(value) && value.endsWith(".COM")) {
            error = "Email cannot end with .COM (uppercase).";
          }
          break;
        
          
      case "username":
        const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/;
        if (!usernameRegex.test(value)) {
          error =
            "Username must be 4-16 characters long, start with a letter, and contain only alphanumeric characters or underscores.";
        }
        break;
        case "firstName":
          const nameRegex1 = /^[A-Za-z\s]+$/;
          if (!nameRegex1.test(value))
            error = "Name must include letters only, no numbers.";
          break;
        case "lastName":
          const nameRegex = /^[A-Za-z\s]+$/;
          if (!nameRegex.test(value))
            error = "Name must include letters only, no numbers.";
          break;
        case "phone":
          const phoneRegex = /^[6-9]\d{9}$/;
          if (!phoneRegex.test(value)) error = "Enter a valid phone number.";
          break;
        case "zip":
          const pinRegex = /^\d{6}$/;
          if (!pinRegex.test(value)) error = "Enter a valid 6-digit ZIP code.";
          break;
          case "password":
          const passwordRegex =
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          if (!passwordRegex.test(value))
            error =
              "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.";
          break;
        case "confirmPassword":
          if (value !== formData.password) error = "Passwords do not match.";
          break;
        default:
          break;
      }
    }
    return error;
  };

  // const validateStep = () => {
  //   let stepErrors = {};
  //   stepFields[step].forEach((field) => {
  //     const error = validateField(field, formData[field]);
  //     if (error) stepErrors[field] = error;
  //   });
  //   setErrors(stepErrors);
  //   return Object.keys(stepErrors).length === 0;
  // };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleNext = () => {
    const currentStepFields = getFieldsForStep(currentStep);
    let stepErrors = {};
    console.log(currentStep)

    currentStepFields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        stepErrors[field] = error;

      }
    });

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
    }else {
      setCurrentStep((prev) => prev + 1);
      console.log("This else condition is working", currentStep)
    }
  };

  const getFieldsForStep = (step) => {
    switch (step) {
      case 1:
        return ["role"];
      case 2:
        return ["email"];
      case 3:
        return ["username", "firstName", "lastName", "phone"];
      case 4:
        return ["address1", "city", "state", "zip", "country"];
      case 5:
        return ["nickname", "password", "confirmPassword"];
      default:
        return [];
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const toggleDropdown = (field) => {
    setDropdowns((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const selectDropdownOption = (field, value) => {
    handleChange(field, value);
    setDropdowns((prev) => ({ ...prev, [field]: false }));
  };

  const renderProgressBar = () => (
    <div className="flex items-center justify-between mb-16 -mt-10">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-7 h-7 flex items-center justify-center rounded-full text-white font-bold ${
              currentStep === index + 1
                ? "bg-blue-500"
                : index + 1 < currentStep
                ? "bg-green-500"
                : ""
            }`}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-1 w-16 md:w-16 ${
                index + 1 < currentStep ? "bg-green-500" : "bg-green-800"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );

  const renderDropdownArrow = (isOpen) => (
    <span
      className={`transition-transform duration-300 ${
        isOpen ? "rotate-180" : "rotate-0"
      }`}
    >
      ▼
    </span>
  );

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   // Ensure validation only for the current step
  //   if (currentStep === 5) {
  //     const finalStepFields = getFieldsForStep(currentStep); // Get fields for Step 5
  //     let stepErrors = {};
  
  //     // Validate each field
  //     finalStepFields.forEach((field) => {
  //       const error = validateField(field, formData[field]);
  //       if (error) {
  //         stepErrors[field] = error; // Add error if validation fails
  //       }
  //     });
  
  //     // If errors exist, show them and stop submission
  //     if (Object.keys(stepErrors).length > 0) {
  //       setErrors(stepErrors); // Display errors in the UI
  //       console.error("Validation failed. Fix errors before submitting.");
  //       return; // Prevent form submission
  //     }
  //   }
  
  //   // Prepare data for submission
  //   const data = {
  //     role: formData.role.toLowerCase(),
  //     email: formData.email,
  //     password: formData.password,
  //     firstName: formData.firstName,
  //     middleName: formData.middleName || null,
  //     lastName: formData.lastName,
  //     phoneNumber: formData.phone,
  //     address: formData.address1,
  //     subAddress: formData.address2 || null,
  //     userName: formData.username,
  //     nickName: formData.nickname,
  //     city: formData.city,
  //     pinCode: formData.zip,
  //     state: formData.state,
  //     country: formData.country,
  //   };
  
  //   const portalMode = formData.role.toUpperCase();
  //   localStorage.setItem('mode',portalMode);    

  //   const parser = new UAParser();
  //   const deviceInfo = parser.getResult();

  //   const linkedDevice = {
  //     deviceName: `${deviceInfo.os.name} - ${deviceInfo.device.model || "Web"}`,
  //     browser: deviceInfo.browser.name,
  //     loginTime: new Date().toISOString(),
  //   };

  //   console.log("linkedDevice:",linkedDevice);

  //   console.log("Submitting data:", data);
  
  //   // Submit the data via API
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/auth/register', { ...data, linkedDevice }, {
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (response.status === 201) {
  //       console.log("Registration successful:", response.data);
  //       Cookies.set("authToken", response.data.token, { expires: 7 }); // Set token in cookies
  //       localStorage.setItem("userId",response.data.user.id);
  //       window.location.reload(); // Reload the page
  //       // navigate("/");
  //     } else {
  //       console.error("Registration failed:", response.data.message);
  //     }
  //   } catch (error) {
  //     console.error("Error during registration:", error.response?.data || error.message);
  //   }
  // };
  
  return (
    <div className="py-10 bg-[#142E03] rounded shadow text-white">
      <div className="logo w-full flex flex-col justify-center items-center mb-10 -mt-10">
        <img
          src="../images/logo.svg"
          className="hover:cursor-pointer md:w-44 w-28"
          alt="logo"
        />
      </div>
      <h2 className="text-[20px] text-white uppercase desc font-semibold text-center mb-16 -mt-7 tracking-wide">
        Register
      </h2>
      {renderProgressBar()}

      {currentStep === 1 && (
        <div className="max-w-md mx-auto px-3 name">
          <h2 className="text-xl name mb-4 -mt-8">
            Register As <span className="text-red-500">*</span>
          </h2>
          <div className="relative">
            <div
              className="rounded px-4 py-3 flex justify-between items-center cursor-pointer focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white"
              onClick={() => toggleDropdown("role")}
            >
              {formData.role || "Select an Option"}{" "}
              {renderDropdownArrow(dropdowns.role)}
            </div>
            {dropdowns.role && (
              <div className="absolute left-0 mt-2 bg-[#142E03] border border-gray-300 rounded shadow w-full z-10 text-black px-4 py-2">
                {["Seller", "Buyer"].map((role) => (
                  <div
                    key={role}
                    className="px-2 py-2 text-sm text-white hover:bg-[#21872F] hover:text-white rounded-lg cursor-pointer "
                    onClick={() => selectDropdownOption("role", role)}
                  >
                    {role}
                  </div>
                ))}
              </div>
            )}
          </div>

          {errors.role && <p className="text-red-500 text-[14px] mt-1">{errors.role}</p>}
        </div>
      )}

      {currentStep === 2 && (
        <div className="-mt-24">
          <h2 className="text-xl font-semibold py-16">Enter your Email</h2>
          <input
            type="email"
            className="block w-full px-4 py-3 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white -mt-10"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-[14px] mt-1">{errors.email}</p>}
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <h2 className="text-xl font-semibold mb-4 -mt-6">Personal Details</h2>
          <input
            type="text"
            className="block w-full px-4 py-3 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white mb-4"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />
          {errors.username && (
            <p className="text-red-500 text-[14px] -mt-3 mb-2">{errors.username}</p>
          )}
          <input
            type="text"
            className="block w-full px-4 py-3 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white mb-4"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
          {errors.firstName && (
            <p className="text-red-500 -mt-3 mb-2 text-[14px]">{errors.firstName}</p>
          )}
          <input
            type="text"
            className="block w-full px-4 py-3 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white mb-4"
            placeholder="Middle Name"
            value={formData.middleName}
            onChange={(e) => handleChange("middleName", e.target.value)}
          />
          {errors.middleName && (
            <p className="text-red-500">{errors.middleName}</p>
          )}
          <input
            type="text"
            className="block w-full px-4 py-3 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white mb-4"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
          {errors.lastName && <p className="text-red-500 -mt-3 mb-2 text-[14px]">{errors.lastName}</p>}
          <input
            type="text"
            className="block w-full px-4 py-3 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          {errors.phone && <p className="text-red-500 mb-2 text-[14px]">{errors.phone}</p>}
        </div>
      )}

      {currentStep === 4 && (
        <div>
          <h2 className="text-xl font-semibold mb-4 -mt-6">Residential Details</h2>
          <textarea
            className="block w-full px-4 py-1 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white mb-4"
            placeholder="Address Line 1"
            value={formData.address1}
            onChange={(e) => handleChange("address1", e.target.value)}
          />
          {errors.address1 && <p className="text-red-500 -mt-3 mb-2 text-[14px]">{errors.address1}</p>}
          <textarea
            className="block w-full px-4 py-1 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white mb-4"
            placeholder="Address Line 2"
            value={formData.address2}
            onChange={(e) => handleChange("address2", e.target.value)}
          />
          {errors.address2 && <p className="text-red-500 -mt-3 mb-2 text-[14px]">{errors.address1}</p>}
          <input
            type="text"
            className="block w-full px-4 py-3 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white mb-4"
            placeholder="City"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
          {errors.city && <p className="text-red-500 -mt-3 mb-2 text-[14px]">{errors.city}</p>}
          
          <div className="relative">
          <div
            className="rounded px-4 py-3 flex justify-between items-center cursor-pointer focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white mb-4"
            onClick={() => toggleDropdown("state")}
          >
            {formData.state || "Select State"}{" "}
            {renderDropdownArrow(dropdowns.state)}
          </div>
          {dropdowns.state && (
            <div className="absolute left-0 mt-2 h-64 overflow-y-scroll scrollbarNew bg-[#142E03] border border-gray-300 rounded shadow w-full z-10 text-black px-4 py-2">
              {states.map((state) => (
                <div
                  key={state}
                  className="px-2 py-2 text-sm text-white hover:bg-[#21872F] hover:text-white rounded-lg cursor-pointer "
                  onClick={() => selectDropdownOption("state", state)}
                >
                  {state}
                </div>
              ))}
            </div>
          )}
          </div>
          
          {errors.state && <p className="text-red-500 -mt-3 mb-2 text-[14px]">{errors.state}</p>}
          <input
            type="text"
            className="block w-full px-4 py-3 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white mb-4"
            placeholder="ZIP Code"
            value={formData.zip}
            onChange={(e) => handleChange("zip", e.target.value)}
          />
          {errors.zip && <p className="text-red-500 -mt-3 mb-2 text-[14px]">{errors.zip}</p>}
          <div className="relative">
          <div
            className="rounded px-4 py-3 flex justify-between items-center cursor-pointer focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white mb-4"
            onClick={() => toggleDropdown("country")}
          >
            {formData.country || "Select Country"}{" "}
            {renderDropdownArrow(dropdowns.country)}
          </div>
          {dropdowns.country && (
            <div className="absolute left-0 mt-2 h-64 overflow-y-scroll scrollbarNew bg-[#142E03] border border-gray-300 rounded shadow w-full z-10 text-black px-4 py-2">
              {countries.map((country) => (
                <div
                  key={country}
                  className="px-2 py-2 text-sm text-white hover:bg-[#21872F] hover:text-white rounded-lg cursor-pointer "
                  onClick={() => selectDropdownOption("country", country)}
                >
                  {country}
                </div>
              ))}
            </div>
          )}
          </div>
          {errors.country && <p className="text-red-500 -mt-3 mb-2 text-[14px]">{errors.country}</p>}
        </div>
      )}

      {currentStep === 5 && (
        <div>
          <h2 className="text-xl font-semibold mb-4 -mt-6">Credentials</h2>
          <input
            type="text"
            className="block w-full px-4 py-3 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white mb-4"
            placeholder="Nickname"
            value={formData.nickname}
            onChange={(e) => handleChange("nickname", e.target.value)}
          />
          {errors.nickname && <p className="text-red-500 -mt-3 mb-2 text-[14px]">{errors.nickname}</p>}
          <input
            type="password"
            className="block w-full px-4 py-3 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white mb-4"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
          {errors.password && <p className="text-red-500 -mt-3 mb-2 text-[14px] leading-5">{errors.password}</p>}
          <input
            type="password"
            className="block w-full px-4 py-3 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white mb-4"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 -mt-3 mb-2 text-[14px]">{errors.confirmPassword}</p>
          )}
        </div>
      )}

      <div className="flex justify-end gap-10">
        {currentStep > 1 && (
          <button
            className="border border-[#21872F] hover:bg-[#115019] text-white px-8 py-3 rounded mt-5"
            onClick={handlePrevious}
          >
            Previous
          </button>
        )}
        {currentStep < steps.length && (
          <button
            className="bg-[#21872F] hover:bg-[#115019] text-white px-8 py-3 rounded name mt-5"
            onClick={handleNext}
          >
            Next
          </button>
        )}
        {currentStep === steps.length && (
          <button
            className="bg-[#21872F] hover:bg-[#115019] text-white px-8 py-3 rounded name mt-5"
            // onClick={handleSubmit} 
          >
            <Link to="/maintenance">Register</Link>
          </button>
          
        )}

        
      </div>
      <p className="text-center text-md mt-8 name text-white tracking-wider">
        Already a member ?{" "}
        <button
          onClick={switchToLogin}
          className="text-[#36d64c] hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default Register;
