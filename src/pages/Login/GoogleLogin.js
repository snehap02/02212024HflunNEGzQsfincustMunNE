import React from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import Cookies from 'js-cookie'

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();

      // Send token to the backend for verification
      const response = await axios.post("http://localhost:5000/api/auth/verify", { token });
      if (response.status === 200) {
        const { token } = response.data;
        Cookies.set("authToken", token, { expires: 7 });
        // setFormData({ emailOrUsername: "", password: "", otp: "", otpLogin: "" });
        window.location.reload();
      }
      console.log("Backend response:", response.data);
    } catch (error) {
      console.error("Google Login Error:", error.message);
    }
  };

  return <button onClick={handleGoogleLogin}>
    <img src="../images/google.svg" alt="google" className="w-12"/>
  </button>;
};

export default GoogleLogin;
