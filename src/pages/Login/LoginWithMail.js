import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const LoginWithMail = () => {

    const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const errors = {};
    
          // For email or username and password login
        if (!formData.emailOrUsername) {
            errors.emailOrUsername = "Email or Username is required.";
        } else {
            const isEmail = formData.emailOrUsername.includes("@");
            
            if (isEmail) {
              // Validate email
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(formData.emailOrUsername)) {
                errors.emailOrUsername = "Please enter a valid email address.";
              } else if (!/[A-Z]{2,}\.COM$/i.test(formData.emailOrUsername)) {
                errors.emailOrUsername = "Email domain must end with '.com'.";
              }
            } else {
              // Validate username
              if (!/^[a-zA-Z][a-zA-Z0-9_]{3,15}$/.test(formData.emailOrUsername)) {
                errors.emailOrUsername = "Username must start with a letter, can contain letters, digits, underscores, and be 4-16 characters long.";
              }
            }
          }
      
          if (!formData.password) {
            errors.password = "Password is required.";
          } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/g.test(formData.password)) {
            errors.password = "Password must have at least 8 characters, a lower case, an upper case, a digit, and a special character.";
          }
        
        // } else {
        //   // For OTP login
        //   if (!formData.otpLogin) {
        //     errors.otpLogin = "Mobile number or email is required.";
        //   }
        //   if (!formData.otp) {
        //     errors.otp = "OTP is required.";
        //   }
        // }
      
        return errors;
      };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
    
        console.log("if error then error is :", errors);
      
        // If there are validation errors, do not proceed with submission
        if (Object.keys(validationErrors).length === 0) {
          setIsSubmitting(true);
      
          try {
              // Normal login flow (Email/Username + Password)
              const data = {
                email : formData.emailOrUsername,
                password: formData.password
              };
    
              console.log("The loggin detail is :", data);
    
              const response = await axios.post("http://localhost:5000/api/auth/login", data, {
                headers: { 'Content-Type': 'application/json' },
            });
      
            if (response.status === 200) {
              const { token } = response.data;
              Cookies.set("authToken", token, { expires: 7 });
              setFormData({ emailOrUsername: "", password: "", otp: "", otpLogin: "" });
              window.location.reload();
            }
            
          } catch (error) {
            console.log("login failed due to : ",error);
            setErrors({ global: "Login failed. Please try again later." });
          } finally {
            setIsSubmitting(false);
          }
        }
      };

  return (
        <>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="emailOrUsername"
                className="block text-md name tracking-wider font-medium text-[#bebebe]"
              >
                Email or Username
              </label>
              <input
                type="text"
                name="emailOrUsername"
                id="emailOrUsername"
                value={formData.emailOrUsername}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                  errors.emailOrUsername ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.emailOrUsername && (
                <p className="text-red-400 text-[14px] desc -mt-2 mb-4">{errors.emailOrUsername}</p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="password"
                className="block text-md name font-medium text-[#9D9D9D]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`mb-6 w-full px-4 py-3 rounded-lg focus:outline-none bg-[#4f6e3b36] border-b border-[#E4E4E4] desc text-white ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-400 text-[14px] desc -mt-8 mb-4">{errors.password}</p>
              )}
            </div>

            <button 
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-[#12140c] text-white font-bold text-md name tracking-wider py-3 px-4 rounded-lg hover:bg-black focus:outline-none focus:ring focus:ring-black transition disabled:opacity-50"
            >
                <Link to="/maintenance">Login</Link>
            </button>
        </>
  )
}

export default LoginWithMail