import React, { useState } from "react";
import axios from "axios";
import  Cookies from "js-cookie";

const Register = ({ switchToLogin }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    middleName: "",
    phoneNumber: "",
    address: "",
    city: "",
    pinCode: "",
    state: "",
    country: "",
    identificationType: "",
    identificationNumber: "",
    panFile: null,
  });

  const [errors, setErrors] = useState({});

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
  const countries = ["United States", "Canada", "India"];
  const identificationTypes = ["PAN Card"];

  const stepFields = {
    1: ["email", "password", "confirmPassword"],
    2: ["firstName", "lastName", "phoneNumber"],
    3: ["address", "city"],
    4: ["pinCode", "state", "country"],
    5: ["identificationType", "identificationNumber", "panFile"],
  };

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = "This field is required.";
    } else {
      switch (name) {
        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) error = "Enter a valid email address.";
          break;
        case "password":
          const passwordRegex =
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          if (!passwordRegex.test(value))
            error =
              "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.";
          break;
        case "confirmPassword":
          if (value !== formData.password)
            error = "Passwords do not match.";
          break;
        case "firstName":
        case "lastName":
          const nameRegex = /^[A-Za-z\s]+$/;
          if (!nameRegex.test(value))
            error = "Name must include letters only, no numbers.";
          break;
        case "phoneNumber":
          const phoneRegex = /^[6-9]\d{9}$/;
          if (!phoneRegex.test(value)) error = "Enter a valid phone number.";
          break;
        case "pinCode":
          const pinRegex = /^\d{6}$/;
          if (!pinRegex.test(value)) error = "Enter a valid 6-digit PIN code.";
          break;
        // case "identificationNumber":
        //   if (formData.identificationType === "PAN Card") {
        //     const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        //     if (!panRegex.test(value))
        //       error = "Enter a valid PAN Card number.";
        //   }
        case "identificationNumber":
        if (formData.identificationType === "PAN Card") {
          // First check: Required field
          if (!value) {
            error = "Please input your Identification Number!";
          }
          // Second check: Pattern validation (10 alphanumeric characters)
          else if (!/^[a-zA-Z0-9]{10}$/.test(value)) {
            error = (
              <span className="text-sm">
                Identification Number should be 10 characters long and cannot contain any special characters.
              </span>
            );
          }
        }
          break;
        case "panFile":
          if (!value || !value.name.match(/\.(jpg|jpeg|png|pdf)$/i)) {
            error = "Upload a valid PAN file (jpg, jpeg, png, pdf).";
          }
          break;
        default:
          break;
      }
    }
    return error;
  };

  

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const fieldValue = files ? files[0] : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });

    setErrors({
      ...errors,
      [name]: validateField(name, fieldValue),
    });
  };

  const validateStep = () => {
    let stepErrors = {};
    stepFields[step].forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) stepErrors[field] = error;
    });
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form Data to be Submitted:", formData);

    // Validate form data before submission
    if (validateStep()) {
        try {
            // Sending the POST request to the server
            const response = await axios.post(
                "http://localhost:5000/api/auth/register", // Endpoint
                {
                    email: formData.email,
                    password: formData.password,
                    firstName: formData.firstName,
                    middleName: formData.middleName || null, // Optional field
                    lastName: formData.lastName,
                    phoneNumber: formData.phoneNumber,
                    address: formData.address,
                    city: formData.city,
                    pinCode: formData.pinCode,
                    state: formData.state,
                    country: formData.country,
                },
                {
                    headers: {
                        "Content-Type": "application/json", // Set proper header
                    },
                }
            );

            // Check the response status and handle accordingly
            if (response.status === 201) {
              const { token } = response.data; // Assuming the backend sends a token
              Cookies.set("authToken", token, { expires: 7 }); // Store token in a cookie for 7 days
              window.location.reload();
              console.log("Form Data Submitted Successfully:", response.data);
            } else {
                alert("Registration failed. Please try again.");
                console.error("Unexpected response status:", response.status);
            }
        } catch (error) {
            // Error handling
            if (error.response) {
                // Server responded with a status code outside the range of 2xx
                console.error("Error response from server:", error.response.data);
                alert(`Error: ${error.response.data.message || "Something went wrong."}`);
            } else if (error.request) {
                // Request was made but no response was received
                console.error("No response from server:", error.request);
                alert("No response from the server. Please try again later.");
            } else {
                // Other errors
                console.error("Error during registration:", error.message);
                alert("An unexpected error occurred. Please try again.");
            }
        }
    }
};


  return (
    <div className="max-w-md mx-auto py-20 px-3 name">
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
      <div className="">
        {/* Steps UI here */}
        {step === 1 && (
          <div className="flex flex-col gap-3">
            <label className="block text-md name tracking-wider font-medium text-[#bebebe]">Email/Username</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}

            <label className="block text-md name tracking-wider font-medium text-[#bebebe]">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}

            <label className="block text-md name tracking-wider font-medium text-[#bebebe]">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-3">
            <label className="block text-md name tracking-wider font-medium text-[#bebebe]">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}

            <label className="block text-md name tracking-wider font-medium text-[#bebebe]">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}

            <label className="block text-md name tracking-wider font-medium text-[#bebebe]">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-3">
            <label className="block text-md name tracking-wider font-medium text-[#bebebe]">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}

            <label className="block text-md name tracking-wider font-medium text-[#bebebe]">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col gap-3">
            <label className="block text-md name tracking-wider font-medium text-[#bebebe]">PIN Code</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.pinCode ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.pinCode && (
              <p className="text-red-500 text-sm mt-1">{errors.pinCode}</p>
            )}

            {/* <label className="block text-md name tracking-wider font-medium text-[#bebebe]">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.state ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">{errors.state}</p>
            )} */}

            <label className="block text-md name tracking-wider font-medium text-[#bebebe]">State</label>
