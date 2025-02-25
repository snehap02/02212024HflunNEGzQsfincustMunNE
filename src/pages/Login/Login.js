import React, { useState, useRef } from "react";
// require('dotenv').config();
import axios from "axios"; // Install axios using: npm install axios
import Cookies from "js-cookie"; // Install js-cookie using: npm install js-cookie
import { useNavigate } from "react-router-dom"; // Import useNavigate
import GoogleLogin from "./GoogleLogin";
// import PhoneOTPLogin from "./PhoneOTPLogin";
import FacebookLogin from "./FacebookLogin";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from '../../firebase';
import LoginWithMail from "./LoginWithMail";
import LoginWithPhone from "./LoginWithPhone";
// import firebase from '../../firebase-config';

const Login = ({ switchToRegister, handleClose }) => {
  // const [formData, setFormData] = useState({
  //   emailOrUsername: "",
  //   password: "",
  //   otp: "",
  //   otpLogin: "",
  // });

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const[verificationID,setVerificationId] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpMode, setOtpMode] = useState(false);
  const recaptchaRef = useRef(null);

  const navigate = useNavigate();
  const handleLogin = () => {
    if (handleClose) handleClose(); // ✅ Close modal before redirect
    setTimeout(() => {
      navigate("/maintenance"); // Example redirect after login
    }, 100);
  };

  

  // const validate = () => {
  //   const errors = {};
  
  //   if (!otpMode) {
  //     // For email or username and password login
  //     if (!formData.emailOrUsername) {
  //       errors.emailOrUsername = "Email or Username is required.";
  //     } else {
  //       const isEmail = formData.emailOrUsername.includes("@");
        
  //       if (isEmail) {
  //         // Validate email
  //         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(formData.emailOrUsername)) {
  //           errors.emailOrUsername = "Please enter a valid email address.";
  //         } else if (!/[A-Z]{2,}\.COM$/i.test(formData.emailOrUsername)) {
  //           errors.emailOrUsername = "Email domain must end with '.com'.";
  //         }
  //       } else {
  //         // Validate username
  //         if (!/^[a-zA-Z][a-zA-Z0-9_]{3,15}$/.test(formData.emailOrUsername)) {
  //           errors.emailOrUsername = "Username must start with a letter, can contain letters, digits, underscores, and be 4-16 characters long.";
  //         }
  //       }
  //     }
  
  //     if (!formData.password) {
  //       errors.password = "Password is required.";
  //     } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/g.test(formData.password)) {
  //       errors.password = "Password must have at least 8 characters, a lower case, an upper case, a digit, and a special character.";
  //     }
  //   }
  //   // } else {
  //   //   // For OTP login
  //   //   if (!formData.otpLogin) {
  //   //     errors.otpLogin = "Mobile number or email is required.";
  //   //   }
  //   //   if (!formData.otp) {
  //   //     errors.otp = "OTP is required.";
  //   //   }
  //   // }
  
  //   return errors;
  // };

  // const setupRecaptcha = () => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     'recaptcha-container',
  //     {
  //       size: 'invisible',
  //       callback: () => {
  //         console.log("reCAPTCHA verified.");
  //       },
  //     },
  //     auth
  //   );
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   setErrors(validationErrors);

  //   console.log("if error then error is :", errors);
  
  //   // If there are validation errors, do not proceed with submission
  //   if (Object.keys(validationErrors).length === 0) {
  //     setIsSubmitting(true);
  
  //     try {
  //       if (!otpMode) {
  //         // Normal login flow (Email/Username + Password)
  //         const data = {
  //           email : formData.emailOrUsername,
  //           password: formData.password
  //         };

  //         console.log("The loggin detail is :", data);

  //         const response = await axios.post("http://localhost:5000/api/auth/login", data, {
  //           headers: { 'Content-Type': 'application/json' },
  //       });
  
  //       if (response.status === 200) {
  //         const { token } = response.data;
  //         Cookies.set("authToken", token, { expires: 7 });
  //         setFormData({ emailOrUsername: "", password: "", otp: "", otpLogin: "" });
  //         window.location.reload();
  //       }
  //       } else {
  //         // OTP login flow
  //         const response = await axios.post("http://localhost:5000/api/auth/login-with-otp", {
  //           otpLogin: formData.otpLogin,
  //           otp: formData.otp,
  //         });
  
  //         if (response.status === 200) {
  //           const { token } = response.data;
  //           Cookies.set("authToken", token, { expires: 7 });
  //           setFormData({ emailOrUsername: "", password: "", otp: "", otpLogin: "" });
  //           window.location.reload();
  //         }
  //       }
  //     } catch (error) {
  //       console.log("login failed due to : ",error);
  //       setErrors({ global: "Login failed. Please try again later." });
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   }
  // };
  

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   setErrors({ ...errors, [name]: "" });
  // };

  return (
    <div className="bg-[#142e03] z-60 rounded-lg py-14 px-3">

      <div className="logo w-full flex flex-col justify-center items-center mb-10 -mt-10">
        <img
          src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
          className="hover:cursor-pointer md:w-44 w-28"
          alt="logo"
        />
      </div>

      <h2 className="text-[20px] text-white uppercase desc font-semibold text-center mb-10 -mt-7 tracking-wide">
        {otpMode ? "Login with OTP" : "Login"}
      </h2>

      {errors.global && (
        <p className="text-red-500 text-sm text-center mb-4">
          {errors.global}
        </p>
      )}

      <div  noValidate className="flex flex-col gap-2">
        {!otpMode && (
          <LoginWithMail />
        )}

        {otpMode && (
          <LoginWithPhone />
        )}

        {/* <button
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-[#12140c] text-white font-bold text-md name tracking-wider py-3 px-4 rounded-lg hover:bg-black focus:outline-none focus:ring focus:ring-black transition disabled:opacity-50"
        >
          {isSubmitting ? "Processing..." : otpMode ? "LOGIN WITH OTP" : "LOGIN"}
        </button> */}
        
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          className="text-[#36d64c] hover:underline text-sm">
          Login with OTP
        </button>
        <button
          className="text-[#36d64c] hover:underline text-sm"
          onClick={switchToRegister}
        >
          Register
        </button>
      </div>

      <div className="w-full text-center desc text-green-100">or login with</div>

      <div className="mt-10 flex gap-20 justify-center items-center">
        <GoogleLogin/>
        <FacebookLogin />
      </div>

    </div>
  );
};

export default Login;
