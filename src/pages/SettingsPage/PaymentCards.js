import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentCards = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    cardNumber: "",
    firstName: "",
    lastName: "",
    expirationMonth: "",
    expirationYear: "",
    securityCode: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    pinCode: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [cardType, setCardType] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setFormData((prevData) => ({ ...prevData, UserId: userId }));
    }
  }, []);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "cardNumber":
        if (!/^\d{16}$/.test(value)) {
          error = "Card number must be exactly 16 digits.";
        }
        break;
      case "firstName":
      case "lastName":
        if (!/^[a-zA-Z]+$/.test(value)) {
          error = `${name === "firstName" ? "First" : "Last"} name must contain only letters.`;
        }
        break;
      case "expirationMonth":
        if (!/^(0[1-9]|1[0-2])$/.test(value)) {
          error = "Enter a valid month (01-12).";
        }
        break;
      case "expirationYear":
        if (!/^\d{4}$/.test(value) || parseInt(value) < new Date().getFullYear()) {
          error = "Enter a valid year.";
        }
        break;
      case "securityCode":
        if (!/^\d{3,4}$/.test(value)) {
          error = "Security code (CVV) must be 3 or 4 digits.";
        }
        break;
      case "country":
        if (value.trim() === "") {
          error = "Country is required.";
        }
        break;
      case "address1":
        if (value.trim() === "") {
          error = "Address 1 is required.";
        }
        break;
      case "city":
        if (value.trim() === "") {
          error = "City is required.";
        }
        break;
      case "pinCode":
        if (!/^\d{5,6}$/.test(value)) {
          error = "Pin code must be 5 or 6 digits.";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const detectCardType = (number) => {
    const visaRegex = /^4/;
    const masterCardRegex = /^(5[1-5]|2[2-7])/;
    const rupayRegex = /^(60|65|81)/;

    if (visaRegex.test(number)) {
      return "Visa";
    }
    if (masterCardRegex.test(number)) {
      return "MasterCard";
    }
    if (rupayRegex.test(number)) {
      return "RuPay";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const detectedType = detectCardType(value);
      setCardType(detectedType);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const error = validateField(name, value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/savePaymentDetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        navigate("/settings");
      } else {
        alert("Failed to save payment details: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting payment details");
    }
  };

  return (
    <div className="max-w-full bg-white p-6 rounded-lg shadow-md -mt-64 z-50">
    <div className="scrollbarNew overflow-y-scroll h-[650px] px-4">
    <h1 className="text-2xl bigText text-center text-gray-800 mb-6">
        Payment Details
      </h1>
      <form onSubmit={handleSubmit} className="mt-9">
        <div className="mb-4">
        <div className="flex justify-between items-center">
        <label
            htmlFor="cardNumber"
            className="block text-[16px] bigText text-gray-700 mb-1"
          >
            Card Number
          </label>
          <div className="card-images flex items-center gap-4">
              <img src="../images/visa.svg" alt="visa" className="w-8"/>
              <img src="../images/mastercard.svg" alt="mastercard" className="w-8"/>
          </div>
        </div>
          
          <div className="relative">
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Enter your card number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              value={formData.cardNumber}
              onChange={handleChange}
            />
            {cardType && (
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
                {cardType}
              </span>
            )}
          </div>
          {formErrors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">{formErrors.cardNumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-[16px] bigText text-gray-700 mb-1"
          >
            First Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          {formErrors.firstName && (
            <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-[16px] bigText text-gray-700 mb-1"
          >
            Last Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          {formErrors.lastName && (
            <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="expirationMonth"
            className="block text-[16px] bigText text-gray-700 mb-1"
          >
            Expiration Month
          </label>
          <div className="relative">
            <input
              type="text"
              id="expirationMonth"
              name="expirationMonth"
              placeholder="MM"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              value={formData.expirationMonth}
              onChange={handleChange}
            />
          </div>
          {formErrors.expirationMonth && (
            <p className="text-red-500 text-sm mt-1">{formErrors.expirationMonth}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="expirationYear"
            className="block text-[16px] bigText text-gray-700 mb-1"
          >
            Expiration Year
          </label>
          <div className="relative">
            <input
              type="text"
              id="expirationYear"
              name="expirationYear"
              placeholder="YYYY"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              value={formData.expirationYear}
              onChange={handleChange}
            />
          </div>
          {formErrors.expirationYear && (
            <p className="text-red-500 text-sm mt-1">{formErrors.expirationYear}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="securityCode"
            className="block text-[16px] bigText text-gray-700 mb-1"
          >
            Enter Your CVV
          </label>
          <div className="relative">
            <input
              type="text"
              id="securityCode"
              name="securityCode"
              placeholder="XXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              value={formData.securityCode}
              onChange={handleChange}
            />
          </div>
          {formErrors.securityCode && (
            <p className="text-red-500 text-sm mt-1">{formErrors.securityCode}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-[16px] bigText text-gray-700 mb-1"
          >
            Country
          </label>
          <div className="relative">
            <input
              type="text"
              id="country"
              name="country"
              placeholder="India"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          {formErrors.country && (
            <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="address1"
            className="block text-[16px] bigText text-gray-700 mb-1"
          >
            Address 1
          </label>
          <div className="relative">
            <input
              type="text"
              id="address1"
              name="address1"
              placeholder="address1"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              value={formData.address1}
              onChange={handleChange}
            />
          </div>
          {formErrors.address1 && (
            <p className="text-red-500 text-sm mt-1">{formErrors.address1}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="address2"
            className="block text-[16px] bigText text-gray-700 mb-1"
          >
            Address 2
          </label>
          <div className="relative">
            <input
              type="text"
              id="address2"
              name="address2"
              placeholder="address2"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              value={formData.address2}
              onChange={handleChange}
            />
          </div>
          {formErrors.address2 && (
            <p className="text-red-500 text-sm mt-1">{formErrors.address2}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-[16px] bigText text-gray-700 mb-1"
          >
            City
          </label>
          <div className="relative">
            <input
              type="text"
              id="city"
              name="city"
              placeholder="city"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          {formErrors.city && (
            <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="pinCode"
            className="block text-[16px] bigText text-gray-700 mb-1"
          >
            Pin Code
          </label>
          <div className="relative">
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              placeholder="pinCode"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              value={formData.pinCode}
              onChange={handleChange}
            />
          </div>
          {formErrors.pinCode && (
            <p className="text-red-500 text-sm mt-1">{formErrors.pinCode}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full"
        >
          Submit Payment Details
        </button>
      </form>
    </div>
      
    </div>
  );
};

export default PaymentCards;