<div className="relative">
  <button
    className={`w-full px-4 py-2 rounded-lg bg-[#4f6e3b36] border-b focus:outline-none desc text-white flex justify-between items-center ${
      errors.state ? "border-red-500" : "border-gray-300"
    }`}
    onClick={(e) => {
      e.preventDefault();
      setFormData({ ...formData, dropdownOpen: !formData.dropdownOpen });
    }}
  >
    {formData.state || "Select State"}
    <svg
      className={`w-5 h-5 transition-transform ${
        formData.dropdownOpen ? "rotate-180" : ""
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

  {formData.dropdownOpen && (
    <div className="absolute z-10 w-full bg-[#213B0E] border border-gray-300 mt-2 rounded-lg shadow-lg overflow-y-scroll max-h-80 scrollbarNew px-4 py-1">
      {states.map((state) => (
        <button
          key={state}
          className="block w-full text-left px-2 py-2 text-sm text-white hover:bg-[#21872F] hover:text-white focus:outline-none rounded-lg"
          onClick={() => {
            setFormData({ ...formData, state: state, dropdownOpen: false });
          }}
        >
          {state}
        </button>
      ))}
    </div>
  )}
</div>
{errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}


            {/* <label className="block text-md name tracking-wider font-medium text-[#bebebe]">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.country ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">{errors.country}</p>
            )} */}

            <label className="block text-md name tracking-wider font-medium text-[#bebebe]">Country</label>
<div className="relative">
  <button
    className={`w-full px-4 py-2 rounded-lg bg-[#4f6e3b36] border-b focus:outline-none desc text-white flex justify-between items-center ${
      errors.country ? "border-red-500" : "border-gray-300"
    }`}
    onClick={(e) => {
      e.preventDefault();
      setFormData({ ...formData, countryDropdownOpen: !formData.countryDropdownOpen });
    }}
  >
    {formData.country || "Select Country"}
    <svg
      className={`w-5 h-5 transition-transform ${
        formData.countryDropdownOpen ? "rotate-180" : ""
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

  {formData.countryDropdownOpen && (
    <div className="absolute z-10 w-full bg-[#213B0E] border border-gray-300 max-h-80 scrollbarNew px-4 py-1 mt-2 rounded-md shadow-lg overflow-y-scroll">
      {countries.map((country) => (
        <button
          key={country}
          className="block w-full text-left px-2 py-2 text-sm text-white hover:bg-[#21872F] hover:text-white focus:outline-none rounded-lg"
          onClick={() => {
            setFormData({ ...formData, country: country, countryDropdownOpen: false });
          }}
        >
          {country}
        </button>
      ))}
    </div>
  )}
</div>
{errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}

          </div>
        )}

        {step === 5 && (
          <div className="flex flex-col gap-3">
          <label className="block text-md name tracking-wider font-medium text-[#bebebe]">
  Identification Type
</label>
<div className="relative">
  <button
    className={`w-full px-4 py-2 rounded-lg bg-[#4f6e3b36] border-b focus:outline-none desc text-white flex justify-between items-center ${
      errors.identificationType ? "border-red-500" : "border-gray-300"
    }`}
    onClick={(e) => {
      e.preventDefault();
      setFormData({
        ...formData,
        identificationDropdownOpen: !formData.identificationDropdownOpen,
      });
    }}
  >
    {formData.identificationType || "Select Type"}
    <svg
      className={`w-5 h-5 transition-transform ${
        formData.identificationDropdownOpen ? "rotate-180" : ""
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

  {formData.identificationDropdownOpen && (
    <div className="absolute z-10 w-full bg-[#213B0E] border border-gray-300 mt-2 rounded-md shadow-lg max-h-48 overflow-y-scroll scrollbarNew px-4 py-1">
      {identificationTypes.map((type) => (
        <button
          key={type}
          className="block w-full text-left px-2 py-2 text-sm text-white hover:bg-[#21872F] hover:text-white focus:outline-none rounded-lg"
          onClick={() => {
            setFormData({
              ...formData,
              identificationType: type,
              identificationDropdownOpen: false,
            });
          }}
        >
          {type}
        </button>
      ))}
    </div>
  )}
</div>
{errors.identificationType && (
  <p className="text-red-500 text-sm mt-1">{errors.identificationType}</p>
)}

            {/* <label className="block text-md name tracking-wider font-medium text-[#bebebe]">Identification Type</label>
            <select
              name="identificationType"
              value={formData.identificationType}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.identificationType ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Type</option>
              {identificationTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.identificationType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.identificationType}
              </p>
            )} */}

            <label className="block text-md name tracking-wider font-medium text-[#bebebe]">Identification Number</label>
            <input
              type="text"
              name="identificationNumber"
              value={formData.identificationNumber}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.identificationNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.identificationNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.identificationNumber}
              </p>
            )}

            <label className="block text-md name tracking-wider font-medium text-[#bebebe]">Upload PAN File</label>
            <input
              type="file"
              name="panFile"
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                errors.panFile ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.panFile && (
              <p className="text-red-500 text-sm mt-1">{errors.panFile}</p>
            )}
          </div>
        )}

      </div>
      <div className="flex justify-end mt-6 gap-3">
        {step > 1 && (
          <button
            onClick={handlePrevious}
            className="border border-[#21872F] hover:bg-[#115019] text-white px-6 py-2 rounded"
          >
            Previous
          </button>
        )}
        {step < 5 ? (
          <button
            onClick={handleNext}
            className="bg-[#21872F] hover:bg-[#115019]  text-white px-6 py-2 rounded name"
          >
            Next
          </button>
        ) : (
          <div className="flex justify-between">
            <button
              onClick={handleSubmit}
              className="bg-[#21872F] hover:bg-[#115019]  text-white px-6 py-2 rounded"
            >
              Register
            </button>
          </div>
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
