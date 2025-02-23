import React from "react";
import { auth, facebookProvider } from "../../firebase"; // Adjust path as needed
import { signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";

const FacebookLogin = () => {
    // const handleFacebookLogin = async () => {
    //     try {
    //         // Trigger Facebook login popup
    //         const result = await signInWithPopup(auth, facebookProvider);

    //         // Extract user info and Firebase ID token
    //         const user = result.user;
    //         const idToken = await user.getIdToken(); // Firebase ID token

    //         console.log("User Info:", user);
    //         console.log("Firebase ID Token:", idToken);

    //         // Send token to your backend for validation
    //         const response = await fetch("http://localhost:5000/api/verify-token", {
    //             method: "POST",
    //             headers: { 
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${idToken}`, // Use the correct Bearer <token> format
    //             },
    //             body: JSON.stringify({ token: idToken }),
    //         });

    //         const data = await response.json();

    //         if (response.ok) {
    //             // Store the JWT from the backend in cookies
    //             Cookies.set("authToken", data.token, { expires: 7 }); // Expires in 7 days
    //             console.log("Login successful!");
    //             // Optionally redirect or reload after login
    //             window.location.reload();
    //         } else {
    //             console.error("Error from backend:", data.error);
    //         }
    //     } catch (error) {
    //         console.error("Facebook login error:", error.message);
    //     }
    // };

    return (
        <div>
            <img src="../images/facebook.svg" alt="facebook" className="w-12" />
        </div>
    );
};

export default FacebookLogin;
