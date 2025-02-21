import React, { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../firebase";
import Cookies from 'js-cookie';

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [message, setMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const setupRecaptcha = () => {
    if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
    }
    
    window.recaptchaVerifier = new RecaptchaVerifier(
    auth,
    "recaptcha-container",
    {
        size: "invisible",
        callback: (response) => {
        console.log("Recaptcha Verified");
        },
    }
    );
    
  };

  const requestOtp = () => {
    if (!phoneNumber) {
      setMessage("Please enter a valid phone number");
      return;
    }
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setIsOtpSent(true);
        setMessage("OTP sent successfully");
      })
      .catch((error) => {
        setMessage(`Error sending OTP: ${error.message}`);
      });
  };

  const verifyOtp = () => {
    if (!window.confirmationResult) {
      setMessage("Please request OTP first.");
      return;
    }

    if (!otp) {
      setMessage("Please enter the OTP.");
      return;
    }

    window.confirmationResult
      .confirm(otp) // Use confirmationResult to confirm OTP
      .then((result) => {
        setMessage(`Logged in successfully as ${result.user.phoneNumber}`);

      })
      .catch((error) => {
        setMessage(`Error verifying OTP: ${error.message}`);
      });
  };

  return (
    <div>
      <h2>Login with Phone Number</h2>
      <div id="recaptcha-container"></div>
      <input
        type="text"
        placeholder="Enter phone number (+1234567890)"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={requestOtp}>Send OTP</button>
      {isOtpSent && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
      <p>{message}</p>
    </div>
  );
};

export default PhoneLogin;
