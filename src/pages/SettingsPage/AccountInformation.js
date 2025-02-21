import React, { useState } from "react";
import { linkedDevices, questionsList } from "../SellerDashboard/MockCardData";
import LinkedDevicesInAccounts from "./LinkedDevicesInAccounts";

const AccountInformation = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(
    Array(5).fill({ question: "", answer: "" })
  );
  const [error, setError] = useState("");

  const userId = localStorage.getItem("userId");

  const handleDropdownChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex].question = e.target.value;
    setAnswers(updatedAnswers);
    setError("");
  };

  const handleInputChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex].answer = e.target.value;
    setAnswers(updatedAnswers);
    setError("");
  };

  const handleNext = () => {
    const { question, answer } = answers[currentQuestionIndex];
    if (!question || !answer) {
      setError("Both question and answer are required.");
      return;
    }
    setError(""); // Clear any existing errors

    // Clear the current input for the next question
    const updatedAnswers = [...answers];
    if (currentQuestionIndex < 4) {
      updatedAnswers[currentQuestionIndex + 1] = { question: "", answer: "" };
    }
    setAnswers(updatedAnswers);

    // Move to the next question
    if (currentQuestionIndex < 4) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("All questions completed!");
    }
  };

  const handleSave = () => {
    const { question, answer } = answers[currentQuestionIndex];
    if (!question || !answer) {
      setError("Both question and answer are required.");
      return;
    }
    setError(""); // Clear any existing errors
    alert("Answer saved successfully!");
  };

  return (
    <div className="whole-container px-5 2xl:px-[20rem] 2xl:-ml-56 left-0 h-[96vh] overflow-y-scroll scrollbarNew">
      <div className="title mt-8 md:mt-20 2xl:mt-28 text-white flex flex-col gap-6">
        <h1 className="text-[18px] lg:text-[24px] tracking-wide name">
          Account
        </h1>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
      </div>
      <div className="nameDetails mt-6 text-white flex flex-col gap-6">
        <h1 className="text-[15px] md:text-[16px] tracking-wide name">
          Full Name
        </h1>
        <div className="flex flex-col md:flex-row gap-5 xl:gap-10 2xl:gap-20">
          <div className="firstName w-full">
            <h1 className="text-[15px] text-[#359846] name">First Name</h1>
            <input
              type="text"
              className="bg-[#012619] rounded-md w-full mt-4 h-14 px-4 desc shadow-lg focus:outline-none"
            />
          </div>
          <div className="lastname w-full">
            <h1 className="text-[15px] text-[#359846] name">Last Name</h1>
            <input
              type="text"
              className="bg-[#012619] rounded-md w-full mt-4 h-14 px-4 desc shadow-lg focus:outline-none"
            />
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
      </div>
      <div className="emailDetails mt-8 text-white flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="text-[15px] md:text-[16px] tracking-wide name">
              Contact Email
            </h1>
            <p className="text-[15px] text-[#6B8F71] -mt-4 name">
              Manage your account’s email address
            </p>
          </div>
          <button className="flex items-start gap-2">
            <img src="../images/EditYellow.svg" alt="edit" className="w-5" />
            <h1 className="text-[16px] name text-[#61B870]">Edit</h1>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-5 xl:gap-10 2xl:gap-20">
          <div className="mail w-full">
            <h1 className="text-[15px] text-[#359846] name">Email</h1>
            <div className="flex justify-center items-center bg-[#012619] gap-3 mt-4 px-4 rounded-md xl:w-[50%] w-full">
              <img src="../images/mail.svg" alt="mail" />
              <input
                type="text"
                className="bg-[#012619] w-full h-14 px-4 desc shadow-lg focus:outline-none"
              />
            </div>
            <div className="flex gap-5 w-full mt-7">
              <button className="bg-button ring-2 ring-green-800 hover:bg-green-800 text-white font-bold py-2 px-10 rounded-lg text-[17px]">
                Update
              </button>
              <button className="bg-transparent ring-2 ring-[#FF4646] hover:bg-[#FF4646] text-white font-bold py-2 px-10 rounded-lg text-[17px]">
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
      </div>
      <div className="usernameDetails mt-8 text-white flex flex-col gap-6">
        <h1 className="text-[15px] md:text-[16px] tracking-wide name">
          Username
        </h1>
        <p className="text-[15px] text-[#6B8F71] -mt-4 name">
          You cannot change your username
        </p>
        <div className="flex flex-col md:flex-row gap-5 xl:gap-10 2xl:gap-20">
          <div className="username w-full">
            <h1 className="text-[15px] text-[#359846] name">username</h1>
            <div className="flex justify-center items-center bg-[#012619] gap-3 mt-4 px-4 rounded-md xl:w-[50%] w-full">
              <img src="../images/username.svg" alt="username" />
              <input
                type="text"
                className="bg-[#012619] w-full h-14 px-4 desc shadow-lg focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
      </div>
      <div className="addressDetails mt-8 text-white flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="text-[15px] md:text-[16px] tracking-wide name">
              Address
            </h1>
            <p className="text-[15px] text-[#6B8F71] -mt-4 name">
              Manage your current address
            </p>
          </div>
          <button className="flex items-start gap-2">
            <img src="../images/EditYellow.svg" alt="edit" className="w-5" />
            <h1 className="text-[16px] name text-[#61B870]">Edit</h1>
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-5 xl:gap-10 2xl:gap-20">
          <div className="address xl:w-[50%] w-full">
            <h1 className="text-[15px] text-[#359846] name">Address</h1>
            <textarea className="bg-[#012619] w-full h-32 desc shadow-lg focus:outline-none gap-3 mt-4 px-4 py-2 rounded-md"></textarea>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
      </div>
      <div className="passwordDetails mt-8 text-white flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="text-[15px] md:text-[16px] tracking-wide name">
              Change Password
            </h1>
            <p className="text-[15px] text-[#6B8F71] -mt-4 name">
              Modify your current password
            </p>
          </div>
          <button className="flex items-start gap-2">
            <img src="../images/EditYellow.svg" alt="edit" className="w-5" />
            <h1 className="text-[16px] name text-[#61B870]">Edit</h1>
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-5 xl:gap-10 2xl:gap-20">
          <div className="address w-full">
            <div className="flex flex-col md:flex-row gap-5 xl:gap-10 2xl:gap-20">
              <div className="currentPassword w-full">
                <h1 className="text-[15px] text-[#359846] name">
                  Current Password
                </h1>
                <div className="flex justify-center items-center bg-[#012619] gap-3 mt-4 px-4 rounded-md w-full">
                  <img src="../images/password.svg" alt="username" />
                  <input
                    type="password"
                    className="bg-[#012619] w-full h-14 px-4 desc shadow-lg focus:outline-none"
                  />
                  <button>
                    <img src="../images/eye.svg" alt="username" />
                  </button>
                </div>
              </div>
              <div className="newPassword w-full">
                <h1 className="text-[15px] text-[#359846] name">
                  New Password
                </h1>
                <div className="flex justify-center items-center bg-[#012619] gap-3 mt-4 px-4 rounded-md w-full">
                  <img src="../images/password.svg" alt="username" />
                  <input
                    type="password"
                    className="bg-[#012619] w-full h-14 px-4 desc shadow-lg focus:outline-none"
                  />
                  <button>
                    <img src="../images/eye.svg" alt="username" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
      </div>
      <div className="securityDetails mt-8 text-white flex flex-col gap-6">
        <h1 className="text-[15px] md:text-[16px] tracking-wide name">
          Security Question
        </h1>
        <p className="text-[15px] text-[#6B8F71] -mt-4 name">
          Choose 5 security questions that only you can answer
        </p>
        <div className="enter-details flex flex-col gap-5">
          {/* Dropdown and Input */}
          <div className="enter-details flex flex-col md:flex-row gap-5 name">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <label className="text-[#61B870] name">
                {currentQuestionIndex + 1}. Question {currentQuestionIndex + 1}{" "}
                <span className="text-red-600">*</span>
              </label>
              <select
                className="p-2 bg-[#012619] w-full h-14 px-4 desc shadow-lg focus:outline-none cursor-pointer rounded-lg"
                value={answers[currentQuestionIndex].question}
                onChange={handleDropdownChange}
              >
                <option value="">Select a security question</option>
                {questionsList.map((question, index) => (
                  <option key={index} value={question}>
                    {question}
                  </option>
                ))}
              </select>

              <div className="flex flex-col gap-4 w-full">
                <label className="text-[#61B870] name">
                  Your Answer <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Type your answer here"
                  value={answers[currentQuestionIndex].answer}
                  onChange={handleInputChange}
                  className="bg-[#012619] w-full h-14 px-4 desc shadow-lg focus:outline-none rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 desc">{error}</p>}

          {/* Buttons */}
          <div className="flex gap-4 mt-3">
            <button
              onClick={handleSave}
              className="bg-button ring-2 ring-green-800 hover:bg-green-800 text-white font-bold py-2 px-10 rounded-lg text-[17px]"
            >
              Save
            </button>
            <button
              onClick={handleNext}
              className="bg-transparent ring-2 ring-green-800 hover:bg-green-800 text-white font-bold py-2 px-10 rounded-lg text-[17px]"
            >
              Next
            </button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
      </div>
      {/* <div className="linkedDevices mt-8 text-white flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="text-[15px] md:text-[16px] tracking-wide name">
              Linked Devices
            </h1>
            <p className="text-[15px] text-[#6B8F71] -mt-4 name">
              Device Status ( Tap a device to log out )
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 xl:gap-10 2xl:gap-20">
          <div className="device-boxes w-full flex flex-col gap-5">
            {linkedDevices.map((device) => (
              <div
                key={device.id}
                className="flex justify-between items-center py-4 px-10 border border-[#4B5736] w-full h-28 rounded-lg"
              >
                <div className="flex justify-center items-center gap-6">
                  <img
                    src={device.img}
                    alt={device.name}
                    className="w-12 h-12"
                  />
                  <div className="flex flex-col gap-2">
                    <h1 className="desc text-[16px]">{device.title}</h1>
                    <p className="desc text-[16px] text-[#A9B5AB]">
                      {device.active}
                    </p>
                  </div>
                </div>

                <div className="name text-[#61B870]">
                  <button>Sign Out</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
      </div> */}
      <LinkedDevicesInAccounts userId={userId} />
      <div className="cancelAccounts mt-8 text-white flex flex-col gap-6 p-8 border rounded-lg border-[#FF4646]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-[15px] md:text-[16px] tracking-wide name">
              Pause Account
            </h1>
            <p className="text-[15px] text-[#6B8F71] -mt-4 name">
              Pause Your Account – Resume When You’re Ready
            </p>
          </div>
          <div>
            <button className="bg-transparent ring-2 ring-[#FF4646] hover:bg-[#FF4646] text-white font-bold py-2 px-10 rounded-lg text-[17px]">
              Pause Account
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-[15px] md:text-[16px] tracking-wide name">
              Delete Account
            </h1>
            <p className="text-[15px] text-[#6B8F71] -mt-4 name">
              Cancel your account forever{" "}
            </p>
          </div>
          <div>
            <button className="bg-transparent ring-2 ring-[#FF4646] hover:bg-[#FF4646] text-white font-bold py-2 px-9 rounded-lg text-[17px]">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
